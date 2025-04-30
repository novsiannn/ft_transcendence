import i18next from "i18next";

export const updateContent = () => {
  const elements = document.querySelectorAll<HTMLElement>("[data-i18n]");

  elements.forEach((element) => {
    const key = element.getAttribute("data-i18n");
    if (key) {
      element.textContent = i18next.t(key);
    }
  });
};

export const getLanguageSelector = () => {
  const select = document.createElement("select");
  select.className =
    "p-2 fixed mb-4 bg-white bottom-px left-1/2 transform -translate-x-1/2 z-50 border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600";
  select.innerHTML = `<option value="eng">EN</option>
  		<option value="de">DE</option>
  		<option value="ua">UA</option>`;

  const lang = i18next.language;
  select.value = ["eng", "de", "ua"].includes(lang) ? lang : "eng";

  select.addEventListener("change", (e) => {
    const target = e.target as HTMLSelectElement;

    i18next.changeLanguage(target.value).then(() => {
      updateContent();
    });
  });

  return select;
};
