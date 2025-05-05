import { navigation } from "../../elements/nagivation";
import { getFirstPlayer } from "./playersHandle";
export function gamePage() {
    document.body.style.margin = "0";
    document.body.style.padding = "0";
    document.body.classList.add("bg-gradient-to-t", "from-black", "via-black", "to-gray-800");
    return `
        ${navigation()}
        <div>${getFirstPlayer}</div>
        <div>
            <h1 class="text-4xl text-white" id=startText>Press SPACE To START GAME</h1>
            <div class="flex flex-row gap-2">
            </div>
        </div>
        <canvas id="game-board" width="1300" height="500" class="border bg-gray-500"></canvas>

        <p id="score-info" class="text-4xl text-white" class="bg-gray-500" > Score </p>
        <button id="restart-btn" class="px-3 py-1 border-2 border-crimson rounded-[10px] bg-gray-500 text-white text-[25px]"> Restart </button>`;
}