const API_BASE = import.meta.env.VITE_ERP_API_BASE || '';
const fallbackApiBaseUrl =
  typeof window !== 'undefined' && window.location?.origin ? window.location.origin : '';

const rawApiBaseUrl = (API_BASE || fallbackApiBaseUrl).trim().replace(/\/+$/, '');
const ERP_API_BASE_URL = rawApiBaseUrl.replace(/\/api$/i, '');

export const ERP_STUDENT_TOKEN_KEY = 'hostel_erp_student_token';
export const ERP_ADMIN_TOKEN_KEY = 'hostel_erp_admin_token';
export const ERP_APPLICATION_COMPLETED_KEY = 'hostel_erp_application_completed';

const parseError = async (response) => {
  let body = '';
  try {
    body = await response.text();
  } catch (_) {
    body = '';
  }

  if (body) {
    try {
      const data = JSON.parse(body);
      if (typeof data?.detail === 'string') return data.detail;
      if (Array.isArray(data?.detail)) {
        const messages = data.detail.map((item) => item?.msg || item).filter(Boolean);
        if (messages.length) return messages.join(', ');
      }
      if (typeof data?.message === 'string') return data.message;
    } catch (_) {
      const trimmed = body.trim();
      if (trimmed) return trimmed;
    }
  }

  return `Request failed with status ${response.status}`;
};

const parseNetworkError = (error) => {
  if (error?.name === 'AbortError') return 'Request timed out. Please try again.';
  if (error instanceof TypeError) {
    return `Unable to reach ERP API at ${ERP_API_BASE_URL}. Check VITE_ERP_API_BASE and backend server status.`;
  }
  return error?.message || 'Network request failed.';
};

const request = async (
  path,
  { method = 'GET', body, token, headers = {}, responseType = 'json' } = {}
) => {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  const requestUrl = `${ERP_API_BASE_URL}${normalizedPath}`;
  const isFormData = body instanceof FormData;
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 30000);

  let response;
  try {
    response = await fetch(requestUrl, {
      method,
      headers: {
        ...(isFormData ? {} : { 'Content-Type': 'application/json' }),
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
        ...headers,
      },
      body: body ? (isFormData ? body : JSON.stringify(body)) : undefined,
      signal: controller.signal,
    });
  } catch (error) {
    throw new Error(parseNetworkError(error));
  } finally {
    clearTimeout(timeout);
  }

  if (!response.ok) {
    throw new Error(await parseError(response));
  }

  if (responseType === 'blob') return response.blob();
  if (response.status === 204) return null;
  return response.json();
};

const authPayloadToken = (data) => data?.access_token || data?.token || '';

export const getStudentToken = () => localStorage.getItem(ERP_STUDENT_TOKEN_KEY) || '';
export const setStudentToken = (token) => localStorage.setItem(ERP_STUDENT_TOKEN_KEY, token);
export const clearStudentToken = () => {
  localStorage.removeItem(ERP_STUDENT_TOKEN_KEY);
  localStorage.removeItem(ERP_APPLICATION_COMPLETED_KEY);
};

export const getApplicationCompleted = () => {
  const value = localStorage.getItem(ERP_APPLICATION_COMPLETED_KEY);
  if (value === null) return null;
  return value === 'true';
};
export const setApplicationCompleted = (value) =>
  localStorage.setItem(ERP_APPLICATION_COMPLETED_KEY, value ? 'true' : 'false');

export const getAdminToken = () => localStorage.getItem(ERP_ADMIN_TOKEN_KEY) || '';
export const setAdminToken = (token) => localStorage.setItem(ERP_ADMIN_TOKEN_KEY, token);
export const clearAdminToken = () => localStorage.removeItem(ERP_ADMIN_TOKEN_KEY);

export const registerStudent = (payload) =>
  request('/api/register', {
    method: 'POST',
    body: payload,
  });

export const loginStudent = async ({ email, dob, date_of_birth, password }) => {
  const normalizedDob = date_of_birth || dob || undefined;
  const data = await request('/api/login', {
    method: 'POST',
    body: {
      email: (email || '').trim().toLowerCase(),
      password: String(password || ''),
      ...(normalizedDob ? { date_of_birth: normalizedDob } : {}),
    },
  });

  const token = authPayloadToken(data);
  if (!token) throw new Error('Login response did not include access token.');
  setStudentToken(token);
  setApplicationCompleted(Boolean(data?.application_completed));
  return data;
};

