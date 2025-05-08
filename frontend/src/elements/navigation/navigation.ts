import { getLoader } from "./../Loader/Loader";

import { navigateTo } from "../../routing";
import { API_URL, store } from "../../store/store";
import { dropMenuRoutes } from "./navigationRoutes";
import { getColorFromUsername } from "../../shared/randomColors";


export function navigationHandle() {
  let profileBtn = document.querySelector("#profileIcon");
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
    document.getElementById("notificationIndicator")?.classList.add('invisible')
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
export function updateNavigationAvatar(avatarPath: string | null) {
    const navigationPhoto = document.querySelector("#profileIcon");
    if (!navigationPhoto) return;
  
    if (avatarPath) {
      const timestamp = new Date().getTime();
      const avatarUrl = `${API_URL}${avatarPath}?t=${timestamp}`;
  
      const newImg = document.createElement("img");
      newImg.id = "profileIcon";
      newImg.className = "w-12 h-12 rounded-full object-cover";
      newImg.src = avatarUrl;
      newImg.alt = "Profile Icon";
      newImg.draggable = false;
  
      newImg.addEventListener("click", (e) => {
        e.stopPropagation();
        const navigationPhotoDropMenu =
          document.getElementById("dropdownMenu");
        if (navigationPhotoDropMenu) {
          navigationPhotoDropMenu.classList.toggle("hidden");
        }
      });
      navigationPhoto.replaceWith(newImg);
    } else {
      const username = store.getUser().username;
      const firstLetter = username.charAt(0).toUpperCase();
      const color = getColorFromUsername(username);
  
      const newDiv = document.createElement("div");
      newDiv.id = "profileIcon";
      newDiv.className = `w-12 h-12 flex items-center justify-center rounded-full text-white font-bold ${color}`;
      newDiv.textContent = firstLetter;
      newDiv.addEventListener("click", (e) => {
        e.stopPropagation();
        const navigationPhotoDropMenu =
          document.getElementById("dropdownMenu");
        if (navigationPhotoDropMenu) {
          navigationPhotoDropMenu.classList.toggle("hidden");
        }
      });
      navigationPhoto.replaceWith(newDiv);
    }
  }
