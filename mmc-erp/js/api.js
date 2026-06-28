const MMC_API_BASE = 'https://hostel-erp-backend-production.up.railway.app';

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
