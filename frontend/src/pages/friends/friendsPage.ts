import { navigation } from "../../elements/nagivation";


export function friendsPage() {
	document.body.classList.add("bg-gradient-to-t", "from-black", "via-black", "to-gray-800");
	return `
			${navigation()}
			<div class="flex flex-col items-center justify-center min-h-screen">
				<div class="w-1/2 h-auto ">
					<h1 class="text-2xl text-white font-black text-center m-5"> Transcendence</h1>
					<div id="friendsContainer" class="flex flex-col">
					
					</div>
				</div>
			</div>`
}