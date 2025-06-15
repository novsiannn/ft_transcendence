import { handleModalError } from "../../elements";
import { navigationHandle } from "../../elements/navigation";
import { tournamentPlayerData, rankedPlayerData, tournamentPlayerProfiles, rankedPlayerProfiles, updateRankedProfilesPositions } from "./playersProfiles";
import { API_URL, store} from "../../store/store";
import instanceAPI from "../../services/api/instanceAxios";
import { getColorFromUsername } from "../../shared/randomColors";
import {
    IGameState,
    getCurrentGameState,
    gameState,
    socket, 
    // joinGame, 
    movePaddle, 
    startGame as startWebSocketGame, 
    leaveGame,
    onMatchFound,
    onGameReady,
    onGameUpdate,
    onGameStart,
    onGameFinished,
    onGameError,
    clearGameCallbacks
} from "../../websockets/client";
import { findUser } from "../../shared";
import { tournamentBracket } from "./tournamentBracket";
import { rankedWinnerData, gameOverModal, gameOverModalCreator } from "./gameModal";

export function handleGame(mainWrapper: HTMLDivElement | undefined) {
    navigationHandle();
    const scoreInfo = document.querySelector("#score-info");
    const gameBoard = document.getElementById("game-board") as HTMLCanvasElement;
    
    let intervalID: ReturnType<typeof setInterval>;
    let isGameRunning = false;
    let isWaitingForStart = false;
    let gameStartedOnce = false;

    // Игровые переменные для режимов
    let gameMode: 'local' | 'multiplayer' | null = null;
    let currentGameId: string | null = null;

    mainWrapper!.id = "game-container";
    mainWrapper!.classList.add("h-screen", "flex", "flex-col", "gap-2.5", "justify-center", "items-center");
    const context = gameBoard?.getContext("2d");

    const gameBoardColor = window.getComputedStyle(gameBoard).backgroundColor;
    const firstPaddleColor = "white";
    const secondPaddleColor = "white";

    let currentGameState = getCurrentGameState();
    
    // const moveFirstPaddleKey = {
    //     up: "w",
    //     down: "s"
    // }
    
    // const moveSecondPaddleKey = {
    //     up: "arrowup",
    //     down: "arrowdown"
    // }

    const keys = new Set<string>();

    let firstPlayerScore = currentGameState.paddles['1'].score;
    let secondPlayerScore = currentGameState.paddles['2'].score || 0;

    const firstPaddleInitial = {
        x: currentGameState.paddles['1'].x,
        y: currentGameState.paddles['1'].y,
    }
    
    const secondPaddleInitial = {
        x: currentGameState.paddles['2'].x,
        y: currentGameState.paddles['2'].y,
    }

    let firstPaddle = { ...firstPaddleInitial };
    let secondPaddle = { ...secondPaddleInitial };

    const paddleEffects = {
        glowSize: 15,      
        glowIntensity: 3,    
        glowColor: 'white',  
        baseColor: 'white'   
    }

    // const ballInitial = {
    //     x: gameBoardWidth / 2,
    //     y: gameBoardHeight / 2,
    // }
    
    
    let ball = currentGameState.ball;

    const ballDirection = {
        x: currentGameState.ball.direction.x,
        y: currentGameState.ball?.direction.y,
    }

    let profilesLastUpdate: string = "";

    function checkIfProfilesNeedUpdate(gameState: IGameState): boolean {
        const playerIds = Object.keys(gameState.paddles);
        if (playerIds.length < 2) return false;
        
        // Создаем ключ состояния для отслеживания изменений
        const currentState = `${playerIds[0]}-${gameState.paddles[playerIds[0]].x}-${playerIds[1]}-${gameState.paddles[playerIds[1]].x}`;
        
        if (profilesLastUpdate !== currentState) {
            profilesLastUpdate = currentState;
            return true;
        }
        
        return false;
    }

    function renderGame(gameState: IGameState) {
        // Обновляем позиции профилей только если они еще не синхронизированы с позициями ракеток
        const shouldUpdateProfiles = checkIfProfilesNeedUpdate(gameState);
        if (shouldUpdateProfiles) {
            updateRankedProfilesPositions(gameState);
        }
        
        // Получаем ID игроков динамически
        const playerIds = Object.keys(gameState.paddles);
        
        if (playerIds.length >= 2) {
            // Обновляем локальные переменные (если нужны для других функций)
            firstPlayerScore = gameState.paddles[playerIds[0]].score;
            secondPlayerScore = gameState.paddles[playerIds[1]].score;
        }

        // Обновляем мяч
        ball.x = gameState.ball.x;
        ball.y = gameState.ball.y;

        // Отрисовываем (очищаем canvas перед отрисовкой)
        context!.clearRect(0, 0, gameState.settings.boardWidth, gameState.settings.boardHeight);
        
        drawBoard(gameState);
        drawPaddles(gameState);
        drawBall(gameState);
        updateScore(gameState);
    }

    function drawBoard(gameState: IGameState) {
        context!.fillStyle = gameBoardColor;
        context!.fillRect(0, 0,gameState.settings.boardWidth,gameState.settings.boardHeight);
    }

    function drawPaddle(paddleX: number, paddleY: number, paddleColor: string, gameState: IGameState) {
        const { glowSize, glowIntensity } = paddleEffects;
        const radius = gameState.settings.paddleWidth / 2;
    
        for(let i = 0; i < glowIntensity; i++) {
            context!.beginPath();
            context!.shadowColor = paddleColor;
            context!.shadowBlur = glowSize + (i * 5);
            context!.shadowOffsetX = 0;
            context!.shadowOffsetY = 0;
            context!.fillStyle = 'rgba(255, 255, 255, 0.2)';
            
            roundRect(
                context!,
                paddleX - i,
                paddleY - i,
                gameState.settings.paddleWidth + (i * 2),
                gameState.settings.paddleHeight + (i * 2),
                radius
            );
            context!.fill();
        }
    
        context!.beginPath();
        context!.shadowColor = 'transparent';
        context!.fillStyle = paddleColor;
        
        roundRect(
            context!,
            paddleX,
            paddleY,
            gameState.settings.paddleWidth,
            gameState.settings.paddleHeight,
            radius
        );
        context!.fill();
    
        context!.shadowColor = 'transparent';
        context!.shadowBlur = 0;
    }
    
    function roundRect(
        ctx: CanvasRenderingContext2D,
        x: number,
        y: number,
        width: number,
        height: number,
        radius: number
    ) {
        ctx.beginPath();
        ctx.moveTo(x + radius, y);
        ctx.arcTo(x + width, y, x + width, y + height, radius);
        ctx.arcTo(x + width, y + height, x, y + height, radius);
        ctx.arcTo(x, y + height, x, y, radius);
        ctx.arcTo(x, y, x + width, y, radius);
        ctx.closePath();
    }

function drawPaddles(gameState: IGameState) {
    const currentUserId = store.getUser().id;
    const playerIds = Object.keys(gameState.paddles);
    
    if (playerIds.length >= 2) {
        const player1Id = parseInt(playerIds[0]);
        const player2Id = parseInt(playerIds[1]);
        
        const player1X = gameState.paddles[playerIds[0]].x;
        const player2X = gameState.paddles[playerIds[1]].x;
        
        // Определяем, кто слева, кто справа
        let leftPlayerId, rightPlayerId, leftPaddle, rightPaddle;
        
        if (player1X < player2X) {
            // Player1 слева, Player2 справа
            leftPlayerId = player1Id;
            rightPlayerId = player2Id;
            leftPaddle = gameState.paddles[playerIds[0]];
            rightPaddle = gameState.paddles[playerIds[1]];
        } else {
            // Player2 слева, Player1 справа
            leftPlayerId = player2Id;
            rightPlayerId = player1Id;
            leftPaddle = gameState.paddles[playerIds[1]];
            rightPaddle = gameState.paddles[playerIds[0]];
        }
        let leftColor = "white";
        let rightColor = "white";
        // Цвета: текущий игрок - синий, противник - белый
        if(gameState.isRunning){
            leftColor = (leftPlayerId === currentUserId) ? "#3B82F6" : "white";
            rightColor = (rightPlayerId === currentUserId) ? "#3B82F6" : "white";
        }
        
        // Отрисовываем ракетки
        drawPaddle(leftPaddle.x, leftPaddle.y, leftColor, gameState);
        drawPaddle(rightPaddle.x, rightPaddle.y, rightColor, gameState);
    }
}

    function drawBall(gameState: IGameState) {
        for(let i = 0; i < 3; i++) {
            context!.beginPath();
            context!.shadowColor = 'white';
            context!.shadowBlur = 20 + (i * 5);
            context!.shadowOffsetX = 0;
            context!.shadowOffsetY = 0;
            context!.fillStyle = 'rgba(255, 255, 255, 1)';
            context!.arc(gameState.ball.x,gameState.ball.y, gameState.settings.ballRadius + i, 0, Math.PI * 2);
            context!.fill();
        }
        
        context!.beginPath();
        context!.shadowColor = 'transparent';
        context!.arc(gameState.ball.x, gameState.ball.y, gameState.settings.ballRadius, 0, Math.PI * 2);
        context!.fill();
        
        context!.shadowColor = 'transparent';
        context!.shadowBlur = 0;
    }

    function updateScore(gameState: IGameState) {

        const currentUserId = store.getUser().id;
    
        // Находим ID игроков
        const playerIds = Object.keys(gameState.paddles);

        let leftPlayerScore = 0;
        let rightPlayerScore = 0;
        
        // Определяем, кто слева, кто справа по позиции X
        const player1Id = playerIds[0];
        const player2Id = playerIds[1];
        
        const player1X = gameState.paddles[player1Id].x;
        const player2X = gameState.paddles[player2Id].x;
        
        // Игрок с меньшим X слева, с большим X справа
        if (player1X < player2X) {
            leftPlayerScore = gameState.paddles[player1Id].score;
            rightPlayerScore = gameState.paddles[player2Id].score;
        } else {
            leftPlayerScore = gameState.paddles[player2Id].score;
            rightPlayerScore = gameState.paddles[player1Id].score;
        }

        scoreInfo!.textContent = `${leftPlayerScore} : ${rightPlayerScore}`;
    }

    // РЕЖИМЫ ИГРЫ
    function initTournamentGame() {
        gameMode = 'local';
        cleanupCurrentGame();
        
        scoreInfo!.classList.remove('hidden');
        
        // Start local tournament game directly
        setTimeout(() => {
            // startActualGame();
        }, 1000);
    }

    function setupRankedListeners() {
        onMatchFound((data: any) => {
            rankedGameModal?.classList.add("hidden");

            const gameId = data.game.id.toString();
            initMultiplayerGame(gameId);

            updatePlayerProfiles(data);
            setupButtonDelegation(gameId);



            resetMatchmakingButtons();

        });
    }

    function resetMatchmakingButtons() {
        cancelRankedMatchBtn?.classList.add("hidden");
        startRankedMatchBtn?.classList.remove("hidden");
    }

    let currentGame: any = null; // Добавьте эту переменную в начало функции handleGame

function getCurrentGame() {
    return currentGame;
}

function updatePlayerProfiles(gameData: any) {
    let game;
    if (gameData.game) {
        game = gameData.game;
    } else {
        game = gameData;
    }
    currentGame = game;
    
    const currentUserId = store.getUser().id;
    const user1 = findUser(game.player1Id);
    const user2 = findUser(game.player2Id);
    
    console.log("Updating player profiles with game data:", game);
    console.log("Current user ID:", currentUserId);
    console.log("Player1 ID:", game.player1Id, "Player2 ID:", game.player2Id);

    // Инициализируем профили с данными игроков
    if (user1 && user2) {
        // Устанавливаем данные согласно player1Id и player2Id (до определения позиций ракеток)
        rankedPlayerData.firstPlayer = user1.username;
        rankedPlayerData.firstPlayerAvatar = user1.avatar || "";
        rankedPlayerData.firstPlayerLetter = user1.username.charAt(0).toUpperCase();
        rankedPlayerData.firstPlayerColor = getColorFromUsername(user1.username);
        
        rankedPlayerData.secondPlayer = user2.username;
        rankedPlayerData.secondPlayerAvatar = user2.avatar || "";
        rankedPlayerData.secondPlayerLetter = user2.username.charAt(0).toUpperCase();
        rankedPlayerData.secondPlayerColor = getColorFromUsername(user2.username);
        
        // Обновляем HTML профилей
        const rankedProfilesContainer = document.querySelector('#rankedProfiles');
        if (rankedProfilesContainer) {
            rankedProfilesContainer.innerHTML = rankedPlayerProfiles();
        }
        
        // Устанавливаем видимость кнопок Ready на основе player1Id/player2Id
        setupInitialReadyButtonsVisibility(game.player1Id, game.player2Id);
    }
}

function setupInitialReadyButtonsVisibility(player1Id: number, player2Id: number) {
    const currentUserId = store.getUser().id;
    const playerOneReadyBtn = document.querySelector("#playerOneReadyBtn") as HTMLButtonElement;
    const playerTwoReadyBtn = document.querySelector("#playerTwoReadyBtn") as HTMLButtonElement;
    
    if (playerOneReadyBtn && playerTwoReadyBtn) {
        if (currentUserId === player1Id) {
            // Текущий пользователь - первый игрок (firstPlayer в левой позиции)
            playerOneReadyBtn.classList.remove("hidden");
            playerTwoReadyBtn.classList.add("hidden");
        } else if (currentUserId === player2Id) {
            // Текущий пользователь - второй игрок (secondPlayer в правой позиции)
            playerOneReadyBtn.classList.add("hidden");
            playerTwoReadyBtn.classList.remove("hidden");
        } else {
            // Текущий пользователь не участвует в игре
            playerOneReadyBtn.classList.add("hidden");
            playerTwoReadyBtn.classList.add("hidden");
        }
    }
}

    function setupReadyButtonsVisibility(isCurrentUserPlayer1: boolean, isCurrentUserPlayer2: boolean) {
        // Не устанавливаем видимость кнопок здесь, это будет делаться в updateRankedProfilesPositions
        // после правильного определения позиций игроков
    }

    function setupButtonDelegation(gameId: string) {
        const currentUserId = store.getUser().id;
        
        // Создаем новый обработчик
        const handleReadyButtonClick = (e: Event) => {
            const target = e.target as HTMLElement;
            
            if (target.id === "playerOneReadyBtn" || target.id === "playerTwoReadyBtn") {
                e.stopPropagation();
                
                // Проверяем, имеет ли пользователь право нажимать эту кнопку
                const game = getCurrentGame();
                const isCurrentUserPlayer1 = currentUserId === game?.player1Id;
                const isCurrentUserPlayer2 = currentUserId === game?.player2Id;
                
                const isPlayer1Button = target.id === "playerOneReadyBtn";
                const isPlayer2Button = target.id === "playerTwoReadyBtn";
                
                // Проверяем соответствие кнопки и игрока
                // playerOneReadyBtn для player1Id, playerTwoReadyBtn для player2Id
                if ((isPlayer1Button && !isCurrentUserPlayer1) || (isPlayer2Button && !isCurrentUserPlayer2)) {
                    return;
                }
                
                // Обновляем UI кнопки
                target.classList.add("opacity-50");
                target.classList.add("cursor-not-allowed");
                target.classList.remove("hover:bg-blue-600");
                target.setAttribute("disabled", "true");
                target.textContent = "Ready!";
                
                // Отправляем событие на сервер
                socket?.emit('game:join', gameId);
            }
        };
        
        // Добавляем новый обработчик
        rankedProfiles?.addEventListener("click", handleReadyButtonClick);
        
        // Слушаем событие обновления профилей для переустановки обработчиков
        document.addEventListener('profilesUpdated', () => {
            rankedProfiles?.removeEventListener("click", handleReadyButtonClick);
            rankedProfiles?.addEventListener("click", handleReadyButtonClick);
        });
    }

function setupKeyboardHandlers() {
    // Убираем старые обработчики, чтобы избежать дублирования
    window.removeEventListener("keydown", handleKeyDown);
    window.removeEventListener("keyup", handleKeyUp);
    
    // Добавляем новые
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    
}

function setupMultiplayerSocketHandlers() {
    // Очищаем старые обработчики
    clearGameCallbacks();
    
    onGameUpdate((gameState) => {
        renderGame(gameState);
    });

    onGameStart((gameState) => {
        console.log("Game started!");
        isGameRunning = true;
        renderGame(gameState);
        scoreInfo!.classList.remove('hidden');
    });

    onGameFinished((result) => {
        console.log("Game finished:", result);
        handleGameOver(result);
    });

    onGameError((error) => {
        console.error("Game error:", error);
    });
}

    function initMultiplayerGame(gameId: string) {
        const rankedProfilesContainer = document.querySelector('#rankedProfiles');
        gameMode = 'multiplayer';
        currentGameId = gameId;
        currentGameState = getCurrentGameState();

        socket?.emit('mm:leave', gameId);
        renderGame(currentGameState);
        
        scoreInfo!.classList.remove('hidden');

        setupMultiplayerSocketHandlers();
        setupKeyboardHandlers();
        rankedProfilesContainer?.classList.remove("hidden");
        // initGame();
    }

function cleanupCurrentGame() {
    if (currentGameId) {
        leaveGame(currentGameId);
    }
    clearGameCallbacks();
    
    // Убираем обработчики клавиш
    window.removeEventListener("keydown", handleKeyDown);
    window.removeEventListener("keyup", handleKeyUp);
    
    currentGameId = null;
    gameMode = null;
    isGameRunning = false;
    
}

function handleGameOver(result?: any) {
    const gameOverModalContainer = document.querySelector("#gameOverModal");
    // clearInterval(intervalID);
        isGameRunning = false;
        isWaitingForStart = true;
        gameStartedOnce = false;
        scoreInfo!.classList.add('hidden');
        
        if (result?.winner) {
            rankedWinnerData.id = result.winner;
        }
        if(gameOverModalContainer)
        {
            gameOverModalContainer!.innerHTML = gameOverModalCreator(result.winner);
        }
        
        gameOverModalContainer!.classList.remove('hidden');
        gameOverModalContainer!.classList.add('flex');

        
        // Очищаем игровой обработчик
        setTimeout(() => {
        cleanupCurrentGame();
    }, 100);
}

function handleKeyDown(ev: KeyboardEvent) {
    const key = ev.key.toLowerCase();
    keys.add(key);
    
    // Для мультиплеера отправляем на сервер
    if (gameMode === 'multiplayer' && currentGameId) {
        if (key === 'w') {
            movePaddle(currentGameId, 'up');
        } else if (key === 's') {
            movePaddle(currentGameId, 'down');
        }
    } else {
    }
}
    
    function handleKeyUp(ev: KeyboardEvent) {
        const key = ev.key.toLowerCase();
        keys.delete(key);
    }



    // function setupInitialState(gameState: IGameState) {
    //     isGameRunning = false;
    //     isWaitingForStart = true;
    
    //     firstPaddle = { ...firstPaddleInitial };
    //     secondPaddle = { ...secondPaddleInitial };
    //     firstPaddleTargetY = firstPaddleInitial.y;
    //     secondPaddleTargetY = secondPaddleInitial.y;

    //     drawBoard(gameState);
    //     drawPaddles(gameState);
    //     // updateScore(gameState);
    //     setBallDirection();
    //     drawBall(gameState);
    //     scoreInfo!.classList.add('hidden');
    
    //     // if (!gameStartedOnce && gameMode !== 'local' && gameMode !== 'multiplayer') {
    //     //     window.removeEventListener("keyup", startGame);
    //     //     window.addEventListener("keyup", startGame, { once: true });
    //     // }
    // }
    
    function initGame() {
        rankedGameStatus();
        onGameUpdate((gameState) => {
            renderGame(gameState);
        });
    }

    // function startGame(ev: KeyboardEvent) {
    //     const preGameModal = document.querySelector("#preGameModal");
    //     const isModalHidden = preGameModal?.classList.contains("hidden");
    //     const isTournamentModalHidden = tournamentModal?.classList.contains("hidden");
        
    //     if (ev.code === 'Space' && !isGameRunning && isWaitingForStart && isModalHidden && isTournamentModalHidden) {
    //         isWaitingForStart = false;
            
    //         startTextEl!.classList.add('opacity-0');
            
    //     }
    // }
    renderGame(currentGameState);

    // TOURNAMENT PART
    const preGameModal = document.querySelector("#preGameModal");
    const tournamentDropdownMenu = document.querySelector("#tournamentDropdownMenu");
    const tournamentDropdownButton = document.querySelector("#tournamentDropdownButton");
    
    tournamentDropdownButton?.addEventListener("click", (e) => {
        e.stopPropagation();
        tournamentDropdownMenu?.classList.toggle("hidden");
    });

    const tournamentModal = document.querySelector("#tournamentModal");
    const fourPlayersGameBtn = document.querySelector("#fourPlayersGameBtn");
    const clickSubmitNicknameBtn = document.querySelector("#submitNicknameBtn");
    const playerNickname = document.querySelector("#playerNickname") as HTMLInputElement;
    const tournamentProfiles = document.querySelector("#tournamentProfiles");
    const selectAvatar = document.querySelector("#selectedAvatar");
    const tournamentBracket = document.querySelector("#tournamentBracket");
    
    clickSubmitNicknameBtn?.addEventListener("click", (e) => {
        e.stopPropagation();
        handleSubmitNickname();
    });

    playerNickname?.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            handleSubmitNickname();
        }
    });
    
    function handleSubmitNickname(){
        if (playerNickname.value.includes(" ") || playerNickname.value === "") {
            handleModalError("Please enter a nickname");
            return;
        }
        else if (playerNickname.value.length > 10) {
            handleModalError("Nickname is too long");
            playerNickname.value = "";
            return;
        }
        tournamentPlayerData.nicknames.push(playerNickname.value);
        tournamentPlayerData.avatars.set(playerNickname.value, (selectAvatar as HTMLImageElement)!.src);
        playerNickname.value = "";
        
        console.log(tournamentPlayerData.nicknames);
        if(tournamentPlayerData.nicknames.length === 4) {
            tournamentModal?.classList.add("hidden");
            tournamentModal?.classList.remove("flex");
            tournamentBracket?.classList.remove("hidden");
            createTournamentNet();
        }
    }

    fourPlayersGameBtn?.addEventListener("click", (e) => {
        e.stopPropagation();
        tournamentDropdownMenu?.classList.toggle("hidden");
        preGameModal?.classList.add("hidden");
        tournamentModal?.classList.remove("hidden");
        tournamentModal?.classList.add("flex");
        tournamentProfiles?.classList.remove("hidden");
        fourPlayersTournament();
    });

    function createTournamentNet() {
        let num;
        while(true){
            num = Math.floor(Math.random() * 4);
            if (!tournamentPlayerData.tournamentNet.includes(num)) {
                tournamentPlayerData.tournamentNet.push(num);
                if(tournamentPlayerData.tournamentNet.length === 4) {
                    break;
                }
                continue;
            }		
        }
        if (tournamentProfiles) {
            tournamentProfiles.innerHTML = tournamentPlayerProfiles();
        }
        
        // Инициализируем турнирную игру
        initTournamentGame();
    }

    function fourPlayersTournament(){
        // Логика турнира будет обрабатываться в createTournamentNet
    }

    const avatarSelectBtn = document.querySelector("#avatarSelectBtn");
    const avatarDropdown = document.querySelector("#avatarDropdown");
    const selectedAvatar = document.querySelector("#selectedAvatar");

    avatarSelectBtn?.addEventListener('click', () => {
        avatarDropdown?.classList.toggle('hidden');
    });

    avatarDropdown?.addEventListener('click', (e) => {
        const target = e.target as HTMLElement;
        const btn = target.closest('button[data-avatar]');
        if (btn) {
            const avatar = btn.getAttribute('data-avatar');
            if (avatar && selectedAvatar) {
                (selectedAvatar as HTMLImageElement).src = avatar;
                avatarDropdown.classList.add('hidden');
            }
        }
    });
    
    // FRIENDS MATCH PART
    const friendsDropDown = document.querySelector("#friendsDropDown");
    const friendSelectBtn = document.querySelector("#friendSelectBtn");
    const createFriendsMatchBtn = document.querySelector("#createFriendsMatchBtn");
    const friendsMatchModal = document.querySelector("#friendsMatchModal");
    const gameModeDropdownBtn = document.querySelector("#gameModeDropdownBtn");
    const gameDropdownMenu = document.querySelector("#gameDropdownMenu");

    gameModeDropdownBtn?.addEventListener("click", (e) => {
        e.stopPropagation();
        gameDropdownMenu?.classList.toggle("hidden");
    });

    createFriendsMatchBtn?.addEventListener("click", (e) => {
        e.stopPropagation();
        gameDropdownMenu?.classList.toggle("hidden");
        preGameModal?.classList.add("hidden");
        friendsMatchModal?.classList.remove("hidden");
        friendsMatchModal?.classList.add("flex");
    });

    friendSelectBtn?.addEventListener('click', () => {
        friendsDropDown?.classList.toggle('hidden');
        getFriendsList();
    });

    function getFriendsList() {
        const friends = store.getAllFriends();
        const friendsList = document.querySelector("#friendsDropDown");
        const selectedFriend = document.querySelector("#selectedFriend");
        const selectedFriendBtn = document.querySelector("#friendSelectBtn");

        if (friendsList) {
            friendsList.innerHTML = "";

            friends.forEach((friend) => {
                const friendBtn = document.createElement("button");
                friendBtn.className = "flex items-center p-2 hover:bg-gray-100";
                friendBtn.setAttribute("data-avatar", friend.avatar);
                friendBtn.innerHTML = `
                    <img src="${API_URL}${friend.avatar}" class="w-8 h-8 rounded-full mr-2" alt="avatar" /> ${friend.username}
                `;
                friendBtn.addEventListener("click", () => {
                    if (selectedFriend) {
                        (selectedFriend as HTMLImageElement).src = API_URL + friend.avatar;
                        const btn = document.getElementById("friendSelectBtn");
                        const span = btn?.querySelector("span");
                        if (span) {
                            span.textContent = friend.username;
                        }
                    }
                    friendsList.classList.add("hidden");
                });
                friendsList.appendChild(friendBtn);
            });
        }
    }

    // RANKED GAME PART
    const rankedMatchBtn = document.querySelector("#rankedMatchBtn");
    const rankedGameModal = document.querySelector("#rankedGameModal");
    // const rankedGameBtn = document.querySelector("#rankedGameBtn");
    const startRankedMatchBtn = document.querySelector("#startRankedMatchBtn");
    const cancelRankedMatchBtn = document.querySelector("#cancelRankedMatchBtn");
    const rankedTimer = document.querySelector("#rankedTimer");
    const timerDiv = document.querySelector("#timerDiv");
    const rankedProfiles = document.querySelector("#rankedProfiles");


    let rankedTimerInterval: ReturnType<typeof setInterval> | null = null;
    let rankedTimerValue = 0;

    rankedMatchBtn?.addEventListener("click", async (e) => {
        e.stopPropagation();
        preGameModal?.classList.add("hidden");
        rankedGameModal?.classList.remove("hidden");
        rankedGameModal?.classList.add("flex");
        
    });

    function formatTimer(seconds: number): string {
        const min = Math.floor(seconds / 60);
        const sec = seconds % 60;
        return `${min}:${sec.toString().padStart(2, "0")}`;
    }

    async function startRankedGame()
    {
        try {

            setupRankedListeners();
            const response = await instanceAPI.post("/game/matchmaking", {
                body: { },
            });
            
            if(response.status === 200) {
                timerDiv?.classList.remove("invisible");
                timer();
				socket?.emit('game:joinQueue');
                startRankedMatchBtn?.classList.add("hidden");
                cancelRankedMatchBtn?.classList.remove("hidden");
            }
            
            if(response.status === 201) {
                const userResponseData = response.data as {
                    message: string,
                    game: {
                        id: number,
                        player1Id: number,
                        player2Id: number,
                        status: string,
                        gameMode: string
                    }
                };

                // Инициализируем мультиплеерную игру
                const gameId = userResponseData.game.id.toString();

                initMultiplayerGame(gameId);
                
                updatePlayerProfiles(userResponseData);
                setupButtonDelegation(gameId);
                
                rankedGameModal?.classList.add("hidden");

                
                if (rankedTimerInterval) clearInterval(rankedTimerInterval);
            }

        } catch (error) {
            
            console.error('Error starting ranked match:', error);
        }
    }

    startRankedMatchBtn?.addEventListener("click", async (e) => {
        e.stopPropagation();
        
        startRankedGame();
    });

    cancelRankedMatchBtn?.addEventListener("click", async (e) => {
        e.stopPropagation();
        try {
            const response = await instanceAPI.delete("/game/matchmaking");
            if(response.status === 200) {
                if (rankedTimerInterval) clearInterval(rankedTimerInterval);
                timerDiv?.classList.add("invisible");
				socket?.emit('game:leaveQueue');
                console.log("Match Canceled", response.status);
                cancelRankedMatchBtn?.classList.add("hidden");
                startRankedMatchBtn?.classList.remove("hidden");
            }
        } catch (error) {
            console.error('Error canceling ranked match:', error);
        }
    });

    function timer() {
        rankedTimerValue = 0;
        if (rankedTimer) rankedTimer.textContent = formatTimer(rankedTimerValue);
        if (rankedTimerInterval) clearInterval(rankedTimerInterval);

        rankedTimerInterval = setInterval(() => {
            rankedTimerValue++;
            if (rankedTimer) rankedTimer.textContent = formatTimer(rankedTimerValue);
        }, 1000);
    }

    async function rankedGameStatus() {
        try{
            const response = await instanceAPI.get("/game/matchmaking/status");
            let responseData = response.data as {inQueue: true}
            if(responseData.inQueue) {
                preGameModal?.classList.add("hidden");
                rankedGameModal?.classList.remove("hidden");
                rankedGameModal?.classList.add("flex");
                startRankedMatchBtn?.classList.add("hidden");
                timerDiv?.classList.remove("invisible");
                cancelRankedMatchBtn?.classList.remove("hidden");
            } else {
                preGameModal?.classList.remove("hidden");
                preGameModal?.classList.add("flex");
            }
        } catch (error) {
            console.error('Error checking ranked game status:', error);
        }
    }
    
    //DELETE LATER DEVELOPMENT BUTTON
    const rankedDeleteGameBtn = document.querySelector("#rankedDeleteGameBtn");
        rankedDeleteGameBtn?.addEventListener("click", async (e) => {
        e.stopPropagation();
        try {
            const gameToDelete = `/game/1`;
            console.log("DELETE ADRESS", gameToDelete)
            const response = await instanceAPI.delete(gameToDelete);
            if(response.status === 200) {
               console.log("Game Deleted", response.status);
            }
        } catch (error) {
            console.error('Error deleting game:', error);
        }
    });

    document.addEventListener("click", async (e) =>{
        const target = e.target as HTMLElement;
        if(target.id === "backToMenuBtn")
        {
            e.stopPropagation();
            const gameOverModal = document.querySelector("#gameOverModal");
            if(!rankedGameModal?.classList.contains("hidden"))
            {
                rankedGameModal?.classList.add("hidden");
                preGameModal?.classList.remove("hidden");
            }
            if(!gameOverModal?.classList.contains("hidden"))
            {
                console.log("GAMEOVER BACK TO MENU CLICKED");
                gameOverModal?.classList.add("hidden");
                preGameModal?.classList.remove("hidden");
            }
        }
    });
    // In case more PLAYAGAIN buttons - REWORK!!!
    document.addEventListener("click", (e) =>{
        const target = e.target as HTMLElement;
        const gameOverModal = document.querySelector("#gameOverModal");
        if(target.id === "rankedPlayAgainBtn")
            {
                e.stopPropagation();
                gameOverModal?.classList.add("hidden");
                gameOverModal?.classList.remove("flex");
                rankedGameModal?.classList.remove("hidden")
                rankedGameModal?.classList.add("flex");
                startRankedGame();
            }
    
    });



    initGame();
}