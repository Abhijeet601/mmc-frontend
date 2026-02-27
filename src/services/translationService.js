class TranslationService {
  constructor() {
    this.cache = new Map();
    this.inFlight = new Map();
    this.cacheStorageKey = 'mmc_translation_cache_v2';
    this.maxCacheEntries = 1500;
    this.saveScheduled = false;
    this.isBrowser = typeof window !== 'undefined';

    this.loadCache();
  }

  normalizeLanguage(lang) {
    return String(lang || 'en').toLowerCase().split('-')[0];
  }

  normalizeText(text) {
    return String(text || '').replace(/\s+/g, ' ').trim();
  }

  hasHindiChars(text) {
    return /[\u0900-\u097F]/.test(text);
  }

  hasLatinChars(text) {
    return /[A-Za-z]/.test(text);
  }

  shouldTranslate(text) {
    const normalized = this.normalizeText(text);
    if (!normalized) return false;
    if (normalized.length < 2) return false;
    if (!this.hasLatinChars(normalized)) return false;
    if (this.hasHindiChars(normalized)) return false;
    if (/^[\d\s\W_]+$/.test(normalized)) return false;
    return true;
  }

  getCacheKey(text, fromLang, toLang) {
    return `${fromLang}:${toLang}:${text}`;
  }

  loadCache() {
    if (!this.isBrowser) return;

    try {
      const raw = window.localStorage.getItem(this.cacheStorageKey);
      if (!raw) return;

      const parsed = JSON.parse(raw);
      if (!Array.isArray(parsed)) return;

      parsed.forEach(([key, value]) => {
        if (typeof key === 'string' && typeof value === 'string') {
          this.cache.set(key, value);
        }
      });
    } catch {
      // Cache read failures are non-fatal.
    }
  }

  scheduleCacheSave() {
    if (!this.isBrowser || this.saveScheduled) return;

    this.saveScheduled = true;
    window.setTimeout(() => {
      this.saveScheduled = false;
      this.saveCache();
    }, 300);
  }

  saveCache() {
    if (!this.isBrowser) return;

    try {
      const entries = Array.from(this.cache.entries()).slice(-this.maxCacheEntries);
      window.localStorage.setItem(this.cacheStorageKey, JSON.stringify(entries));
    } catch {
      // Cache write failures are non-fatal.
    }
  }

  parseGoogleResponse(payload) {
    if (!Array.isArray(payload) || !Array.isArray(payload[0])) {
      return null;
    }

    const segments = payload[0]
      .map((part) => (Array.isArray(part) ? part[0] : ''))
      .filter(Boolean);

    return segments.join('');
  }

  splitByLength(text, maxLength = 1200) {
    if (text.length <= maxLength) return [text];

    const chunks = [];
    let current = '';
    const sentences = text.split(/(?<=[.!?।])\s+/);

    sentences.forEach((sentence) => {
      if (!sentence) return;

      if ((current + (current ? ' ' : '') + sentence).length <= maxLength) {
        current = `${current}${current ? ' ' : ''}${sentence}`;
        return;
      }

      if (current) {
        chunks.push(current);
      }

      if (sentence.length <= maxLength) {
        current = sentence;
        return;
      }

      let start = 0;
      while (start < sentence.length) {
        chunks.push(sentence.slice(start, start + maxLength));
        start += maxLength;
      }
      current = '';
    });

    if (current) {
      chunks.push(current);
    }

    return chunks.length ? chunks : [text];
  }

  async requestGoogleTranslate(text, fromLang, toLang) {
    const url =
      'https://translate.googleapis.com/translate_a/single' +
      `?client=gtx&sl=${encodeURIComponent(fromLang)}` +
      `&tl=${encodeURIComponent(toLang)}&dt=t&q=${encodeURIComponent(text)}`;

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Translation request failed: ${response.status}`);
    }

    const payload = await response.json();
    const translated = this.parseGoogleResponse(payload);
    return translated || text;
  }

  async translateText(text, fromLang = 'en', toLang = 'hi') {
    if (!text || typeof text !== 'string') return text;

    const sourceLang = this.normalizeLanguage(fromLang);
    const targetLang = this.normalizeLanguage(toLang);
    if (sourceLang === targetLang) return text;

    const original = text;
    const normalized = this.normalizeText(text);
    if (!this.shouldTranslate(normalized)) return original;

    const cacheKey = this.getCacheKey(normalized, sourceLang, targetLang);
    if (this.cache.has(cacheKey)) {
      return this.cache.get(cacheKey);
    }

    if (this.inFlight.has(cacheKey)) {
      return this.inFlight.get(cacheKey);
    }

    const translationPromise = (async () => {
      try {
        const chunks = this.splitByLength(normalized);
        const translatedChunks = [];

        for (const chunk of chunks) {
          const translatedChunk = await this.requestGoogleTranslate(chunk, sourceLang, targetLang);
          translatedChunks.push(translatedChunk);
        }

        const translatedText = translatedChunks.join(' ').replace(/\s+/g, ' ').trim();
        const finalText = translatedText || original;

        this.cache.set(cacheKey, finalText);
        if (this.cache.size > this.maxCacheEntries) {
          const firstKey = this.cache.keys().next().value;
          if (firstKey) this.cache.delete(firstKey);
        }
        this.scheduleCacheSave();
        return finalText;
      } catch {
        return original;
      } finally {
        this.inFlight.delete(cacheKey);
      }
    })();

    this.inFlight.set(cacheKey, translationPromise);
    return translationPromise;
  }

  async translateObject(obj, fromLang = 'en', toLang = 'hi') {
    if (!obj || typeof obj !== 'object') return obj;

    const translatedObj = Array.isArray(obj) ? [] : {};
    for (const [key, value] of Object.entries(obj)) {
      if (typeof value === 'string') {
        translatedObj[key] = await this.translateText(value, fromLang, toLang);
      } else if (value && typeof value === 'object') {
        translatedObj[key] = await this.translateObject(value, fromLang, toLang);
      } else {
        translatedObj[key] = value;
      }
    }

    return translatedObj;
  }

  clearCache() {
    this.cache.clear();
    this.inFlight.clear();

    if (!this.isBrowser) return;
    try {
      window.localStorage.removeItem(this.cacheStorageKey);
    } catch {
      // Cache clear failures are non-fatal.
    }
  }
}

const translationService = new TranslationService();

export default translationService;
