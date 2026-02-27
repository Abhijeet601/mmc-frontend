const LANGUAGE_PREFERENCE_STORAGE_KEY = 'mmcPreferredLanguage';
const LANGUAGE_PREFERENCE_COOKIE_KEY = 'mmcPreferredLanguage';
const ONE_YEAR_IN_SECONDS = 60 * 60 * 24 * 365;

const normalizeLanguage = value => {
  if (!value || typeof value !== 'string') return null;
  const normalized = value.trim().toLowerCase();
  if (normalized.startsWith('hi')) return 'hi';
  if (normalized.startsWith('en')) return 'en';
  return null;
};

const readLocalStorage = key => {
  if (typeof window === 'undefined' || !window.localStorage) return null;
  try {
    return window.localStorage.getItem(key);
  } catch (_error) {
    return null;
  }
};

const writeLocalStorage = (key, value) => {
  if (typeof window === 'undefined' || !window.localStorage) return;
  try {
    window.localStorage.setItem(key, value);
  } catch (_error) {
    // Ignore storage write failures (private mode / blocked storage).
  }
};

const readCookie = key => {
  if (typeof document === 'undefined' || !document.cookie) return null;
  const cookie = document.cookie
    .split('; ')
    .find(item => item.startsWith(`${key}=`));
  if (!cookie) return null;
  return decodeURIComponent(cookie.split('=').slice(1).join('='));
};

const writeCookie = (key, value) => {
  if (typeof document === 'undefined') return;
  document.cookie = `${key}=${encodeURIComponent(value)}; path=/; max-age=${ONE_YEAR_IN_SECONDS}; SameSite=Lax`;
};

const getStoredLanguagePreference = () => {
  const storedPreference = normalizeLanguage(readLocalStorage(LANGUAGE_PREFERENCE_STORAGE_KEY));
  if (storedPreference) return storedPreference;

  const cookiePreference = normalizeLanguage(readCookie(LANGUAGE_PREFERENCE_COOKIE_KEY));
  if (cookiePreference) return cookiePreference;

  return null;
};

const persistLanguagePreference = language => {
  const normalized = normalizeLanguage(language);
  if (!normalized) return null;

  writeLocalStorage(LANGUAGE_PREFERENCE_STORAGE_KEY, normalized);
  writeLocalStorage('i18nextLng', normalized);
  writeCookie(LANGUAGE_PREFERENCE_COOKIE_KEY, normalized);
  return normalized;
};

export {
  LANGUAGE_PREFERENCE_COOKIE_KEY,
  LANGUAGE_PREFERENCE_STORAGE_KEY,
  getStoredLanguagePreference,
  normalizeLanguage,
  persistLanguagePreference
};
