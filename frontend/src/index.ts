import runSpa from './spaApp/index'

runSpa();

// function createH1(text: string) {
//     const h1 = document.createElement("h1");
//     h1.textContent = text;
//     return h1;
// }

// const navigateTo = (url: string) => {
//     history.pushState(null, "", url);
//     router();
// };

// const routes: Record<string, () => HTMLElement> = {
//     "/": () => createH1("Home Page"),
//     "/game": () => createH1("Game Page"),
// };

// const router = () => {
//     const app = document.getElementById("app");
//     if (!app) return;

//     app.innerHTML = "";
//     const route = routes[location.pathname as keyof typeof routes] || (() => createH1("404 - Page Not Found"));
//     app.appendChild(route());
// };

// window.addEventListener("popstate", router); // Назад/вперед в браузере

// document.addEventListener("DOMContentLoaded", () => {
//     const app = document.createElement("div");
//     app.id = "app";
//     document.body.appendChild(app);

//     router(); // Первичная загрузка

//     document.body.addEventListener("click", (e) => {
//         const target = e.target as HTMLElement;
//         if (target.tagName === "A") {
//             e.preventDefault();
//             navigateTo(target.getAttribute("href") || "/");
//         }
//     });
// });
