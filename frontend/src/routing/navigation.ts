import { leaveFromChat } from "../pages/chats";
import runSPA from "../spaApp";

export function navigateTo(newPath: string) {
  if(location.pathname.slice(0,6) === '/chats')
    leaveFromChat();
  if (newPath !== location.pathname) {
    history.pushState({}, "", newPath);
    runSPA();
  }
}
