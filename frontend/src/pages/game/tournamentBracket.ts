import { tournamentData, tournamentPlayerData } from "./playersProfiles";
import i18next from "i18next"

export const getPlayerName = (index: number) => {

const playerIndex = tournamentPlayerData.tournamentNet[index];
const playerName = tournamentPlayerData.nicknames[playerIndex];
return playerName ;
};
export function tournamentBracketPlayers() {

  return `
<div id="bracketFourPlayers" class="fixed inset-0 items-center justify-center z-10 hidden">
  <div class="bg-white p-8 rounded-lg shadow-lg text-black w-max h-auto text-center relative space-y-6">

    <!-- Турнирная сетка -->
    <div class="text-white bg-gray-700 p-8 rounded-lg relative">
      <div class="flex gap-16 items-center justify-center">

        <!-- Полуфинал -->
        <div class="flex flex-col items-center gap-5">
          <div  data-i18n='game.semiFinal' class="font-bold text-lg text-yellow-400 mb-3">${i18next.t("game.semiFinal")}</div>
          <div class="flex flex-col gap-16">

            <!-- Матч 1 -->
            <div class="flex flex-col gap-1">
              <div class="bg-blue-400 border border-blue-600 px-6 py-3 rounded shadow-md min-w-[120px] text-center">${getPlayerName(3)}</div>
              <div class="bg-blue-900 border border-white px-6 py-3 rounded shadow-md min-w-[120px] text-center">${getPlayerName(2)}</div>
            </div>

            <!-- Матч 2 -->
            <div class="flex flex-col gap-1">
              <div class="bg-blue-400 border border-blue-600 px-6 py-3 rounded shadow-md min-w-[120px] text-center">${getPlayerName(1)}</div>
              <div class="bg-blue-900 border border-white px-6 py-3 rounded shadow-md min-w-[120px] text-center">${getPlayerName(0)}</div>
            </div>
          </div>
        </div>

        <!-- Финал -->
        <div class="flex flex-col items-center gap-5">
          <div data-i18n='game.final' class="font-bold text-lg text-yellow-400 mb-3">${i18next.t("game.final")}</div>
          <div class="flex flex-col gap-10">
            <div class="flex flex-col gap-1">
              <div class="bg-blue-400 border border-blue-600 px-6 py-3 rounded shadow-md min-w-[120px] text-center">${tournamentData.final[0] || " ??? "} </div>
              <div class="bg-blue-900 border border-white px-6 py-3 rounded shadow-md min-w-[120px] text-center">${tournamentData.final[1] || " ??? "}</div>
            </div>
          </div>
        </div>

        <!-- Чемпион -->
        <div class="flex flex-col items-center gap-5">
          <div data-i18n='game.champion' class="font-bold text-lg text-yellow-400 mb-3">${i18next.t("game.champion")}</div>
          <div class="bg-yellow-400 text-black font-bold px-8 py-4 rounded-lg shadow-lg text-xl">
            🏆 ${tournamentData.winner}
          </div>
        </div>

      </div>
    </div>

    <!-- Кнопка под сеткой -->
      <button id="bracketBackToMenuBtn" data-i18n='buttons.backToMenu' class="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 ">${i18next.t("buttons.backToMenu")}</button>
      <button id="startTournamentGame" data-i18n='buttons.startGame' class="mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
        ${i18next.t("buttons.startGame")}
    </button>
  </div>
</div>
    `;
}