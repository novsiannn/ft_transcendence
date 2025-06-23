import { getColorFromUsername } from "../../shared/randomColors";
import { API_URL, store } from "../../store/store";
import { findUser } from "../../shared";
import { getPlayerName } from "./tournamentBracket";

export const tournamentPlayerData = {
  tournamentNet: [] as number[],
  nicknames: []  as string[],
  avatars: new Map<string, string>(),
  firstPlayerScore: 0,
  secondPlayerScore: 0,
};

export let tournamentData = {
    quarterFinal: [] as string[],
    semiFinal: [] as string[],
    final: [] as string[],
    winner: "" as string
}

export const rankedPlayerData = {
    firstPlayer: "",
    secondPlayer: "",
    firstPlayerAvatar: "",
    secondPlayerAvatar: "",
    firstPlayerLetter: "",
    secondPlayerLetter: "",
    firstPlayerColor: "",
    secondPlayerColor: "",
    firstPlayerScore: 0,
    secondPlayerScore: 0
}

export function tournamentPlayerProfiles() {
    let defaultAvatar = "../../img/tournamentDefault.png";
    let defaultNickname = "Player";
    let firstPlayer = window.tournamentPlayerNickname1 || defaultNickname;
    let secondPlayer = window.tournamentPlayerNickname2 || defaultNickname;
    let firstPlayerAvatar = tournamentPlayerData.avatars.get(firstPlayer) || defaultAvatar;
    let secondPlayerAvatar = tournamentPlayerData.avatars.get(secondPlayer) || defaultAvatar;

    return `
            <div id="tournamentProfiles" class="">
                <div class="absolute left-16 z-[-1]"> <!-- Добавлено позиционирование -->
                    <div class="flex flex-col items-center">
                        <img id="player1Img" src ="${firstPlayerAvatar}" class="rounded-full object-cover w-24 h-24" draggable="false" alt="Player1 Image">
                        <span class="mt-2 text-lg text-white">${firstPlayer}</span>
                    </div>
                </div>
                <div class="absolute right-16 z-[-1]"> <!-- Добавлено позиционирование -->
                    <div class="flex flex-col items-center">
                        <img id="player2Img" src ="${secondPlayerAvatar}" class="rounded-full object-cover w-24 h-24" draggable="false" alt="Player2 Image">
                        <span class="mt-2 text-lg text-white">${secondPlayer}</span>
                    </div>
                </div>
            </div>
    `;
}

export function rankedPlayerProfiles() {
    return `
        <div class="absolute left-16 z-10">
            <div class="flex flex-col items-center">
                ${
                  rankedPlayerData.firstPlayerAvatar
                    ? `<img id="profileImg1" src="${API_URL}${rankedPlayerData.firstPlayerAvatar}" class="rounded-full object-cover w-24 h-24 " draggable="false" alt="Profile Image">`
                    : `<div id="profileImg1" class="text-3xl text-white font-bold flex justify-center items-center w-24 h-24 ${rankedPlayerData.firstPlayerColor} rounded-full cursor-pointer select-none">${rankedPlayerData.firstPlayerLetter}</div>`
                }
                <span class="mt-2 text-lg text-white">${rankedPlayerData.firstPlayer}</span>
                <button id="playerOneReadyBtn" class="hidden mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Ready to Play!</button>
            </div>
        </div>
        <div class="absolute right-16 z-10">
            <div class="flex flex-col items-center">
                ${
                  rankedPlayerData.secondPlayerAvatar
                    ? `<img id="profileImg2" src="${API_URL}${rankedPlayerData.secondPlayerAvatar}" class="rounded-full object-cover w-24 h-24 " draggable="false" alt="Profile Image">`
                    : `<div id="profileImg2" class="text-3xl text-white font-bold flex justify-center items-center w-24 h-24 ${rankedPlayerData.secondPlayerColor} rounded-full cursor-pointer select-none">${rankedPlayerData.secondPlayerLetter}</div>`
                }
                <span class="mt-2 text-lg text-white">${rankedPlayerData.secondPlayer}</span>
                <button id="playerTwoReadyBtn" class="hidden mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Ready to Play!</button>
            </div>
        </div>
    `;
}

// ...existing code...

export function clearRankedPlayerData() {
    rankedPlayerData.firstPlayer = "";
    rankedPlayerData.secondPlayer = "";
    rankedPlayerData.firstPlayerAvatar = "";
    rankedPlayerData.secondPlayerAvatar = "";
    rankedPlayerData.firstPlayerLetter = "";
    rankedPlayerData.secondPlayerLetter = "";
    rankedPlayerData.firstPlayerColor = "";
    rankedPlayerData.secondPlayerColor = "";
    rankedPlayerData.firstPlayerScore = 0;
    rankedPlayerData.secondPlayerScore = 0;
}

