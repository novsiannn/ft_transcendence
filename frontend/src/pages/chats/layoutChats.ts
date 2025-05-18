import { navigation } from "../../elements/navigation";
import { SearchBar } from "../../elements/SearchBar";
import { Select } from "../../elements/Select";

export function chatsPage(mainWrapper: HTMLDivElement | undefined) {
  document.body.classList.add("bg-gray-500");
  mainWrapper!.className = "h-screen w-full flex flex-col overflow-hidden";

  let res = `
    ${navigation()}
    <div class="flex flex-1 w-full overflow-hidden font-sans" id="chatsPage">
      <div class="flex flex-col bg-gray-200 w-1/4 text-left border-r border-gray-300">
        <div class="flex flex-col border-t border-b border-gray-300">
          <p class="ml-4 mt-2 text-xl font-semibold select-none cursor-default" id="allMessagesString">Messages</p>
          ${SearchBar('chat.searchChats', 'searchInputChatsPage')}
          ${Select(1)}
        </div>
        <div id="allChatsContainer" class="flex-1 overflow-auto">
        </div>
      </div>

      <div class="bg-gray-100 flex-1 flex flex-col">
        <div class="flex-1 flex flex-col items-center w-full justify-center border-t h-full border-gray-300" id="chatContainer">
          <div class="text-center max-w-md px-4">
            <div class="flex justify-center mb-6">
              <div class="w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                  stroke-width="1.5" stroke="currentColor" class="w-16 h-16">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z" />
                </svg>
              </div>
            </div>
            <h2 class="text-xl font-semibold text-gray-800 mb-2">Start a chat</h2>
            <p class="text-gray-500 mb-6">
              Select an existing chat from the list on the left or<br />
              start a new conversation with a friend.
            </p>
            ${Select(2)}
          </div>
        </div>
      </div>
    </div>`;

  return res;
}
