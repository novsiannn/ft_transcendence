import {
  IFriend,
  IFriendsResponse,
  IFriendshipResponseData,
} from "./../../shared/interfaces";
import { store } from "./../../store/store";
import { navigateTo } from "../../routing";
import { IUser } from "../../services/api/models/response/IUser";
import {
  getEmptyBlock,
  getFriendsLayout,
  getUserLayout,
} from "./containersLayout";
import { addBtnsListeners, deleteFriend } from "./handleBtns";
import { socket } from "../../websockets";

export const getFriendsBlock = (
  data: IFriend[],
  wrapper: HTMLDivElement | null
) => {
  let div;
  const myProfileID = store.getState().auth.user.id;

  if (data.length) {
    if (wrapper)
      wrapper.innerHTML = `<h1 data-i18n='friends.yourFriends' class="text-2xl text-white font-black text-center mb-4">Your Friends</h1>`;
    data.forEach((el) => {
      if (el.id !== myProfileID) {
        div = document.createElement("div");
        div.innerHTML = getFriendsLayout(el);
        const btnDeleteFriend =
          div.querySelector<HTMLButtonElement>("#btnDeleteFriend");
        btnDeleteFriend!.id = `btnDeleteFriend${el.id}`;

        wrapper?.append(div);
        btnDeleteFriend?.addEventListener("click", async (e) => {
          e.stopPropagation();
          await deleteFriend(el.id, btnDeleteFriend);
        });

        div.querySelector("div")!.addEventListener("click", () => {
          navigateTo(`/profile/${el.id}`);
        });
      }
    });
  }
  const checkIfUserExist = wrapper?.querySelector(".friendBlock");
  if (!checkIfUserExist) {
    if (wrapper)
      wrapper.innerHTML = `<h1 data-i18n='friends.yourFriends' class="text-2xl text-white font-black text-center mb-4">Your Friends</h1>`;

    div = document.createElement("div");
    div.innerHTML = getEmptyBlock();
    wrapper?.append(div);
  }
};

export const getUsersBlock = (
  users: IUser[],
  dataFriends: IFriend[],
  wrapper: HTMLDivElement | null,
  responseFriendshipSentUserId: IFriendshipResponseData,
  incomingFriendshipRequest: IFriendshipResponseData
) => {
  let div;
  const myProfileID = store.getState().auth.user.id;
  if(wrapper)
    wrapper.innerHTML = ``;

  if (users.length) {
    users.forEach((el) => {
      if (el.id !== myProfileID) {
        if (dataFriends.some((friend) => friend.id == el.id)) return;

        div = document.createElement("div");
        div.innerHTML = getUserLayout(el);
        addBtnsListeners(
          div,
          el,
          incomingFriendshipRequest,
          responseFriendshipSentUserId,
          wrapper
        );

        div.querySelector("div")!.addEventListener("click", () => {
          navigateTo(`/profile/${el.id}`);
        });
      }
    });
  }
  const checkIfUserExist = wrapper?.querySelector(".userBlock");
  if (!checkIfUserExist) {
    if(wrapper)
      wrapper.innerHTML = ``;
    div = document.createElement("div");
    div.innerHTML = getEmptyBlock();
    wrapper?.append(div);
  }
  socket?.emit("online:get:all:status");
  
};
