import { activateWarning, hideWarning } from "../../Layout";
import { store } from "../../store/store";

export const handleModalInput = async(endpoint: string, modalName: string, userID?: string) => {
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

  modalInput?.addEventListener("click", () => hideWarning());
  modalHeader!.textContent = modalName;

  modalWindow?.addEventListener("click", (e) => {
    if (e.target === modalWindow) {
      hideWarning();
      modalContent?.classList.remove("translate-y-0", "opacity-100");
      modalContent?.classList.add("-translate-y-full", "opacity-0");

      setTimeout(() => {
        modalWindow?.classList.add("hidden");
      }, 400);
    }
  });

  return await modalBtn?.addEventListener("click", async () => {
    hideWarning();
    console.log(endpoint);
    
    if (endpoint === "2fa/disable") {
      let response = await store.disableTwoFactor(
        modalInput?.value ? modalInput.value : ""
      );
      return response;
    } else if (endpoint === '2fa/login') {
      console.log('here');
      
      let response = await store.loginWithTwoFactor(
        modalInput?.value ? modalInput.value : "",
        userID ? userID : ""
      );
      console.log(response);
      
      return response;
    }
  });
};
