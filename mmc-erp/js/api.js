const MMC_API_BASE = 'https://hostel-erp-backend-production.up.railway.app';
const MMC_R2_PUBLIC_URL = 'https://pub-56b2773adb554e88a3d5fbc74f0167bc.r2.dev';

function mmcApi(path, options) {
  return fetch(MMC_API_BASE + path, options || {}).then(function(res) {
    if (!res.ok) {
      return res.json().then(function(data) {
        throw new Error(data.detail || 'API request failed.');
      });
    }
    return res.json();
  });
}

function mmcApiUpload(path, formData) {
  return fetch(MMC_API_BASE + path, {
    method: 'POST',
    body: formData
  }).then(function(res) {
    if (!res.ok) {
      return res.json().then(function(data) {
        throw new Error(data.detail || 'Upload failed.');
      });
    }
    return res.json();
  });
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
  try {
    return JSON.parse(sessionStorage.getItem('mmc_student_user') || 'null');
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
