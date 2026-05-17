const API_BASE =
  import.meta.env.VITE_SOCIAL_API_BASE ||
  import.meta.env.VITE_API_BASE ||
  import.meta.env.VITE_API_BASE_URL ||
  '';

const browserLocation = typeof window !== 'undefined' ? window.location : null;
const fallbackApiBaseUrl = (() => {
  if (!browserLocation?.origin) return 'http://127.0.0.1:8000';
  if (!['3000', '4173', '5173'].includes(browserLocation.port)) return browserLocation.origin;

  try {
    const backendUrl = new URL(browserLocation.origin);
    backendUrl.port = '8000';
    return backendUrl.origin;
  } catch (_) {
    return 'http://127.0.0.1:8000';
  }
})();

const SOCIAL_API_BASE = (API_BASE || fallbackApiBaseUrl).trim().replace(/\/+$/, '');

export const getSocialEvents = async (limit = 6) => {
  const response = await fetch(`${SOCIAL_API_BASE}/social-events?limit=${limit}`);
  if (!response.ok) {
    throw new Error(`Failed to load social media posts (${response.status})`);
  }
  return response.json();
};
