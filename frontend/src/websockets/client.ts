import { io, Socket } from "socket.io-client";
import { rerenderFriendsPage } from "../pages/friends/handleBtns";

const token = localStorage.getItem("token");;

export const socket = io("https://localhost:3000", {
  withCredentials: true,
  auth: { token },
  transports: ["websocket"],
  secure: true,
});

export function initializeSocket(): Socket {
  console.log("Initializing socket connection");

  socket.on("connect", () => {
    console.log("Connected to server");
  });

  socket.on("notification", (data) => {
    document.querySelector('#notificationIndicator')!.classList.remove('invisible');
    console.log(location.pathname);
    
    if(location.pathname === '/friends')
      rerenderFriendsPage();
    console.log(data);
  });

  socket.on("connect_error", (error) => {
    console.error("Connection error:", error);
  });

  socket.on("disconnect", () => {
    console.log("Disconnected from server");
  });

  return socket;
}

export default initializeSocket;
