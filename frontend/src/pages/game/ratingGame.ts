import { rankedPlayerData, rankedPlayerProfiles, rankedPlayerProfilesContainer, updateRankedProfilesPositions } from "./playersProfiles";
import { API_URL, store} from "../../store/store";
import instanceAPI from "../../services/api/instanceAxios";
import { getColorFromUsername } from "../../shared/randomColors";
import {
    getCurrentGameState,
    socket,  
    onMatchRankedFound,
    onGameCancelled,
} from "../../websockets/client";
import { findUser } from "../../shared";
import { rankedWinnerData } from "./gameModal";
import i18next from "i18next"

export function setupRankedListeners(
    rankedGameModal: Element | null,
    preGameModal: Element | null,
    spinerDiv: Element | null,
    rankedProfiles: Element | null,
    initMultiplayerGame: (gameId: string) => void,
    updatePlayerProfiles: (data: any) => void,
    setupButtonDelegation: (gameId: string) => void,
    resetMatchmakingButtons: () => void,
    updateAllStoreUsers: () => Promise<void>
) {
    onMatchRankedFound(async (data: any) => {
        rankedGameModal?.classList.add("hidden");

        const navNotification = document.querySelector("#notificationMenu");
        const navProfile = document.querySelector("#profileIcon");
        const navHome = document.querySelector("#imgLogoNavi");
        navNotification?.classList.add("pointer-events-none", "opacity-50");
        navProfile?.classList.add("pointer-events-none", "opacity-50");
        navHome?.classList.add("pointer-events-none", "opacity-50");

        await updateAllStoreUsers();

        const gameId = data.game.id.toString();
        initMultiplayerGame(gameId);

        updatePlayerProfiles(data.game);
        setupButtonDelegation(gameId);

        resetMatchmakingButtons();
    });

    onGameCancelled((gameId) => {
        const rankedProfilesContainer = document.querySelector('#rankedProfiles');
        console.log("GAME CANCELLED");
        spinerDiv?.classList.add("hidden");
        rankedProfiles?.classList.add("hidden");
        preGameModal?.classList.remove("hidden");
        preGameModal?.classList.add("flex");
        rankedProfilesContainer?.classList.add("hidden");
    });
}

let currentGame: any = null;

export function getCurrentGame() {
    return currentGame;
}

export function updatePlayerProfiles(gameData: any) {
    
    console.log("GAME DATA UPDATEPROF : ", gameData)
    currentGame = gameData;
    console.log("CURRENT GAME UPDATEPROF : ", currentGame)
    const user1 = findUser(Number(gameData.player1Id));
    const user2 = findUser(Number(gameData.player2Id));
    console.log("PLAYER 1 UPDATEPROF : ", gameData.player1Id)
    console.log("PLAYER 2 UPDATEPROF : ", gameData.player2Id)

    if (user1 && user2) {
        rankedPlayerData.firstPlayer = user1.username;
        rankedPlayerData.firstPlayerAvatar = user1.avatar || "";
        rankedPlayerData.firstPlayerLetter = user1.username.charAt(0).toUpperCase();
        rankedPlayerData.firstPlayerColor = getColorFromUsername(user1.username);
        
        rankedPlayerData.secondPlayer = user2.username;
        rankedPlayerData.secondPlayerAvatar = user2.avatar || "";
        rankedPlayerData.secondPlayerLetter = user2.username.charAt(0).toUpperCase();
        rankedPlayerData.secondPlayerColor = getColorFromUsername(user2.username);
        
        const rankedProfilesContainer = document.querySelector('#rankedProfiles');
        if (rankedProfilesContainer) {
            rankedProfilesContainer.innerHTML = rankedPlayerProfiles();
        }
        
        setupInitialReadyButtonsVisibility(Number(gameData.player1Id), Number(gameData.player2Id));
    }
}

export function setupInitialReadyButtonsVisibility(player1Id: number, player2Id: number) {
    const currentUserId = store.getUser().id;
    console.log("PLAYER 1 : ",player1Id)
    console.log("PLAYER 2 : ",player2Id)
    const playerOneReadyBtn = document.querySelector("#playerOneReadyBtn") as HTMLButtonElement;
    const playerTwoReadyBtn = document.querySelector("#playerTwoReadyBtn") as HTMLButtonElement;
    
    if (playerOneReadyBtn && playerTwoReadyBtn) {
        if (currentUserId === player1Id) {
            playerOneReadyBtn.classList.remove("hidden");
            playerTwoReadyBtn.classList.add("hidden");
        } else if (currentUserId === player2Id) {
            playerOneReadyBtn.classList.add("hidden");
            playerTwoReadyBtn.classList.remove("hidden");
        } else {
            playerOneReadyBtn.classList.add("hidden");
            playerTwoReadyBtn.classList.add("hidden");
        }
    }
}

