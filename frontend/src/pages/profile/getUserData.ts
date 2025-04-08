import { store } from "../../store/store";

export const getUserData = () => {
  const userName: string = store.getState().auth.user.username;
  const userNameElement = document.querySelector("#userNameProfile");

  userName ? userNameElement!.textContent = userName : userNameElement!.textContent = 'Username';
};
