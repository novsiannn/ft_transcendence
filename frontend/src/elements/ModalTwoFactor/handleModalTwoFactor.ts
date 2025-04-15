import { activateWarning, hideWarning } from "../../Layout";
import { IQRCodeEnableResponse } from "../../shared";
import { store } from "../../store/store";

export const handleModalTwoFactor = async () => {
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

  codeForTwoFactor?.addEventListener('click', () => hideWarning());

  modalBtn?.addEventListener("click", async () => {
    hideWarning();
    const response = await store.verifyTwoFactor(
      codeForTwoFactor?.value ? codeForTwoFactor.value : ""
    );
    if (response.status === 200) {
      modalContent?.classList.remove("translate-y-0", "opacity-100");
      modalContent?.classList.add("-translate-y-full", "opacity-0");
      setTimeout(() => {
        modalWindow?.classList.add("hidden");
      }, 400);
    } else if (response.status === 400){
      activateWarning(response.data.message);
    }
  });

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
};