export function setupButtonDelegation(gameId: string) {
    const currentUserId = store.getUser().id;
    const rankedProfiles = document.querySelector("#rankedProfiles");
    
    if (rankedProfiles && rankedProfiles.parentNode) {
        const newRankedProfiles = rankedProfiles.cloneNode(true) as HTMLElement;
        rankedProfiles.parentNode.replaceChild(newRankedProfiles, rankedProfiles);
        
        const updatedRankedProfiles = document.querySelector("#rankedProfiles");
        
        const handleReadyButtonClick = (e: Event) => {
            const target = e.target as HTMLElement;
            
            if (target.id === "playerOneReadyBtn" || target.id === "playerTwoReadyBtn") {
                e.stopPropagation();
                
                let game = getCurrentGame();
                
                console.log("GAME DATA : ", game)
                const isCurrentUserPlayer1 = currentUserId === game?.player1Id;
                const isCurrentUserPlayer2 = currentUserId === game?.player2Id;
                
                const isPlayer1Button = target.id === "playerOneReadyBtn";
                const isPlayer2Button = target.id === "playerTwoReadyBtn";
                
                if ((isPlayer1Button && !isCurrentUserPlayer1) || (isPlayer2Button && !isCurrentUserPlayer2)) {
                    return;
                }
                
                target.classList.add("opacity-50");
                target.classList.add("cursor-not-allowed");
                target.classList.remove("hover:bg-blue-600");
                target.setAttribute("disabled", "true");
                target.textContent = i18next.t("buttons.ready");
                
                console.log(`Emitting game:join with gameId: ${gameId}`);
                socket?.emit('game:join', gameId);
                console.log("SETUP BUTTON DELEGATION GAME DATA : ", game);
            }
        };

        updatedRankedProfiles?.addEventListener("click", handleReadyButtonClick);
    }
}

export async function startRankedGame(
    spinerDiv: Element | null,
    startRankedMatchBtn: Element | null,
    cancelRankedMatchBtn: Element | null,
    rankedGameModal: Element | null,
    rankedTimerInterval: ReturnType<typeof setInterval> | null,
    initMultiplayerGame: (gameId: string) => void,
    updateAllStoreUsers: () => Promise<void>,
    setupRankedListeners: () => void
) {
    try {
        setupRankedListeners();

        const response = await instanceAPI.post("/game/matchmaking", {
            body: { },
        });
        
        if(response.status === 200) {
            spinerDiv?.classList.remove("hidden");
            spinerDiv?.classList.add("flex");
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

            const navNotification = document.querySelector("#notificationMenu");
            const navProfile = document.querySelector("#profileIcon");
            const navHome = document.querySelector("#imgLogoNavi");
            navNotification?.classList.add("pointer-events-none", "opacity-50");
            navProfile?.classList.add("pointer-events-none", "opacity-50");
            navHome?.classList.add("pointer-events-none", "opacity-50");
            
            const gameId = userResponseData.game.id.toString();
            await updateAllStoreUsers();
            initMultiplayerGame(gameId);
            
            updatePlayerProfiles(userResponseData.game);
            setupButtonDelegation(gameId);
            
            rankedGameModal?.classList.add("hidden");
            
            if (rankedTimerInterval) clearInterval(rankedTimerInterval);
        }

    } catch (error) {
        console.error('Error starting ranked match:', error);
    }
}

export async function rankedGameStatus(
    preGameModal: Element | null,
    rankedGameModal: Element | null,
    startRankedMatchBtn: Element | null,
    spinerDiv: Element | null,
    cancelRankedMatchBtn: Element | null,
    btmBtn: Element | null
) {
    try{
        const rankedBackToMenuBtn = rankedGameModal?.querySelector("#backToMenuBtn") as HTMLButtonElement;
        const response = await instanceAPI.get("/game/matchmaking/status");
        let responseData = response.data as {inQueue: true}
        if(responseData.inQueue) {
            preGameModal?.classList.add("hidden");
            rankedGameModal?.classList.remove("hidden");
            rankedGameModal?.classList.add("flex");
            startRankedMatchBtn?.classList.add("hidden");
            spinerDiv?.classList.remove("hidden");
            spinerDiv?.classList.add("flex");
            cancelRankedMatchBtn?.classList.remove("hidden");
            rankedBackToMenuBtn?.setAttribute("disabled", "true");
        } else {
            preGameModal?.classList.remove("hidden");
            preGameModal?.classList.add("flex");
            rankedGameModal?.classList.add("hidden");
            rankedBackToMenuBtn?.removeAttribute("disabled");
        }
    } catch (error) {
        console.error('Error checking ranked game status:', error);
        btmBtn?.removeAttribute("disabled");
    }
}

export async function cancelRankedMatch(
    rankedTimerInterval: ReturnType<typeof setInterval> | null,
    spinerDiv: Element | null,
    cancelRankedMatchBtn: Element | null,
    startRankedMatchBtn: Element | null,
    rankedGameModal: Element | null
) {
    const rankedBackToMenuBtn = rankedGameModal?.querySelector("#backToMenuBtn") as HTMLButtonElement;
    try {
        const response = await instanceAPI.delete("/game/matchmaking");
        if(response.status === 200) {
            if (rankedTimerInterval) clearInterval(rankedTimerInterval);
            spinerDiv?.classList.add("hidden");
            spinerDiv?.classList.remove("flex");
            socket?.emit('game:leaveQueue');
            console.log("Match Canceled", response.status);
            cancelRankedMatchBtn?.classList.add("hidden");
            startRankedMatchBtn?.classList.remove("hidden");
            rankedBackToMenuBtn?.removeAttribute("disabled");
        }
    } catch (error) {
        console.error('Error canceling ranked match:', error);
    }
}

export function initRankedGame(
    preGameModal: Element | null,
    rankedGameModal: Element | null
) {
    const rankedMatchBtn = document.querySelector("#rankedMatchBtn");
    
    rankedMatchBtn?.addEventListener("click", async (e) => {
        e.stopPropagation();
        preGameModal?.classList.add("hidden");
        rankedGameModal?.classList.remove("hidden");
        rankedGameModal?.classList.add("flex");
    });
}
