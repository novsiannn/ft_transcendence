import i18next from "i18next";

export const BtnUnblock = () => {
  return `<button id="btnUnblockUser" type="button" class=" cursor-pointer hidden px-4 h-8 text-green-600 bg-whit border border-green-600 font-medium rounded-full text-sm text-center ">${i18next.t("buttons.unBlock")}</button>`;
};