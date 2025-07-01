import { activateWarning, hideWarning } from "../../pages/login/loginPage";
import { store } from "../../store/store";
import { updateContent } from "../LanguageSelector";
import { getLoader } from "../Loader";
import { handleModalSuccess } from "../ModalSuccess";

export const handleModalInput = (
  endpoint: string,
  modalName: string,
  userID?: string,
  switchButtonActivity?: (isEnable: boolean) => void
) => {
  const modalWindow = document.querySelector("#modalWindowInput");
  const modalContent = modalWindow?.querySelector("div");
  const modalInput =
    modalWindow?.querySelector<HTMLInputElement>("#modalInput");
  const modalBtn = modalWindow?.querySelector("#modalInputBtn");
  const modalHeader = modalWindow?.querySelector("#modalInputHeader");

  modalWindow?.classList.remove("hidden");
  setTimeout(() => {
    modalContent?.classList.remove("-translate-y-full", "opacity-0");
    modalContent?.classList.add("translate-y-0", "opacity-100");
  }, 50);

  modalInput?.addEventListener("click", () =>
    hideWarning("#warningMessageModalInput")
  );

  modalHeader!.setAttribute("data-i18n", modalName);

  modalWindow?.addEventListener("click", (e) => {
    if (e.target === modalWindow) {
      hideWarning("#warningMessageModalInput");
      modalContent?.classList.remove("translate-y-0", "opacity-100");
      modalContent?.classList.add("-translate-y-full", "opacity-0");

      setTimeout(() => {
        modalWindow?.classList.add("hidden");
      }, 400);
    }
  });

  updateContent();

  modalBtn?.addEventListener("click", async () => {
    hideWarning("#warningMessageModalInput");
    if (endpoint === "2fa/disable") {
      let response = await store.disableTwoFactor(
        modalInput?.value ? modalInput.value : ""
      );
      if (response?.status === 200) {
        handleModalSuccess("modalWindowsMessages.twoFactorDeletedSuccess");
        hideWarning("#warningMessageModalInput");
        modalContent?.classList.remove("translate-y-0", "opacity-100");
        modalContent?.classList.add("-translate-y-full", "opacity-0");
        if (switchButtonActivity) switchButtonActivity(false);
        setTimeout(() => {
          modalWindow?.classList.add("hidden");
        }, 400);
      } else {
        activateWarning("#warningMessageModalInput", 'settings.IncorrectCode');
      }
      return response;
    } else if (endpoint === "2fa/login") {
      let response = await store.loginWithTwoFactor(
        modalInput?.value ? modalInput.value : "",
        userID ? userID : ""
      );
      console.log(response);

      if (response.status === 400 || response.status === 401) {
        activateWarning("#warningMessageModalInput", 'settings.IncorrectCode');
      }

      return response;
    } else if (endpoint === "user/profile") {
      let response = await store.deleteAccount(modalInput!.value);

      if (response.status === 204) {
        store.logout();
      }

      if (response.status === 400 || response.status === 401) {
        console.log("here");
        activateWarning("#warningMessageModalInput", 'settings.IncorrectCode');
      }

      return response;
    }
    return;
  });
};
