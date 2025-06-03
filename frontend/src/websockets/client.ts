import { io, Socket } from "socket.io-client";
import { rerenderFriendsPage } from "../pages/friends/handleBtns";
import {
  notifyUserNewMessage,
  refreshChatSelector,
  refreshMessagesInChat,
} from "../pages/chats";
import { refreshNotifications } from "../elements/navigation";
import { store } from "../store/store";
import { refreshProfileBtnsBlock } from "../pages/profile/getUserData";
import { findUser } from "../shared";
import { IUser } from "../services/api/models/response/IUser";
import { navigateTo } from "../routing";

export let socket: Socket | null = null;

export interface IGameState {
  ball: {
    x: number;
    y: number;
    speed: number;
    direction: {
      x: number;
      y: number;
    };
  };
  paddles: {
    [playerId: string]: {
      x: number;
      y: number;
      score: number;
    };
  };
  isRunning: boolean;
  winner: string | number | null;
  settings: {
    boardWidth: number;
    boardHeight: number;
    paddleWidth: number;
    paddleHeight: number;
    ballRadius: number;
    initialBallSpeed: number;
    paddleSpeed: number;
    speedIncrease: number;
    maxScore: number;
  };
}

let gameCallbacks: {
  onGameReady?: (gameState: IGameState) => void;
  onGameUpdate?: (gameState: IGameState) => void;
  onGameStart?: (gameState: IGameState) => void;
  onGameFinished?: (data: any) => void;
  onGameError?: (error: any) => void;
  onMatchFound?: (data: any) => void;
} = {};

export let gameState: IGameState | null = null;

export function initializeSocket(): Socket | null {
  const token = localStorage.getItem("token");

  if (!token) return null;

  if (socket) return socket;

  socket = io("https://localhost:3000", {
    withCredentials: true,
    auth: { token },
    transports: ["websocket"],
    secure: true,
  });

  socket.on("connect", () => {
    console.log(" Socket connected:", socket?.id);
  });

  socket.on("notification:error", (data) => {
    console.log(data);
  });

  socket.on("notification", async (data) => {
    if (
      data.type !== "friend_removed" &&
      data.type !== "friend_rejected" &&
      data.type !== "friend_request_cancelled"
    ) {
      if (data.type === "friend_accepted") {
        if (location.pathname.slice(0, 6) === "/chats") {
          if (location.pathname.split("/").reverse()[0] == data.data.by.id)
            navigateTo("/chats");
        }
        await store.getAllFriendsRequest();
      }
      document
        .querySelector("#notificationIndicator")
        ?.classList.remove("invisible");
      refreshNotifications();
    }

    console.log(data);

    if (
      data.type === "friend_removed" &&
      location.pathname.slice(0, 6) === "/chats"
    ) {
      await store.getAllFriendsRequest();
      if (location.pathname.split("/").reverse()[0] == data.data.by.id)
        navigateTo("/chats");
    }

    if (location.pathname.slice(0, 8) === "/profile") {
      const response = data.data.from ? data.data.from.id : data.data.by.id;

      if (data.type === "friend_removed" || data.type === "friend_accepted") {
        await store.getAllUsersRequest();
        await store.getAllFriendsRequest();
      }

      const user = findUser(response);
      if (user) refreshProfileBtnsBlock(user);
    }

    if (location.pathname === "/friends") rerenderFriendsPage();
  });

  socket.on("connect_error", (error) => {
    console.error("Connection error:", error);
  });

  socket.on("disconnect", () => {
    console.log("Disconnected from server");
  });

  socket.on("chat:error", () => {
    console.log("some error. Next log is error data");
  });

  socket.on("user:block:success", async (data) => {
    const user: IUser | undefined = findUser(data.blockedUserId);

    console.log(data);

    if (location.pathname.slice(0, 8) === "/profile") {
      if (user) {
        await store.getUserRequest();
        refreshProfileBtnsBlock(user);
      }
    }
  });

  socket.on("user:blocked:by", async (data) => {
    const user: IUser | undefined = findUser(data.blockedByUserId);

    console.log(data);

    if (location.pathname.slice(0, 8) === "/profile") {
      if (user) {
        await store.getUserRequest();
        refreshProfileBtnsBlock(user);
      }
    } else if (location.pathname === "/friends") {
      rerenderFriendsPage();
    } else if (location.pathname.slice(0, 6) === "/chats") {
      await store.getUserRequest();
      if (location.pathname.split("/").reverse()[0] == data.blockedByUserId)
        navigateTo("/chats");
    }
  });

  socket.on("user:unblocked:by", async (data) => {
    const user: IUser | undefined = findUser(data.unblockedByUserId);

    console.log(data);

    await store.getAllFriendsRequest();
    if (location.pathname.slice(0, 8) === "/profile") {
      if (user) {
        await store.getUserRequest();
        refreshProfileBtnsBlock(user);
      }
    } else if (location.pathname === "/friends") {
      rerenderFriendsPage();
    } else if (location.pathname.slice(0, 6) === "/chats") {
      await store.getUserRequest();
      if (location.pathname.split("/").reverse()[0] == data.unblockedByUserId)
        navigateTo("/chats");
    }
  });

  socket.on("user:unblock:success", async (data) => {
    const user: IUser | undefined = findUser(data.blockedUserId);

    await store.getAllFriendsRequest();
    if (location.pathname.slice(0, 8) === "/profile") {
      if (user) {
        await store.getUserRequest();
        refreshProfileBtnsBlock(user);
      }
    } else if (location.pathname === "/friends") {
      rerenderFriendsPage();
    }
  });

  socket?.on("chat:newMessage", (messageData) => {
    console.log(messageData);

    refreshMessagesInChat(messageData);
  });

  socket?.on("chat:messageReceived", (messageData) => {
    console.log("New message received:", messageData);

    notifyUserNewMessage(messageData.chatId);
    refreshChatSelector(
      messageData.chatId,
      messageData.createdAt,
      messageData.content
    );
  });
  //GAME HANDLERS

  socket.on("mm:ready", (data: any) => {
    socket?.emit("game:leaveQueue");
    socket?.emit("game:join", data.game.id);
    // const rankedGameModal = document.querySelector("#rankedGameModal");
    // rankedGameModal?.classList.add("hidden");
    
    // gameState = data;
    // console.log("!!!GameState data!!!: ", gameState);
    //Draw ACCEPT MATCH button
    //Draw FULL GAME
    console.log("on Match FOUND:", data);

    if (gameCallbacks.onMatchFound) {
      gameCallbacks.onMatchFound(data);
    }
  });

  socket.on("game:update", (newGameState: IGameState) => {
    gameState = newGameState
    console.log("!!!GameState data!!!: ", gameState);
    if (gameCallbacks.onGameUpdate) {
      gameCallbacks.onGameUpdate(gameState);
    }
  });

  socket.on("game:start", (newGameState: IGameState) => {
    console.log("Game started!", gameState);
    console.log("!!!GameState data!!!: ", gameState);
    gameState = newGameState;

    if (gameCallbacks.onGameStart) {
      gameCallbacks.onGameStart(gameState);
    }
  });

  socket.on("game:finished", (data: any) => {
    console.log("Game finished!", data);

    gameState = null;
    if (gameCallbacks.onGameFinished) {
      gameCallbacks.onGameFinished(data);
    }
  });

  socket.on("game:error", (error: any) => {
    console.error("Game error:", error);
    if (gameCallbacks.onGameError) {
      gameCallbacks.onGameError(error);
    }
  });

  return socket;
}

