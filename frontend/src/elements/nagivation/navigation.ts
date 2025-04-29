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


  imgLogo!.addEventListener("click", () => {
    navigateTo("/");
  });

  signInBtn?.addEventListener("click", () => {
    navigateTo("/signIn");
  });

  signUpBtn?.addEventListener("click", () => {
    navigateTo("/signUp");
  });

  console.log(logoutBtn);
  
  logoutBtn?.addEventListener("click", async() => {
    console.log('here');
    
    logoutBtn.innerHTML = "Logout " + getLoader();
    const res = await store.logout();
    if (res!.status === 200){
        console.log('here');
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

  profileBtn?.addEventListener("click", () => {
    dropdownMenu!.classList.toggle("hidden");
  });

  document.addEventListener("click", (e) => {
    if (
      e.target !== dropdownMenu &&
      e.target !== profileBtn &&
      e.target !== logoutBtn
    )
      dropdownMenu?.classList.add("hidden");
  });

  document.addEventListener("keydown", (e) => {
    if (e.keyCode == 27) dropdownMenu!.classList.add("hidden");
  });
}
