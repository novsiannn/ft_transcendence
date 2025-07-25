import { updateContent } from "../LanguageSelector";

export const handleModalSuccess = (key?: string) => {
  const modalWindow = document.querySelector("#modalWindowSucess");
  const modalContent = modalWindow?.querySelector("div");
  const successMessage = document.querySelector("#successMessage");

  if (key) {
    successMessage?.setAttribute("data-i18n", key);
  }

  modalWindow?.classList.remove("hidden");
  setTimeout(() => {
    modalContent?.classList.remove("-translate-y-full", "opacity-0");
    modalContent?.classList.add("translate-y-0", "opacity-100");
    updateContent();
  }, 50);

  setTimeout(() => {
    closeModal();
  }, 2400);

  const closeModal = () => {
    modalContent?.classList.remove("translate-y-0", "opacity-100");
    modalContent?.classList.add("-translate-y-full", "opacity-0");
    setTimeout(() => {
      modalWindow?.classList.add("hidden");
    }, 400);
  };
};
