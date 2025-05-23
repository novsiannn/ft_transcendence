import { activateWarning, hideWarning } from "../../pages/login/loginPage";
import { store } from "../../store/store";
import { getLoader } from "../Loader";
import { handleModalSuccess } from "../ModalSuccess";

export const handleModalInput = (
  endpoint: string,
  modalName: string,
  userID?: string,
  switchButtonActivity?: (isEnable: boolean) => void,
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

  modalInput?.addEventListener("click", () => hideWarning("#warningMessageModalInput"));
  modalHeader!.textContent = modalName;

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

  modalBtn?.addEventListener("click", async () => {
    hideWarning("#warningMessageModalInput");
    modalBtn.innerHTML = getLoader();
    if (endpoint === "2fa/disable") {
      let response = await store.disableTwoFactor(
        modalInput?.value ? modalInput.value : ""
      );
      if (response?.status === 200) {
        handleModalSuccess("2FA is successfull deleted");
        modalBtn.innerHTML = 'Send';
        hideWarning("#warningMessageModalInput");
        modalContent?.classList.remove("translate-y-0", "opacity-100");
        modalContent?.classList.add("-translate-y-full", "opacity-0");
        if(switchButtonActivity)
          switchButtonActivity(false);
        setTimeout(() => {
          modalWindow?.classList.add("hidden");
        }, 400);
      } else { 
          modalBtn.innerHTML = 'Send';
          activateWarning("#warningMessageModalInput", 'Incorrect code');
      }
      return response;
    } else if (endpoint === "2fa/login") {
      let response = await store.loginWithTwoFactor(
        modalInput?.value ? modalInput.value : "",
        userID ? userID : ""
      );
      console.log(response);
      
      if(response.status === 400 || response.status === 401){
        activateWarning("#warningMessageModalInput", response.message);
        modalBtn.innerHTML = 'Send';
      }
      
      return response;
    }
    return;
  });
};
