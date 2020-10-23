import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

import ar from "./locales/ar.json";
import en from "./locales/en.json";
import tr from "./locales/tr.json";

// CHECK react-i18n DOCUMENTATION TO UNDERSTAND THIS FILE.

const resources = {
  en: {
    translation: en,
  },
  ar: {
    translation: ar,
  },
  tr: {
    translation: tr,
  },
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    debug: true,

    interpolation: {
      escapeValue: false,
    },
    resources,
  });

export default i18n;