// export function joinGame(gameId: string): void {
//   if (!socket) return;
//   socket.emit('game:join', gameId);
//   console.log(`Joining game: ${gameId}`);
// }

export function movePaddle(gameId: string, direction: 'up' | 'down'): void {
  if (!socket) return;
  
  const userId = store.getUser().id;
  socket.emit('game:move', {
    gameId: gameId,
    playerId: userId,
    direction: direction
  });
}
//GAME CALLBACKS
export function startGame(gameId: string): void {
  if (!socket) return;
  socket.emit('game:start', gameId);
}

export function leaveGame(gameId: string): void {
  if (!socket) return;
  socket.emit('game:leave', gameId);
}

export function onMatchFound(callback: (data: any) => void): void {
  gameCallbacks.onMatchFound = callback;
}

export function onGameReady(callback: (gameState: IGameState) => void): void {
  gameCallbacks.onGameReady = callback;
}

export function onGameUpdate(callback: (gameState: IGameState) => void): void {
  gameCallbacks.onGameUpdate = callback;
}

export function onGameStart(callback: (gameState: IGameState) => void): void {
  gameCallbacks.onGameStart = callback;
}

export function onGameFinished(callback: (data: any) => void): void {
  gameCallbacks.onGameFinished = callback;
}

export function onGameError(callback: (error: any) => void): void {
  gameCallbacks.onGameError = callback;
}
//CLEAR CALLBACKS
export function clearGameCallbacks(): void {
  gameCallbacks = {};
}

export function getCurrentGameState(): IGameState{
  // Если gameState есть, возвращаем его
  if (gameState) {
    return gameState;
  }
  
  // Если gameState null, создаем дефолтное состояние для локальных игр
  return createDefaultGameState();
}

function createDefaultGameState(): IGameState {
  return {
    ball: {
      x: 650, // 1300 / 2
      y: 250, // 500 / 2
      speed: 5,
      direction: {
        x: 0,
        y: 0,
      }
    },
    paddles: {
      '1': {
        x: 0,
        y: 190, // (500 - 120) / 2
        score: 0,
      },
      '2': {
        x: 1275, // 1300 - 25
        y: 190,  // (500 - 120) / 2
        score: 0,
      }
    },
    isRunning: false,
    winner: null,
    settings: {
      boardWidth: 1300,
      boardHeight: 500,
      paddleWidth: 15,
      paddleHeight: 120,
      ballRadius: 10,
      initialBallSpeed: 5,
      paddleSpeed: 40,
      speedIncrease: 1.07,
      maxScore: 5,
    }
  };
}

// Функция для очистки состояния игры
export function clearGameState(): void {
  gameState = null;
}

export function getSocket(): Socket | null {
  return socket;
}

export function disconnectSocket() {
  if (socket) {
    socket.disconnect();
    socket = null;
  }
}
