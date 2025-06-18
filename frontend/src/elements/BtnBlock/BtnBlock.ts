import i18next from "i18next";

export const BtnBlock = () => {
  return `<button id="btnBlockUser" data-i18n='buttons.block' type="button" class=" cursor-pointer hidden px-4 h-8 text-red-500 border border-red-500 bg-white font-medium rounded-full text-sm text-center ">${i18next.t("buttons.block")}</button>`;
};