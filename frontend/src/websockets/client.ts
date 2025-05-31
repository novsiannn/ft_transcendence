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

export let socket: Socket | null = null;

interface GameState {
  ball: { x: number; y: number };
  paddles: Record<string, { x: number; y: number; score: number }>;
  isRunning: boolean;
  winner?: number;
}

let gameCallbacks: {
  onGameReady?: (gameState: GameState) => void;
  onGameUpdate?: (gameState: GameState) => void;
  onGameStart?: (gameState: GameState) => void;
  onGameFinished?: (data: any) => void;
  onGameError?: (error: any) => void;
  onMatchFound?: (data: any) => void;
} = {};

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

  socket.on("notification", async (data) => {
    if (
      data.type !== "friend_removed" &&
      data.type !== "friend_rejected" &&
      data.type !== "friend_request_cancelled"
    ) {
      if (data.type === "friend_accepted") {
        await store.getAllFriendsRequest();
      }
      document
        .querySelector("#notificationIndicator")
        ?.classList.remove("invisible");
      refreshNotifications();
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
    console.log("Notification received:", data);
  });

  socket.on("connect_error", (error) => {
    console.error("Connection error:", error);
  });

  socket.on("disconnect", () => {
    console.log("Disconnected from server");
  });

  socket.on("chat:error", (data) => {
    console.log("some error. Next log is error data");
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

  socket.on("game:update", (gameState: GameState) => {
    if (gameCallbacks.onGameUpdate) {
      gameCallbacks.onGameUpdate(gameState);
    }
  });

  socket.on("game:start", (gameState: GameState) => {
    console.log("Game started!", gameState);
    if (gameCallbacks.onGameStart) {
      gameCallbacks.onGameStart(gameState);
    }
  });

  socket.on("game:finished", (data: any) => {
    console.log("Game finished!", data);
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

export function joinGame(gameId: string): void {
  if (!socket) return;
  socket.emit('game:join', gameId);
  console.log(`Joining game: ${gameId}`);
}

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

export function onGameReady(callback: (gameState: GameState) => void): void {
  gameCallbacks.onGameReady = callback;
}

export function onGameUpdate(callback: (gameState: GameState) => void): void {
  gameCallbacks.onGameUpdate = callback;
}

export function onGameStart(callback: (gameState: GameState) => void): void {
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

export function getSocket(): Socket | null {
  return socket;
}

export function disconnectSocket() {
  if (socket) {
    socket.disconnect();
    socket = null;
  }
}
