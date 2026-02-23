import { toR2AssetUrl } from '@/lib/r2Assets';

const API_BASE_URL = (import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000').replace(/\/+$/, '');
const ADMIN_TOKEN_KEY = 'mmc_admin_token';

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
  const url = new URL(`${API_BASE_URL}${path}`);
  Object.entries(query).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== '') {
      url.searchParams.set(key, value);
    }
  });
  return url.toString();
};

const withResolvedFileUrl = (item) => {
  const resolvedLink = item?.link ? toR2AssetUrl(item.link) : item?.link || '';

  if (!item || !item.file_url) {
    return {
      ...item,
      publishTo: item?.publish_to,
      link: resolvedLink,
      fileUrl: item?.file_url || '',
      fileName: item?.file_name || '',
      publishDate: item?.publish_date || null,
      createdAt: item?.created_at,
      updatedAt: item?.updated_at,
    };
  }

  const resolved = toR2AssetUrl(item.file_url);

  return {
    ...item,
    publishTo: item.publish_to,
    link: resolvedLink,
    fileUrl: resolved,
    fileName: item.file_name || '',
    publishDate: item.publish_date || null,
    createdAt: item.created_at,
    updatedAt: item.updated_at,
  };
};

const mapList = (items) => (Array.isArray(items) ? items.map(withResolvedFileUrl) : []);

const parseError = async (response) => {
  try {
    const data = await response.json();
    if (typeof data?.detail === 'string') {
      return data.detail;
    }
    if (Array.isArray(data?.detail) && data.detail.length > 0) {
      return data.detail.map((item) => item?.msg).filter(Boolean).join(', ');
    }
  } catch (_) {
    // no-op
  }
  return `Request failed with status ${response.status}`;
};

const request = async (path, { method = 'GET', body, token, headers = {} } = {}) => {
  const isFormData = body instanceof FormData;
  const response = await fetch(`${API_BASE_URL}${path}`, {
    method,
    headers: {
      ...(isFormData ? {} : { 'Content-Type': 'application/json' }),
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...headers,
    },
    body: body ? (isFormData ? body : JSON.stringify(body)) : undefined,
  });

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

const toNoticeFormData = (data = {}, { isUpdate = false } = {}) => {
  const formData = new FormData();
  const hasFileUrlField =
    Object.prototype.hasOwnProperty.call(data, 'fileUrl') ||
    Object.prototype.hasOwnProperty.call(data, 'file_url');

  appendIfDefined(formData, 'title', data.title?.trim());
  appendIfDefined(formData, 'description', data.description ?? '');
  appendIfDefined(formData, 'publish_to', data.publish_to || data.publishTo);
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

export const loginAdmin = async ({ username, password }) => {
  const data = await request('/api/admin/login', {
    method: 'POST',
    body: { username, password },
  });
  setAdminToken(data.access_token);
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
  return withResolvedFileUrl(data);
};

export const updateNotification = async (id, updates) => {
  const data = await request(`/api/notices/admin/${id}`, {
    method: 'PATCH',
    token: getAdminToken(),
    body: toNoticeFormData(updates, { isUpdate: true }),
  });
  return withResolvedFileUrl(data);
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
  const response = await fetch(url);
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

  return [...notices, ...notifications].map((item) => ({
    text: item.title,
    link: item.link || item.fileUrl || '#',
    fileUrl: item.fileUrl || '',
  }));
};
