export const handleModalTwoFactor = () => {
  const modalWindow = document.querySelector("#modalWindowTwoFactor");
  const modalContent = modalWindow?.querySelector("div");
  const qrCodeImg = modalWindow?.querySelector<HTMLImageElement>("#modalQrCode");
  const secretPhrase = modalWindow?.querySelector("#secretPhrase");
  const codeForTwoFactor = modalWindow?.querySelector("#codeForTwoFactor");
  const modalBtn = modalWindow?.querySelector("#modalTwoFactorActivateBtn");
  
  console.log(modalWindow);

  const code = "77732821943"

  qrCodeImg!.src = '../../img/qrCode.png';
  secretPhrase!.textContent = code;
  
  modalWindow?.classList.remove("hidden");
  setTimeout(() => {
    modalContent?.classList.remove("-translate-y-full", "opacity-0");
    modalContent?.classList.add("translate-y-0", "opacity-100");
  }, 50);

  modalBtn?.addEventListener("click", () => {
    // Here make a request to backend and then make next handling
    modalContent?.classList.remove("translate-y-0", "opacity-100");
    modalContent?.classList.add("-translate-y-full", "opacity-0");
    setTimeout(() => {
      modalWindow?.classList.add("hidden");
    }, 400);
  });

  modalWindow?.addEventListener("click", (e) => {
    if (e.target === modalWindow) {
      modalContent?.classList.remove("translate-y-0", "opacity-100");
      modalContent?.classList.add("-translate-y-full", "opacity-0");

      setTimeout(() => {
        modalWindow?.classList.add("hidden");
      }, 400);
    }
  });
};
