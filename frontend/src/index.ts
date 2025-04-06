import runSpa from './spaApp/index'
import { store } from './store/store';

window.addEventListener("DOMContentLoaded", () => {
    store.checkAuth();
    runSpa();
});
