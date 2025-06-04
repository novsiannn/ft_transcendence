import { BtnAccept } from "../../elements/BtnAccept";
import { BtnAdd } from "../../elements/BtnAdd";
import { BtnCancel } from "../../elements/BtnCancel";
import { BtnReject } from "../../elements/BtnReject";
import { BtnUnblock } from "../../elements/BtnUnblock";
import { BtnUserBlockedYou } from "../../elements/BtnUserBlockedYou";
import { getColorFromUsername } from "../../shared/randomColors";
import { API_URL } from "../../store/store";
import { TypeUserLayoutProps } from "./types";

export const getFriendsLayout = ({
  username,
  avatar,
  id,
}: TypeUserLayoutProps) => {
  const color = getColorFromUsername(username);
  const firstLetterOfUser = username.charAt(0).toUpperCase();

  return `<div class="bg-white flex items-center justify-between rounded-lg p-3 mb-2 w-80 hover:bg-gray-200 transition-colors duration-300 select-none friendBlock">
			  <div class="flex space-x-4">
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
					<span class="text-black text-xl font-semibold">${username}</span>
				    <div id="userOnlineStatus${id}" data-userOnlineStatusFriendsPage class="flex text-gray-400 text-xs"></div>
				</div>
			</div>
			<div class="flex">
				<button data-i18n='buttons.delete' id="btnDeleteFriend" type="button" class=" flex justify-center w-18 h-10 text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Delete</button>
			  </div>
		  </div>`;
};

export const getEmptyBlock = () => {
  return `<div class="bg-gray-800 flex items-center justify-between rounded-lg p-4 mb-2 w-full mx-auto hover:bg-gray-700 transition-colors duration-300 select-none">
			  <div class="flex items-center space-x-4">
					<span data-i18n='friends.noOneIsHere' class="text-white text-xl font-semibold">No one is here yet!</span>
			</div>
		  </div>`;
};

export const getUserLayout = ({
  username,
  avatar,
  id,
}: TypeUserLayoutProps) => {
  const color = getColorFromUsername(username);
  const firstLetterOfUser = username.charAt(0).toUpperCase();

  return `
  <div class="bg-white flex items-center justify-between w-128 rounded-lg p-3 mb-2 hover:bg-gray-200 transition-colors duration-300 select-none userBlock">
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
		<span class=" text-base font-semibold truncate">${username}</span>
		<div id="userOnlineStatus${id}" data-userOnlineStatusFriendsPage class="flex text-gray-400 text-xs"></div>
	  </div>
	</div>
	<div class="flex gap-2 items-center ml-2">
		  ${BtnCancel()}
		  ${BtnAdd()}
		  ${BtnAccept()}
		  ${BtnReject()}
		  ${BtnUnblock()}
		  ${BtnUserBlockedYou()}
	</div>
  </div>
  `;
};
