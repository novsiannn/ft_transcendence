import runSPA from "./spaApp/index";
import { store } from "./store/store";
import "./output.css";
import { initializeI18n } from "./i18n";

window.addEventListener("DOMContentLoaded",  async() => {
  await store.checkAuth();
  await initializeI18n();
  runSPA(); 
});

