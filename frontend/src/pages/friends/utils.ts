import { API_URL, store } from "./../../store/store";
import { navigateTo } from "../../routing";
import { IUser } from "../../services/api/models/response/IUser";
import { IFriend } from "../../shared";
import { getColorFromUsername } from "../../shared/randomColors";

const addFriend = async (id: number, btn: HTMLButtonElement | null) => {
  console.log("User id -> " + id);
  
  const result = await store.sendFriendRequest(id);
  if (result === 201){
    btn!.disabled = true;
    btn!.classList.add('cursor-not-allowed');
  } else if (result === 400){
    console.log('some error occurred');
    
  }
};

export const getUserBlock = (username: string, avatar: string) => {
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
      <button type="button" class="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Add</button>
    </div>
  </div>
  `;
};

// it has to be changed
export const getFriendBlock = (username: string, avatar: string) => {
  return `<div class="bg-gray-800 flex items-center justify-between rounded-lg p-4 mb-2 w-3/4 mx-auto hover:bg-gray-700 transition-colors duration-300 select-none">
              <div class="flex items-center space-x-4">
	              <div class="w-14 h-14 rounded-full bg-green-700 flex items-center justify-center text-white font-bold text-xl hover:scale-105 transition-transform duration-200">
	              J
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

export const getBlocks = (
  length: number,
  data: IUser[] | IFriend[],
  myProfileID: number,
  callBackFunc: (username: string, avatar: string) => string,
  wrapper: HTMLDivElement | null
) => {
  let div;

  if (length) {
    data.forEach((el) => {
      if (el.id !== myProfileID) {
        div = document.createElement("div");
        div.innerHTML = callBackFunc(el.username, el.avatar);
        const btnAdd = div.querySelector('button');
        btnAdd!.id = `addFriendButton${el.id}`;
        wrapper?.append(div);
        const addFriendRequest = document.querySelectorAll("#addFriendButton");
        
          btnAdd!.addEventListener("click", (e) => {
            e.stopPropagation();
            addFriend(el.id, btnAdd);
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
