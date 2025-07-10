import { navigation } from "../../elements/navigation";
import { store, API_URL } from "../../store/store";
import { getColorFromUsername } from "../../shared/randomColors";
import { friendsMatchModal, preGameModal, rankedGameModal, tournamentModal, acceptFriendGameModal } from "./gameModal";
import { tournamentPlayerProfiles, rankedPlayerProfiles, rankedPlayerProfilesContainer } from "./playersProfiles";
import { tournamentBracketPlayers } from "./tournamentBracket";
import { gameOverModal } from "./gameModal";
import { getModalWindowError } from "../../elements";
import { getModalWindowSuccess } from "../../elements/ModalSuccess";

export function gamePage() {
    
    const userPhoto = store.getUser().avatar;
      const color = getColorFromUsername(store.getUser().username);
      const firstLetterOfUser = store.getUser().username.charAt(0).toUpperCase();
      const userNickname = store.getUser().username;

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
            <!-- Модальное окно перед началом игры -->
            ${preGameModal()}
            ${tournamentModal()}
            ${friendsMatchModal()}
            ${acceptFriendGameModal()}
            ${rankedGameModal()}
            ${tournamentBracketPlayers()}    
            

            
            <div class="flex flex-col items-center w-full">
            <!-- Профили игроков -->
            <div class="flex justify-between w-[1300px] px-6 mt-4"> <!-- Изменено с max-w-7xl на w-[1300px] -->
            ${tournamentPlayerProfiles()}
            ${rankedPlayerProfilesContainer()}
            </div>
            
            <!-- Таймер -->
            <h1 id="countdown" class="text-4xl text-white mt-6 hidden">5</h1>
            <!-- Счёт -->
            <p id="score-info" class="text-4xl text-white mt-6 hidden">0 : 0</p>
            
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
            ${gameOverModal()}
            ${getModalWindowError()}
            ${getModalWindowSuccess()}
        </div>
    </div>
    `;
}
