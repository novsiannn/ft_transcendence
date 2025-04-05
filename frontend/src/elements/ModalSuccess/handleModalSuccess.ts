export const handleModalSuccess = (text?: string) => {
  const modalWindow = document.querySelector("#modalWindow");
  const modalContent = modalWindow?.querySelector("div");
  const successMessage = document.querySelector("#successMessage");

  if (text) successMessage!.textContent = text;

  modalWindow?.classList.remove("hidden");
  setTimeout(() => {
    modalContent?.classList.remove("-translate-y-full", "opacity-0");
    modalContent?.classList.add("translate-y-0", "opacity-100");
  }, 50);

  setTimeout(() => {
    closeModal();
  }, 1500);

  const closeModal = () => {
    modalContent?.classList.remove("translate-y-0", "opacity-100");
    modalContent?.classList.add("-translate-y-full", "opacity-0");
    setTimeout(() => {
      modalWindow?.classList.add("hidden");
    }, 400);
  };
};
