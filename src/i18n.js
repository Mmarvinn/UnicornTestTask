import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationEN from './locales/translationEN.json';
import translationDE from './locales/translationDE.json';
import translationTR from './locales/translationTR.json';
import translationES from './locales/translationES.json';
import translationUA from './locales/translationUA.json';

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    fallbackLng: 'en',
    resources: {
      en: {
        translation: translationEN,
      },
      de: {
        translation: translationDE,
      },
      tr: {
        translation: translationTR,
      },
      es: {
        translation: translationES,
      },
      ua: {
        translation: translationUA,
      },
    },
  });
