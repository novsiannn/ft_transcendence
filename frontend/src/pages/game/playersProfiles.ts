import { getColorFromUsername } from "../../shared/randomColors";
import { store } from "../../store/store";

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
    console.log("rankedPlayerData:", rankedPlayerData);
    return `
            <div id="rankedProfiles">
                <div class="absolute left-16 z-[-1]"> <!-- Добавлено позиционирование -->
                    <div class="flex flex-col items-center">
                        ${
                          rankedPlayerData.firstPlayerAvatar
                            ? `<img id="profileImg" src="${rankedPlayerData.firstPlayerAvatar}" class="rounded-full object-cover w-24 h-24 " draggable="false" alt="Profile Image">`
                            : `<div id="profileImg" class="text-5xl text-white font-bold flex justify-center items-center w-48 h-48 ${rankedPlayerData.firstPlayerColor} rounded-full cursor-pointer select-none">${rankedPlayerData.firstPlayerLetter}</div>`
                        }
                        <span class="mt-2 text-lg text-white">${rankedPlayerData.firstPlayer}</span>
                    </div>
                </div>
                <div class="absolute right-16 z-[-1]"> <!-- Добавлено позиционирование -->
                    <div class="flex flex-col items-center">
                        ${
                          rankedPlayerData.secondPlayerAvatar
                            ? `<img id="profileImg" src="${rankedPlayerData.secondPlayerAvatar}" class="rounded-full object-cover w-24 h-24 " draggable="false" alt="Profile Image">`
                            : `<div id="profileImg" class="text-5xl text-white font-bold flex justify-center items-center w-48 h-48 ${rankedPlayerData.secondPlayerColor} rounded-full cursor-pointer select-none">${rankedPlayerData.secondPlayerLetter}</div>`
                        }
                        <span class="mt-2 text-lg text-white">${rankedPlayerData.secondPlayer}</span>
                    </div>
                </div>
            </div>
    `;
}