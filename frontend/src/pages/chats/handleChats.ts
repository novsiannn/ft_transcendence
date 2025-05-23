import { socket } from "./../../websockets/client";
import { navigationHandle } from "../../elements/navigation";
import { IChatData, IMessage, IRouteParams } from "../../shared";
import { getColorFromUsername } from "../../shared/randomColors";
import { store } from "../../store/store";
import { renderAllChats } from "./allChats";
import { API_URL } from "../../store/store";
import { navigateTo } from "../../routing";

let currentOutsideClickHandler: ((event: MouseEvent) => void) | null = null;

const messagesForChat = (chatMessages: Array<IMessage>): string => {
  const currentUserId = store.getUser().id;

  return chatMessages
    .map((msg) => {
      const isMyMessage = msg.senderId === currentUserId;
      const time = new Date(msg.createdAt);
      const formattedTime = `${time.getHours()}:${String(
        time.getMinutes()
      ).padStart(2, "0")}`;

      return `
      <div class="flex ${isMyMessage ? "justify-end" : "justify-start"}">
        <div class="max-w-[75%] px-4 py-2 text-wrap rounded-2xl shadow text-sm ${
          isMyMessage
            ? "bg-blue-500 text-white rounded-br-none"
            : "bg-gray-500 text-white rounded-bl-none"
        }">
        <p class="break-words text-white leading-relaxed text-[14px]">${
          msg.content
        }</p>
        <div class="text-[10px] ${
          isMyMessage ? "text-right" : "text-left"
        } opacity-60 mt-1">${formattedTime}</div>
      </div>
    </div>
    `;
    })
    .join("");
};

export const getChatContent = (
  friend: IChatData,
  chatMessages: Array<IMessage>
) => {
  const color = getColorFromUsername(friend.username);
  const initials = friend.username.charAt(0).toUpperCase();

  const messagesHTML = messagesForChat(chatMessages);

  return `
    <header class="flex w-full items-center px-4 py-3 bg-white border-b border-gray-200">
      <div class="flex items-center space-x-3">
        ${
          friend.avatar
            ? `<img src="${
                API_URL + friend.avatar
              }" alt="Profile" class="w-12 h-12 rounded-full object-cover" />`
            : `<div class="w-12 h-12 rounded-full flex items-center justify-center ${color} text-white font-bold">${initials}</div>`
        }
        <div class="flex flex-col">
          <span class="text-gray-900 font-semibold">${friend.username}</span>
        </div>
      </div>
    </header>

    <main class="w-full flex-1 overflow-y-auto overflow-hidden p-4 flex flex-col-reverse space-y-reverse space-y-2 bg-gray-50" id="chatMessagesContainer">
      ${
        chatMessages.length
          ? messagesHTML
          : `<div class="text-center text-gray-400">No messages yet. Start a conversation!</div>`
      }
    </main>

    <footer class="px-4 py-3 w-full bg-white border-t border-gray-200">
      <div class="flex items-center space-x-2">
        <input
          type="text"
          placeholder="Type your message..."
          class="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          id="messageInputValue"
        />
        <button class="p-2 bg-blue-500 hover:bg-blue-600 rounded-lg text-white" id="sendMessageBtn">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
          </svg>
        </button>
      </div>
    </footer>
  `;
};

const refreshChatSelector = (chatId: number, createdAt: string, content: string) => {
  const selectorChatContainer = document.querySelector<HTMLDivElement>(
    `#chatNumber${chatId}`
  );
  
  const date = new Date(createdAt)
  const timeContainer = selectorChatContainer?.querySelector('#createdAtContainer');
  const lastMsgContainer = selectorChatContainer?.querySelector('#lastMessage');

  lastMsgContainer!.textContent = `${content.length > 30? content.slice(0,30)+ `...` : content.slice(0,30) }`;
  timeContainer!.textContent = `${date.getHours()}:${date.getMinutes().toString().padStart(2, '0')}`;
}

export const refreshMessagesInChat = async ({chatId, createdAt, content}: {chatId: number, createdAt:string, content: string}) => {
  const chatMessagesContainer = document.querySelector<HTMLDivElement>(
    "#chatMessagesContainer"
  );

  refreshChatSelector(chatId, createdAt, content);
  const chatMessages: Array<IMessage> = await store.getMessagesFromChat(chatId);

  if (chatMessagesContainer)
    chatMessagesContainer.innerHTML = messagesForChat(chatMessages);
};

