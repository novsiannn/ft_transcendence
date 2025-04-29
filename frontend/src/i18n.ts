import i18next from "i18next";

import enTranslation from './locales/en/translation.json';
import deTranslation from './locales/de/translation.json';
import uaTranslation from './locales/ua/translation.json';

export const initializeI18n = async () => {
  const savedLanguage = getCookie('language') || 'en';

  await i18next.init({
    lng: savedLanguage, 
    fallbackLng: "en",
    resources: {
      en: { translation: enTranslation },
      de: { translation: deTranslation },
      ua: { translation: uaTranslation }
    }
  });

  i18next.on('languageChanged', (lng) => {
    setCookie('language', lng, 30);
  });
};

function getCookie(name: string): string | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  return match ? decodeURIComponent(match[2]) : null;
}

function setCookie(name: string, value: string, days: number) {
  if (typeof document === "undefined") return;
  const expires = new Date();
  expires.setDate(expires.getDate() + days);
  document.cookie = `${name}=${encodeURIComponent(value)};expires=${expires.toUTCString()};path=/`;
}