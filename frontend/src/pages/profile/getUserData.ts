import { API_URL } from "./../../store/store";
import { navigateTo } from "../../routing";
import { store } from "../../store/store";
import { getColorFromUsername } from "../../shared/randomColors";
import { IUser } from "../../services/api/models/response/IUser";
import { IconLVL } from "../../elements/IconLVL";
import { addBtnsListeners } from "../friends/handleBtns";
import { BtnAccept } from "../../elements/BtnAccept";
import { BtnAdd } from "../../elements/BtnAdd";
import { BtnCancel } from "../../elements/BtnCancel";
import { BtnReject } from "../../elements/BtnReject";
import { BtnDelete } from "../../elements/BtnDelete";

const setProfileInfo = (user: IUser): void => {
  const elo = document.querySelector("#profileLvlContainer");
  const lvl = document.querySelector("#profileLvl");
  const profileFriendsCount = document.querySelector("#profileFriends");
  const totalGames = document.querySelector("#profileMatchesPlayed");
  const profileMatchesWin = document.querySelector("#profileMatchesWin");
  const profileMatchesLost = document.querySelector("#profileMatchesLost");
  const profileWinrate = document.querySelector("#profileWinrate");

  elo!.innerHTML = IconLVL(user.lvl);
  elo!.innerHTML += `${user.elo} ELO`;
  elo!.classList.add("text-gray-500", "font-bold", "text-md");
  lvl!.innerHTML = `${user.lvl}`;
  // profileFriendsCount!.innerHTML = user.; add here count of friends
  totalGames!.innerHTML = `${user.totalGames}`;
  profileMatchesWin!.innerHTML = `${user.wonGames}`;
  profileMatchesLost!.innerHTML = `${user.totalGames - user.wonGames}`;
  profileWinrate!.innerHTML = `${user.winrate}%`;
};

export const refreshProfileBtnsBlock = async (el: IUser) => {
  const userNameElement = document.querySelector("#userNameProfile");
  const avatarImg = document.querySelector<HTMLImageElement>("#profileImg");
  const emptyPhoto = document.querySelector<HTMLDivElement>("#profileImgEmpty");
  const responseFriendshipSent = await store.getPendingFriendsRequests();
  const responseFriendshipReceived = await store.getIncomingFriendRequest();

  const firstLetterOfUser = el.username.charAt(0).toUpperCase();
  const color = getColorFromUsername(el.username);
  const hasAvatar = Boolean(el.avatar);
  const profileBtnsContainer = document.querySelector<HTMLDivElement>(
    "#profileButtonsContainer"
  );

  profileBtnsContainer!.innerHTML = BtnAccept() + BtnAdd() + BtnCancel() + BtnReject() + BtnDelete();

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
  setProfileInfo(el);
  if (profileBtnsContainer)
    addBtnsListeners(
      profileBtnsContainer,
      el,
      responseFriendshipReceived,
      responseFriendshipSent,
      null
    );
};

export const getUserData = async (id?: number) => {
  const userNameElement = document.querySelector("#userNameProfile");
  const avatarImg = document.querySelector<HTMLImageElement>("#profileImg");
  const emptyPhoto = document.querySelector<HTMLDivElement>("#profileImgEmpty");

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
    setProfileInfo(store.getUser());
    return;
  }
  const res = store.getAllUsers().some((el) => {
    if (el.id == id) {
      refreshProfileBtnsBlock(el);
      return true;
    }
    return false;
  });
  if (!res) {
    navigateTo("/error");
  }
};
