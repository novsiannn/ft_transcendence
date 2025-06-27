import { handleModalError } from "../../elements";
import {  rankedPlayerProfiles, rankedPlayerProfilesContainer, tournamentData, tournamentPlayerData, tournamentPlayerProfiles, updateRankedProfilesPositions } from "./playersProfiles";
import { API_URL, store} from "../../store/store";
import {
    IGameState,
    getCurrentGameState,
    socket,  
    movePaddle, 
    leaveGame,
    onGameUpdate,
    onGameFinished,
    clearGameCallbacks,
    timerCountdown,
    movePaddleLocal,
    onLocalGameCreated,
} from "../../websockets/client";
import { rankedWinnerData, gameOverModalCreator } from "./gameModal";
import { 
    setupRankedListeners, 
    updatePlayerProfiles, 
    setupButtonDelegation, 
    startRankedGame as startRankedGameLogic,
    rankedGameStatus,
    cancelRankedMatch,
} from "./ratingGame";
import { tournamentBracketPlayers } from "./tournamentBracket";
import { clearRankedPlayerData } from "./playersProfiles";
import { getColorFromUsername } from "../../shared/randomColors";
import gameService from "../../services/api/gameService";
declare global {
    interface Window {
        tournamentPlayerNickname1: string;
        tournamentPlayerNickname2: string;
    }
}

