import { getLoader } from "../../elements/Loader";
import { IUser } from "../../services/api/models/response/IUser";
import {
  findUser,
  IFriend,
  IFriendshipResponse,
  IFriendshipResponseData,
} from "../../shared";
import { store } from "../../store/store";
import { socket } from "../../websockets";
import { refreshProfileBtnsBlock } from "../profile/getUserData";
import { getEmptyBlock } from "./containersLayout";
import { getFriendsBlock, getUsersBlock } from "./utils";

export const addFriend = async (
  id: number,
  addBtn: HTMLButtonElement | null
) => {
  const cancelButton = document.getElementById(`btnCancelFriendRequest${id}`);
  addBtn!.disabled = true;

  const result = await store.sendFriendRequest(id);
  if (result === 201) {
    addBtn!.disabled = false;
    addBtn!.classList.add("hidden");
    cancelButton!.classList.remove("hidden");
  }
  return await store.getPendingFriendsRequests();
};

export const cancelFriendshipRequest = async (
  id: number,
  cancelBtn: HTMLButtonElement | null,
  requests: IFriendshipResponse[],
  user?: IUser
) => {
  const addBtn = document.getElementById(`btnAddFriend${id}`);
  cancelBtn!.disabled = true;
  const res = requests.filter((el) => el.addresseeId === id).map((el) => el.id);
  const result = await store.cancelPendingFriendRequest(res[0]);

  if (result === 204) {
    cancelBtn!.disabled = false;
    cancelBtn!.classList.add("hidden");
    addBtn!.classList.remove("hidden");
    store.getPendingFriendsRequests();
    if (location.pathname.slice(0, 8) === "/profile" && user) {
      refreshProfileBtnsBlock(user);
    }
  }
  return await store.getPendingFriendsRequests();
};

export const deleteFriend = async (
  id: number,
  deleteFriendBtn: HTMLButtonElement | null,
  user?: IUser
) => {
  deleteFriendBtn!.disabled = true;
  const res = await store.deleteFriend(id);

  if (res.status === 204) {
    deleteFriendBtn!.disabled = false;

    await store.getAllUsersRequest();
    await store.getAllFriendsRequest();

    if (user) user = findUser(user.id);

    if (location.pathname === "/friends") rerenderFriendsPage();
    if (location.pathname.slice(0, 8) === "/profile" && user) {
      refreshProfileBtnsBlock(user);
    }
  }
};

export const acceptFriend = async (
  requestFriendshipReceived: IFriendshipResponse,
  acceptFriendBtn: HTMLButtonElement | null,
  user?: IUser
) => {
  acceptFriendBtn!.disabled = true;
  const res = await store.acceptFriendship(requestFriendshipReceived.id);

  if (res.status === 200) {
    if (location.pathname === "/friends") rerenderFriendsPage();
    acceptFriendBtn!.disabled = false;

    await store.getAllUsersRequest();
    await store.getAllFriendsRequest();

    user = findUser(user!.id);

    if (location.pathname.slice(0, 8) === "/profile" && user) {
      refreshProfileBtnsBlock(user);
    }
  }
};

export const rejectFriend = async (
  requestFriendshipReceived: IFriendshipResponse,
  rejectFriendBtn: HTMLButtonElement | null,
  user?: IUser
) => {
  rejectFriendBtn!.disabled = true;
  const res = await store.rejectFriendship(requestFriendshipReceived.id);

  if (res.status === 200) {
    rejectFriendBtn!.disabled = false;
    rerenderFriendsPage();
    if (location.pathname.slice(0, 8) === "/profile" && user) {
      refreshProfileBtnsBlock(user);
    }
  }
};

export const rerenderFriendsPage = async (filteredUsers?: IUser[]) => {
  const friendsContainer =
    document.querySelector<HTMLDivElement>("#friendsContainer");
  const allUsersContainer =
    document.querySelector<HTMLDivElement>("#allUsersContainer");
  let responseAllUsers;

  socket?.emit("online:get:all:status");

  if (allUsersContainer)
    allUsersContainer.innerHTML = `<h1 data-i18n='friends.allUsers' class="text-2xl text-white font-black text-center mb-4">All Users</h1>
      ${getLoader()}
    `;
  if (friendsContainer)
    friendsContainer.innerHTML = `<h1 data-i18n='friends.yourFriends' class="text-2xl text-white font-black text-center mb-4">Your Friends</h1>
      ${getLoader()}
    `;
  await store.getAllFriendsRequest();
  await store.getAllUsersRequest();
  await store.getUserRequest();

  const responseAllFriends = store.getAllFriends();
  if (!filteredUsers) {
    responseAllUsers = store.getAllUsers();
  } else {
    responseAllUsers = filteredUsers;
  }
  const responseFriendshipSent = await store.getPendingFriendsRequests();
  const responseFriendshipReceived = await store.getIncomingFriendRequest();
  const friends: IFriend[] = responseAllFriends;
  getFriendsBlock(friends, friendsContainer);
  getUsersBlock(
    responseAllUsers,
    friends,
    allUsersContainer,
    responseFriendshipSent,
    responseFriendshipReceived
  );
};

