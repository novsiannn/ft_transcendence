import { getModalWindowSuccess } from "../../elements/ModalSuccess";
import { navigation } from "../../elements/navigation";

export function profilePage(mainWrapper: HTMLDivElement | undefined) {
  document.body.classList.add("bg-gray-500");

  return `
    ${navigation()}
    ${getModalWindowSuccess()}
    <div class="w-full bg-gray-300 min-h-screen flex flex-col font-sans ">
      <div class="bg-white mx-auto mt-8 w-1/2 shadow-md rounded-3xl p-6 text-center mb-8">
        <div class="flex flex-col min-h-full items-center gap-4" id="profileDataContainer">
          <img id="profileImg" class="hidden rounded-full w-20 h-20 object-cover"></img>
          <div id="profileImgEmpty" class=" relative text-white text-3xl font-bold rounded-full w-24 h-24 flex items-center justify-center">
          </div>
            <div class="flex flex-col gap-2">
              <h2 id="userNameProfile" class="text-xl font-bold text-gray-800"></h2>
              <div id="userOnlineStatusProfile" class="flex justify-center">
              
              </div>
              <div class="flex" id="profileLvlContainer">
                  <p class="text-gray-500 font-bold text-md" id="profileElo"></p>
              </div>
            </div>
    
            <div class="flex gap-2 items-center ml-2" id="profileButtonsContainer">
                      
            </div>
        </div>
        
        

        <div class=" mx-auto flex justify-between items-stretch mt-6 text-gray-700 font-semibold">
            <div class="flex-1 text-center h-full">
                <p class="text-2xl" id="profileLvl"></p>
                <p class="text-sm" data-i18n='profile.level'></p>
            </div>
            <div class="flex-1 text-center h-full">
                <p class="text-2xl" id="profileFriends"></p>
                <p class="text-sm" data-i18n='profile.friends'></p>
            </div>
            <div class="flex-1 text-center h-full">
                <p class="text-2xl" id="profileMatchesPlayed"></p>
                <p class="text-sm" data-i18n='profile.matchesPlayed'></p>
            </div>
        </div>
      </div>

      <div class="bg-white mx-auto shadow-md rounded-3xl p-6 w-1/2">
        <h3 class="text-center text-xl text-gray-800 mb-4 font-bold" data-i18n='profile.gameStatistics'></h3>
        <div class="w-full mx-auto flex gap-4 justify-between text-center text-gray-700 font-semibold">
          <div class="bg-gray-100 w-full rounded-xl py-3">
            <p class="text-green-500 text-2xl" id="profileMatchesWin"></p>
            <p class="text-sm text-gray-500" data-i18n='profile.wins'></p>
          </div>
          <div class="bg-gray-100 w-full rounded-xl py-3">
            <p class="text-red-600 text-2xl" id="profileMatchesLost"></p>
            <p class="text-sm text-gray-500" data-i18n='profile.losses'></p>
          </div>
        </div>

        <div class="mt-4 text-center w-full bg-gray-100 py-3 rounded-xl">
          <p class="text-black font-bold text-md" id="profileWinrate"></p>
          <p class="text-sm text-gray-500" data-i18n='profile.winRate'></p>
        </div>
      </div>

      <div class="bg-white mx-auto shadow-md rounded-3xl p-6 w-1/2 mt-6 mb-16">
        <h3 class="text-center text-xl text-gray-800 mb-4 font-bold" data-i18n='profile.matchHistory'> Match History</h3>
        <div id="matchResultContainer">
        </div>
      </div>
    </div>
  `;
}