export function handleGame(mainWrapper: HTMLDivElement | undefined) {
    setupMultiplayerSocketHandlers();
    const tournamentProfiles = document.querySelector("#tournamentProfiles");
    tournamentProfiles?.classList.add("hidden")
    const scoreInfo = document.querySelector("#score-info");
    const gameBoard = document.getElementById("game-board") as HTMLCanvasElement;
    let currentReadyButtonHandler: ((e: Event) => void) | null = null;
    let rankedProfilesContainer = document.querySelector('#rankedProfiles');
    const btmBtn = document.querySelector("#backToMenuBtn");
    const spinerDiv = document.querySelector("#spinerDiv");
    
    // Игровые переменные для режимов
    let gameMode: 'local' | 'multiplayer' | null = null;
    let gameType: 'ranked' | 'friends' | null = null;
    let currentGameId: string | null = null;
    let paddleMovementInterval: ReturnType<typeof setInterval> | null = null;

    let tournamentPlayerNickname2 = "";
    let tournamentPlayerNickname1 = "";

    let step = 0;
    
    mainWrapper!.id = "game-container";
    mainWrapper!.classList.add("h-screen", "flex", "flex-col", "gap-2.5", "justify-center", "items-center");
    const context = gameBoard?.getContext("2d");
    
    const gameBoardColor = window.getComputedStyle(gameBoard).backgroundColor;
    let currentGameState = getCurrentGameState();
    
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
    
    let ball = currentGameState.ball;
    let profilesLastUpdate: string = "";
    
    // Основные игровые функции (универсальные для всех режимов)
    function checkIfProfilesNeedUpdate(gameState: IGameState): boolean {
        const playerIds = Object.keys(gameState.paddles);
        if (playerIds.length < 2) return false;
        
        const currentState = `${playerIds[0]}-${gameState.paddles[playerIds[0]].x}-${playerIds[1]}-${gameState.paddles[playerIds[1]].x}`;
        
        if (profilesLastUpdate !== currentState) {
            profilesLastUpdate = currentState;
            return true;
        }
        
        return false;
    }
    
    function renderGame(gameState: IGameState) {
        const shouldUpdateProfiles = checkIfProfilesNeedUpdate(gameState);
        if (shouldUpdateProfiles) {
            updateRankedProfilesPositions(gameState);
        }
        
        const playerIds = Object.keys(gameState.paddles);
        
        if (playerIds.length >= 2) {
            firstPlayerScore = gameState.paddles[playerIds[0]].score;
            secondPlayerScore = gameState.paddles[playerIds[1]].score;
        }
        
        ball.x = gameState.ball.x;
        ball.y = gameState.ball.y;
        
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
            
            let leftPlayerId, rightPlayerId, leftPaddle, rightPaddle;
            
            if (player1X < player2X) {
                leftPlayerId = player1Id;
                rightPlayerId = player2Id;
                leftPaddle = gameState.paddles[playerIds[0]];
                rightPaddle = gameState.paddles[playerIds[1]];
            } else {
                leftPlayerId = player2Id;
                rightPlayerId = player1Id;
                leftPaddle = gameState.paddles[playerIds[1]];
                rightPaddle = gameState.paddles[playerIds[0]];
            }
            let leftColor = "white";
            let rightColor = "white";
            
            if(gameState.isRunning && gameMode === "multiplayer"){
                leftColor = (leftPlayerId === currentUserId) ? "#3B82F6" : "white";
                rightColor = (rightPlayerId === currentUserId) ? "#3B82F6" : "white";
            }else{
                leftColor = "white";
                rightColor = "white";
            }
            
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
        const playerIds = Object.keys(gameState.paddles);
        
        let leftPlayerScore = 0;
        let rightPlayerScore = 0;
        
        const player1Id = playerIds[0];
        const player2Id = playerIds[1];
        
        const player1X = gameState.paddles[player1Id].x;
        const player2X = gameState.paddles[player2Id].x;
        
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
    
    setupMultiplayerSocketHandlers();

    onLocalGameCreated((data) => {
        currentGameId = data.gameId;
    });
    setupKeyboardHandlers();

    let player1;
    let player2;

    if(tournamentData.final.length === 2) {
        player1 = tournamentData.final[0];
        player2 = tournamentData.final[1];

        tournamentPlayerNickname1 = player1;
        tournamentPlayerNickname2 = player2;
        window.tournamentPlayerNickname1 = tournamentPlayerNickname1;
        window.tournamentPlayerNickname2 = tournamentPlayerNickname2;
        

        tournamentProfiles!.innerHTML = tournamentPlayerProfiles();
        socket?.emit("game:joinLocal", {player1, player2})
    } else {

        let player1Index, player2Index;
        
        if (step === 0) {
            player1Index = 0;
            player2Index = 1;
        } else { 
            player1Index = 2;
            player2Index = 3;
        }

        player1 = tournamentData.semiFinal[tournamentPlayerData.tournamentNet[player1Index]];
        player2 = tournamentData.semiFinal[tournamentPlayerData.tournamentNet[player2Index]];
        
        tournamentPlayerNickname1 = player1;
        tournamentPlayerNickname2 = player2;
        window.tournamentPlayerNickname1 = tournamentPlayerNickname1;
        window.tournamentPlayerNickname2 = tournamentPlayerNickname2;
        
        console.log("Player 1", player1);
        console.log("Player 2", player2);
        step++;
        tournamentProfiles!.innerHTML = tournamentPlayerProfiles();
        socket?.emit("game:joinLocal", {player1, player2});
    }
}
    
    function resetMatchmakingButtons() {
        const cancelRankedMatchBtn = document.querySelector("#cancelRankedMatchBtn");
        const startRankedMatchBtn = document.querySelector("#startRankedMatchBtn");
        cancelRankedMatchBtn?.classList.add("hidden");
        startRankedMatchBtn?.classList.remove("hidden");
    }
    
    function initMultiplayerRankedGame(gameId: string) {
        
        gameMode = 'multiplayer';
        currentGameId = gameId;
        currentGameState = getCurrentGameState();
        setupMultiplayerSocketHandlers();
        setupKeyboardHandlers();
        // if(gameType === "ranked")
        socket?.emit('mm:leave', gameId);
        renderGame(currentGameState);
        rankedProfilesContainer = document.querySelector("#rankedProfiles")
        rankedProfilesContainer?.classList.remove("hidden");
    }

    function initMultiplayerFriendGame(gameId: string) {
        
        gameMode = 'multiplayer';
        currentGameId = gameId;
        currentGameState = getCurrentGameState();
        setupMultiplayerSocketHandlers();
        setupKeyboardHandlers();
        socket?.emit("game:join");
        renderGame(currentGameState);
        friendsMatchModal?.classList.add("hidden");
        friendsMatchModal?.classList.remove("flex");
        rankedProfilesContainer = document.querySelector("#rankedProfiles")
        rankedProfilesContainer?.classList.remove("hidden");


    }

    function setupKeyboardHandlers() {
        window.removeEventListener("keydown", handleKeyDown);
        window.removeEventListener("keyup", handleKeyUp);
        
        window.addEventListener("keydown", handleKeyDown);
        window.addEventListener("keyup", handleKeyUp);
    }

    function setupMultiplayerSocketHandlers() {
        timerCountdown((data) => {
            const seconds = data.seconds;
            
            const countdownElement = document.getElementById("countdown");
            countdownElement?.classList.remove("hidden");
            countdownElement!.textContent = seconds.toString();
        
            setTimeout(() => {
                countdownElement?.classList.add("hidden");
                scoreInfo?.classList.remove("hidden");
            }, 5000);
        });

        onGameUpdate((gameState) => {
            renderGame(gameState);
        });

        onGameFinished((result) => {
            console.log("Game finished:", result);
            if(gameMode === "multiplayer")
                handleGameOver(result);
            if(gameMode === "local")
                handleGameOverLocal(result);
        });
    }

function cleanupCurrentGameLocal() {
    if (paddleMovementInterval) {
        clearInterval(paddleMovementInterval);
        paddleMovementInterval = null;
    }
    
    keys.clear(); // Очищаем состояние клавиш
    clearGameCallbacks();
    currentGameId = null;
    gameMode = null;
}

function cleanupCurrentGame() {
    const rankedProfiles = document.querySelector("#rankedProfiles");

    if (rankedProfiles && rankedProfiles.parentNode) {
        const newElement = rankedProfiles.cloneNode(true) as HTMLElement;
        rankedProfiles.parentNode.replaceChild(newElement, rankedProfiles);
    }

    // Получаем новый элемент и скрываем его
    const newRankedProfiles = document.querySelector("#rankedProfiles");
    newRankedProfiles?.classList.add("hidden");

    if (paddleMovementInterval) {
        clearInterval(paddleMovementInterval);
        paddleMovementInterval = null;
    }

    keys.clear();

    currentReadyButtonHandler = null;
    clearGameCallbacks();

    // Очищаем данные профилей рейтинговой игры
    clearRankedPlayerData();
    gameType = null;
    currentGameId = null;
    gameMode = null;
}

    function handleGameOverLocal(result?: any) {
        scoreInfo?.classList.add("hidden");
        let winnerName = '';
        if (result && typeof result === 'object') {
            if (result.winner) {
                winnerName = result.winner;
            }
        } else if (typeof result === 'string') {
            winnerName = result;
        }
        
        if(tournamentData.final.length === 2) {
            tournamentData.winner = winnerName;
            
            
            
        } else {
            if (winnerName && !tournamentData.final.includes(winnerName)) {
                tournamentData.final.push(winnerName);
            }
        }
        
        if (!bracketElement) {
            document.body.insertAdjacentHTML('beforeend', tournamentBracketPlayers());
            bracketElement = document.querySelector("#bracketFourPlayers");
        } else {
            const newBracketHTML = tournamentBracketPlayers();
            bracketElement.innerHTML = newBracketHTML.split('>').slice(1).join('>').split('</div>').slice(0, -1).join('</div>');
        }
        
        if (bracketElement) {
            bracketElement?.classList.remove("hidden");
            bracketElement?.classList.add("flex");
        }
        tournamentProfiles?.classList.add("hidden");
        cleanupCurrentGameLocal();
    }

function handleGameOver(result?: any) {
    const gameOverModalContainer = document.querySelector("#gameOverModal");
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
    
    rankedProfilesContainer?.classList.add("hidden");
    rankedProfilesContainer?.classList.remove("flex");
    
    // Очищаем данные профилей
    clearRankedPlayerData();

    setTimeout(() => {
        cleanupCurrentGame();
    }, 100);
}

function startPaddleMovementInterval() {
    paddleMovementInterval = setInterval(() => {
        if (gameMode === 'local' && currentGameId) {
            // Проверяем клавиши для первого игрока (W/S)
            if (keys.has('w')) {
                movePaddleLocal(currentGameId, 'up', tournamentPlayerNickname1);
            }
            if (keys.has('s')) {
                movePaddleLocal(currentGameId, 'down', tournamentPlayerNickname1);
            }
            
            // Проверяем клавиши для второго игрока (стрелки)
            if (keys.has('arrowup')) {
                movePaddleLocal(currentGameId, 'up', tournamentPlayerNickname2);
            }
            if (keys.has('arrowdown')) {
                movePaddleLocal(currentGameId, 'down', tournamentPlayerNickname2);
            }
        }
        
        if (gameMode === 'multiplayer' && currentGameId) {
            if (keys.has('w')) {
                movePaddle(currentGameId, 'up');
            }
            if (keys.has('s')) {
                movePaddle(currentGameId, 'down');
            }
        }
    }, 16); // ~60 FPS
}

function handleKeyDown(ev: KeyboardEvent) {
    const key = ev.key?.toLowerCase();
    keys.add(key);
    
    // Запускаем интервал для локальной игры, если он еще не запущен
    if (currentGameId && !paddleMovementInterval) {
        startPaddleMovementInterval();
    }
}
        
function handleKeyUp(ev: KeyboardEvent) {
    const key = ev.key.toLowerCase();
    keys.delete(key);
    
    // Останавливаем интервал, если нет активных клавиш
    if (keys.size === 0 && paddleMovementInterval) {
        clearInterval(paddleMovementInterval);
        paddleMovementInterval = null;
    }
}


    async function updateAllStoreUsers(){
        try{
            const updatedUsers = await store.getAllUsersRequest();
            if (updatedUsers) {
                store.setAllUsers(updatedUsers);
            }
        }
        catch(error){
            // Handle error
        }
    }

    // Инициализация рейтингового режима
    function initRankedGameMode() {
        const preGameModal = document.querySelector("#preGameModal");
        const rankedGameModal = document.querySelector("#rankedGameModal");
        const startRankedMatchBtn = document.querySelector("#startRankedMatchBtn");
        const cancelRankedMatchBtn = document.querySelector("#cancelRankedMatchBtn");
        const rankedProfiles = document.querySelector("#rankedProfiles");
        const rankedMatchBtn = document.querySelector("#rankedMatchBtn");

        let rankedTimerInterval: ReturnType<typeof setInterval> | null = null;
        // gameType = "ranked";
        
        rankedMatchBtn?.addEventListener("click", async (e) => {
            e.stopPropagation();
            preGameModal?.classList.add("hidden");
            rankedGameModal?.classList.remove("hidden");
            rankedGameModal?.classList.add("flex");
        });



        // Инициализируем слушатели рейтинговой игры
        const rankedListenersSetup = () => setupRankedListeners(
            rankedGameModal,
            preGameModal,
            spinerDiv,
            rankedProfiles,
            initMultiplayerRankedGame,
            updatePlayerProfiles,
            setupButtonDelegation,
            resetMatchmakingButtons,
            updateAllStoreUsers
        );

        startRankedMatchBtn?.addEventListener("click", async (e) => {
            e.stopPropagation();
            btmBtn?.setAttribute("disabled", "true");
            
            await startRankedGameLogic(
                spinerDiv,
                startRankedMatchBtn,
                cancelRankedMatchBtn,
                rankedGameModal,
                rankedTimerInterval,
                initMultiplayerRankedGame,
                updateAllStoreUsers,
                rankedListenersSetup
            );
        });

        cancelRankedMatchBtn?.addEventListener("click", async (e) => {
            e.stopPropagation();
            await cancelRankedMatch(
                rankedTimerInterval,
                spinerDiv,
                cancelRankedMatchBtn,
                startRankedMatchBtn,
                btmBtn
            );
        });

        // Проверяем статус рейтинговой игры при загрузке
        rankedGameStatus(
            preGameModal,
            rankedGameModal,
            startRankedMatchBtn,
            spinerDiv,
            cancelRankedMatchBtn
        );
    }

    function initGame() {
        initRankedGameMode();
        onGameUpdate((gameState) => {
            renderGame(gameState);
        });
    }

    renderGame(currentGameState);

    // TOURNAMENT PART
    const preGameModal = document.querySelector("#preGameModal");
    const tournamentDropdownMenu = document.querySelector("#tournamentDropdownMenu");
    const tournamentDropdownButton = document.querySelector("#tournamentDropdownButton");
    let bracketElement = document.querySelector("#bracketFourPlayers");

    tournamentDropdownButton?.addEventListener("click", (e) => {
        e.stopPropagation();
        tournamentDropdownMenu?.classList.toggle("hidden");
    });

    const tournamentModal = document.querySelector("#tournamentModal");
    const fourPlayersGameBtn = document.querySelector("#fourPlayersGameBtn");
    const clickSubmitNicknameBtn = document.querySelector("#submitNicknameBtn");
    const playerNickname = document.querySelector("#playerNickname") as HTMLInputElement;
    const selectAvatar = document.querySelector("#selectedAvatar");
    const tournamentBracket = document.querySelector("#bracketFourPlayers");
    const startTournamentGame = document.querySelector("#startTournamentGame");
    
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
        tournamentData.semiFinal.push(playerNickname.value);
        tournamentPlayerData.avatars.set(playerNickname.value, (selectAvatar as HTMLImageElement)!.src);
        playerNickname.value = "";
        
        console.log(tournamentPlayerData.nicknames);
        if(tournamentPlayerData.nicknames.length === 4) {
            tournamentModal?.classList.add("hidden");
            tournamentModal?.classList.remove("flex");
            tournamentBracket?.classList.remove("hidden");
            createTournamentNet();
            
        }
        console.log("PLAYERS : ", tournamentData.semiFinal);
    }
    
    fourPlayersGameBtn?.addEventListener("click", (e) => {
        e.stopPropagation();
        tournamentDropdownMenu?.classList.toggle("hidden");
        preGameModal?.classList.add("hidden");
        tournamentModal?.classList.remove("hidden");
        tournamentModal?.classList.add("flex");
        tournamentProfiles?.classList.remove("hidden");
        
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
    const tournamentProfiles = document.querySelector("#tournamentProfiles");
    if (tournamentProfiles) {
        tournamentProfiles.innerHTML = tournamentPlayerProfiles();
        // tournamentProfiles.classList.remove("hidden");
    }
        // ВАЖНО: Создаем HTML турнирной сетки ПОСЛЕ заполнения tournamentNet
        let bracketElement = document.querySelector("#bracketFourPlayers");
        if (!bracketElement) {
            // Теперь tournamentNet уже заполнен, можно безопасно генерировать HTML
            document.body.insertAdjacentHTML('beforeend', tournamentBracketPlayers());
            bracketElement = document.querySelector("#bracketFourPlayers");
        } else {
            // Обновляем содержимое с новыми данными
            bracketElement.innerHTML = tournamentBracketPlayers().replace(
                '<div id="bracketFourPlayers" class="fixed inset-0 items-center justify-center z-50 hidden" style="background-color: rgba(0, 0, 0, 0.7);">',
                ''
            ).replace('</div>    `;', '');
        }
        
        // Показываем турнирную сетку
        if (bracketElement) {
            bracketElement.classList.remove("hidden");
            bracketElement.classList.add("flex");
        }
        
        console.log("NET AFTER GENERATION:", tournamentPlayerData.tournamentNet);
        console.log("NICKNAMES:", tournamentPlayerData.nicknames);
        // tournamentBracket?.classList.add("flex");
        
    }

    document.addEventListener("click", (event) => {
        const target = event.target as HTMLElement;
        
        if (target && target.id === "startTournamentGame") {
            const bracketModal = document.querySelector("#bracketFourPlayers");
            if(!tournamentBracket?.classList.contains("hidden") && tournamentData.winner){
                startTournamentGame?.setAttribute("disabled", "true");
            }
            if (bracketModal && !tournamentData.winner) {
                startTournamentGame?.removeAttribute("disabled");
                tournamentProfiles?.classList.remove("hidden");
                bracketModal.classList.add("hidden");
                bracketModal.classList.remove("flex");
                initTournamentGame();
            }
            console.log("Starting tournament game...");
        }
    });

    const avatarSelectBtn = document.querySelector("#avatarSelectBtn");
    const avatarDropdown = document.querySelector("#avatarDropdown");
    const selectedAvatar = document.querySelector("#selectedAvatar");
    const tournamentBracketFourPlayers = document.querySelector("#bracketFourPlayers");

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
    const sendFriendMatchRequestBtn = document.querySelector("#sendInviteBtn");
    const acceptGameBtn = document.querySelector("#acceptGameBtn");
    const declineGameBtn = document.querySelector("#declineGameBtn");

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

    acceptGameBtn?.addEventListener('click', () => {

    });

    declineGameBtn?.addEventListener('click', () => {
        
    });

    function startFriendMatch(data: any)
    {
        initMultiplayerFriendGame(data.game.id);
        updatePlayerProfiles(data);
        setupButtonDelegation(data.game.id);
        resetMatchmakingButtons();
        updateAllStoreUsers();
    }


    function getFriendsList() {
        const friends = store.getAllFriends();
        const friendsList = document.querySelector("#friendsDropDown");
        const selectedFriend = document.querySelector("#selectedFriend");

        if (friendsList) {
            friendsList.innerHTML = "";

            friends.forEach((friend) => {
                const friendBtn = document.createElement("button");
                let friendColor = getColorFromUsername(friend.username);
                let friendFirstLetter = friend.username.charAt(0).toUpperCase();
                friendBtn.className = "flex items-center p-2 hover:bg-gray-100";
                friendBtn.setAttribute("data-avatar", friend.avatar);
                console.log("LETTER : ", friendFirstLetter);
                if(friend.avatar){
                    friendBtn.innerHTML = `
                        <img src="${API_URL}${friend.avatar}" class="w-8 h-8 rounded-full mr-2" alt="avatar" /> ${friend.username}
                    `;
                }else{
                    friendBtn.innerHTML = `
                    <div id="profileImg2" class="text-1xl text-white font-bold flex justify-center items-center w-8 h-8 mr-2 ${friendColor} rounded-full cursor-pointer select-none">${friendFirstLetter}</div>${friend.username}
                    `;
                }
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
                sendFriendMatchRequestBtn?.addEventListener('click',async (e) => {
                    e.stopPropagation();
                    try{
                        const response = await store.sendFriendGameRequest(friend.id);
                        console.log("RESPONSE : ",response);
                        if(response.status === 201){
                            const res = response.data;
                            sendFriendMatchRequestBtn.classList.add("opacity-50");
                            sendFriendMatchRequestBtn.setAttribute("disabled", "true");
                            startFriendMatch(res);
                            
                            setTimeout(() => {
                                sendFriendMatchRequestBtn.classList.remove("opacity-50");
                                sendFriendMatchRequestBtn.removeAttribute("disabled");
                            }, 30000);
                        }
                    }catch{
                        console.error("Error");
                    }
                });
                friendsList.appendChild(friendBtn);
            });
        }
    }


    // Обработчики модальных окон
    document.addEventListener("click", async (e) =>{
        const target = e.target as HTMLElement;
        if(target.id === "backToMenuBtn")
        {
            e.stopPropagation();
            const gameOverModal = document.querySelector("#gameOverModal");
            const rankedGameModal = document.querySelector("#rankedGameModal");
            const spinerDiv = document.querySelector("#spinerDiv");
            const btmBtn = document.querySelector("#backToMenuBtn");
            
            if(!rankedGameModal?.classList.contains("hidden"))
            {
                spinerDiv?.classList.add("hidden");
                rankedGameModal?.classList.add("hidden");
                preGameModal?.classList.remove("hidden");
            }
            if(!gameOverModal?.classList.contains("hidden"))
            {
                btmBtn?.removeAttribute("disabled");
                spinerDiv?.classList.add("hidden");
                gameOverModal?.classList.add("hidden");
                preGameModal?.classList.remove("hidden");
                // rankedProfilesContainer!.innerHTML = rankedPlayerProfilesContainer();
            }
            if(!tournamentBracketFourPlayers?.classList.contains("hidden"))
            {
                tournamentCleaning();
                tournamentBracketFourPlayers?.classList.add("hidden");
                tournamentBracketFourPlayers?.classList.remove("flex");
                btmBtn?.classList.add("hidden");
                preGameModal?.classList.remove("hidden");
                preGameModal?.classList.add("flex");
            }
            if(!tournamentModal?.classList.contains("hidden"))
                {
                    tournamentProfiles?.classList.add("hidden");
                    tournamentModal?.classList.add("hidden");
                    tournamentModal?.classList.remove("flex");
                    preGameModal?.classList.remove("hidden");
                    preGameModal?.classList.add("flex");
                }
            if(!friendsMatchModal?.classList.contains("hidden"))
                {
                    friendsMatchModal?.classList.add("hidden");
                    friendsMatchModal?.classList.remove("flex");
                    preGameModal?.classList.remove("hidden");
                    preGameModal?.classList.add("flex");

                }
        }
    });

    function tournamentCleaning()
    {
        tournamentPlayerData.nicknames.length = 0
        tournamentData.semiFinal.length = 0;
        tournamentData.final.length = 0;
        tournamentData.winner = '';

        window.tournamentPlayerNickname1 = "";
        window.tournamentPlayerNickname2 = "";
        
        tournamentPlayerData.tournamentNet.length = 0;
        
        step = 0;
        
        tournamentPlayerNickname1 = '';
        tournamentPlayerNickname2 = '';
    }

    // Play Again для рейтинговой игры
    document.addEventListener("click", (e) => {
        const target = e.target as HTMLElement;
        if (target.id === "rankedPlayAgainBtn") {
            e.stopPropagation();
            
            const gameOverModal = document.querySelector("#gameOverModal");
            const rankedGameModal = document.querySelector("#rankedGameModal");
            
            gameOverModal?.classList.add("hidden");
            gameOverModal?.classList.remove("flex");

            rankedGameModal?.classList.remove("hidden");
            rankedGameModal?.classList.add("flex");
            spinerDiv?.classList.add("hidden");
            btmBtn?.removeAttribute("disabled")
            rankedProfilesContainer?.classList.add("hidden");
            
            // Запуск новой рейтинговой игры будет обрабатываться кнопкой startRankedMatchBtn
        }
    });

    initGame();
}
