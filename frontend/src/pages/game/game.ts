import { handleModalError } from "../../elements";
import { navigationHandle } from "../../elements/navigation";
import { tournamentPlayerData, rankedPlayerData, tournamentPlayerProfiles, rankedPlayerProfiles } from "./playersProfiles";
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

export function handleGame(mainWrapper: HTMLDivElement | undefined) {
    navigationHandle();
    const gameOverText = document.querySelector("#gameOverText");
    const scoreInfo = document.querySelector("#score-info");
    const gameBoard = document.getElementById("game-board") as HTMLCanvasElement;
    const restartBtn = document.querySelector("#restart-btn");
    
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

    const gameBoardWidth = gameBoard.width;
    const gameBoardHeight = gameBoard.height;


    let currentGameState = getCurrentGameState();
    
    const moveFirstPaddleKey = {
        up: "w",
        down: "s"
    }
    
    const moveSecondPaddleKey = {
        up: "arrowup",
        down: "arrowdown"
    }

    const keys = new Set<string>();

    const paddleSize = {
        width: currentGameState.settings.paddleWidth,
        height: currentGameState.settings.paddleHeight,
    }

    const ballRadius = currentGameState.settings.ballRadius;
    // const initialBallSpeed = 7;
    // let ballSpeed = initialBallSpeed;
    // const paddleSpeed = 40;
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

    let firstPaddleTargetY = firstPaddle.y;
    let secondPaddleTargetY = secondPaddle.y;

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

    function renderGame(gameState: IGameState) {
    
    // Получаем ID игроков динамически
    const playerIds = Object.keys(gameState.paddles);
    
    if (playerIds.length >= 2) {
        // Обновляем локальные переменные (если нужны для других функций)
        firstPaddle.x = gameState.paddles[playerIds[0]].x;
        firstPaddle.y = gameState.paddles[playerIds[0]].y;
        firstPlayerScore = gameState.paddles[playerIds[0]].score;

        secondPaddle.x = gameState.paddles[playerIds[1]].x;
        secondPaddle.y = gameState.paddles[playerIds[1]].y;
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

    // Проверяем победителя
    if (gameState.winner) {
        handleGameOver();
    }
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
        
        drawPaddle(firstPaddle.x,firstPaddle.y, firstPaddleColor, gameState);
        drawPaddle(secondPaddle.x,secondPaddle.y, secondPaddleColor, gameState);
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

        scoreInfo!.textContent = `${gameState.paddles["1"].score} : ${gameState.paddles["2"].score}`;
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

            rankedProfiles!.innerHTML = rankedPlayerProfiles();

            resetMatchmakingButtons();
        });
    }

    function resetMatchmakingButtons() {
        cancelRankedMatchBtn?.classList.add("hidden");
        startRankedMatchBtn?.classList.remove("hidden");
    }

    function updatePlayerProfiles(gameData: any) {

        let game;
        if (gameData.game) {
            game = gameData.game; // Для второго игрока
        } else {
            game = gameData; // Для первого игрока (если данные приходят напрямую)
        }

        let user1 = findUser(game.player1Id);
        let user2 = findUser(game.player2Id);
        console.log("Updating player profiles with game data:", game);
                if(user1){
                    const user1 = findUser(game.player1Id);
                    rankedPlayerData.firstPlayer = user1!.username;
                    rankedPlayerData.firstPlayerAvatar = user1!.avatar;
                    rankedPlayerData.firstPlayerLetter = user1!.username.charAt(0).toUpperCase();
                    rankedPlayerData.firstPlayerColor = getColorFromUsername(user1!.username);
                }
        console.log("PLAYER 1", rankedPlayerData.firstPlayer, rankedPlayerData.firstPlayerAvatar, rankedPlayerData.firstPlayerLetter, rankedPlayerData.firstPlayerColor);
                if(user2){
                    const user2 = findUser(game.player2Id);
                    rankedPlayerData.secondPlayer = user2!.username;
                    rankedPlayerData.secondPlayerAvatar = user2!.avatar;
                    rankedPlayerData.secondPlayerLetter = user2!.username.charAt(0).toUpperCase();
                    rankedPlayerData.secondPlayerColor = getColorFromUsername(user2!.username);
                }
                console.log("PLAYER 2", rankedPlayerData.secondPlayer, rankedPlayerData.secondPlayerAvatar, rankedPlayerData.secondPlayerLetter, rankedPlayerData.secondPlayerColor);
    }

    function initMultiplayerGame(gameId: string) {
        console.log("Initializing multiplayer game:", gameId);
        gameMode = 'multiplayer';
        currentGameId = gameId;
        cleanupCurrentGame();
        currentGameState = getCurrentGameState();
        // Setup WebSocket listeners directly
        socket?.emit('game:join', gameId);
        socket?.emit('mm:leave', gameId);
        renderGame(currentGameState);
        
        // Join the game
        // joinGame(gameId);
        scoreInfo!.classList.remove('hidden');
    }

    function cleanupCurrentGame() {
        if (currentGameId) {
            leaveGame(currentGameId);
        }
        clearGameCallbacks();
        currentGameId = null;
        
        // clearInterval(intervalID);
        window.removeEventListener("keydown", handleKeyDown);
        window.removeEventListener("keyup", handleKeyUp);
        // window.removeEventListener("keyup", startGame);
        
        gameMode = null;
        isGameRunning = false;
    }

    // СУЩЕСТВУЮЩИЕ ФУНКЦИИ (для совместимости)
    function chooseBallDirection() {
        return Math.random() < 0.5;
    }

    function setBallDirection() {
        if (chooseBallDirection()) {
            ballDirection.x = 1;
        } else {
            ballDirection.x = -1;
        }

        if (chooseBallDirection()) {
            ballDirection.y = 1;
        } else {
            ballDirection.y = -1;
        }
    }

    function handleGameOver() {
        if (firstPlayerScore >= 5 || secondPlayerScore >= 5) {
            // clearInterval(intervalID);
            isGameRunning = false;
            isWaitingForStart = true;
            gameStartedOnce = false;
            scoreInfo!.classList.add('hidden');
            gameOverText!.classList.remove('hidden');	
            
            // Очищаем игровой обработчик
            cleanupCurrentGame();
        }
    }

    function handleKeyDown(ev: KeyboardEvent) {
        const key = ev.key.toLowerCase();
        keys.add(key);
        
        // Send paddle movement for multiplayer games
        if (gameMode === 'multiplayer' && currentGameId) {
            if (key === 'w' || key === 'arrowup') {
                movePaddle(currentGameId, 'up');
            } else if (key === 's' || key === 'arrowdown') {
                movePaddle(currentGameId, 'down');
            }
        }
    }
    
    function handleKeyUp(ev: KeyboardEvent) {
        const key = ev.key.toLowerCase();
        keys.delete(key);
    }

    // function updatePaddlePositions() {
    //     const step = paddleSize.height / 4;
    
    //     if (keys.has("w") && firstPaddle.y > 0) {
    //         firstPaddleTargetY = Math.max(0, firstPaddle.y - step);
    //     }
    //     if (keys.has("s")) {
    //         firstPaddleTargetY = Math.min(gameBoardHeight - paddleSize.height, firstPaddle.y + step);
    //     }
    
    //     if (keys.has("arrowup") && secondPaddle.y > 0) {
    //         secondPaddleTargetY = Math.max(0, secondPaddle.y - step);
    //     }
    //     if (keys.has("arrowdown")) {
    //         secondPaddleTargetY = Math.min(gameBoardHeight - paddleSize.height, secondPaddle.y + step);
    //     }
    // }

    // function lerp(start: number, end: number, t: number) {
    //     return start * (1 - t) + end * t;
    // }

    // function updateGame(gameState: IGameState) {
    //     // updatePaddlePositions();
    
    //     const lerpFactor = 0.2;
    //     firstPaddle.y = lerp(firstPaddle.y, firstPaddleTargetY, lerpFactor);
    //     secondPaddle.y = lerp(secondPaddle.y, secondPaddleTargetY, lerpFactor);
    
    //     drawBoard(gameState);
    //     drawPaddles(gameState);
    //     // moveBall();
    //     drawBall(gameState);
    // }

    // let countdownInterval: ReturnType<typeof setInterval>;
    // const countdownEl = document.getElementById('countdown');
    const startTextEl = document.getElementById('startText');

    // function restartGame(gameState: IGameState) {
    //     // clearInterval(intervalID);
    //     isGameRunning = false;
    //     isWaitingForStart = false;
    //     gameStartedOnce = false;
    
    //     // ballSpeed = initialBallSpeed;
    //     firstPlayerScore = 0;
    //     secondPlayerScore = 0;

    //     // ball = { ...ballInitial };
    //     firstPaddle = { ...firstPaddleInitial };
    //     secondPaddle = { ...secondPaddleInitial };
        
    //     firstPaddleTargetY = firstPaddleInitial.y;
    //     secondPaddleTargetY = secondPaddleInitial.y;

    //     // clearInterval(countdownInterval);
    //     countdownEl!.classList.add('hidden', 'scale-150', 'opacity-0');
    //     startTextEl!.classList.remove('hidden', 'opacity-0');
    
    //     cleanupCurrentGame();
    //     (restartBtn as HTMLElement)?.blur();
        
    //     setupInitialState(gameState);
    // }

    function setupInitialState(gameState: IGameState) {
        isGameRunning = false;
        isWaitingForStart = true;
    
        firstPaddle = { ...firstPaddleInitial };
        secondPaddle = { ...secondPaddleInitial };
        firstPaddleTargetY = firstPaddleInitial.y;
        secondPaddleTargetY = secondPaddleInitial.y;

        drawBoard(gameState);
        drawPaddles(gameState);
        updateScore(gameState);
        setBallDirection();
        drawBall(gameState);
        scoreInfo!.classList.add('hidden');
    
        if (!gameStartedOnce && gameMode !== 'local' && gameMode !== 'multiplayer') {
            window.removeEventListener("keyup", startGame);
            window.addEventListener("keyup", startGame, { once: true });
        }
    }
    
    // function initGame() {
    //     cleanupCurrentGame();
    //     rankedGameStatus();
    //     setupInitialState();
    
    //     restartBtn?.removeEventListener("click", restartGame);
    //     restartBtn?.addEventListener("click", restartGame);
    // }

    // function startActualGame() {
    //     isGameRunning = true;
    //     gameStartedOnce = true;
    
    //     window.addEventListener("keydown", handleKeyDown);
    //     window.addEventListener("keyup", handleKeyUp);

    //     scoreInfo!.classList.remove('hidden');
    
    //     setBallDirection();
    //     // intervalID = setInterval(updateGame, 16);
    // }

    function startGame(ev: KeyboardEvent) {
        const preGameModal = document.querySelector("#preGameModal");
        const isModalHidden = preGameModal?.classList.contains("hidden");
        const isTournamentModalHidden = tournamentModal?.classList.contains("hidden");
        
        if (ev.code === 'Space' && !isGameRunning && isWaitingForStart && isModalHidden && isTournamentModalHidden) {
            isWaitingForStart = false;
            
            startTextEl!.classList.add('opacity-0');
            
        }
    }
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

    startRankedMatchBtn?.addEventListener("click", async (e) => {
        e.stopPropagation();
        
        try {

            setupRankedListeners();
            const response = await instanceAPI.post("/game/matchmaking", {
                body: { },
            });
			console.log(response);
            
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
                
                rankedGameModal?.classList.add("hidden");
                rankedProfiles!.innerHTML = rankedPlayerProfiles();
                
                if (rankedTimerInterval) clearInterval(rankedTimerInterval);
            }

        } catch (error) {
            
            console.error('Error starting ranked match:', error);
        }
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
            console.log("RANKED GAME STATUS", responseData);
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
    const playerOneReadyBtn = document.querySelector("#playerOneReadyBtn");
    playerOneReadyBtn?.addEventListener("click", async (e) => {
        e.stopPropagation();
        
    });
    //DELETE LATER DEVELOPMENT BUTTON
    const rankedDeleteGameBtn = document.querySelector("#rankedDeleteGameBtn");
        rankedDeleteGameBtn?.addEventListener("click", async (e) => {
        e.stopPropagation();
        try {
            const gameToDelete = `/game/2`;
            console.log("DELETE ADRESS", gameToDelete)
            const response = await instanceAPI.delete(gameToDelete);
            if(response.status === 200) {
               console.log("Game Deleted", response.status);
            }
        } catch (error) {
            console.error('Error deleting game:', error);
        }
    });
    // initGame();
}