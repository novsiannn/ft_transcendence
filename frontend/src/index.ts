import runSPA from "./spaApp/index";
import { store } from "./store/store";
import "./output.css";
import { initializeI18n } from "./i18n";

window.addEventListener("DOMContentLoaded",  () => {
  initializeI18n().then(async () => {
    await store.checkAuth();
    runSPA();
  });
});

