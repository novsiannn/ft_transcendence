export const tournamentPlayerData = {
  tournamentNet: [] as number[],
  nicknames: []  as string[],
  avatars: new Map<string, string>(),
  firstPlayerScore: 0,
  secondPlayerScore: 0,
};

export function tournamentPlayerProfiles() {
    let defaultAvatar = "../../img/tournamentDefault.png";
    let defaultNickname = "Player";
    let firstPlayer = tournamentPlayerData.nicknames[tournamentPlayerData.tournamentNet[0]] || defaultNickname;
    let secondPlayer = tournamentPlayerData.nicknames[tournamentPlayerData.tournamentNet[1]] || defaultNickname;
    let firstPlayerAvatar = tournamentPlayerData.avatars.get(firstPlayer) || defaultAvatar;
    let secondPlayerAvatar = tournamentPlayerData.avatars.get(secondPlayer) || defaultAvatar;

    return `
            <div id="tournamentProfiles">
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