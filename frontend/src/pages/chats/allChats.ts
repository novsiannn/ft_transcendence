import { handleOpenChat } from "./handleChats";
import { API_URL } from "../../store/store";
import { IChatData } from "../../shared";
import { getColorFromUsername } from "../../shared/randomColors";

export const renderAllChats = (allChats: IChatData[]) => {
  const allChatsContainer =
    document.querySelector<HTMLDivElement>("#allChatsContainer");
  if (!allChatsContainer || !allChats) return;

  allChats.forEach((friend) => {
    const color = getColorFromUsername("w");
    const initials = "w".toUpperCase();

    const chatBlock = document.createElement("div");
    chatBlock.id = `chatWith${friend.userId}`;
    chatBlock.className =
      "relative flex items-center justify-between p-4 hover:bg-gray-100 transition-colors border-b border-gray-300 cursor-pointer";

    chatBlock.innerHTML = `
      <div class="flex items-center space-x-4">
        ${
          friend.avatar
            ? `<img
                src="${API_URL + friend.avatar}"
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
            ${friend.userId}
          </span>
          <span class="text-gray-500 text-sm truncate max-w-xs">
            ${friend.message.content || "No messages yet"}
          </span>
        </div>
      </div>
      <div class="absolute top-2 right-4 text-gray-500 text-xs">
        18:15
      </div>
    `;

    chatBlock.addEventListener("click", () => {
      handleOpenChat(friend.id);
    });

    allChatsContainer.appendChild(chatBlock);
  });
};