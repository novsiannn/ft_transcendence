import { getModalWindowSuccess } from "../../elements/ModalSuccess";
import { navigation } from "../../elements/nagivation";
import { SearchBar } from "../../elements/SearchBar";

export function friendsPage() {
  document.body.classList.add(
    "bg-gray-500",
  );
  let res = `
			${navigation()}
			<div class="flex items-center justify-center mt-16 px-4 py-8 select-none">
  				<div class="flex flex-col md:flex-row w-full gap-6">
    
    				<div class="flex bg-gray-800 flex-col items-center rounded-2xl shadow-lg p-6 flex-1 h-full min-h-screen ">
      					<h1 data-i18n='friends.allUsers' class="text-2xl text-white font-black text-center mb-4">All Users</h1>
						${SearchBar('friends.findFriend', 'searchInputFriendsPage')}
						<div  id="allUsersContainer" class="flex-1 mt-4">

						</div>
   					</div>
    
    				<div id="friendsContainer" class="flex bg-gray-800 flex-col items-center rounded-2xl shadow-lg p-6 flex-1">
      					<h1 data-i18n='friends.yourFriends' class="text-2xl text-white font-black text-center mb-4">Your Friends</h1>
    				</div>
    
  				</div>
			</div>
			${getModalWindowSuccess()}
			`;
  return res
}
