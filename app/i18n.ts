import * as i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'
import en from '~/locales/en'
import { readLocalStorage } from '~/utils/localStorage'

export type Translation = typeof en
export const supportedLngs = en['non-translatables']['supported-languages']

function readLocaleLng(): string {
  const lng = readLocalStorage("i18nextLng", "en")
  return lng
}

/** An escape hatch for static functions.  
ONLY use this function inside non-component or non-hook functions */
export function getLocalString(key: keyof typeof en) {
  let locale: Partial<typeof en> = en
  switch (readLocaleLng()) {
    case "en": locale = en; break;
    // add new cases for new languages
    default: break;
  }
  const val = locale[key]
  return val ? val : ""
}

// https://www.i18next.com/overview/configuration-options
i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    debug: false,
    fallbackLng: 'en',
    defaultNS: 'translation',
    resources: {
      en: { translation: en },
      // add new languages
    },
    interpolation: {
      escapeValue: false,
    }
  })

export default i18n
