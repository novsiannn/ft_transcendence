import { getLoader } from "./../Loader/Loader";

import { navigateTo } from "../../routing";
import { store } from "../../store/store";
import { dropMenuRoutes } from "./navigationRoutes";

export function navigationHandle() {
  const profileBtn = document.querySelector("#profileIcon");
  const signInBtn = document.querySelector("#signInBtn");
  const signUpBtn = document.querySelector("#registBtn");
  const dropdownMenu = document.querySelector("#dropdownMenu");
  const naviDropMenuBtns = document.querySelectorAll("#dropdownMenu a");
  const imgLogo = document.getElementById("imgLogoNavi");
  const logoutBtn = document.getElementById("logoutBtn");
  const notificationMenu = document.getElementById("notificationMenu");
  const notificationDropDown = document.getElementById(
    "dropdownMenuNotification"
  );

  imgLogo!.addEventListener("click", () => {
    navigateTo("/");
  });

  signInBtn?.addEventListener("click", () => {
    navigateTo("/signIn");
  });

  signUpBtn?.addEventListener("click", () => {
    navigateTo("/signUp");
  });

  logoutBtn?.addEventListener("click", async () => {
    logoutBtn.innerHTML = "Logout " + getLoader();
    const res = await store.logout();
    if (res!.status === 200) {
      logoutBtn.innerHTML = "Logout ";
      navigateTo("/signIn");
    }
  });

  naviDropMenuBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (btn.id in dropMenuRoutes) {
        navigateTo(dropMenuRoutes[btn.id]);
      }
    });
  });

  profileBtn?.addEventListener("click", (e) => {
    e.stopPropagation();
    dropdownMenu?.classList.toggle("hidden");
    notificationDropDown?.classList.add("hidden");
  });

  notificationMenu?.addEventListener("click", (e) => {
    e.stopPropagation();
    notificationDropDown?.classList.toggle("hidden");
    dropdownMenu?.classList.add("hidden");
  });

  document.addEventListener("click", (e) => {
    const target = e.target as Node;

    if (!dropdownMenu?.contains(target) && !profileBtn?.contains(target)) {
      dropdownMenu?.classList.add("hidden");
    }

    if (
      !notificationDropDown?.contains(target) &&
      !notificationMenu?.contains(target)
    ) {
      notificationDropDown?.classList.add("hidden");
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.keyCode == 27) {
      dropdownMenu?.classList.add("hidden");
      notificationDropDown!.classList.add("hidden");
    }
  });
}
