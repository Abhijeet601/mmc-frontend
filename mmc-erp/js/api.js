const MMC_DEFAULT_API_BASE = 'https://hostel-erp-backend-production.up.railway.app';
function _trimTrailingSlashes(s){ while(s && s.endsWith('/')) s = s.slice(0, -1); return s; }
function _mmcStoredApiBase(){
  var stored = localStorage.getItem('mmc_api_base');
  if (!stored) return '';
  stored = _trimTrailingSlashes(stored);
  var trusted = stored === MMC_DEFAULT_API_BASE || /^https?:\/\/(localhost|127\.0\.0\.1)(:[0-9]+)?$/i.test(stored);
  if (trusted) return stored;
  localStorage.removeItem('mmc_api_base');
  return '';
}
const MMC_API_BASE = _trimTrailingSlashes(
  window.MMC_API_BASE ||
  _mmcStoredApiBase() ||
  MMC_DEFAULT_API_BASE
);
const MMC_R2_PUBLIC_URL = 'https://pub-56b2773adb554e88a3d5fbc74f0167bc.r2.dev';
const MMC_REQUEST_TIMEOUT_MS = 30000;

function mmcApiPath(path) {
  var normalized = path.charAt(0) === '/' ? path : '/' + path;
  if (normalized === '/login') return '/login';
  if (normalized === '/admin/login') return '/api/admin/login';
  return normalized;
}

function mmcNormalizeLoginResponse(path, data, fallbackIdentifier) {
  if (!data || (path !== '/login' && path !== '/api/admin/login' && path !== '/api/login')) return data;
  var user = data.user || data;
  if (!data.access_token && !data.token && user.id) {
    if (data.role === 'admin' || path.indexOf('admin') !== -1) {
      data.access_token = 'mmc-admin-' + user.id;
    } else {
      data.access_token = 'mmc-student-' + user.id;
    }
  }
  if (!data.application_number && user.student_code) {
    data.application_number = user.student_code;
    user.application_number = user.student_code;
  }
  if (!user.full_name && user.name) user.full_name = user.name;
  if (!data.application_completed && user.application_completed == null) {
    data.application_completed = false;
  }
  return data;
}

function mmcAuthLoginFallback(path, options) {
  var compatPath = mmcApiPath(path);
  return mmcApiRequest(compatPath, options).catch(function(error) {
    if (path === '/login' || path === '/admin/login') {
      var legacyBody = Object.assign({}, options.body || {});
      if (!legacyBody.identifier) {
        legacyBody.identifier = legacyBody.email || legacyBody.username || '';
      }
      if (path === '/admin/login' && !legacyBody.role) legacyBody.role = 'admin';
      if (path === '/login' && !legacyBody.role) legacyBody.role = 'student';
      return mmcApiRequest('/auth/login', Object.assign({}, options, { body: legacyBody }));
    }
    throw error;
  });
}

function mmcParseErrorBody(text, status) {
  if (!text) return 'Request failed with status ' + status + '.';
  try {
    var data = JSON.parse(text);
    if (typeof data.detail === 'string') return data.detail;
    if (Array.isArray(data.detail)) {
      return data.detail.map(function(item) { return item.msg || item; }).filter(Boolean).join(', ');
    }
    if (typeof data.message === 'string') return data.message;
  } catch (error) {
    return text;
  }
  return 'Request failed with status ' + status + '.';
}

function mmcReadJsonResponse(xhr, path) {
  var contentType = xhr.getResponseHeader('content-type') || '';
  if (xhr.status === 204) return null;
  if (contentType.toLowerCase().indexOf('application/json') === -1) {
    throw new Error('The ERP API returned an unexpected response for ' + path + '. Please verify the API base URL.');
  }
  return xhr.responseText ? JSON.parse(xhr.responseText) : null;
}

function mmcStoredSession(kind) {
  try {
    return JSON.parse(sessionStorage.getItem(kind === 'admin' ? 'mmc_admin_user' : 'mmc_student_user') || 'null');
  } catch (error) {
    return null;
  }
}

function mmcAuthTokenForPath(path) {
  var adminSession = mmcStoredSession('admin');
  var studentSession = mmcStoredSession('student');
  if (path.indexOf('/api/admin/') === 0 || path.indexOf('/admin/') === 0 || path.indexOf('/api/activity-logs') === 0) {
    return adminSession && adminSession.access_token;
  }
  return (studentSession && studentSession.access_token) || (adminSession && adminSession.access_token) || '';
}

