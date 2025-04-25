import {
  IFriend,
  IFriendsResponse,
  IPendingFriendsRequest,
  IPendingFriendsResponse,
} from "./../../shared/interfaces";
import { API_URL, store } from "./../../store/store";
import { navigateTo } from "../../routing";
import { IUser } from "../../services/api/models/response/IUser";
import { getColorFromUsername } from "../../shared/randomColors";
import { getLoader } from "../../elements/Loader";

const addFriend = async (id: number, addBtn: HTMLButtonElement | null) => {
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
  }
  return await store.getPendingFriendsRequests();
};

const cancelFriendshipRequest = async (
  id: number,
  cancelBtn: HTMLButtonElement | null,
  requests: IPendingFriendsRequest[]
) => {
  const addBtn = document.getElementById(`btnAddFriend${id}`);

  cancelBtn!.innerHTML = getLoader();
  cancelBtn!.disabled = true;

  const res = requests.filter((el) => el.addresseeId === id).map((el) => el.id);

  console.log(res[0]);

  const result = await store.cancelPendingFriendRequest(res[0]);

  console.log(result);

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

export const getUserLayout = (username: string, avatar: string) => {
  const color = getColorFromUsername(username);
  const firstLetterOfUser = username.charAt(0).toUpperCase();

  return `
  <div class="bg-gray-800 flex items-center justify-between rounded-lg p-3 mb-2 w-full mx-auto hover:bg-gray-700 transition-colors duration-300 select-none">
    <div class="flex items-center space-x-4 min-w-0">
      <div class="w-12 h-12 rounded-full bg-green-700 flex items-center justify-center text-white font-bold text-lg hover:scale-105 transition-transform duration-200 flex-shrink-0">
        ${
          avatar
            ? `<img src=${
                API_URL + avatar
              } class="w-full h-full object-cover rounded-full"/>`
            : `<div alt="Profile" class="flex text-white font-bold text-s justify-center items-center content-center w-12 h-12 ${color} rounded-full cursor-pointer">${firstLetterOfUser}</div>`
        }
        
      </div>
      <div class="flex flex-col min-w-0">
        <span class="text-white text-base font-semibold truncate">${username}</span>
        <p class="text-gray-400 text-xs">Online</p>
      </div>
    </div>
    <div class="flex items-center ml-2">
          <button id="btnCancelFriendRequest" type="button" class=" flex justify-center w-18 h-10 text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Cancel</button>
          <button id="btnAddFriend" type="button" class="flex justify-center w-18 h-10 text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add</button>
    </div>
  </div>
  `;
};

export const getUsersBlock = async (
  length: number,
  users: IUser[],
  dataFriends: IFriendsResponse,
  wrapper: HTMLDivElement | null,
  responseFriendshipSentUserId: IPendingFriendsResponse
) => {
  let div;
  const myProfileID = store.getState().auth.user.id;

  if (length) {
    users.forEach((el) => {
      if (el.id !== myProfileID) {
        const ifSentFriendship =
          responseFriendshipSentUserId?.pendingUserIds.some((idSentTo) =>
            idSentTo === el.id ? true : false
          );
        if (dataFriends.friends.some((friend) => friend.id == el.id)) return;
        div = document.createElement("div");
        div.innerHTML = getUserLayout(el.username, el.avatar);
        const btnAdd = div.querySelector<HTMLButtonElement>("#btnAddFriend");
        const cancelFriendRequest = div.querySelector<HTMLButtonElement>(
          "#btnCancelFriendRequest"
        );
        btnAdd!.id = `btnAddFriend${el.id}`;
        cancelFriendRequest!.id = `btnCancelFriendRequest${el.id}`;
        if (ifSentFriendship) {
          btnAdd!.classList.add("hidden");
        } else {
          cancelFriendRequest!.classList.add("hidden");
        }
        wrapper?.append(div);
        btnAdd?.addEventListener("click", async (e) => {
          e.stopPropagation();
          responseFriendshipSentUserId = await addFriend(el.id, btnAdd);
        });
        cancelFriendRequest?.addEventListener("click", async (e) => {
          e.stopPropagation();
          responseFriendshipSentUserId = await cancelFriendshipRequest(
            el.id,
            cancelFriendRequest,
            responseFriendshipSentUserId.requests
          );
        });

        div.querySelector("div")!.addEventListener("click", () => {
          navigateTo(`/profile/${el.id}`);
        });
      }
    });
  } else {
    div = document.createElement("div");
    div.innerHTML = getEmptyBlock();
    wrapper?.append(div);
  }
};
// it has to be changed
export const getFriendsLayout = (username: string, avatar: string) => {
  const color = getColorFromUsername(username);
  const firstLetterOfUser = username.charAt(0).toUpperCase();

  return `<div class="bg-gray-800 flex items-center justify-between rounded-lg p-4 mb-2 w-3/4 mx-auto hover:bg-gray-700 transition-colors duration-300 select-none">
              <div class="flex items-center space-x-4">
	              <div class="w-12 h-12 rounded-full bg-green-700 flex items-center justify-center text-white font-bold text-lg hover:scale-105 transition-transform duration-200 flex-shrink-0">
                  ${
                    avatar
                      ? `<img src=${
                          API_URL + avatar
                        } class="w-full h-full object-cover rounded-full"/>`
                      : `<div alt="Profile" class="flex text-white font-bold text-s justify-center items-center content-center w-12 h-12 ${color} rounded-full cursor-pointer">${firstLetterOfUser}</div>`
                  }
	              </div>
	            <div>
		            <span class="text-white text-xl font-semibold">${username}</span>
	              <p class="text-gray-400 text-sm">Online</p>
	            </div>
            </div>
          </div>`;
};

export const getEmptyBlock = () => {
  return `<div class="bg-gray-800 flex items-center justify-between rounded-lg p-4 mb-2 w-3/4 mx-auto hover:bg-gray-700 transition-colors duration-300 select-none">
              <div class="flex items-center space-x-4">
		            <span class="text-white text-xl font-semibold">No one is here yet!</span>
            </div>
          </div>`;
};

export const getFriendsBlock = (
  length: number,
  data: IFriend[],
  wrapper: HTMLDivElement | null
) => {
  let div;
  const myProfileID = store.getState().auth.user.id;

  if (length) {
    data.forEach((el) => {
      if (el.id !== myProfileID) {
        div = document.createElement("div");
        div.innerHTML = getFriendsLayout(el.username, el.avatar);

        wrapper?.append(div);

        div.querySelector("div")!.addEventListener("click", () => {
          navigateTo(`/profile/${el.id}`);
        });
      }
    });
  } else {
    div = document.createElement("div");
    div.innerHTML = getEmptyBlock();
    wrapper?.append(div);
  }
};
