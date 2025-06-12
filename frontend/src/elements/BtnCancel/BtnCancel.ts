import i18next from "i18next";

export const BtnCancel = () => {
  return `<button 
  			id="btnCancelFriendRequest"
			data-i18n='buttons.cancel'
  			type="button"
  			class="cursor-pointer hidden text-center h-8 px-4 text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
			>
  			${i18next.t("buttons.cancel")}
			</button>`;
};