function mmcStoreStudentSession(data, fallbackIdentifier) {
  var user = data.user || data;
  var token = data.access_token || data.token || user.access_token || user.token || '';
  if (!token && user.id) token = 'mmc-student-' + user.id;
  sessionStorage.setItem('mmc_student_user', JSON.stringify({
    id: user.id,
    access_token: token,
    application_number: user.application_number || user.student_code || data.application_number || '',
    name: user.full_name || user.name || 'Student',
    email: user.email || fallbackIdentifier || '',
    mobile: user.mobile || user.mobile_number || '',
    date_of_birth: user.date_of_birth || null,
    application_completed: !!(data.application_completed || user.application_completed)
  }));
}

function mmcStoreAdminSession(data, fallbackIdentifier) {
  var user = data.user || data;
  var token = data.access_token || data.token || user.access_token || user.token || '';
  if (!token && user.id) token = 'mmc-admin-' + user.id;
  sessionStorage.setItem('mmc_admin_user', JSON.stringify({
    id: user.id,
    username: user.username || fallbackIdentifier || '',
    access_token: token,
    role: user.role || data.role || 'admin'
  }));
}

function mmcApiRequest(apiPath, options) {
  options = options || {};
  var url = MMC_API_BASE + apiPath;
  var method = options.method || 'GET';
  var body = options.body;
  var headers = Object.assign({}, options.headers || {});
  var isFormData = body instanceof FormData;
  var token = options.token || mmcAuthTokenForPath(apiPath);

  if (token) headers.Authorization = 'Bearer ' + token;
  if (body && !isFormData && !headers['Content-Type']) headers['Content-Type'] = 'application/json';

  return new Promise(function(resolve, reject) {
    var xhr = new XMLHttpRequest();
    var completed = false;
    var timeoutId = setTimeout(function() {
      if (completed) return;
      xhr.abort();
      reject(new Error('Request timed out after 30 seconds. Please check your connection and try again.'));
    }, MMC_REQUEST_TIMEOUT_MS);

    xhr.open(method, url, true);
    Object.keys(headers).forEach(function(key) { xhr.setRequestHeader(key, headers[key]); });
    if (xhr.upload && typeof options.onUploadProgress === 'function') {
      xhr.upload.onprogress = function(event) {
        if (event.lengthComputable) options.onUploadProgress(Math.round((event.loaded / event.total) * 100));
      };
    }
    xhr.onload = function() {
      completed = true;
      clearTimeout(timeoutId);
      if (xhr.status < 200 || xhr.status >= 300) {
        reject(new Error(mmcParseErrorBody(xhr.responseText, xhr.status)));
        return;
      }
      try {
        resolve(mmcReadJsonResponse(xhr, apiPath));
      } catch (error) {
        reject(error);
      }
    };
    xhr.onerror = function() {
      completed = true;
      clearTimeout(timeoutId);
      reject(new Error('Unable to reach the ERP API at ' + MMC_API_BASE + '. Please check the backend service and network connection.'));
    };
    xhr.onabort = function() {
      if (completed) return;
      completed = true;
      clearTimeout(timeoutId);
      reject(new Error('The request was cancelled before the server responded.'));
    };
    xhr.send(body ? (isFormData || typeof body === 'string' ? body : JSON.stringify(body)) : null);
  });
}

function mmcApi(path, options) {
  options = options || {};
  var apiPath = mmcApiPath(path);
  var request = (path === '/login' || path === '/admin/login')
    ? mmcAuthLoginFallback(path, options)
    : mmcApiRequest(apiPath, options);
  return request.then(function(data) {
    return mmcNormalizeLoginResponse(apiPath, data);
  });
}

function mmcApiUpload(path, formData, onUploadProgress) {
  return mmcApi(path, { method: 'POST', body: formData, onUploadProgress: onUploadProgress });
}

function mmcFileUrl(pathOrUrl) {
  if (!pathOrUrl) return '';
  if (/^https?:\/\//i.test(pathOrUrl)) return pathOrUrl;
  return MMC_API_BASE + (pathOrUrl.startsWith('/') ? pathOrUrl : '/' + pathOrUrl);
}

function mmcReceiptUrl(receipt) {
  if (receipt.pdf_url && /^https?:\/\//i.test(receipt.pdf_url)) return receipt.pdf_url;
  return MMC_API_BASE + (receipt.pdf_url || '/receipts/' + receipt.id + '/download');
}

function mmcCurrentStudent() {
  return mmcStoredSession('student');
}

function mmcCurrentAdmin() {
  return mmcStoredSession('admin');
}

function mmcInitialsFromName(name) {
  return (name || 'User')
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map(function(part) { return part.charAt(0).toUpperCase(); })
    .join('');
}
