import { getModalWindowError} from "../../elements";
import { IUser } from "../../services/api/models/response/IUser";
import { findUser } from "../../shared";
import { store, API_URL} from "../../store/store";
import { getColorFromUsername } from "../../shared/randomColors";
import i18next from "i18next"

export let rankedWinnerData ={
  id: 0,
}; 

export function preGameModal() {
  return `
    <div id="preGameModal" class="fixed inset-0 z-10 pt-16 flex items-center justify-center">
      <div class="bg-white p-6 rounded-lg shadow-lg text-black space-y-2 w-max h-auto text-center">
        <div class="relative inline-block text-left mb-2">
          <button id="gameModeDropdownBtn" data-i18n='buttons.selectGameMode' data-dropdown-toggle="gameDropdownMenu" class="cursor-pointer text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
            ${i18next.t("buttons.selectGameMode")}
            <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
            </svg>
          </button>
          <div id="gameDropdownMenu" class="z-10 hidden absolute left-0 mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700">
            <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="gameDropdownButton">
              <li>
                 <button id="createFriendsMatchBtn" data-i18n='buttons.friendsMatch' class="cursor-pointer block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">${i18next.t("buttons.friendsMatch")}</button>
              </li>
            </ul>
            <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="gameDropdownButton">
              <li>
                 <button id="rankedMatchBtn" data-i18n='buttons.rankedMatch' class=" cursor-pointer block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">${i18next.t("buttons.rankedMatch")}</button>
              </li>
            </ul>
          </div>
        </div>
        <div class="relative inline-block text-left">
          <button id="tournamentDropdownButton" data-i18n='buttons.createTournament' data-dropdown-toggle="tournamentDropdownMenu" class=" cursor-pointer justify-start text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
            ${i18next.t("buttons.createTournament")}
            <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
            </svg>
          </button>
          <div id="tournamentDropdownMenu" class="z-10 hidden absolute left-0 mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700">
            <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="tournamentDropdownButton">
              <li>
                <button id="fourPlayersGameBtn" data-i18n='buttons.fourPlayers' class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer">${i18next.t("buttons.fourPlayers")}</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  `;
}

export function tournamentModal() {
  return `
      <div id="tournamentModal"  class="fixed inset-0 items-center justify-center z-10 hidden">
      <div class="bg-white p-6 rounded-lg shadow-lg text-black space-y-2 w-max h-auto text-center">
        <h2 class="text-lg font-semibold">Tournament Created!</h2>
        <div class="relative w-full">
          <button id="avatarSelectBtn" class="w-full flex items-center justify-between border p-2 rounded bg-white cursor-pointer">
            <img id="selectedAvatar" src="../../img/tournamentDefault.png" class="w-8 h-8 rounded-full" alt="avatar" />
            <span>...</span>
            <svg class="w-4 h-4 ml-2"></svg>
          </button>
          <div id="avatarDropdown" class="absolute left-0 mt-2 w-full bg-white border rounded shadow-lg hidden z-10">
            <div class="flex flex-col">
              <button class=" cursor-pointerflex items-center p-2 hover:bg-gray-100" data-avatar="../../img/1.png">
                <img src="../../img/1.png" class="w-8 h-8 rounded-full mr-2" alt="avatar1" /> Аватар 1
              </button>
              <button class=" cursor-pointerflex items-center p-2 hover:bg-gray-100" data-avatar="../../img/2.jpg">
                <img src="../../img/2.jpg" class="w-8 h-8 rounded-full mr-2" alt="avatar2" /> Аватар 2
              </button>
              <button class=" cursor-pointerflex items-center p-2 hover:bg-gray-100" data-avatar="../../img/3.png">
                <img src="../../img/3.png" class="w-8 h-8 rounded-full mr-2" alt="avatar2" /> Аватар 2
              </button>
              <button class=" cursor-pointerflex items-center p-2 hover:bg-gray-100" data-avatar="../../img/4.png">
                <img src="../../img/4.png" class="w-8 h-8 rounded-full mr-2" alt="avatar2" /> Аватар 2
              </button>
              <!-- Добавь еще аватары -->
            </div>
          </div>
        </div>
        <input type="text" id="playerNickname" placeholder="Enter Players Nickname" class="mt-2 p-2 border border-gray-300 rounded w-full" />
        <button id="backToMenuBtn" data-i18n='buttons.backToMenu' class="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 cursor-pointer">${i18next.t("buttons.backToMenu")}</button>
        <button id="submitNicknameBtn" data-i18n='buttons.submitNickname' type="submit" class=" mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 cursor-pointer">${i18next.t("buttons.submitNickname")}</button>
      </div>
      
      ${getModalWindowError()}
    </div>
  `;
}

