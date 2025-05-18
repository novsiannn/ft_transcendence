import { handleOpenChat } from "./handleChats";
import { API_URL } from "../../store/store";
import { IChatData } from "../../shared";
import { getColorFromUsername } from "../../shared/randomColors";
import { navigateTo } from "../../routing";
import { socket } from "../../websockets";

export const renderAllChats = (allChats: IChatData[]) => {
  const allChatsContainer =
    document.querySelector<HTMLDivElement>("#allChatsContainer");
  if (!allChatsContainer || !allChats) return;

  allChatsContainer.innerHTML = "";
  allChats.forEach((chat) => {
    const color = getColorFromUsername(chat.username);
    const initials = chat.username.charAt(0).toUpperCase();
    const date = new Date(chat.message.createdAt)

    const chatBlock = document.createElement("div");
    chatBlock.id = `chatNumber${chat.id}`;
    chatBlock.className =
      "relative flex items-center justify-between p-4 hover:bg-gray-100 transition-colors border-b border-gray-300 cursor-pointer";

    chatBlock.innerHTML = `
      <div class="flex items-center space-x-4">
        ${
          chat.avatar
            ? `<img
                src="${API_URL + chat.avatar}"
                alt="Profile"
                draggable="false"
                class="w-12 h-12 rounded-full object-cover"
              />`
            : `<div
                class="w-12 h-12 rounded-full flex items-center justify-center ${color} text-white font-bold"
              >
                ${initials}
              </div>`
        }
        <div class="flex flex-col">
          <span class="text-gray-900 font-medium">
            ${chat.username}
          </span>
          <span class="text-gray-500 text-sm truncate max-w-xs">
            ${chat.message.content || "No messages yet"}
          </span>
        </div>
      </div>
      <div class="absolute top-2 right-4 text-gray-500 text-xs">
        ${date.getHours()}:${date.getMinutes().toString().padStart(2, '0')}
      </div>
    `;

    chatBlock.addEventListener("click", () => {
      socket?.emit("chat:join", chat.id);
      navigateTo(`/chats/${chat.userId}`);
    });

    allChatsContainer.appendChild(chatBlock);
  });
};