export const addBtnsListeners = (
  div: HTMLDivElement,
  el: IUser,
  incomingFriendshipRequest: IFriendshipResponseData,
  responseFriendshipSentUserId: IFriendshipResponseData,
  wrapper: HTMLDivElement | null
) => {
  let requestFriendshipReceived: IFriendshipResponse | undefined;
  if(incomingFriendshipRequest.requests){
  requestFriendshipReceived =
    incomingFriendshipRequest.requests.find(
      (friendship) => friendship.requesterId === el.id
    );
  }
  let ifSentFriendship = false;
  if (responseFriendshipSentUserId!.pendingUserIds) {
    ifSentFriendship = responseFriendshipSentUserId.pendingUserIds.some(
      (idSentTo) => (idSentTo === el.id ? true : false)
    );
  }

  const isFriend = store.getAllFriends().some((user) => user.id === el.id);

  const btnAdd = div.querySelector<HTMLButtonElement>("#btnAddFriend");
  const btnReject = div.querySelector<HTMLButtonElement>("#btnRejectFriend");
  const btnAccept = div.querySelector<HTMLButtonElement>("#btnAcceptFriend");
  const btnDelete = div.querySelector<HTMLButtonElement>("#btnDeleteFriend");
  const btnUserBlockedYou =
    div.querySelector<HTMLButtonElement>("#btnUserBlockedYou");
  const btnUnblockUser =
    div.querySelector<HTMLButtonElement>("#btnUnblockUser");

  const cancelFriendRequest = div.querySelector<HTMLButtonElement>(
    "#btnCancelFriendRequest"
  );
  const blockedUserIds = store.getUser().blockedUserIds;
  const blockedByUserIds = store.getUser().blockedByUserIds;
  let myBlockedUsers;
  let usersBlockedMe;

  if (blockedUserIds)
    myBlockedUsers = blockedUserIds.some((id) => id === el.id);

  if (blockedByUserIds)
    usersBlockedMe = blockedByUserIds.some((id) => id === el.id);

  if (btnAdd) btnAdd.id = `btnAddFriend${el.id}`;
  if (cancelFriendRequest)
    cancelFriendRequest.id = `btnCancelFriendRequest${el.id}`;

  if (myBlockedUsers) {
    btnUnblockUser?.classList.remove("hidden");
  } else if (usersBlockedMe) {
    btnUserBlockedYou?.classList.remove("hidden");
  } else if (isFriend && btnDelete) {
    btnDelete?.classList.remove("hidden");
  } else if (requestFriendshipReceived) {
    btnAccept?.classList.remove("hidden");
    btnReject?.classList.remove("hidden");
  } else if (ifSentFriendship) {
    cancelFriendRequest!.classList.remove("hidden");
  } else {
    btnAdd?.classList.remove("hidden");
  }
  wrapper?.append(div);
  btnAdd?.addEventListener("click", async (e) => {
    e.stopPropagation();
    responseFriendshipSentUserId = await addFriend(el.id, btnAdd);
  });
  btnAccept?.addEventListener("click", async (e) => {
    e.stopPropagation();
    if (requestFriendshipReceived)
      await acceptFriend(requestFriendshipReceived, btnAccept, el);
  });
  btnReject?.addEventListener("click", async (e) => {
    e.stopPropagation();
    if (requestFriendshipReceived)
      await rejectFriend(requestFriendshipReceived, btnReject, el);
  });
  cancelFriendRequest?.addEventListener("click", async (e) => {
    e.stopPropagation();
    responseFriendshipSentUserId = await cancelFriendshipRequest(
      el.id,
      cancelFriendRequest,
      responseFriendshipSentUserId.requests,
      el
    );
  });
  btnUnblockUser?.addEventListener("click", async (e) => {
    e.stopPropagation();
    socket!.emit("user:unblock", { blockedUserId: el.id });
  });
  btnDelete?.addEventListener("click", async (e) => {
    e.stopPropagation();
    if (isFriend) {
      await deleteFriend(el.id, btnDelete, el);
    }
  });
  const checkIfUserExist = wrapper?.querySelector("div");
  if (!checkIfUserExist) {
    div = document.createElement("div");
    div.innerHTML = getEmptyBlock();
    wrapper?.append(div);
  }
};
