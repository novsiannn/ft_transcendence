import { socket } from "./../../websockets/client";
import { navigationHandle } from "../../elements/navigation";
import { IChatData, IMessage, IRouteParams } from "../../shared";
import { getColorFromUsername } from "../../shared/randomColors";
import { store } from "../../store/store";
import { renderAllChats } from "./allChats";
import { API_URL } from "../../store/store";
import { navigateTo } from "../../routing";
import { BtnInviteInGame } from "../../elements/BtnInviteInGame";
import { handleModalSuccess } from "../../elements/ModalSuccess";
import i18next from "i18next";
import { handleModalError } from "../../elements"; 

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
  chatMessages: Array<IMessage>,
  myBlockedUser: boolean,
  userBlockedMe: boolean,
  isFriend: boolean
) => {
  const color = getColorFromUsername(friend.username);
  const initials = friend.username.charAt(0).toUpperCase();

  const messagesHTML = messagesForChat(chatMessages);

  return `
    <header class="flex w-full justify-between items-center px-4 py-3 bg-white border-b border-gray-200">
      <div class="flex items-center space-x-3">
        ${
          friend.avatar
            ? `<img id="profilePhotoInHeader${friend.userId}" src="${
                API_URL + friend.avatar
              }" alt="Profile" class="w-12 h-12 rounded-full object-cover" />`
            : `<div id="profilePhotoInHeader${friend.userId}" class="w-12 h-12 cursor-pointer rounded-full flex items-center justify-center ${color} text-white font-bold">${initials}</div>`
        }
        <div class="flex flex-col">
          <span  id="profileUsername${
            friend.userId
          }" class="text-gray-900 font-semibold cursor-pointer">${
    friend.username
  }</span>
        </div>
      </div>
      ${BtnInviteInGame()}
    </header>

    <main class="w-full flex-1 overflow-y-auto overflow-hidden p-4 flex flex-col-reverse space-y-reverse space-y-2 bg-gray-50" id="chatMessagesContainer">
      ${
        myBlockedUser
          ? `<p class="text-center text-red-500 ">${i18next.t("chat.youBlockedUser")}</p>`
          : userBlockedMe
          ? `<p class="text-center text-red-500 ">${i18next.t("chat.userBlockedYou")}</p>`
          : !isFriend
          ? `<p class="text-center text-red-500 ">${i18next.t("chat.youAreNotFriends")}</p>`
          : ""
      }
      ${
        chatMessages.length
          ? messagesHTML
          : `<div class="text-center text-gray-400">
                ${i18next.t("chat.noMessagesYet")}
            </div>`
      }
      
    </main>

    <footer class="px-4 py-3 w-full bg-white border-t border-gray-200">
      <div class="flex items-center space-x-2">
        <input
          type="text"
          placeholder='${i18next.t("chat.typeMessage")}'
          class="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          id="messageInputValue"
        />
        <button class="p-2 bg-blue-500 hover:bg-blue-600 rounded-lg text-white transition-colors duration-300 ease-in-out" id="sendMessageBtn">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
          </svg>
        </button>
      </div>
    </footer>
  `;
};

export const refreshChatSelector = (
  chatId: number,
  createdAt: string,
  content: string
) => {
  const selectorChatContainer = document.querySelector<HTMLDivElement>(
    `#chatNumber${chatId}`
  );

  const date = new Date(createdAt);
  const timeContainer = selectorChatContainer?.querySelector(
    "#createdAtContainer"
  );
  const lastMsgContainer = selectorChatContainer?.querySelector("#lastMessage");

  if(lastMsgContainer)
  lastMsgContainer.textContent = `${
    content.trim().length > 35
      ? content.trim().slice(0, 35) + `...`
      : content.trim().slice(0, 35)
  }`;
  if(timeContainer)
  timeContainer.textContent = `${date.getHours()}:${date
    .getMinutes()
    .toString()
    .padStart(2, "0")}`;
};

export const refreshMessagesInChat = async ({
  chatId,
  createdAt,
  content,
}: {
  chatId: number;
  createdAt: string;
  content: string;
}) => {
  const chatMessagesContainer = document.querySelector<HTMLDivElement>(
    "#chatMessagesContainer"
  );

  refreshChatSelector(chatId, createdAt, content);
  const chatMessages: Array<IMessage> = await store.getMessagesFromChat(chatId);

  if (chatMessagesContainer)
    chatMessagesContainer.innerHTML = messagesForChat(chatMessages);
};

