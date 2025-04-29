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

export const getFriendsBlock = (
  data: IFriend[],
  wrapper: HTMLDivElement | null
) => {
  let div;
  const myProfileID = store.getState().auth.user.id;

  if (data.length) {
    data.forEach((el) => {
      if (el.id !== myProfileID) {
        div = document.createElement("div");
        div.innerHTML = getFriendsLayout(el.username, el.avatar);
        const btnDeleteFriend =
          div.querySelector<HTMLButtonElement>("#btnDeleteFriend");
        btnDeleteFriend!.id = `btnDeleteFriend${el.id}`;

        wrapper!.innerHTML =
          `<h1 data-i18n='friends.yourFriends' class="text-2xl text-white font-black text-center mb-4">Your Friends</h1>`;
        wrapper!.append(div);
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
  const checkIfUserExist = wrapper!.querySelector(".friendBlock");
  if (!checkIfUserExist) {
    wrapper!.innerHTML =
      `<h1 data-i18n='friends.yourFriends' class="text-2xl text-white font-black text-center mb-4">Your Friends</h1>`;

    div = document.createElement("div");
    div.innerHTML = getEmptyBlock();
    wrapper?.append(div);
  }
};

export const getUsersBlock = (
  users: IUser[],
  dataFriends: IFriendsResponse,
  wrapper: HTMLDivElement | null,
  responseFriendshipSentUserId: IFriendshipResponseData,
  incomingFriendshipRequest: IFriendshipResponseData
) => {
  let div;
  const myProfileID = store.getState().auth.user.id;
  wrapper!.innerHTML =
    `<h1 data-i18n='friends.allUsers' class="text-2xl text-white font-black text-center mb-4">All Users</h1>`;
  if (users.length) {
    users.forEach((el) => {
      if (el.id !== myProfileID) {
        if (dataFriends.friends.some((friend) => friend.id == el.id)) return;

        div = document.createElement("div");
        div.innerHTML = getUserLayout(el.username, el.avatar);
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
  const checkIfUserExist = wrapper!.querySelector(".userBlock");
  if (!checkIfUserExist) {
    wrapper!.innerHTML =
      `<h1 data-i18n='friends.allUsers' class="text-2xl text-white font-black text-center mb-4">All Users</h1>`;
    div = document.createElement("div");
    div.innerHTML = getEmptyBlock();
    wrapper?.append(div);
  }
};
