import { getModalWindowSuccess } from "../../elements/ModalSuccess";
import { navigation } from "../../elements/nagivation";

export function friendsPage() {
  document.body.classList.add(
    "bg-gray-500",
  );
  let res = `
			${navigation()}
			<div class="flex items-center justify-center min-h-full mt-24 px-4 py-8 select-none">
  				<div class="flex flex-col md:flex-row w-full gap-6">
    
    				<div  id="allUsersContainer" class="flex bg-gray-800 flex-col items-center rounded-2xl shadow-lg p-6 flex-1 ">
      					<h1 data-i18n='friends.allUsers' class="text-2xl text-white font-black text-center mb-4">All Users</h1>
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
