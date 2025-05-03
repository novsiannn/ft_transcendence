import { navigation } from "../../elements/nagivation";
import { SearchBar } from "../../elements/SearchBar";
import { Select } from "../../elements/Select";

export function chatsPage(mainWrapper: HTMLDivElement | undefined) {
  document.body.classList.add("bg-gray-500");
  mainWrapper!.className = "h-screen w-full flex items-center";

  let res = `
		${navigation()}
		<div class="flex items-center justify-center w-full h-full  rounded-2xl text-center font-sans">
			<div class="flex flex-col gap-4 bg-gray-200 w-1/4 h-full text-left border-r border-gray-300">
				<div class="flex flex-col mt-16 border-t border-b border-gray-300">
					<p class="ml-4 mt-2 font-sans text-lg font-normal">Messages</p>
					${SearchBar('chat.searchChats', 'searchInputChatsPage')}
					${Select(1)}
				</div>
				<div id="allChatsContainer">
					
				</div>
			</div>
			<div class="bg-gray-100 w-3/4 h-full">
				<div class="mt-16 w-full border-t border-gray-300">
					<div class="flex  justify-center">
  						<div class="text-center max-w-md px-4 mt-16">
    						<div class="flex justify-center mb-6">
      							<div class="w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center">
        							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-16 h-16 ">
  										<path stroke-linecap="round" stroke-linejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z" />
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
			</div>
		</div>`;

  return res;
}
