const browserLocation = typeof window !== 'undefined' ? window.location : null;
const browserOrigin = browserLocation?.origin || '';
const DEV_SERVER_PORTS = ['3000', '4173', '5173'];
const isViteDevServer = Boolean(browserLocation?.origin && DEV_SERVER_PORTS.includes(browserLocation.port));
const explicitErpApiBase = (import.meta.env.VITE_ERP_API_BASE || '').trim();
const genericApiBase = (
  import.meta.env.VITE_API_BASE ||
  import.meta.env.VITE_API_BASE_URL ||
  ''
).trim();
const fallbackApiBaseUrl = (() => {
  if (!browserLocation?.origin) return '';
  if (isViteDevServer) return '';
  return browserLocation.origin;
})();

const API_BASE = explicitErpApiBase || (isViteDevServer ? '' : genericApiBase) || fallbackApiBaseUrl;
const rawApiBaseUrl = (API_BASE || fallbackApiBaseUrl).trim().replace(/\/+$/, '');
const ERP_API_BASE_URL = rawApiBaseUrl.replace(/\/api$/i, '');
const ERP_API_BASE_LABEL = ERP_API_BASE_URL || `${browserOrigin || 'current site'} /api proxy`;

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
    return `Unable to reach ERP API at ${ERP_API_BASE_LABEL}. Check VITE_ERP_API_BASE, VITE_API_BASE, and backend server status.`;
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
  if (!response.headers.get('content-type')?.toLowerCase().includes('application/json')) {
    throw new Error(
      `ERP API at ${requestUrl} returned a non-JSON response. Check VITE_ERP_API_BASE or your /api proxy.`
    );
  }
  return response.json();
};

const authPayloadToken = (data) => data?.access_token || data?.token || '';

const cleanString = (value) => String(value || '').trim();
const normalizeLoginIdentifier = (value) => {
  const identifier = cleanString(value);
  return identifier.includes('@') ? identifier.toLowerCase() : identifier;
};

const compactPayload = (payload) =>
  Object.fromEntries(
    Object.entries(payload).filter(([, value]) => value !== undefined && value !== null && value !== '')
  );

const normalizeStudentRegistrationPayload = (payload = {}) =>
  compactPayload({
    email: cleanString(payload.email).toLowerCase(),
    mobile_number: cleanString(payload.mobile_number || payload.mobile),
    date_of_birth: payload.date_of_birth || payload.dob,
    password: String(payload.password || ''),
  });

const normalizePasswordResetPayload = (payload = {}) =>
  compactPayload({
    identifier: cleanString(payload.identifier || payload.email || payload.application_number),
    mobile_number: cleanString(payload.mobile_number || payload.mobile),
    date_of_birth: payload.date_of_birth || payload.dob,
    new_password: String(payload.new_password || payload.password || ''),
  });

const formatDateInput = (value) => {
  if (!value) return '';
  return String(value).slice(0, 10);
};

const normalizeApplicationForm = (payload = {}) => {
  const data = payload?.data && typeof payload.data === 'object' ? payload.data : payload;
  const dateOfBirth = data.date_of_birth || data.dob || payload.registration_date_of_birth || '';
  const mobileNumber = data.mobile_number || data.mobile || payload.mobile_number || '';
  const aadhaarNumber = data.aadhaar_number || data.aadhar_number || data.aadhar_no || '';
  const guardianName = data.local_guardian_name || data.guardian_name || '';
  const guardianMobile = data.guardian_mobile_number || data.guardian_mobile || '';
  const courseName = data.course_name || data.course || '';
  const rollNumber = data.roll_number || data.roll_no || '';
  const totalMarks = data.total_marks ?? data.inter_total_marks ?? '';
  const marksObtained = data.marks_obtained ?? data.inter_marks_obtained ?? '';
  const aggregatePercentage = data.aggregate_percentage ?? data.inter_aggregate ?? '';

  return {
    ...payload,
    ...data,
    mobile: mobileNumber,
    mobile_number: mobileNumber,
    dob: formatDateInput(dateOfBirth),
    date_of_birth: formatDateInput(dateOfBirth),
    aadhar_no: aadhaarNumber,
    aadhaar_number: aadhaarNumber,
    guardian_name: guardianName,
    local_guardian_name: guardianName,
    guardian_mobile: guardianMobile,
    guardian_mobile_number: guardianMobile,
    course: courseName,
    course_name: courseName,
    roll_no: rollNumber,
    roll_number: rollNumber,
    inter_total_marks: totalMarks,
    total_marks: totalMarks,
    inter_marks_obtained: marksObtained,
    marks_obtained: marksObtained,
    inter_aggregate: aggregatePercentage,
    aggregate_percentage: aggregatePercentage,
  };
};

