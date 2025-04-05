import { navigateTo } from "../routing";
import { naviRoutes } from "./navigationRoutes";
import { dropMenuRoutes } from "./navigationRoutes";
import { userChangeLoginStatus } from "../routing/redirect";

export function navigationHandle() {
  const naviBtns = document.querySelectorAll("#naviBtn");
  const profileBtn = document.querySelector("#profileIcon");
  const signInBtn = document.querySelector("#signInBtn");
  const signUpBtn = document.querySelector("#registBtn");
  const dropdownMenu = document.querySelector("#dropdownMenu");
  const naviDropMenuBtns = document.querySelectorAll("#dropdownMenu a");
  const imgLogo = document.getElementById("imgLogoNavi");

  imgLogo!.addEventListener("click", () => {
    navigateTo("/");
  });

  signInBtn?.addEventListener("click", () => {
    console.log('here');
    navigateTo("/signIn");
  });
  
  signUpBtn?.addEventListener("click", () => {
    navigateTo("/signUp");
  });

  naviBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (btn.innerHTML.trim() in naviRoutes) {
        navigateTo(naviRoutes[btn.innerHTML.trim()]);
      }
    });
  });

  naviDropMenuBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (btn.innerHTML.trim() in dropMenuRoutes) {
        navigateTo(dropMenuRoutes[btn.innerHTML.trim()]);
        // shit-code, when database will be, this code-area has to be improved
        if (btn.innerHTML.trim() === "Logout") {
          userChangeLoginStatus(false);
        }
      }
    });
  });

  profileBtn?.addEventListener("click", () => {
    dropdownMenu!.classList.toggle("hidden");
  });

  document.addEventListener("click", (e) => {
    if (e.target !== dropdownMenu && e.target !== profileBtn)
      dropdownMenu!.classList.add("hidden");
  });

  document.addEventListener("keydown", (e) => {
    if (e.keyCode == 27) dropdownMenu!.classList.add("hidden");
  });
}
