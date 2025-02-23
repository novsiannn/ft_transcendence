import { navigation } from "../elements"

export function settingsPage(mainWrapper: HTMLDivElement | undefined) {
	document.body.classList.add("bg-gradient-to-t", "from-black", "via-black", "to-gray-800", "h-full");
	mainWrapper!.className = "mx-auto h-screen w-full";
	let res = `
				${navigation()}
				<div class="w-full flex flex-col flex-1 items-center justify-center min-h-screen">
  					<div class="px-6 py-3 text-black bg-white rounded-lg text-xl w-4/5 h-96 text-center">
    					<h1>Settings!</h1>
  					</div>
				</div>`;
	return res;
}