const normalizeDashboard = (data = {}) => ({
  ...data,
  name: data.name || data.student_name || '',
  application_no: data.application_no || data.application_number || '',
  payment_status: data.payment_status || data.application_payment_status || 'pending',
  hostel_name: data.hostel_name || data.allocated_hostel || data.preferred_hostel || '',
});

const toApplicationFormData = (payload = {}) => {
  if (payload instanceof FormData) return payload;

  const normalized = {
    ...payload,
    mobile_number: payload.mobile_number || payload.mobile,
    date_of_birth: payload.date_of_birth || payload.dob,
    aadhaar_number: payload.aadhaar_number || payload.aadhar_number || payload.aadhar_no,
    local_guardian_name: payload.local_guardian_name || payload.guardian_name,
    guardian_mobile_number: payload.guardian_mobile_number || payload.guardian_mobile,
    course_name: payload.course_name || payload.course,
    roll_number: payload.roll_number || payload.roll_no,
    total_marks: payload.total_marks ?? payload.inter_total_marks,
    marks_obtained: payload.marks_obtained ?? payload.inter_marks_obtained,
    aggregate_percentage: payload.aggregate_percentage ?? payload.inter_aggregate,
  };

  const formData = new FormData();
  Object.entries(normalized).forEach(([key, value]) => {
    if (value === undefined || value === null || value === '') return;
    formData.append(key, value instanceof Blob ? value : String(value));
  });
  return formData;
};

const storeStudentSession = (data) => {
  const token = authPayloadToken(data);
  if (!token) throw new Error('Login response did not include access token.');
  setStudentToken(token);
  setApplicationCompleted(Boolean(data?.application_completed));
  return data;
};

const triggerDownload = (blob, filename) => {
  const url = window.URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  window.URL.revokeObjectURL(url);
};

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

export const registerStudent = async (payload) => {
  const registrationPayload = normalizeStudentRegistrationPayload(payload);
  const registration = await request('/api/register', {
    method: 'POST',
    body: registrationPayload,
  });

  const loginPassword = registrationPayload.password || registration?.password;
  if (!loginPassword) return registration;

  try {
    const session = await request('/api/login', {
      method: 'POST',
      body: {
        email: normalizeLoginIdentifier(registrationPayload.email),
        password: loginPassword,
        date_of_birth: registrationPayload.date_of_birth,
      },
    });
    return { ...registration, ...storeStudentSession(session), registration };
  } catch (error) {
    throw new Error(
      `${registration?.message || 'Registration completed successfully.'} Please login with your email and password.`
    );
  }
};

export const loginStudent = async ({ email, password, date_of_birth, dob }) => {
  const loginDateOfBirth = date_of_birth || dob;
  const data = await request('/api/login', {
    method: 'POST',
    body: compactPayload({
      email: normalizeLoginIdentifier(email),
      password: String(password || ''),
      ...(loginDateOfBirth ? { date_of_birth: loginDateOfBirth } : {}),
    }),
  });

  return storeStudentSession(data);
};

export const resetStudentPassword = (payload) =>
  request('/api/reset-password', {
    method: 'POST',
    body: normalizePasswordResetPayload(payload),
  });

export const getApplicationForm = () =>
  request('/api/application', {
    token: getStudentToken(),
  }).then(normalizeApplicationForm);

export const startHostelRenewal = () =>
  request('/api/application/start-renewal', {
    method: 'POST',
    token: getStudentToken(),
  });

export const saveApplicationDraft = (payload) =>
  request('/api/application/draft', {
    method: 'POST',
    body: toApplicationFormData(payload),
    token: getStudentToken(),
  });

