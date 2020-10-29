import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import ar from "./locales/ar.json";
import en from "./locales/en.json";
import tr from "./locales/tr.json";

// check react-i18next documentation to understand this file.
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

i18n;
global
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    debug: true,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
