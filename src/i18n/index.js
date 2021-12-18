import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import en from './en'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: { en },
    fallbackLng: 'en',
    supportedLngs: ['en', 'toki'],
    ns: 'common',
    defaultNS: 'common',
    debug: process.env.NODE_ENV !== 'production',
    interpolation: {
      escapeValue: false,
    },
  }).then(() => document.documentElement.setAttribute('lang', i18n.language));

export default i18n