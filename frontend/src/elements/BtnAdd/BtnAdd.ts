import i18next from "i18next";

export const BtnAdd = () => {
  return `<button id="btnAddFriend" data-i18n='buttons.add' type="button" class="cursor-pointer p-1 hidden  px-4 h-8 text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm  text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">${i18next.t("buttons.add")}</button>`;
};
