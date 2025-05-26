import { getLoader } from "../../elements/Loader";
import { IUser } from "../../services/api/models/response/IUser";
import {
  findUser,
  IFriend,
  IFriendshipResponse,
  IFriendshipResponseData,
} from "../../shared";
import { store } from "../../store/store";
import { refreshProfileBtnsBlock } from "../profile/getUserData";
import { getEmptyBlock } from "./containersLayout";
import { getFriendsBlock, getUsersBlock } from "./utils";

export const addFriend = async (
  id: number,
  addBtn: HTMLButtonElement | null
) => {
  const cancelButton = document.getElementById(`btnCancelFriendRequest${id}`);
  addBtn!.innerHTML = getLoader();
  addBtn!.disabled = true;

  const result = await store.sendFriendRequest(id);
  if (result === 201) {
    addBtn!.disabled = false;
    addBtn!.classList.add("hidden");
    cancelButton!.classList.remove("hidden");
    addBtn!.innerHTML = "Add";
  } else if (result === 400) {
    console.log("some error occurred");
    addBtn!.innerHTML = "Add";
  }
  return await store.getPendingFriendsRequests();
};

export const cancelFriendshipRequest = async (
  id: number,
  cancelBtn: HTMLButtonElement | null,
  requests: IFriendshipResponse[]
) => {
  const addBtn = document.getElementById(`btnAddFriend${id}`);
  cancelBtn!.innerHTML = getLoader();
  cancelBtn!.disabled = true;
  const res = requests.filter((el) => el.addresseeId === id).map((el) => el.id);
  const result = await store.cancelPendingFriendRequest(res[0]);

  if (result === 204) {
    cancelBtn!.disabled = false;
    cancelBtn!.classList.add("hidden");
    addBtn!.classList.remove("hidden");
    cancelBtn!.innerHTML = "Cancel";
    store.getPendingFriendsRequests();
  } else if (result === 400) {
    console.log("some error occurred");
  }
  return await store.getPendingFriendsRequests();
};

export const deleteFriend = async (
  id: number,
  deleteFriendBtn: HTMLButtonElement | null,
  user?: IUser
) => {
  deleteFriendBtn!.innerHTML = getLoader();
  deleteFriendBtn!.disabled = true;
  const res = await store.deleteFriend(id);

  if (res.status === 204) {
    deleteFriendBtn!.innerHTML = "Delete";
    deleteFriendBtn!.disabled = false;

    await store.getAllUsersRequest();
    await store.getAllFriendsRequest();

    user = findUser(user!.id);

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
  acceptFriendBtn!.innerHTML = getLoader();
  acceptFriendBtn!.disabled = true;
  const res = await store.acceptFriendship(requestFriendshipReceived.id);

  if (res.status === 200) {
    if (location.pathname === "/friends") rerenderFriendsPage();

    acceptFriendBtn!.innerHTML = "Accept";
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
  rejectFriendBtn!.innerHTML = getLoader();
  rejectFriendBtn!.disabled = true;
  const res = await store.rejectFriendship(requestFriendshipReceived.id);

  if (res.status === 200) {
    rejectFriendBtn!.innerHTML = "Reject";
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
  const requestFriendshipReceived: IFriendshipResponse | undefined =
    incomingFriendshipRequest.requests.find(
      (friendship) => friendship.requesterId === el.id
    );
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
  const cancelFriendRequest = div.querySelector<HTMLButtonElement>(
    "#btnCancelFriendRequest"
  );

  if (btnAdd) btnAdd.id = `btnAddFriend${el.id}`;
  if (cancelFriendRequest)
    cancelFriendRequest.id = `btnCancelFriendRequest${el.id}`;

  if (isFriend && btnDelete) {
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
      responseFriendshipSentUserId.requests
    );
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
