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
    supportedLngs: ['en', 'hi'],
    nonExplicitSupportedLngs: true,
    load: 'languageOnly',
    cleanCode: true,
    debug: false,
    returnNull: false,
    returnEmptyString: false,

    interpolation: {
      escapeValue: false,
    },

    returnObjects: true,

    detection: {
      order: ['localStorage', 'sessionStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage', 'sessionStorage'],
    },

    ns: ['translation'],
    defaultNS: 'translation',
  });

export default i18n;
