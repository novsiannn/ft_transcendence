import { API_URL } from "./../../store/store";
import { navigateTo } from "../../routing";
import { store } from "../../store/store";
import { getColorFromUsername } from "../../shared/randomColors";
import { BtnAccept } from "../../elements/BtnAccept";

export const getUserData = (id?: number) => {
  const userNameElement = document.querySelector("#userNameProfile");
  const avatarImg = document.querySelector<HTMLImageElement>("#profileImg");
  const emptyPhoto = document.querySelector<HTMLDivElement>("#profileImgEmpty");
  const profileDataContainer = document.querySelector<HTMLDivElement>("#profileDataContainer");

  if (id === store.getUser().id) {
    const username = store.getUser().username;
    const firstLetterOfUser = username.charAt(0).toUpperCase();
    const color = getColorFromUsername(username);
    const hasAvatar = Boolean(store.getUser().avatar);

    userNameElement!.textContent = username;

    if (hasAvatar) {
      emptyPhoto?.classList.toggle("hidden", hasAvatar);
      avatarImg?.classList.toggle("hidden", !hasAvatar);
      avatarImg!.src = API_URL + store.getUser().avatar;
    } else {
      emptyPhoto!.classList.toggle("hidden", hasAvatar);
      avatarImg?.classList.toggle("hidden", !hasAvatar);
      emptyPhoto!.classList.add(color);

      emptyPhoto!.innerHTML = `<p>${firstLetterOfUser}</p>`;
    }
    return;
  }
  const res = store.getAllUsers().some((el) => {
    if (el.id == id) {
      const firstLetterOfUser = el.username.charAt(0).toUpperCase();
      const color = getColorFromUsername(el.username);
      const hasAvatar = Boolean(el.avatar);

      el.username
        ? (userNameElement!.textContent = el.username)
        : (userNameElement!.textContent = "Username");
      if (hasAvatar) {
        avatarImg!.src = API_URL + el.avatar;
        emptyPhoto?.classList.toggle("hidden", hasAvatar);
        avatarImg?.classList.toggle("hidden", !hasAvatar);
      } else {
        emptyPhoto?.classList.toggle("hidden", hasAvatar);
        avatarImg?.classList.toggle("hidden", !hasAvatar);
        emptyPhoto?.classList.add(color);
        emptyPhoto!.innerHTML = `<p>${firstLetterOfUser}</p>`;
      }
      const buttonsContainer = document.createElement('div');
      buttonsContainer.className = "flex w-full h-10 border border-black"
      buttonsContainer.innerHTML = BtnAccept();
      profileDataContainer?.append(buttonsContainer);
      console.log(profileDataContainer);
      return true;
    }
    return false;
  });
  if (!res) {
    navigateTo("/error");
  }
};
