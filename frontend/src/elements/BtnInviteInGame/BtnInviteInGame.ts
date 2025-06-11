import i18next from "i18next"

export const BtnInviteInGame = () => {
	return `<button id="btnInviteUserInGame" data-i18n='buttons.inviteInGame' class=" cursor-pointer p-1 px-4 h-8 text-sm rounded-full text-center bg-blue-500 transition hover:bg-blue-800 text-white">${i18next.t("buttons.inviteInGame")}</button>`
}