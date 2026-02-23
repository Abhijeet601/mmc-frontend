import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './locales/en.json';
import hi from './locales/hi.json';

const resources = {
  en: {
    translation: en,
  },
  hi: {
    translation: hi,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    debug: false,

    interpolation: {
      escapeValue: false,
    },

    returnObjects: true,

    detection: {
      order: ['localStorage', 'sessionStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage', 'sessionStorage'],
    },

    missingKeyHandler: (lngs, ns, key, fallbackValue) => {
      console.warn(`Missing translation key: "${key}" for language(s): ${lngs.join(', ')}`);
      // Try to get the English version as fallback
      if (lngs[0] !== 'en') {
        try {
          const enValue = i18n.getFixedT('en')(key);
          if (enValue && enValue !== key) {
            return enValue;
          }
        } catch (e) {
          // English fallback also doesn't have this key
        }
      }
      return fallbackValue || key;
    },

    ns: ['translation'],
    defaultNS: 'translation',
  });

export default i18n;
