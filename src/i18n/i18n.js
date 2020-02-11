import i18n from 'i18next';
import detector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import en from './languages/en.json';
import de from './languages/de.json';

i18n
  .use(detector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    lng: 'en',
    fallbackLng: 'en', // use en if detected lng is not available
    resources: {
      en: {
        translation: en
      },
      de: {
        translation: de
      }
    },
    keySeparator: '.',
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;
