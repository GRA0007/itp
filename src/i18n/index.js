import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import Backend from 'i18next-http-backend'

import languages from './languages'

i18n
  .use(LanguageDetector)
  .use(Backend)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en_US',
    supportedLngs: languages.map(l => l.code),
    ns: 'common',
    defaultNS: 'common',
    debug: process.env.NODE_ENV !== 'production',
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: '/i18n/{{lng}}/{{ns}}.json',
    },
  }).then(() => document.documentElement.setAttribute('lang', i18n.language));

export default i18n