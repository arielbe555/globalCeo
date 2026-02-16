import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import es from './locales/es.json';
import en from './locales/en.json';
import pt from './locales/pt.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      es: { translation: es },
      en: { translation: en },
      pt: { translation: pt },
    },
    fallbackLng: 'es',
    supportedLngs: ['es', 'en', 'pt'],
    interpolation: {
      escapeValue: false, // React already escapes
    },
    detection: {
      order: ['querystring', 'localStorage', 'navigator', 'htmlTag'],
      lookupQuerystring: 'lng',
      caches: ['localStorage'],
    },
    react: {
      useSuspense: false, // Avoid blank page if no Suspense boundary
    },
  });

export default i18n;