export const getApplicationForm = () =>
  request('/api/application', {
    token: getStudentToken(),
  });

export const saveApplicationDraft = (formData) =>
  request('/api/application/draft', {
    method: 'POST',
    body: formData,
    token: getStudentToken(),
  });

export const submitApplication = (formData) =>
  request('/api/application/submit', {
    method: 'POST',
    body: formData,
    token: getStudentToken(),
  }).then((data) => {
    setApplicationCompleted(true);
    return data;
  });

export const saveHostelPreference = (hostelName) =>
  request('/api/hostel/preference', {
    method: 'POST',
    body: { hostel_name: hostelName },
    token: getStudentToken(),
  });

export const getStudentDashboard = () =>
  request('/api/dashboard', {
    token: getStudentToken(),
  });

export const payApplicationFee = (payload = {}) =>
  request('/api/payment/application', {
    method: 'POST',
    body: payload,
    token: getStudentToken(),
  });

export const payHostelFee = (payload = {}) =>
  request('/api/payment/hostel', {
    method: 'POST',
    body: payload,
    token: getStudentToken(),
  });

export const loginAdmin = async ({ username, email, password }) => {
  const data = await request('/api/admin/login', {
    method: 'POST',
    body: {
      username: (username || email || '').trim(),
      password: String(password || ''),
    },
  });
  const token = authPayloadToken(data);
  if (!token) throw new Error('Login response did not include access token.');
  setAdminToken(token);
  return data;
};

export const getAdminDashboard = () =>
  request('/api/admin/dashboard', {
    token: getAdminToken(),
  });

export const getAdminStudents = ({
  search = '',
  course = '',
  category = '',
  session = '',
  program = '',
  shortlist = '',
  verified = '',
  hostel_state = '',
  limit = 100,
  offset = 0,
} = {}) => {
  const query = new URLSearchParams();
  if (search) query.set('search', search);
  if (course) query.set('course', course);
  if (category) query.set('category', category);
  if (session) query.set('session', session);
  if (program) query.set('program', program);
  if (shortlist) query.set('shortlist', shortlist);
  if (verified) query.set('verified', verified);
  if (hostel_state) query.set('hostel_state', hostel_state);
  query.set('limit', String(limit));
  query.set('offset', String(offset));

  return request(`/api/admin/students?${query.toString()}`, {
    token: getAdminToken(),
  });
};

export const getAdminStudentDetail = (studentId) =>
  request(`/api/admin/students/${studentId}`, {
    token: getAdminToken(),
  });

export const verifyStudentApplication = (studentId, verified = true) =>
  request(`/api/admin/students/${studentId}/verify`, {
    method: 'PATCH',
    body: { verified },
    token: getAdminToken(),
  });

export const toggleShortlistStudent = (studentId, shortlisted = true) =>
  request(`/api/admin/students/${studentId}/shortlist`, {
    method: 'PATCH',
    body: { shortlisted },
    token: getAdminToken(),
  });

export const allocateHostel = (studentId, hostelName) =>
  request(`/api/admin/students/${studentId}/allocate-hostel`, {
    method: 'PATCH',
    body: { hostel_name: hostelName },
    token: getAdminToken(),
  });

export const uploadShortlist = (file) => {
  const formData = new FormData();
  formData.append('file', file);
  return request('/api/admin/upload-shortlist', {
    method: 'POST',
    body: formData,
    token: getAdminToken(),
  });
};

export const downloadStudentsExcel = async () => {
  const blob = await request('/api/admin/export-excel', {
    token: getAdminToken(),
    responseType: 'blob',
  });

  const url = window.URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `hostel_erp_students_${new Date().toISOString().slice(0, 10)}.xlsx`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  window.URL.revokeObjectURL(url);
};

export const resolveAssetUrl = (relativeOrAbsolutePath) => {
  if (!relativeOrAbsolutePath) return '';
  if (/^https?:\/\//i.test(relativeOrAbsolutePath)) return relativeOrAbsolutePath;
  const path = relativeOrAbsolutePath.startsWith('/') ? relativeOrAbsolutePath : `/${relativeOrAbsolutePath}`;
  return `${ERP_API_BASE_URL}${path}`;
};