export const handleOpenChat = async (chat: IChatData | undefined) => {
  const chatContainer =
    document.querySelector<HTMLDivElement>("#chatContainer");
  const blockedUserIds = store.getUser().blockedUserIds;
  const blockedByUserIds = store.getUser().blockedByUserIds;

  const isFriend = store
    .getAllFriends()
    .some((user) => user.id === chat?.userId);

  const myBlockedUsers = blockedUserIds.some((id) => id === chat!.userId);
  const usersBlockedMe = blockedByUserIds.some((id) => id === chat!.userId);

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
    chatContainer!.innerHTML = getChatContent(
      chat,
      chatMessages,
      myBlockedUsers,
      usersBlockedMe,
      isFriend
    );
    const messageInputValue =
      document.querySelector<HTMLInputElement>("#messageInputValue");
    const sendMessageBtn =
      document.querySelector<HTMLButtonElement>("#sendMessageBtn");
    const profileUsernameInHeader = document.querySelector<HTMLButtonElement>(
      `#profileUsername${chat.userId}`
    );
    const profilePhotoInHeader = document.querySelector<HTMLButtonElement>(
      `#profilePhotoInHeader${chat.userId}`
    );
    const btnInviteUserInGame =
      document.querySelector<HTMLButtonElement>(`#btnInviteUserInGame`);

    btnInviteUserInGame?.addEventListener("click", async () => {
      if (!myBlockedUsers && !usersBlockedMe){

        try{
          const response = await store.sendFriendGameRequest(chat.userId);
          if(response.status === 201){
            const res = response.data;
            store.setFriendGameId(res.game.id);
            store.setFriendPlayerOne(res.game.player1Id);
            store.setFriendPlayerTwo(res.game.player2Id);
            navigateTo("/game");
            setTimeout(() => {
              const preGameModal = document.querySelector("#preGameModal");
              const friendGameAcceptModal = document.querySelector("#friendGameAcceptModal");
              
              if (preGameModal && friendGameAcceptModal) {
                preGameModal.classList.add("hidden");
                preGameModal.classList.remove("flex");
                friendGameAcceptModal.classList.remove("hidden");
                friendGameAcceptModal.classList.add("flex");
              }
            }, 100);
            handleModalSuccess(`You invited ${chat.username} to play a Pong`);
        }
    }catch{
        handleModalError("Wait until invite expired");
    }
      }
    });

    profileUsernameInHeader?.addEventListener("click", () => {
      navigateTo(`/profile/${chat.userId}`);
    });

    profilePhotoInHeader?.addEventListener("click", () => {
      navigateTo(`/profile/${chat.userId}`);
    });

    if (myBlockedUsers || usersBlockedMe || !isFriend) {
      console.log("here");
      sendMessageBtn!.disabled = true;
      sendMessageBtn!.classList.remove("bg-blue-600", "hover:bg-blue-600");
      sendMessageBtn!.classList.add("bg-gray-400", "cursor-not-allowed");
      return;
    }

    sendMessageBtn?.addEventListener("click", async () => {
      if (!messageInputValue!.value.trim()) {
        return;
      }
      socket!.emit("chat:sendMessage", {
        chatId: chat.id,
        receiverId: chat.userId,
        content: messageInputValue!.value,
      });
      sendMessageBtn.disabled = true;
      sendMessageBtn.classList.remove("bg-blue-600", "hover:bg-blue-600");
      sendMessageBtn.classList.add("bg-gray-400", "cursor-not-allowed");
      setTimeout(() => {
        sendMessageBtn.disabled = false;
        sendMessageBtn.classList.remove("bg-gray-400", "cursor-not-allowed");
        sendMessageBtn.classList.add("bg-blue-600", "hover:bg-blue-600");
        console.log("btn active");
      }, 1000);
      if (messageInputValue!.value.trim().length > 0) {
        refreshMessagesInChat({
          chatId: chat.id,
          createdAt: new Date().toISOString(),
          content: messageInputValue!.value,
        });
      }
      messageInputValue!.value = "";
    });
  }
};

export const notifyUserNewMessage = (chatID: number) => {
  const chatBlock = document.querySelector<HTMLDivElement>(
    `#chatNumber${chatID}`
  );

  if (chatBlock) {
    chatBlock.classList.add("bg-green-200");

    setTimeout(() => {
      chatBlock.classList.remove("bg-green-200");
    }, 1500);
  }
};

const filterChats = (
  data: IChatData[],
  userToBeFiltered: string
): IChatData[] => {
  return data.filter((user) => user.username.startsWith(userToBeFiltered));
};

export const leaveFromChat = () => {
  const activeChatId = store.getActiveChatID();

  if (activeChatId) {
    socket?.emit("chat:leave", activeChatId);
    console.log(`leave from chat ${activeChatId} and disconnect`);
    store.setActiveChatID(null);
  }
};

export const handleChatsPage = async (
  mainWrapper?: HTMLDivElement,
  params?: IRouteParams
) => {
  const startChatSelect = document.querySelectorAll(".startChatSelect");
  const allMessages = document.querySelector("#allMessagesString");
  const searchInputChatsPage = document.querySelector<HTMLInputElement>(
    "#searchInputChatsPage"
  );

  if (!store.getChatsPageActive()) {
    socket?.emit("chat:openChats");
    store.setChatsPageActive(true);
  }

  let allChats: IChatData[] = await store.getAllChats();

  if (params?.id) {
    if (allChats.some((chat) => chat.userId == params.id)) {
      const friendChat: IChatData | undefined = allChats.find((chat) => {
        if (chat.userId == params.id) {
          socket?.emit("chat:join", chat.id);
          store.setActiveChatID(chat.id);
          console.log("here joined chat " + chat.id);
          return chat;
        }
      });
      handleOpenChat(friendChat);
    } else {
      navigateTo("/error");
    }
  }
  searchInputChatsPage?.addEventListener("input", async () => {
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
