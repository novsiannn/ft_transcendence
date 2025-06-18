import i18next from "i18next";

export const BtnDelete = () => {
  return `<button id="btnDeleteFriend" data-i18n='buttons.delete' type="button" class=" cursor-pointer hidden  px-4 h-8 text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm text-center  dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">${i18next.t("buttons.delete")}</button>`;
};