// ...existing code...

export function rankedPlayerProfilesContainer() {
    return `
        <div id="rankedProfiles" class="hidden">
            ${rankedPlayerProfiles()}
        </div>
    `;
}

export function updateRankedProfilesPositions(gameState: any) {
    const playerIds = Object.keys(gameState.paddles);
    
    if (playerIds.length >= 2) {
        const player1Id = parseInt(playerIds[0]);
        const player2Id = parseInt(playerIds[1]);
        
        const player1X = gameState.paddles[playerIds[0]].x;
        const player2X = gameState.paddles[playerIds[1]].x;
        
        // Определяем, кто слева, кто справа по позиции ракетки
        let leftPlayerId, rightPlayerId;
        
        if (player1X < player2X) {
            leftPlayerId = player1Id;
            rightPlayerId = player2Id;
        } else {
            leftPlayerId = player2Id;
            rightPlayerId = player1Id;
        }
        
        // Получаем данные игроков
        const leftUser = findUser(leftPlayerId);
        const rightUser = findUser(rightPlayerId);
        
        if (leftUser && rightUser) {
            // Обновляем данные для левого игрока (firstPlayer)
            rankedPlayerData.firstPlayer = leftUser.username;
            rankedPlayerData.firstPlayerAvatar = leftUser.avatar || "";
            rankedPlayerData.firstPlayerLetter = leftUser.username.charAt(0).toUpperCase();
            rankedPlayerData.firstPlayerColor = getColorFromUsername(leftUser.username);
            
            // Обновляем данные для правого игрока (secondPlayer)
            rankedPlayerData.secondPlayer = rightUser.username;
            rankedPlayerData.secondPlayerAvatar = rightUser.avatar || "";
            rankedPlayerData.secondPlayerLetter = rightUser.username.charAt(0).toUpperCase();
            rankedPlayerData.secondPlayerColor = getColorFromUsername(rightUser.username);
            
            // Перерендериваем профили
            updateProfilesHTML();
            
            // Устанавливаем видимость кнопок Ready на основе реальных позиций
            updateReadyButtonsVisibility(leftPlayerId, rightPlayerId);
        }
    }
}

function updateReadyButtonsVisibility(leftPlayerId: number, rightPlayerId: number) {
    // Не изменяем видимость кнопок после переопределения позиций
    // Кнопки уже правильно настроены в setupInitialReadyButtonsVisibility
    // и привязаны к изначальным player1Id/player2Id, а не к позициям ракеток
}

// Добавьте эту функцию в playersProfiles.ts
export function updateProfilesHTML() {
    const rankedProfilesContainer = document.querySelector('#rankedProfiles');
    if (rankedProfilesContainer) {
        // Сохраняем состояние кнопок перед обновлением
        const playerOneBtn = document.querySelector("#playerOneReadyBtn") as HTMLButtonElement;
        const playerTwoBtn = document.querySelector("#playerTwoReadyBtn") as HTMLButtonElement;
        
        const buttonStates = {
            playerOne: {
                disabled: playerOneBtn?.hasAttribute("disabled"),
                text: playerOneBtn?.textContent,
                classes: playerOneBtn?.className
            },
            playerTwo: {
                disabled: playerTwoBtn?.hasAttribute("disabled"),
                text: playerTwoBtn?.textContent,
                classes: playerTwoBtn?.className
            }
        };
        
        rankedProfilesContainer.innerHTML = rankedPlayerProfiles();
        
        // Восстанавливаем состояние кнопок после обновления
        const newPlayerOneBtn = document.querySelector("#playerOneReadyBtn") as HTMLButtonElement;
        const newPlayerTwoBtn = document.querySelector("#playerTwoReadyBtn") as HTMLButtonElement;
        
        if (newPlayerOneBtn && buttonStates.playerOne.disabled) {
            newPlayerOneBtn.setAttribute("disabled", "true");
            newPlayerOneBtn.textContent = buttonStates.playerOne.text || "Ready!";
            newPlayerOneBtn.className = buttonStates.playerOne.classes || newPlayerOneBtn.className;
        }
        
        if (newPlayerTwoBtn && buttonStates.playerTwo.disabled) {
            newPlayerTwoBtn.setAttribute("disabled", "true");
            newPlayerTwoBtn.textContent = buttonStates.playerTwo.text || "Ready!";
            newPlayerTwoBtn.className = buttonStates.playerTwo.classes || newPlayerTwoBtn.className;
        }
        
        // После обновления HTML нужно переустановить обработчики кнопок
        const event = new CustomEvent('profilesUpdated');
        document.dispatchEvent(event);
    }
}