import { BtnAccept } from "../../elements/BtnAccept";
import { BtnAdd } from "../../elements/BtnAdd";
import { BtnCancel } from "../../elements/BtnCancel";
import { BtnDelete } from "../../elements/BtnDelete";
import { BtnReject } from "../../elements/BtnReject";
import { getModalWindowSuccess } from "../../elements/ModalSuccess";
import { navigation } from "../../elements/navigation";

export function profilePage(mainWrapper: HTMLDivElement | undefined) {
  document.body.classList.add("bg-gray-500", "overflow-hidden");

  return `
    ${navigation()}
    ${getModalWindowSuccess()}
    <div class="w-full bg-gray-300 min-h-screen flex flex-col font-sans ">
      <div class="bg-white mx-auto mt-8 w-1/2 shadow-md rounded-3xl p-6 text-center mb-8">
        <div class="flex flex-col min-h-full items-center gap-4" id="profileDataContainer">
          <div id="profileImgEmpty" class=" text-white text-3xl font-bold rounded-full w-24 h-24 flex items-center justify-center">
          </div>
          <h2 id="userNameProfile" class="text-xl font-bold text-gray-800"></h2>
            <div class="flex" id="profileLvlContainer">
                <p class="text-gray-500 font-bold text-md" id="profileElo"></p>
            </div>
            <div class="flex gap-2 items-center ml-2" id="profileButtonsContainer">
                      ${BtnCancel()}
                      ${BtnAdd()}
                      ${BtnAccept()}
                      ${BtnReject()}
                      ${BtnDelete()}
            </div>
        </div>
        
        <div class="mt-6 mb-4">
            <div class="flex justify-between" >
                <p class="text-sm text-gray-600" >Level 0</p>
                <p class="text-sm text-gray-600 mt-1">0 / 1000 XP</p>
            </div>
          <div class="w-full bg-gray-200 rounded-full h-2 mt-1">
            <div class="bg-gray-400 h-2 rounded-full" style="width: 0%"></div>
          </div>
        </div>

        <div class=" mx-auto flex justify-between items-stretch mt-6 text-gray-700 font-semibold">
            <div class="flex-1 text-center h-full">
                <p class="text-2xl" id="profileLvl"></p>
                <p class="text-sm">Level</p>
            </div>
            <div class="flex-1 text-center h-full">
                <p class="text-2xl" id="profileFriends">0</p>
                <p class="text-sm">Friends</p>
            </div>
            <div class="flex-1 text-center h-full">
                <p class="text-2xl" id="profileMatchesPlayed"></p>
                <p class="text-sm">Matches played</p>
            </div>
        </div>
      </div>

      <div class="bg-white mx-auto shadow-md rounded-3xl p-6 w-1/2">
        <h3 class="text-center text-xl text-gray-800 mb-4 font-bold">Game Statistics</h3>
        <div class="w-full mx-auto flex gap-4 justify-between text-center text-gray-700 font-semibold">
          <div class="bg-gray-100 w-full rounded-xl py-3">
            <p class="text-green-500 text-2xl" id="profileMatchesWin"></p>
            <p class="text-sm text-gray-500">Wins</p>
          </div>
          <div class="bg-gray-100 w-full rounded-xl py-3">
            <p class="text-red-600 text-2xl" id="profileMatchesLost"></p>
            <p class="text-sm text-gray-500">Losses</p>
          </div>
        </div>

        <div class="mt-4 text-center w-full bg-gray-100 py-3 rounded-xl">
          <p class="text-black font-bold text-md" id="profileWinrate"></p>
          <p class="text-sm text-gray-500">Win Rate</p>
        </div>
      </div>
    </div>
  `;
}
