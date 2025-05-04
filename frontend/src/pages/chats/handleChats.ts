import { navigationHandle } from "../../elements/nagivation";
import { IChatData } from "../../shared";
import { store } from "../../store/store";
import { renderAllChats } from "./allChats";

export const getChatContent = (chatID: number) => {
	return `
    <header class="flex w-full items-center px-4 py-3 bg-white border-b border-gray-200">
      <div class="flex items-center space-x-3">
        <div class="h-10 w-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-700 font-medium">
          Ta
        </div>
        <div class="flex flex-col">
          <span class="text-gray-900 font-semibold">${chatID}</span>
        </div>
      </div>
    </header>

    <main class="flex-1 overflow-auto flex items-center justify-center text-gray-400">
      <div>No messages yet. Start a conversation!</div>
    </main>

    <footer class="px-4 py-3 w-full bg-white border-t border-gray-200">
      <div class="flex items-center space-x-2">
        <input
          type="text"
          placeholder="Type your message..."
          class="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button class="p-2 bg-blue-500 hover:bg-blue-600 rounded-lg text-white">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  				<path stroke-linecap="round" stroke-linejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
			</svg>
        </button>
      </div>
    </footer>
  `;;
}

export const handleOpenChat = async (chatID: number) => {
  const chatContainer =
    document.querySelector<HTMLDivElement>("#chatContainer");
	chatContainer!.innerHTML = getChatContent(chatID);
  await store.getMessagesFromChat(chatID);
};

export const handleChatsPage = async (mainWrapper?: HTMLDivElement) => {
  const startChatSelect = document.querySelectorAll(".startChatSelect");
  let allChats: IChatData[] = await store.getAllChats();

  renderAllChats(allChats);

  startChatSelect.forEach((select) => {
    const target = select as HTMLSelectElement;
    select.addEventListener("change", async () => {
      await store.createNewChat(target.value);
      allChats = await store.getAllChats();
      renderAllChats(allChats);
    });
  });

  navigationHandle();
};
