import i18next from "i18next";

export const BtnUserBlockedYou = () => {
  return `<button id="btnUserBlockedYou" data-i18n='buttons.userBlockedYou' type="button" class="cursor-not-allowed
 hidden  px-4 h-8 text-red-500 border border-red-500 font-medium rounded-full text-sm text-center">${i18next.t("buttons.userBlocked")}</button>`;
};
