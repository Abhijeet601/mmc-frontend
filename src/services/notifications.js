import { toR2AssetUrl } from '@/lib/r2Assets';

const API_BASE =
  import.meta.env.VITE_API_BASE ||
  import.meta.env.VITE_API_BASE_URL ||
  '';
const fallbackApiBaseUrl =
  typeof window !== 'undefined' && window.location?.origin ? window.location.origin : '';

const rawApiBaseUrl = (API_BASE || fallbackApiBaseUrl).trim().replace(/\/+$/, '');

// Requests use explicit /api/... paths below, so strip a trailing /api from base to avoid /api/api.
const API_BASE_URL = rawApiBaseUrl.replace(/\/api$/i, '');
const ADMIN_TOKEN_KEY = 'mmc_admin_token';
const ADMIN_LOGIN_PATH = '/api/admin/login';

export const NOTICE_CATEGORIES = Object.freeze({
  TENDERS: 'tenders',
  UPCOMING_EVENTS: 'upcoming_events',
  NOTIFICATIONS: 'notifications',
  NOTICES: 'notices',
});

export const PUBLISH_TO_OPTIONS = [
  { value: NOTICE_CATEGORIES.TENDERS, label: 'Tenders' },
  { value: NOTICE_CATEGORIES.UPCOMING_EVENTS, label: 'Upcoming Events' },
  { value: NOTICE_CATEGORIES.NOTIFICATIONS, label: 'Notifications' },
  { value: NOTICE_CATEGORIES.NOTICES, label: 'Notices' },
];

const buildUrl = (path, query = {}) => {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  const url = new URL(`${API_BASE_URL}${normalizedPath}`);
  Object.entries(query).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== '') {
      url.searchParams.set(key, value);
    }
  });
  return url.toString();
};

const normalizeNotice = (item) => {
  const resolvedFileUrl = item?.file_url ? toR2AssetUrl(item.file_url) : '';

  return {
    ...item,
    publishTo: item?.publish_to,
    link: item?.link ? toR2AssetUrl(item.link) : item?.link || '',
    file_url: resolvedFileUrl || item?.file_url || '',
    fileUrl: resolvedFileUrl || item?.file_url || '',
    fileName: item?.file_name || '',
    publishDate: item?.publish_date || null,
    createdAt: item?.created_at,
    updatedAt: item?.updated_at,
  };
};

const mapList = (items) => (Array.isArray(items) ? items.map(normalizeNotice) : []);

const dedupeNotices = (items = []) => {
  const seen = new Set();
  const deduped = [];

  items.forEach((item) => {
    const key = [item?.title || '', item?.link || '', item?.fileUrl || '']
      .join('|')
      .toLowerCase();

    if (!key || seen.has(key)) return;
    seen.add(key);
    deduped.push(item);
  });

  return deduped;
};

const parseError = async (response) => {
  let body = '';

  try {
    body = await response.text();
  } catch (_) {
    // no-op
  }

  if (body) {
    try {
      const data = JSON.parse(body);
      if (typeof data?.detail === 'string') {
        return data.detail;
      }
      if (Array.isArray(data?.detail) && data.detail.length > 0) {
        return data.detail.map((item) => item?.msg).filter(Boolean).join(', ');
      }
    } catch (_) {
      const trimmed = body.trim();
      if (trimmed) {
        return trimmed;
      }
    }
  }

  return `Request failed with status ${response.status}`;
};

const parseNetworkError = (error) => {
  if (error?.name === 'AbortError') {
    return 'Request timed out. Please try again.';
  }

  if (error instanceof TypeError) {
    return `Unable to reach API at ${API_BASE_URL}. Check VITE_API_BASE, VITE_API_BASE_URL, and backend CORS_ORIGINS.`;
  }

  return error?.message || 'Network request failed.';
};

const request = async (path, { method = 'GET', body, token, headers = {} } = {}) => {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  const requestUrl = `${API_BASE_URL}${normalizedPath}`;
  const isFormData = body instanceof FormData;
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 20000);
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

  if (response.status === 204) {
    return null;
  }

  return response.json();
};

const appendIfDefined = (formData, key, value) => {
  if (value !== undefined && value !== null) {
    formData.append(key, value);
  }
};

const appendPublishTargets = (formData, value) => {
  const targets = Array.isArray(value) ? value : [value];

  targets
    .map((item) => (typeof item === 'string' ? item.trim() : ''))
    .filter(Boolean)
    .forEach((target) => {
      formData.append('publish_to', target);
    });
};

