import { navigationHandle } from "../../elements/nagivation";
import { store } from "../../store/store";

export const renderAllChats = () => {
	return `<div class="bg-gray-700">
		
	</div>`;
}

export function handleChatsPage(mainWrapper?: HTMLDivElement) {
	const startChatSelect = document.querySelectorAll(".startChatSelect");
	const allChatsContainer = document.querySelector("#allChatsContainer");
	
	startChatSelect.forEach((select ) => {
		const target = select as HTMLSelectElement;
		select.addEventListener('change', async () => {
			await store.createNewChat(target.value);
			await store.getAllChats();
			allChatsContainer!.innerHTML = renderAllChats();
		})
	})
	
	navigationHandle();
}