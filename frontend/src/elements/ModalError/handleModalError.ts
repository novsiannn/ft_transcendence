export const handleModalError = (text?: string) => {
  const modalWindow = document.querySelector("#modalWindow");
  const modalContent = modalWindow?.querySelector("div");
  const closeModal = document.querySelector("#closeModal");
  const modalErrorText = document.querySelector("#modalErrorText");

  if (text) modalErrorText!.textContent = text;

  modalWindow?.classList.remove("hidden");
  setTimeout(() => {
    modalContent?.classList.remove("-translate-y-full", "opacity-0");
    modalContent?.classList.add("translate-y-0", "opacity-100");
  }, 50);

  closeModal?.addEventListener("click", () => {
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
