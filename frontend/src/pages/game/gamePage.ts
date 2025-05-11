import { navigation } from "../../elements/navigation";
import { store, API_URL } from "../../store/store";
import { getColorFromUsername } from "../../shared/randomColors";
// import { getFirstPlayer } from "./playersHandle";
export function gamePage() {
    
    const userPhoto = store.getUser().avatar;
      const color = getColorFromUsername(store.getUser().username);
      const firstLetterOfUser = store.getUser().username.charAt(0).toUpperCase();
      const userNickname = store.getUser().username;
    // сброс отступов и фон
    document.body.style.margin = "0";
    document.body.style.padding = "0";
    document.body.classList.add(    
        "h-screen",
        "flex",
        "items-center",
        "justify-center",
        "bg-gray-500",
        "overflow-hidden");

    return `
        ${navigation()}
<div id="game-container" class="h-screen flex flex-col justify-center items-center gap-6">
        <div class="flex flex-col items-center w-full">
            <!-- Профили игроков -->
            <div class="flex justify-between w-full max-w-7xl px-6 mt-4">
                <div class="flex flex-col items-center">
                ${
                    userPhoto
                      ? `<img id="profileImg" class="rounded-full object-cover w-24 h-24 cursor-pointer" draggable="false" alt="Profile Image">`
                      : `<div id="profileImg" class="text-3xl text-white font-bold flex justify-center items-center w-24 h-24 ${color} rounded-full cursor-pointer select-none">${firstLetterOfUser}</div>`
                  }
                    <span class="mt-2 text-lg text-white">${userNickname}</span>
                </div>
                <div class="flex flex-col items-center">
                ${
                    userPhoto
                      ? `<img id="profileImg" class="rounded-full object-cover w-24 h-24 cursor-pointer" draggable="false" alt="Profile Image">`
                      : `<div id="profileImg" class="text-3xl text-white font-bold flex justify-center items-center w-24 h-24 ${color} rounded-full cursor-pointer select-none">${firstLetterOfUser}</div>`
                  }
                    <span class="mt-2 text-lg text-white">Player 2</span>
                </div>
            </div>
            <!-- Заголовок -->
            <h1 id="startText" class="text-4xl text-white mt-6">Press SPACE To START GAME</h1>
            <h1 id="countdown" class="text-4xl text-white mt-6 hidden">3</h1>
            <!-- Счёт -->
            <p id="score-info" class="text-4xl text-white mt-4">0 : 0</p>
            <!-- Игровое поле -->
            <canvas 
                id="game-board" 
                width="1300" 
                height="500" 
                class="border-8 border-black bg-gray-950 rounded-lg mt-4 relative"
                style="
                    box-shadow: 
                        0 0 5px #fff,
                        0 0 10px #fff,
                        0 0 15px #fff,
                        0 0 20px #fff,
                        0 0 25px #fff,
                        0 0 30px #fff,
                        0 0 35px #fff;
                "
            ></canvas>
             <div class="absolute inset-0 pointer-events-none" style="box-shadow: 0 0 15px 5px rgba(255,255,255,0.5);"></div>
            </div>

            <!-- Кнопка рестарта -->
            <button id="restart-btn" class="mt-2 px-4 py-2 border-8 border-crimson rounded-lg bg-gray-500 text-white text-2xl hover:bg-gray-600 transition"> Restart </button>
        </div>
    </div>
    `;
}
