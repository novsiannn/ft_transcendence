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
import {
  findUser,
  refreshOnlineStatus,
  refreshOnlineStatusFriendsPage,
} from "../shared";
import { IUser } from "../services/api/models/response/IUser";
import { navigateTo } from "../routing";
// import { acceptFriendGameModal } from "../pages/game/gameModal";

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
  onGameFinished?: (data: any) => void;
  onGameCancelled?: (error: any) => void;
  onMatchRankedFound?: (data: any) => void;
  onMatchFriendsFound?: (data: any) => void;
  timerCountdown?: (data: { seconds: number }) => void;
  onLocalGameCreated?: (data: { gameId: string }) => void;
} = {};

export let gameState: IGameState | null = null;

export function initializeSocket(): Socket | null {
  const token = localStorage.getItem("token");

  if (!token) return null;

  if (socket) return socket;

  socket = io(`https://${window.location.hostname}:3000`, {
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
    if (data.type === "game_invite") {
      console.log("CLIENT DATA ", data.data.game);
      console.log("RECIEVED GAME INVITE");
      let responseData = data.data;
      store.setFriendGameId(responseData.game.id);
      store.setFriendPlayerOne(responseData.game.player1Id);
      store.setFriendPlayerTwo(responseData.game.player2Id);

      if (gameCallbacks.onMatchFriendsFound) {
        gameCallbacks.onMatchFriendsFound(data);
      }
    }
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
      store.getAllUsersRequest();
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

      console.log(location.pathname);

      if (data.type === "friend_removed" || data.type === "friend_accepted") {
        await store.getAllUsersRequest();
        await store.getAllFriendsRequest();
      }

      if (location.pathname !== "/profile") {
        console.log(location.pathname.split("/"));

        console.log(response);

        if (location.pathname.split("/")[2] == response) {
          const user = findUser(response);
          if (user) refreshProfileBtnsBlock(user);
        }
      }
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

    await store.getUserRequest();

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
    await store.getUserRequest();

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

  socket.on("game:localCreated", (data: any) => {
    if (gameCallbacks.onLocalGameCreated) {
      gameCallbacks.onLocalGameCreated(data);
    }
  });

  socket.on("mm:ready", (data: any) => {
    socket?.emit("game:leaveQueue");

    if (gameCallbacks.onMatchRankedFound) {
      gameCallbacks.onMatchRankedFound(data);
    }
  });

  socket.on("game:update", (newGameState: IGameState) => {
    gameState = newGameState;
    if (gameCallbacks.onGameUpdate) {
      gameCallbacks.onGameUpdate(gameState);
    } else {
      console.warn("onGameUpdate callback not found!");
    }
  });

  socket.on("game:finished", (data: any) => {
    gameState = null;
    if (gameCallbacks.onGameFinished) {
      gameCallbacks.onGameFinished(data);
    }
  });

  socket.on("game:timer", (data: { seconds: number }) => {
    if (gameCallbacks.timerCountdown) {
      gameCallbacks.timerCountdown(data);
    }
  });

  socket.on("game:cancelled", (gameId: any) => {
    if (gameCallbacks.onGameCancelled) {
      gameCallbacks.onGameCancelled(gameId);
    }
  });

  socket?.on("online:users:list", (data) => {
    console.log(data);
  });

  socket?.on("online:error", (data) => {
    console.log(data);
  });

  socket?.on("online:user:status", (data) => {
    refreshOnlineStatus(data);
  });

  socket?.on("user:offline", (data) => {
    refreshOnlineStatus(data);

    if (location.pathname === "/friends") socket?.emit("online:get:all:status");

    console.log(data);
  });

  socket?.on("user:online", (data) => {
    refreshOnlineStatus(data);

    if (location.pathname === "/friends") socket?.emit("online:get:all:status");
  });

  socket?.on("online:all:status", (data) => {
    refreshOnlineStatusFriendsPage(data);
  });

  return socket;
}

export function movePaddleLocal(
  gameId: string,
  direction: "up" | "down",
  nickname: string
): void {
  if (!socket) return;

  socket.emit("game:moveLocalPaddle", {
    gameId: gameId,
    direction: direction,
    nickname: nickname,
  });
}

export function movePaddle(gameId: string, direction: "up" | "down"): void {
  if (!socket) return;

  socket.emit("game:movePaddle", {
    gameId: gameId,
    direction: direction,
  });
}
//GAME CALLBACKS
export function startGame(gameId: string): void {
  if (!socket) return;
  socket.emit("game:start", gameId);
}

export function leaveGame(gameId: string): void {
  if (!socket) return;
  socket.emit("game:leave", gameId);
}

export function timerCountdown(
  callback: (data: { seconds: number }) => void
): void {
  gameCallbacks.timerCountdown = callback;
}

export function onLocalGameCreated(
  callback: (data: { gameId: string }) => void
): void {
  gameCallbacks.onLocalGameCreated = callback;
}

export function onMatchRankedFound(callback: (data: any) => void): void {
  gameCallbacks.onMatchRankedFound = callback;
}
export function onMatchFriendsFound(callback: (data: any) => void): void {
  gameCallbacks.onMatchFriendsFound = callback;
}
export function onGameReady(callback: (gameState: IGameState) => void): void {
  gameCallbacks.onGameReady = callback;
}

export function onGameUpdate(callback: (gameState: IGameState) => void): void {
  gameCallbacks.onGameUpdate = callback;
}

export function onGameFinished(callback: (data: any) => void): void {
  gameCallbacks.onGameFinished = callback;
}

export function onGameCancelled(callback: (gameId: any) => void): void {
  gameCallbacks.onGameCancelled = callback;
}
//CLEAR CALLBACKS
export function clearGameCallbacks(): void {
  gameCallbacks = {};
}

export function getCurrentGameState(): IGameState {
  if (gameState) {
    return gameState;
  }

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
      },
    },
    paddles: {
      "1": {
        x: 0,
        y: 190, // (500 - 120) / 2
        score: 0,
      },
      "2": {
        x: 1275, // 1300 - 25
        y: 190, // (500 - 120) / 2
        score: 0,
      },
    },
    isRunning: false,
    winner: null,
    settings: {
      boardWidth: 1300,
      boardHeight: 500,
      paddleWidth: 15,
      paddleHeight: 120,
      ballRadius: 8,
      initialBallSpeed: 5,
      paddleSpeed: 20,
      speedIncrease: 1.07,
      maxScore: 5,
    },
  };
}

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
