import { navigation } from "../../elements/nagivation";


export function friendsPage() {
	document.body.classList.add("bg-gradient-to-t", "from-black", "via-black", "to-gray-800");
	return `
			${navigation()}
			<div class="flex flex-col items-center justify-center min-h-screen">
				<h1 class="text-9xl text-white font-black"> Friends Page </h1>
			</div>`
}