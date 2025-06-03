import { getColorFromUsername } from "../../shared/randomColors";
import { API_URL, store } from "../../store/store";

export const tournamentPlayerData = {
  tournamentNet: [] as number[],
  nicknames: []  as string[],
  avatars: new Map<string, string>(),
  firstPlayerScore: 0,
  secondPlayerScore: 0,
};

export const rankedPlayerData = {
    firstPlayer: "",
    secondPlayer: "",
    firstPlayerAvatar: "",
    secondPlayerAvatar: "",
    firstPlayerLetter: "",
    secondPlayerLetter: "",
    firstPlayerColor: "",
    secondPlayerColor: "",
}

export function tournamentPlayerProfiles() {
    let defaultAvatar = "../../img/tournamentDefault.png";
    let defaultNickname = "Player";
    let firstPlayer = tournamentPlayerData.nicknames[tournamentPlayerData.tournamentNet[0]] || defaultNickname;
    let secondPlayer = tournamentPlayerData.nicknames[tournamentPlayerData.tournamentNet[1]] || defaultNickname;
    let firstPlayerAvatar = tournamentPlayerData.avatars.get(firstPlayer) || defaultAvatar;
    let secondPlayerAvatar = tournamentPlayerData.avatars.get(secondPlayer) || defaultAvatar;

    return `
            <div id="tournamentProfiles" class="hidden">
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

export function rankedPlayerProfiles()
{
    return `
            <div id="rankedProfiles">
                <div class="absolute left-16 z-[-1]"> <!-- Добавлено позиционирование -->
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
                <div class="absolute right-16 z-[-1]"> <!-- Добавлено позиционирование -->
                    <div class="flex flex-col items-center">
                        ${
                          rankedPlayerData.secondPlayerAvatar
                            ? `<img id="profileImg2" src="${API_URL}${rankedPlayerData.secondPlayerAvatar}" class="rounded-full object-cover w-24 h-24 " draggable="false" alt="Profile Image">`
                            : `<div id="profileImg2" class="text-3xl text-white font-bold flex justify-center items-center w-24 h-24 ${rankedPlayerData.secondPlayerColor} rounded-full cursor-pointer select-none">${rankedPlayerData.secondPlayerLetter}</div>`
                        }
                        <span class="mt-2 text-lg text-white">${rankedPlayerData.secondPlayer}</span>
                        <button id="playerTwoReadyBtn" class=" hidden mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Ready to Play!</button>
                    </div>
                </div>
            </div>
    `;
}