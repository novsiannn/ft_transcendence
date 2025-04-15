
import { activateWarning, hideWarning } from "../../pages/login/loginPage";
import { IQRCodeEnableResponse } from "../../shared";
import { store } from "../../store/store";
import { handleModalSuccess } from "../ModalSuccess";

export const handleModalTwoFactor = async (switchButtonActivity?: (isEnable: boolean) => void) => {
  const modalWindow = document.querySelector("#modalWindowTwoFactor");
  const modalContent = modalWindow?.querySelector("div");
  const qrCodeImg =
    modalWindow?.querySelector<HTMLImageElement>("#modalQrCode");
  const secretPhrase = modalWindow?.querySelector("#secretPhrase");
  const codeForTwoFactor = modalWindow?.querySelector<HTMLInputElement>("#codeForTwoFactor");
  const modalBtn = modalWindow?.querySelector("#modalTwoFactorActivateBtn");
  const response: IQRCodeEnableResponse | undefined =
    await store.enableTwoFactor();
  const code = response?.secret;

  qrCodeImg!.src = response?.qrCodeUrl ? response?.qrCodeUrl : "undefined";
  code
    ? (secretPhrase!.textContent = code)
    : (secretPhrase!.textContent = "Loading error...");

  modalWindow?.classList.remove("hidden");
  setTimeout(() => {
    modalContent?.classList.remove("-translate-y-full", "opacity-0");
    modalContent?.classList.add("translate-y-0", "opacity-100");
  }, 50);

  codeForTwoFactor?.addEventListener('click', () => hideWarning('#warningMessage'));

  modalBtn?.addEventListener("click", async () => {
    hideWarning('#warningMessage');
    const response = await store.verifyTwoFactor(
      codeForTwoFactor?.value ? codeForTwoFactor.value : ""
    );
    if (response.status === 200) {
      modalContent?.classList.remove("translate-y-0", "opacity-100");
      modalContent?.classList.add("-translate-y-full", "opacity-0");
      setTimeout(() => {
        modalWindow?.classList.add("hidden");
      }, 400);
      handleModalSuccess('2FA added successfull');
      if(switchButtonActivity)
        switchButtonActivity(true);
    } else if (response.status === 400){
      activateWarning('#warningMessage', response.data.message);
    }
  });

  modalWindow?.addEventListener("click", (e) => {
    if (e.target === modalWindow) {
      hideWarning('#warningMessage');
      modalContent?.classList.remove("translate-y-0", "opacity-100");
      modalContent?.classList.add("-translate-y-full", "opacity-0");

      setTimeout(() => {
        modalWindow?.classList.add("hidden");
      }, 400);
    }
  });
};
