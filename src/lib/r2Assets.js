const DEFAULT_FILE_BASE_URL = 'https://pub-c7047204b6824b4ea67be147e7ebb0ac.r2.dev';

const configuredBaseUrl =
  import.meta.env.VITE_FILE_BASE_URL ||
  import.meta.env.VITE_R2_PUBLIC_BASE_URL ||
  DEFAULT_FILE_BASE_URL;

export const FILE_BASE_URL = configuredBaseUrl.trim().replace(/\/+$/, '');
export const R2_PUBLIC_BASE_URL = FILE_BASE_URL;

const LOCAL_MEDIA_PREFIXES = [
  '/public/',
  '/documents/',
  '/images/',
  '/videos/',
  '/faculty/',
  '/wp-content/',
  '/timetables/',
  '/data files/',
  '/uploads/source-notices/',
  '/Magadh_Mahila_College.png',
  '/hero-section-video.mp4',
  '/main gate video.mp4',
  '/building.mp4',
  '/modern-campus.webp',
  '/academic-excellence.webp',
  '/ChatGPT Image Dec 27, 2025, 09_25_51 PM.png',
];

const MEDIA_EXTENSIONS = [
  '.pdf',
  '.png',
  '.jpg',
  '.jpeg',
  '.webp',
  '.gif',
  '.svg',
  '.mp4',
  '.webm',
  '.avi',
  '.mov',
  '.doc',
  '.docx',
  '.xls',
  '.xlsx',
  '.ppt',
  '.pptx',
  '.zip',
  '.rar',
];

const IGNORE_SCHEMES = ['data:', 'blob:', 'mailto:', 'tel:', 'javascript:'];
const ATTRIBUTES_TO_REWRITE = ['src', 'href', 'poster'];
const SKIP_REWRITE_ATTR = 'data-skip-r2-rewrite';

const splitUrlSuffix = (value) => {
  const queryIndex = value.indexOf('?');
  const hashIndex = value.indexOf('#');
  let splitIndex = -1;

  if (queryIndex === -1) splitIndex = hashIndex;
  else if (hashIndex === -1) splitIndex = queryIndex;
  else splitIndex = Math.min(queryIndex, hashIndex);

  if (splitIndex === -1) {
    return { pathname: value, suffix: '' };
  }

  return {
    pathname: value.slice(0, splitIndex),
    suffix: value.slice(splitIndex),
  };
};

const hasIgnoredScheme = (value) =>
  IGNORE_SCHEMES.some((scheme) => value.toLowerCase().startsWith(scheme));

const hasMediaExtension = (pathValue) => {
  const lowerPath = splitUrlSuffix(pathValue).pathname.toLowerCase();
  return MEDIA_EXTENSIONS.some((ext) => lowerPath.endsWith(ext));
};

const normalizeSourceNoticesPath = (pathWithSuffix) => {
  const { pathname, suffix } = splitUrlSuffix(pathWithSuffix);

  if (!pathname.startsWith('/uploads/source-notices/')) {
    return pathWithSuffix;
  }

  const encodedName = pathname.slice('/uploads/source-notices/'.length);
  const decodedName = decodeURIComponent(encodedName);
  const remappedName = encodeURIComponent(decodedName).replace(/%2F/g, '/');

  return `/documents/notices/${remappedName}${suffix}`;
};

const ensurePublicPath = (pathWithSuffix) => {
  const { pathname, suffix } = splitUrlSuffix(pathWithSuffix);
  const cleanedPath = pathname.trim().replace(/^\/+/, '');

  if (!cleanedPath) return `public${suffix}`;
  if (cleanedPath === 'public' || cleanedPath.startsWith('public/')) {
    return `${cleanedPath}${suffix}`;
  }

  return `public/${cleanedPath}${suffix}`;
};

const extractSameOriginPath = (value) => {
  if (typeof value !== 'string') return null;

  const trimmed = value.trim();
  if (!trimmed || trimmed.startsWith('#') || hasIgnoredScheme(trimmed)) {
    return null;
  }

  if (/^https?:\/\//i.test(trimmed)) {
    if (trimmed.startsWith(FILE_BASE_URL)) {
      const tail = trimmed.slice(FILE_BASE_URL.length);
      return tail.startsWith('/') ? tail : `/${tail}`;
    }

    if (typeof window === 'undefined') return null;

    try {
      const url = new URL(trimmed);
      if (url.origin !== window.location.origin) {
        return null;
      }
      return `${url.pathname}${url.search}${url.hash}`;
    } catch {
      return null;
    }
  }

  if (trimmed.startsWith('/')) return trimmed;
  return `/${trimmed}`;
};

