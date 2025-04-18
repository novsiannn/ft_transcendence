import { navigateTo } from "../../routing";
import { IUser } from "../../services/api/models/response/IUser";
import { IFriend } from "../../shared";

export const getUserBlock = (username: string) => {
  return `
  <div class="bg-gray-800 flex items-center justify-between rounded-lg p-3 mb-2 w-full mx-auto hover:bg-gray-700 transition-colors duration-300 select-none">
    <div class="flex items-center space-x-4 min-w-0">
      <div class="w-12 h-12 rounded-full bg-green-700 flex items-center justify-center text-white font-bold text-lg hover:scale-105 transition-transform duration-200 flex-shrink-0">
        ${username.charAt(0).toUpperCase()}
      </div>
      <div class="flex flex-col min-w-0">
        <span class="text-white text-base font-semibold truncate">${username}</span>
        <p class="text-gray-400 text-xs">Online</p>
      </div>
    </div>
    <div class="flex items-center ml-2">
      <button class="bg-blue-600 hover:bg-blue-500 text-white px-3 py-1.5 rounded-lg transition-colors duration-200 text-xs font-medium whitespace-nowrap disabled">
        Add
      </button>
    </div>
  </div>
  `;
};

// it has to be changed
export const getFriendBlock = (username: string) => {
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
    callBackFunc: (username: string) => string,
    wrapper: HTMLDivElement | null
  ) => {
    let div;

    if (length) {
      data.forEach((el) => {
        if (el.id !== myProfileID) {
          div = document.createElement("div");
          div.innerHTML = callBackFunc(el.username);
          wrapper?.append(div);
          div.querySelector("div")!.addEventListener("click", () => {
            navigateTo(`/profile/${el.id}`);
          });
        }
      });
    }else {
      div = document.createElement("div");
      div.innerHTML = getEmptyBlock();
      wrapper?.append(div);
    }
  };