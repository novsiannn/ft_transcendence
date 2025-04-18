import { navigation } from "../../elements/nagivation";

export function friendsPage() {
  document.body.classList.add(
    "bg-gradient-to-t",
    "from-black",
    "via-black",
    "to-gray-800"
  );
  return `
			${navigation()}
			<div class="flex items-center justify-center min-h-screen w-full px-4 py-8">
  				<div class="flex flex-col md:flex-row w-full md:w-3/4 lg:w-2/3 gap-6">
    
    				<div id="allUsersContainer" class="flex flex-col  rounded-2xl shadow-lg p-6 flex-1">
      					<h1 class="text-2xl text-white font-black text-center mb-4">All Users</h1>
   					</div>
    
    				<div id="friendsContainer" class="flex flex-col rounded-2xl shadow-lg p-6 flex-1">
      					<h1 class="text-2xl text-white font-black text-center mb-4">Your Friends</h1>
    				</div>
    
  				</div>
			</div>`;
}
