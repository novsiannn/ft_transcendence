import { leaveFromChat } from "../pages/chats";
import runSPA from "../spaApp";
import { store } from "../store/store";
import { socket } from "../websockets";

export function navigateTo(newPath: string) {
  if (location.pathname.slice(0, 6) === "/chats") {
    leaveFromChat();
    if (newPath.slice(0, 6) !== "/chats") {
      console.log("chats are closed");
      socket?.emit("chat:closeChats");
      store.setChatsPageActive(false);
    }
  }  
  if (newPath !== location.pathname) {
    history.pushState({}, "", newPath);
    runSPA();
  }
}
