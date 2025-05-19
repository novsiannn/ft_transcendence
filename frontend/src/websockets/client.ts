import { io, Socket } from "socket.io-client";
import { rerenderFriendsPage } from "../pages/friends/handleBtns";
import { refreshMessagesInChat } from "../pages/chats";

export let socket: Socket | null = null;

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

  socket.on("notification", (data) => {
    document
      .querySelector("#notificationIndicator")
      ?.classList.remove("invisible");

    if (location.pathname === "/friends") rerenderFriendsPage();
    console.log("Notification received:", data);
  });

  socket.on("connect_error", (error) => {
    console.error("Connection error:", error);
  });

  socket.on("disconnect", () => {
    console.log("Disconnected from server");
  });

  socket?.on("chat:newMessage", (messageData) => {
      console.log(messageData);
      
      refreshMessagesInChat(messageData)
    });

  return socket;
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
