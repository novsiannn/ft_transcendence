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