export const leaveFromChat = () => {
  const activeChatId = store.getActiveChatID();

  console.log(activeChatId);
  
  if (activeChatId) {
    socket?.emit("chat:leave", activeChatId);
    console.log("leave from chat and disconnect");
    store.setActiveChatID(null);
  }
};

export const handleOpenChat = async (chat: IChatData | undefined) => {
  const chatContainer =
    document.querySelector<HTMLDivElement>("#chatContainer");

  const chatMessages: Array<IMessage> = await store.getMessagesFromChat(
    chat!.id
  );

  if (currentOutsideClickHandler) {
    document.removeEventListener("click", currentOutsideClickHandler);
    currentOutsideClickHandler = null;
  }

  currentOutsideClickHandler = (event: MouseEvent) => {
    const target = event.target as Node;
    const allChatsContainer =
      document.querySelector<HTMLDivElement>("#allChatsContainer");
    const chatsPage = document.querySelector<HTMLDivElement>("#chatsPage");
    const imgLogoNavi =
      document.querySelector<HTMLDivElement>("#imgLogoWrapper");
    const dropdownMenu =
      document.querySelector<HTMLDivElement>("#dropdownMenu");
    const chatContainer =
      document.querySelector<HTMLDivElement>("#chatContainer");
    const chatNumber = document.querySelector<HTMLDivElement>(
      `#chatNumber${chat!.id}`
    );
    const messagesSelectorWrapper = document.querySelector<HTMLDivElement>(
      "#messagesSelectorWrapper"
    );

    if (chatsPage && chatsPage.contains(target)) {
      if (
        target == chatNumber ||
        chatContainer?.contains(target) ||
        chatNumber?.contains(target) ||
        target == messagesSelectorWrapper ||
        messagesSelectorWrapper?.contains(target)
      ) {
        return;
      } else if (target == allChatsContainer) {
        navigateTo("/chats");
        return;
      }
      document.removeEventListener("click", currentOutsideClickHandler!);
    }
  };

  document.addEventListener("click", currentOutsideClickHandler);

  if (chat) {
    chatContainer!.innerHTML = getChatContent(chat, chatMessages);
    const messageInputValue =
      document.querySelector<HTMLInputElement>("#messageInputValue");
    document
      .querySelector<HTMLButtonElement>("#sendMessageBtn")!
      .addEventListener("click", async () => {
        socket!.emit("chat:sendMessage", {
          chatId: chat.id,
          receiverId: chat.userId,
          content: messageInputValue!.value,
        });
        console.log(store.getUser().id);
        refreshChatSelector(chat.id, new Date().toISOString() ,messageInputValue!.value)
        messageInputValue!.value = "";
        handleOpenChat(chat);
      });
  }
};

const filterChats = (data: IChatData[] , userToBeFiltered: string): IChatData[] => {
  return data.filter((user) => user.username.startsWith(userToBeFiltered));
}

export const handleChatsPage = async (
  mainWrapper?: HTMLDivElement,
  params?: IRouteParams
) => {
  const startChatSelect = document.querySelectorAll(".startChatSelect");
  const allMessages = document.querySelector("#allMessagesString");
  const searchInputChatsPage = document.querySelector<HTMLInputElement>("#searchInputChatsPage");

  let allChats: IChatData[] = await store.getAllChats();

  leaveFromChat();
  if (params?.id) {
    if (allChats.some((chat) => chat.userId == params.id)) {
      const friendChat: IChatData | undefined = allChats.find((chat) => {
        if (chat.userId == params.id) {
          socket?.emit("chat:join", chat.id);
          store.setActiveChatID(chat.id)
          console.log("here joined chat " + chat.id);
          return chat;
        }
      });
      handleOpenChat(friendChat);
    } else {
      navigateTo("/error");
    }
  }
  searchInputChatsPage?.addEventListener('input', async () => {
    allChats = await store.getAllChats();
    allChats = filterChats(allChats, searchInputChatsPage.value);
    renderAllChats(allChats);
  });
  
  renderAllChats(allChats);

  startChatSelect.forEach((select) => {
    const target = select as HTMLSelectElement;
    select.addEventListener("change", async () => {
      await store.createNewChat(target.value);
      allChats = await store.getAllChats();
      renderAllChats(allChats);
    });
  });
  allMessages!.addEventListener("click", () => {
    leaveFromChat();
    navigateTo("/chats");
  });

  navigationHandle();
};
