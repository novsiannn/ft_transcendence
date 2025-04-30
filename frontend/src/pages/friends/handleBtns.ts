import { getLoader } from "../../elements/Loader";
import { IUser } from "../../services/api/models/response/IUser";
import { IFriendshipResponse, IFriendshipResponseData, IFriendsResponse } from "../../shared";
import { store } from "../../store/store";
import { getEmptyBlock } from "./containersLayout";
import { getFriendsBlock, getUsersBlock } from "./utils";

export const addFriend = async (
  id: number,
  addBtn: HTMLButtonElement | null
) => {
  const cancelButton = document.getElementById(`btnCancelFriendRequest${id}`);
  console.log(cancelButton);

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
) => {
  deleteFriendBtn!.innerHTML = getLoader();
  deleteFriendBtn!.disabled = true;
  const res = await store.deleteFriend(id);
  

  if (res.status === 204) {
    deleteFriendBtn!.innerHTML = "Delete";
    deleteFriendBtn!.disabled = false;
    rerenderFriendsPage();
  }
};

export const acceptFriend = async (
  requestFriendshipReceived: IFriendshipResponse,
  acceptFriendBtn: HTMLButtonElement | null,
) => {
  acceptFriendBtn!.innerHTML = getLoader();
  acceptFriendBtn!.disabled = true;
  const res = await store.acceptFriendship(requestFriendshipReceived.id);

  if (res.status === 200) {
    rerenderFriendsPage();
    acceptFriendBtn!.innerHTML = "Accept";
    acceptFriendBtn!.disabled = false;
  }
};

export const rejectFriend = async (
  requestFriendshipReceived: IFriendshipResponse,
  rejectFriendBtn: HTMLButtonElement | null
) => {
  rejectFriendBtn!.innerHTML = getLoader();
  rejectFriendBtn!.disabled = true;
  const res = await store.rejectFriendship(requestFriendshipReceived.id);

  if (res.status === 200) {
    rejectFriendBtn!.innerHTML = "Reject";
    rejectFriendBtn!.disabled = false;
    rerenderFriendsPage();
  }
};

const rerenderFriendsPage = async () => {
  const friendsContainer =
    document.querySelector<HTMLDivElement>("#friendsContainer");
  const allUsersContainer =
    document.querySelector<HTMLDivElement>("#allUsersContainer");

  allUsersContainer!.innerHTML =
    `<h1 data-i18n='friends.allUsers' class="text-2xl text-white font-black text-center mb-4">All Users</h1>
      ${getLoader()}
    `;
  friendsContainer!.innerHTML =
      `<h1 data-i18n='friends.yourFriends' class="text-2xl text-white font-black text-center mb-4">Your Friends</h1>
      ${getLoader()}
    `;

  const responseAllFriends = await store.getAllFriends();
  const responseAllUsers = await store.getAllUsers();
  const responseFriendshipSent = await store.getPendingFriendsRequests();
  const responseFriendshipReceived = await store.getIncomingFriendRequest();
  const friends: IFriendsResponse = responseAllFriends.data;
  const users: IUser[] = responseAllUsers;
  getFriendsBlock(friends.friends, friendsContainer);
  getUsersBlock(
    users,
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

  const btnAdd = div.querySelector<HTMLButtonElement>("#btnAddFriend");
  const btnRejectFriend =
    div.querySelector<HTMLButtonElement>("#btnRejectFriend");
  const btnAccept = div.querySelector<HTMLButtonElement>("#btnAcceptFriend");
  const cancelFriendRequest = div.querySelector<HTMLButtonElement>(
    "#btnCancelFriendRequest"
  );
  btnAdd!.id = `btnAddFriend${el.id}`;
  cancelFriendRequest!.id = `btnCancelFriendRequest${el.id}`;

  if (requestFriendshipReceived) {
    btnAccept!.classList.remove("hidden");
    btnRejectFriend!.classList.remove("hidden");
  } else if (ifSentFriendship) {
    cancelFriendRequest!.classList.remove("hidden");
  } else {
    btnAdd!.classList.remove("hidden");
  }
  wrapper?.append(div);
  btnAdd?.addEventListener("click", async (e) => {
    e.stopPropagation();
    responseFriendshipSentUserId = await addFriend(el.id, btnAdd);
  });
  btnAccept?.addEventListener("click", async (e) => {
    e.stopPropagation();
    if (requestFriendshipReceived)
      await acceptFriend(requestFriendshipReceived, btnAccept);
  });
  btnRejectFriend?.addEventListener("click", async (e) => {
    e.stopPropagation();
    if (requestFriendshipReceived)
      await rejectFriend(requestFriendshipReceived, btnRejectFriend);
  });
  cancelFriendRequest?.addEventListener("click", async (e) => {
    e.stopPropagation();
    responseFriendshipSentUserId = await cancelFriendshipRequest(
      el.id,
      cancelFriendRequest,
      responseFriendshipSentUserId.requests
    );
  });
  const checkIfUserExist = wrapper!.querySelector("div");
    if (!checkIfUserExist) {
      div = document.createElement("div");
      div.innerHTML = getEmptyBlock();
      wrapper?.append(div);
    }
};