import i18next from "i18next";

import engTranslation from "./locales/en/translation.json";
import deTranslation from "./locales/de/translation.json";
import uaTranslation from "./locales/ua/translation.json";
import { store } from "./store/store";

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

  updateI18nTexts();

  i18next.on("languageChanged", async (lng) => {
    await store.setUserLanguageRequest(lng);
    updateI18nTexts();
  });
};

const updateI18nTexts = () => {
  const elements = document.querySelectorAll<HTMLElement>("[data-i18n]");
  const inputFriendsPage = document.getElementById(
    "searchInputFriendsPage"
  ) as HTMLInputElement;
  const inputChatsPage = document.getElementById(
    "searchInputChatsPage"
  ) as HTMLInputElement;

  if (inputFriendsPage) {
    inputFriendsPage.placeholder = i18next.t("friends.findFriend");
  }

  if (inputChatsPage) {
    inputChatsPage.placeholder = i18next.t("chat.searchChats");
  }
  elements.forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (!key) return;

    const translation = i18next.t(key);

    if (el instanceof HTMLInputElement || el instanceof HTMLTextAreaElement) {
      el.placeholder = translation;
    } else {
      el.textContent = translation;
    }
  });
};
