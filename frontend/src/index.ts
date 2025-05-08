import runSPA from "./spaApp/index";
import { store } from "./store/store";
import "./output.css";
import { initializeI18n } from "./i18n";
import { initializeSocket } from "./websockets/client";

window.addEventListener("DOMContentLoaded", async () => {
  await store.checkAuth();
  if (localStorage.getItem("token")) await initializeSocket();
  await initializeI18n();
  runSPA();
});
