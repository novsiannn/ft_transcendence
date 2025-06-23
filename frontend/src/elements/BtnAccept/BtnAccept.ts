import i18next from "i18next";

export const BtnAccept = () => {
  return `<button id="btnAcceptFriend" data-i18n='buttons.accept' type="button" class=" cursor-pointer hidden  px-4 h-8 text-white bg-sky-500 hover:bg-sky-700 focus:outline-none focus:ring-4 focus:ring-sky-300 font-medium rounded-full text-sm text-center dark:bg-blue-200 dark:hover:bg-blue-700 dark:focus:ring-blue-800">${i18next.t("buttons.accept")}</button>`;
};
