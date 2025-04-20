import { API_URL } from "./../../store/store";
import { navigateTo } from "../../routing";
import { store } from "../../store/store";

export const getUserData = (id?: number) => {
  const userNameElement = document.querySelector("#userNameProfile");
  const avatarElement = document.querySelector<HTMLImageElement>("#profileImg");

  if (id === store.getUser().id) {
    userNameElement!.textContent = store.getUser().username;
    avatarElement!.src = API_URL + store.getUser().avatar;
    return ;
  }
  const res = store.getAllUsers().some((el) => {
    if (el.id == id) {
      el.username
        ? (userNameElement!.textContent = el.username)
        : (userNameElement!.textContent = "Username");
      API_URL + el.avatar
        ? (avatarElement!.src = API_URL + el.avatar)
        : (avatarElement!.src =
            "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png");
      console.log("here");
      console.log(API_URL + el.avatar);

      return true;
    }
    return false;
  });
  if (!res) {
    navigateTo("/error");
  }
};