export function friendsMatchModal(){
  const userPhoto = store.getUser().avatar
  ? `${API_URL}${store.getUser().avatar}`
  : "../../img/tournamentDefault.png";
  const userName = store.getUser().username;
  return`
    <div id="friendsMatchModal"  class="fixed inset-0 items-center justify-center z-10 hidden">
      <div class="bg-white p-6 rounded-lg shadow-lg text-black space-y-2 w-auto h-auto text-center">
        <h2 class="text-lg font-semibold"> </h2>
        <div class="relative w-full">
          <button id="friendSelectBtn" class="w-full flex items-center justify-between border p-2 rounded bg-white cursor-pointer">
            <img id="selectedFriend" src="../../img/tournamentDefault.png" class="w-8 h-8 rounded-full" alt="avatar" />
            <span>... </span>
            <svg class="w-4 h-4 ml-2"></svg>
          </button>
          <div id="friendsDropDown" class="absolute left-0 mt-2 w-full bg-white border rounded shadow-lg hidden z-10">
            <div class="flex flex-col">
              <button class="flex items-center p-2 hover:bg-gray-100" ">
                You have no friends yet!
              </button>
            </div>
          </div>
        </div>
        <button id="backToMenuBtn" data-i18n='buttons.backToMenu' class="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 cursor-pointer">${i18next.t("buttons.backToMenu")}</button>
        <button id="sendInviteBtn"  data-i18n='buttons.inviteInGame' type="submit" class=" mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 cursor-pointer">${i18next.t("buttons.inviteInGame")}</button>
      </div>
      ${getModalWindowError()}
    </div>
  `;
};

export function rankedGameModal() {
  return `
    <div id="rankedGameModal"  class="fixed inset-0 items-center justify-center z-10 hidden">
      <div class="bg-white p-6 rounded-lg shadow-lg text-black space-y-4 w-max h-auto text-center">
        <h2 data-i18n='game.rankedMode' class="text-lg font-semibold">${i18next.t("buttons.rankedMode")}</h2>

        <div id="spinerDiv" class=" hidden mt-2 justify-center">
          <div class="w-8 h-8 border-4 border-blue-400 border-t-white rounded-full animate-spin opacity-80"></div>
        </div>

        <button id="backToMenuBtn" data-i18n='buttons.backToMenu' class="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 cursor-pointer">${i18next.t("buttons.backToMenu")}</button>
        <!-- Spinner over Start Button -->
        <div class="relative inline-block">
          <div id="rankedSpinner" class="absolute -top-6 left-1/2 -translate-x-1/2 hidden">
            <div class="w-6 h-6 border-4 border-blue-400 border-t-white rounded-full animate-spin opacity-80"></div>
          </div>
          <button id="startRankedMatchBtn" data-i18n='buttons.startRankedMatch' class="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 cursor-pointer">
            ${i18next.t("buttons.startRankedMatch")}
          </button>
        </div>

        <button id="cancelRankedMatchBtn" data-i18n='buttons.cancelRankedMatch' class="hidden mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 cursor-pointer">
          ${i18next.t("buttons.cancelRankedMatch")}
        </button>
      </div>
      ${getModalWindowError()}
    </div>
  `;
}

export function gameOverModalCreator(result : number) {

  const winner = findUser(rankedWinnerData.id) as IUser;
  
  const winnerColor = getColorFromUsername(winner.username);
  const firstLetterOfWinner = winner.username.charAt(0).toUpperCase();
  
  return `
<div class="bg-white p-6 rounded-lg shadow-lg text-black space-y-4 w-max h-auto text-center">
      <h2 data-i18n='game.gameOver' class="text-lg font-semibold">${i18next.t("game.gameOver")}</h2>
      <h3 data-i18n='game.winner' class="text-md font-semibold">${i18next.t("game.winner")}</h3>
      
      <!-- Профиль победителя -->
      <div class="flex flex-col items-center space-y-2">
        ${
          winner.avatar
            ? `<img src="${API_URL}${winner.avatar}" class="rounded-full object-cover w-16 h-16" draggable="false" alt="Winner Avatar">`
            : `<div class="text-xl text-white font-bold flex justify-center items-center w-16 h-16 ${winnerColor} rounded-full">${firstLetterOfWinner}</div>`
        }
        <span class="text-lg font-semibold text-black">${winner.username}</span>
      </div>

      <!-- Кнопки действий -->
      <div class="flex gap-4 mt-6">
        <button id="rankedPlayAgainBtn" data-i18n='buttons.playAgain' class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 cursor-pointer">${i18next.t("buttons.playAgain")}</button>
        <button id="backToMenuBtn" data-i18n='buttons.backToMenu' class="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 cursor-pointer">${i18next.t("buttons.backToMenu")}</button>
      </div>
    </div>
  `;
}

export function gameOverModal() {
    return `
        <div id="gameOverModal"  class="fixed inset-0 items-center justify-center z-10 hidden">
            <!-- Содержимое будет добавлено динамически -->
        </div>
    `;
}

export function acceptFriendGameModal()
{
  return `
    <div id="friendGameAcceptModal"  class="fixed inset-0 items-center justify-center z-10 hidden">
      <div class="bg-white p-6 rounded-lg shadow-lg text-black space-y-4 w-max h-auto text-center">
        <h2 data-i18n='game.friendsMatchReady' class="text-lg font-semibold">${i18next.t("game.friendsMatchReady")}</h2>

        <button id="acceptGameBtn" data-i18n='buttons.accept' class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-500 cursor-pointer">${i18next.t("buttons.accept")}</button>
        <button id="declineGameBtn" data-i18n='buttons.cancel' class="mt-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 cursor-pointer">${i18next.t("buttons.cancel")}</button>

        
      </div>
      ${getModalWindowError()}
    </div>
  `;
}