const normalizeNoticeResponse = (data) =>
  Array.isArray(data) ? data.map(normalizeNotice) : normalizeNotice(data);

const toNoticeFormData = (data = {}, { isUpdate = false } = {}) => {
  const formData = new FormData();
  const hasFileUrlField =
    Object.prototype.hasOwnProperty.call(data, 'fileUrl') ||
    Object.prototype.hasOwnProperty.call(data, 'file_url');

  appendIfDefined(formData, 'title', data.title?.trim());
  appendIfDefined(formData, 'description', data.description ?? '');
  appendPublishTargets(formData, data.publish_to ?? data.publishTo);
  appendIfDefined(formData, 'link', data.link ?? '');
  if (!isUpdate || hasFileUrlField) {
    appendIfDefined(formData, 'file_url', data.fileUrl ?? data.file_url ?? '');
  }
  appendIfDefined(formData, 'pinned', String(Boolean(data.pinned)));
  appendIfDefined(formData, 'published', String(data.published !== false));
  appendIfDefined(formData, 'publish_date', data.publishDate ?? data.publish_date ?? '');

  if (isUpdate) {
    appendIfDefined(formData, 'remove_file', String(Boolean(data.removeFile)));
  }

  if (data.file instanceof File) {
    formData.append('file', data.file);
  }

  return formData;
};

export const getAdminToken = () => localStorage.getItem(ADMIN_TOKEN_KEY) || '';
export const setAdminToken = (token) => localStorage.setItem(ADMIN_TOKEN_KEY, token);
export const clearAdminToken = () => localStorage.removeItem(ADMIN_TOKEN_KEY);
export const isAdminAuthenticated = () => Boolean(getAdminToken());

const getAccessTokenFromResponse = (data) =>
  data?.access_token || data?.accessToken || data?.token || '';

export const loginAdmin = async ({ username, password }) => {
  const data = await request(ADMIN_LOGIN_PATH, {
    method: 'POST',
    body: {
      username: username?.trim?.() || '',
      password: password || '',
    },
  });

  const accessToken = getAccessTokenFromResponse(data);
  if (!accessToken) {
    throw new Error('Login response did not include an access token.');
  }

  setAdminToken(accessToken);
  return data;
};

export const getAdminProfile = async () =>
  request('/api/admin/me', {
    token: getAdminToken(),
  });

export const getNotifications = async () => {
  const data = await request('/api/notices/admin', {
    token: getAdminToken(),
  });
  return mapList(data);
};

export const addNotification = async (notificationData) => {
  const data = await request('/api/notices/admin', {
    method: 'POST',
    token: getAdminToken(),
    body: toNoticeFormData(notificationData),
  });
  return normalizeNoticeResponse(data);
};

export const updateNotification = async (id, updates) => {
  const data = await request(`/api/notices/admin/${id}`, {
    method: 'PATCH',
    token: getAdminToken(),
    body: toNoticeFormData(updates, { isUpdate: true }),
  });
  return normalizeNotice(data);
};

export const deleteNotification = async (id) => {
  await request(`/api/notices/admin/${id}`, {
    method: 'DELETE',
    token: getAdminToken(),
  });
  return true;
};

export const getPublicNotices = async ({ publishTo, limit = 100 } = {}) => {
  const url = buildUrl('/api/notices', {
    publish_to: publishTo,
    limit,
  });
  let response;
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 20000);

  try {
    response = await fetch(url, { signal: controller.signal });
  } catch (error) {
    throw new Error(parseNetworkError(error));
  } finally {
    clearTimeout(timeout);
  }

  if (!response.ok) {
    throw new Error(await parseError(response));
  }
  const data = await response.json();
  return mapList(data);
};

export const getActiveNotifications = async (publishTo = NOTICE_CATEGORIES.NOTIFICATIONS) =>
  getPublicNotices({ publishTo });

export const getSlidingNotices = async () => {
  const [notices, notifications] = await Promise.all([
    getPublicNotices({ publishTo: NOTICE_CATEGORIES.NOTICES, limit: 10 }),
    getPublicNotices({ publishTo: NOTICE_CATEGORIES.NOTIFICATIONS, limit: 10 }),
  ]);

  return dedupeNotices([...notices, ...notifications]).map((item) => ({
    text: item.title,
    link: item.link || item.fileUrl || '#',
    fileUrl: item.fileUrl || '',
  }));
};