export const submitApplication = (payload = {}) =>
  request('/api/application/submit', {
    method: 'POST',
    body: toApplicationFormData(payload),
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
  }).then(normalizeDashboard);

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

export const getStudentComplaints = () =>
  request('/api/complaints', {
    token: getStudentToken(),
  });

export const createStudentComplaint = (payload) =>
  request('/api/complaints', {
    method: 'POST',
    body: payload,
    token: getStudentToken(),
  });

export const loginAdmin = async ({ email, username, password }) => {
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

export const getAdminPayments = () =>
  request('/api/admin/payments', {
    token: getAdminToken(),
  });

export const getAdminComplaints = () =>
  request('/api/admin/complaints', {
    token: getAdminToken(),
  });

export const updateAdminComplaint = (complaintId, payload) =>
  request(`/api/admin/complaints/${complaintId}`, {
    method: 'PATCH',
    body: payload,
    token: getAdminToken(),
  });

export const approveAdminPayment = (paymentId) =>
  request(`/api/admin/approve-payment/${paymentId}`, {
    method: 'POST',
    token: getAdminToken(),
  });

export const rejectAdminPayment = (paymentId) =>
  request(`/api/admin/reject-payment/${paymentId}`, {
    method: 'POST',
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

export const allocateHostel = (studentId, allocation) =>
  request(`/api/admin/students/${studentId}/allocate-hostel`, {
    method: 'PATCH',
    body:
      typeof allocation === 'string'
        ? { hostel_name: allocation }
        : {
            hostel_name: allocation?.hostel_name,
            room_id: allocation?.room_id,
            bed_number: allocation?.bed_number,
          },
    token: getAdminToken(),
  });

export const deleteAdminStudent = (studentId) =>
  request(`/api/admin/students/${studentId}`, {
    method: 'DELETE',
    token: getAdminToken(),
  });

export const uploadShortlist = (file, hostelName = '') => {
  const formData = new FormData();
  formData.append('file', file);
  if (hostelName) formData.append('hostel_name', hostelName);
  return request('/api/admin/bulk/shortlist/upload', {
    method: 'POST',
    body: formData,
    token: getAdminToken(),
  });
};

export const uploadBulkShortlist = uploadShortlist;

export const downloadShortlistTemplate = async () => {
  const blob = await request('/api/admin/bulk/shortlist/template', {
    token: getAdminToken(),
    responseType: 'blob',
  });
  triggerDownload(blob, `bulk_shortlist_template_${new Date().toISOString().slice(0, 10)}.xlsx`);
};

export const uploadBulkAllocation = (file, hostelName = '') => {
  const formData = new FormData();
  formData.append('file', file);
  if (hostelName) formData.append('hostel_name', hostelName);
  return request('/api/admin/bulk/allocation/upload', {
    method: 'POST',
    body: formData,
    token: getAdminToken(),
  });
};

export const downloadAllocationTemplate = async () => {
  const blob = await request('/api/admin/bulk/allocation/template', {
    token: getAdminToken(),
    responseType: 'blob',
  });
  triggerDownload(blob, `bulk_allocation_template_${new Date().toISOString().slice(0, 10)}.xlsx`);
};

export const getAdminHostelRooms = () =>
  request('/api/admin/hostel/rooms', {
    token: getAdminToken(),
  });

export const getAdminActivityLogs = ({ limit = 200, offset = 0 } = {}) => {
  const query = new URLSearchParams();
  query.set('limit', String(limit));
  query.set('offset', String(offset));

  return request(`/api/activity-logs?${query.toString()}`, {
    token: getAdminToken(),
  });
};

export const createAdminHostelRoom = (payload) =>
  request('/api/admin/hostel/rooms', {
    method: 'POST',
    body: payload,
    token: getAdminToken(),
  });

export const updateAdminHostelRoom = (roomId, payload) =>
  request(`/api/admin/hostel/rooms/${roomId}`, {
    method: 'PATCH',
    body: payload,
    token: getAdminToken(),
  });

export const downloadStudentsExcel = async ({
  search = '',
  course = '',
  category = '',
  session = '',
  program = '',
  shortlist = '',
  verified = '',
  hostel_state = '',
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

  const queryString = query.toString();
  const path = queryString ? `/api/admin/export-excel?${queryString}` : '/api/admin/export-excel';

  const blob = await request(path, {
    token: getAdminToken(),
    responseType: 'blob',
  });
  triggerDownload(blob, `hostel_erp_students_${new Date().toISOString().slice(0, 10)}.xlsx`);
};

export const getOldStudents = ({
  search = '',
  hostel_name = '',
  status = '',
  limit = 50,
  offset = 0,
} = {}) => {
  const query = new URLSearchParams();
  if (search) query.set('search', search);
  if (hostel_name) query.set('hostel_name', hostel_name);
  if (status) query.set('status', status);
  query.set('limit', String(limit));
  query.set('offset', String(offset));

  return request(`/api/admin/old-students?${query.toString()}`, {
    token: getAdminToken(),
  });
};

export const createOldStudent = (payload) =>
  request('/api/admin/old-students', {
    method: 'POST',
    body: payload,
    token: getAdminToken(),
  });

export const updateOldStudent = (studentId, payload) =>
  request(`/api/admin/old-students/${studentId}`, {
    method: 'PUT',
    body: payload,
    token: getAdminToken(),
  });

export const deleteOldStudent = (studentId) =>
  request(`/api/admin/old-students/${studentId}`, {
    method: 'DELETE',
    token: getAdminToken(),
  });

const buildOldStudentBulkFormData = ({
  file,
  rows,
  previewOnly = true,
  updateExisting = true,
  generateIds = true,
  allocateRooms = true,
  overwriteHostelId = false,
} = {}) => {
  const formData = new FormData();
  if (file) formData.append('file', file);
  if (rows) formData.append('rows_json', JSON.stringify(rows));
  formData.append('preview_only', previewOnly ? 'true' : 'false');
  formData.append('update_existing', updateExisting ? 'true' : 'false');
  formData.append('generate_ids', generateIds ? 'true' : 'false');
  formData.append('allocate_rooms', allocateRooms ? 'true' : 'false');
  formData.append('overwrite_hostel_id', overwriteHostelId ? 'true' : 'false');
  return formData;
};

export const previewBulkUpsertOldStudents = ({
  file,
  rows,
  options: {
    updateExisting = true,
    generateIds = true,
    allocateRooms = true,
    overwriteHostelId = false,
  } = {},
} = {}) =>
  request('/api/bulk-upsert-old-students', {
    method: 'POST',
    body: buildOldStudentBulkFormData({
      file,
      rows,
      previewOnly: true,
      updateExisting,
      generateIds,
      allocateRooms,
      overwriteHostelId,
    }),
    token: getAdminToken(),
  });

export const commitBulkUpsertOldStudents = ({
  file,
  rows,
  options: {
    updateExisting = true,
    generateIds = true,
    allocateRooms = true,
    overwriteHostelId = false,
  } = {},
} = {}) =>
  request('/api/bulk-upsert-old-students', {
    method: 'POST',
    body: buildOldStudentBulkFormData({
      file,
      rows,
      previewOnly: false,
      updateExisting,
      generateIds,
      allocateRooms,
      overwriteHostelId,
    }),
    token: getAdminToken(),
  });

export const bulkUploadOldStudents = (file, options = {}) =>
  request('/api/bulk-upsert-old-students', {
    method: 'POST',
    body: buildOldStudentBulkFormData({
      file,
      previewOnly: false,
      updateExisting: options.updateExisting ?? true,
      generateIds: options.generateIds ?? true,
      allocateRooms: options.allocateRooms ?? true,
      overwriteHostelId: options.overwriteHostelId ?? false,
    }),
    token: getAdminToken(),
  });

export const resolveAssetUrl = (relativeOrAbsolutePath) => {
  if (!relativeOrAbsolutePath) return '';
  if (/^https?:\/\//i.test(relativeOrAbsolutePath)) return relativeOrAbsolutePath;
  const path = relativeOrAbsolutePath.startsWith('/') ? relativeOrAbsolutePath : `/${relativeOrAbsolutePath}`;
  return `${ERP_API_BASE_URL}${path}`;
};
