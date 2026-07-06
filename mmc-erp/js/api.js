function resolveMmcApiBase() {
  try {
    if (typeof window !== 'undefined') {
      var configured = '';
      if (window.MMC_API_BASE) configured = String(window.MMC_API_BASE).trim();
      if (!configured && window.__MMC_API_BASE__) configured = String(window.__MMC_API_BASE__).trim();
      if (configured) return configured.replace(/\/+$/, '');

      var hostname = (window.location && window.location.hostname ? window.location.hostname : '').toLowerCase();
      if (hostname === 'localhost' || hostname === '127.0.0.1' || hostname === '[::1]' || hostname.endsWith('.local')) {
        return 'http://127.0.0.1:8000';
      }
    }
  } catch (err) {}
  return 'https://hostel-erp-backend-production.up.railway.app';
}

const MMC_API_BASE = resolveMmcApiBase();
const MMC_R2_PUBLIC_URL = 'https://pub-56b2773adb554e88a3d5fbc74f0167bc.r2.dev';

function mmcApi(path, options) {
  var requestOptions = Object.assign({}, options || {});
  var headers = Object.assign({}, requestOptions.headers || {});
  if (!headers['Content-Type'] && !headers['content-type']) {
    headers['Content-Type'] = 'application/json';
  }
  requestOptions.headers = headers;
  requestOptions.mode = requestOptions.mode || 'cors';
  requestOptions.credentials = requestOptions.credentials || 'omit';
  return mmcApiWithRetry(path, requestOptions, 1);
}

function mmcApiWithRetry(path, options, attempt) {
  var timeoutMs = Number(options.timeoutMs || 10000);
  var controller = typeof AbortController !== 'undefined' ? new AbortController() : null;
  var requestOptions = Object.assign({}, options || {});
  if (controller) {
    requestOptions.signal = controller.signal;
  }
  var timeoutId = setTimeout(function(){
    if (controller) controller.abort();
  }, timeoutMs);

  return fetch(MMC_API_BASE + (path.startsWith('/') ? path : '/' + path), requestOptions).then(function(res) {
    clearTimeout(timeoutId);
    if (!res.ok) {
      return res.text().then(function(text) {
        var data = null;
        try { data = text ? JSON.parse(text) : null; } catch (err) {}
        throw new Error((data && (data.detail || data.message)) || ('Server returned status ' + res.status));
      });
    }
    return res.text().then(function(text) {
      if (!text) return null;
      try { return JSON.parse(text); } catch (err) { return text; }
    });
  }).catch(function(err) {
    clearTimeout(timeoutId);
    var shouldRetry = attempt < 2 && (err.name === 'AbortError' || err.message === 'Failed to fetch' || err.message.includes('NetworkError') || err.message.includes('CORS') || err.message.includes('load failed'));
    if (shouldRetry) {
      return mmcApiWithRetry(path, options, attempt + 1);
    }
    if (err.message === 'Failed to fetch' || err.message.includes('NetworkError') || err.message.includes('CORS') || err.message.includes('load failed')) {
      throw new Error('Server is unreachable. The backend at ' + MMC_API_BASE + ' may be sleeping or down. Please try again in a moment.');
    }
    throw err;
  });
}

function mmcApiUpload(path, formData) {
  return fetch(MMC_API_BASE + (path.startsWith('/') ? path : '/' + path), {
    method: 'POST',
    body: formData,
    mode: 'cors',
    credentials: 'omit'
  }).then(function(res) {
    if (!res.ok) {
      return res.text().then(function(text) {
        var data = null;
        try { data = text ? JSON.parse(text) : null; } catch (err) {}
        throw new Error((data && (data.detail || data.message)) || 'Upload failed.');
      });
    }
    return res.text().then(function(text) {
      if (!text) return null;
      try { return JSON.parse(text); } catch (err) { return text; }
    });
  });
}

function mmcFileUrl(pathOrUrl) {
  if (!pathOrUrl) return '';
  if (/^https?:\/\//i.test(pathOrUrl)) return pathOrUrl;
  return MMC_API_BASE + (pathOrUrl.startsWith('/') ? pathOrUrl : '/' + pathOrUrl);
}

function mmcReceiptUrl(receipt) {
  if (receipt && receipt.pdf_url && !/\/receipts\/\d+\/download(?:\?|$)/i.test(String(receipt.pdf_url))) {
    return mmcFileUrl(receipt.pdf_url);
  }
  var current = mmcCurrentStudent() || mmcCurrentAdmin() || {};
  var token = current.access_token || current.token || '';
  var base = MMC_API_BASE + '/receipts/' + receipt.id + '/download';
  return token ? base + '?token=' + encodeURIComponent(token) : base;
}

function mmcCurrentStudent() {
  try {
    var student = JSON.parse(sessionStorage.getItem('mmc_student_user') || 'null');
    if(!student) return null;
    var user = student.user || {};
    if(!student.id && (student.student_id || user.id)){
      student.id = Number(student.student_id || user.id);
    }
    if(!student.student_id && student.id){
      student.student_id = student.id;
    }
    if(!student.name && (student.student_name || user.name || user.full_name)){
      student.name = student.student_name || user.name || user.full_name;
    }
    if(!student.email && user.email){
      student.email = user.email;
    }
    if(!student.mobile && (user.mobile || user.mobile_number)){
      student.mobile = user.mobile || user.mobile_number;
    }
    if(!student.student_code && (user.student_code || student.application_number)){
      student.student_code = user.student_code || student.application_number;
    }
    return student;
  } catch (err) {
    return null;
  }
}

function mmcCurrentAdmin() {
  try {
    return JSON.parse(sessionStorage.getItem('mmc_admin_user') || 'null');
  } catch (err) {
    return null;
  }
}

function mmcInitialsFromName(name) {
  return (name || 'User')
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map(function(part) { return part.charAt(0).toUpperCase(); })
    .join('');
}
