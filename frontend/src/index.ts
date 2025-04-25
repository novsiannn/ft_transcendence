import runSPA from './spaApp/index'
import { store } from './store/store';
import './output.css';

window.addEventListener("DOMContentLoaded", async () => {
    await store.checkAuth();
    runSPA();
});
