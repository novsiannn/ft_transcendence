import i18next from "i18next";

import engTranslation from "./locales/en/translation.json";
import deTranslation from "./locales/de/translation.json";
import uaTranslation from "./locales/ua/translation.json";
import { store } from "./store/store";
import { updateContent } from "./elements/LanguageSelector";

export const initializeI18n = async () => {
  const savedLanguage = store.getUserLanguage();

  await i18next.init({
    lng: savedLanguage,
    fallbackLng: "eng",
    resources: {
      eng: { translation: engTranslation },
      de: { translation: deTranslation },
      ua: { translation: uaTranslation },
    },
  });


  i18next.on("languageChanged", async (lng) => {
      await store.setUserLanguageRequest(lng);
  });
};