const isLocalMediaPath = (pathValue) =>
  LOCAL_MEDIA_PREFIXES.some((prefix) => pathValue.startsWith(prefix)) ||
  hasMediaExtension(pathValue);

export const isR2MediaPath = (value) => {
  const pathCandidate = extractSameOriginPath(value);
  if (!pathCandidate) return false;

  const normalized = normalizeSourceNoticesPath(pathCandidate);
  return isLocalMediaPath(normalized);
};

export const r2Url = (value) => {
  if (typeof value !== 'string') return value;

  const trimmed = value.trim();
  if (!trimmed || trimmed.startsWith('#') || hasIgnoredScheme(trimmed)) {
    return value;
  }

  if (/^https?:\/\//i.test(trimmed) && !trimmed.startsWith(FILE_BASE_URL)) {
    if (typeof window === 'undefined') return value;

    try {
      const url = new URL(trimmed);
      if (url.origin !== window.location.origin) {
        return value;
      }
    } catch {
      return value;
    }
  }

  const pathCandidate = extractSameOriginPath(trimmed);
  if (!pathCandidate) return value;

  const normalized = normalizeSourceNoticesPath(pathCandidate);
  const publicPath = ensurePublicPath(normalized);
  return `${FILE_BASE_URL}/${publicPath}`;
};

export const toR2AssetUrl = (value) => {
  if (!isR2MediaPath(value)) return value;
  return r2Url(value);
};

const rewriteElementAttribute = (element, attributeName) => {
  if (
    element.hasAttribute?.(SKIP_REWRITE_ATTR) ||
    element.closest?.(`[${SKIP_REWRITE_ATTR}="true"],[${SKIP_REWRITE_ATTR}]`)
  ) {
    return;
  }

  const current = element.getAttribute(attributeName);
  if (!current) return;

  const rewritten = toR2AssetUrl(current);
  if (rewritten && rewritten !== current) {
    element.setAttribute(attributeName, rewritten);
  }
};

const rewriteElementMediaUrls = (element) => {
  ATTRIBUTES_TO_REWRITE.forEach((attributeName) => {
    rewriteElementAttribute(element, attributeName);
  });
};

export const rewriteDomMediaUrls = (root = document) => {
  if (typeof window === 'undefined' || !root) return;

  if (root instanceof Element) {
    rewriteElementMediaUrls(root);
  }

  if (root.querySelectorAll) {
    root.querySelectorAll('[src],[href],[poster]').forEach((node) => {
      rewriteElementMediaUrls(node);
    });
  }
};

const patchFetch = () => {
  const nativeFetch = window.fetch.bind(window);

  window.fetch = (input, init) => {
    if (typeof input === 'string') {
      return nativeFetch(toR2AssetUrl(input), init);
    }

    if (input instanceof URL) {
      return nativeFetch(toR2AssetUrl(input.toString()), init);
    }

    if (input instanceof Request) {
      const rewritten = toR2AssetUrl(input.url);
      if (rewritten !== input.url) {
        const nextRequest = new Request(rewritten, input);
        return nativeFetch(nextRequest, init);
      }
    }

    return nativeFetch(input, init);
  };
};

const patchWindowOpen = () => {
  const nativeOpen = window.open?.bind(window);
  if (!nativeOpen) return;

  window.open = (url, target, features) => nativeOpen(toR2AssetUrl(url), target, features);
};

const patchAnchorClick = () => {
  const anchorPrototype = window.HTMLAnchorElement?.prototype;
  if (!anchorPrototype || anchorPrototype.__mmcR2PatchedClick) return;

  const nativeClick = anchorPrototype.click;
  anchorPrototype.click = function patchedClick() {
    const href = this.getAttribute('href');
    if (href) {
      const rewritten = toR2AssetUrl(href);
      if (rewritten !== href) {
        this.setAttribute('href', rewritten);
      }
    }

    return nativeClick.call(this);
  };
  anchorPrototype.__mmcR2PatchedClick = true;
};

export const installR2AssetBridge = () => {
  if (typeof window === 'undefined') return;
  if (window.__mmcR2AssetBridgeInstalled) return;

  window.__mmcR2AssetBridgeInstalled = true;

  rewriteDomMediaUrls(document);

  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.type === 'attributes' && mutation.target instanceof Element) {
        rewriteElementMediaUrls(mutation.target);
        return;
      }

      if (mutation.type === 'childList') {
        mutation.addedNodes.forEach((node) => {
          if (node instanceof Element) {
            rewriteDomMediaUrls(node);
          }
        });
      }
    });
  });

  observer.observe(document.documentElement, {
    subtree: true,
    childList: true,
    attributes: true,
    attributeFilter: ATTRIBUTES_TO_REWRITE,
  });

  patchFetch();
  patchWindowOpen();
  patchAnchorClick();
};
