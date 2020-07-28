import { initReactI18next } from 'react-i18next';

import i18n from 'i18next';
import detector from 'i18next-browser-languagedetector';
import backend from 'i18next-xhr-backend';
import moment from 'moment';

i18n
  .use(detector)
  .use(backend)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    fallbackLng: 'en-US',
    load: 'currentOnly',
    whitelist: ['en-US', 'zh-TW'],
    interpolation: {
      escapeValue: false, // react already safes from xss
      format: (value, format) => {
        if (value instanceof moment) {
          return value.format(format);
        }
        return value;
      },
    },
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
    react: {
      useSuspense: false,
    },
    initImmediate: false,
  });

export default i18n;
