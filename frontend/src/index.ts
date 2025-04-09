import runSPA from './spaApp/index'
import { store } from './store/store';

window.addEventListener("DOMContentLoaded", async () => {
    await store.checkAuth();
    runSPA();
});
