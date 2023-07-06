import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslation from "./en.json";
import frTranslation from "./fr.json";
import esTranslation from "./es.json";
import chTranslation from "./ch.json";

i18n.use(initReactI18next).init({
  lng: "en",
  fallbackLng: "en",
  resources: {
    en: {
      translation: enTranslation,
    },
    fr: {
      translation: frTranslation,
    },
    es: {
      translation: esTranslation,
    },
    ch: {
      translation: chTranslation,
    },
  },
  interpolation: {
    escapeValue: false,
  },
});
export default i18n;
