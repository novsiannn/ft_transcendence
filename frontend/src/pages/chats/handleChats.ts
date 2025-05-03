import { navigationHandle } from "../../elements/nagivation";
import { store } from "../../store/store";

export function handleChatsPage(mainWrapper?: HTMLDivElement) {
	const startChatSelect = document.querySelectorAll(".startChatSelect");
	const allChatsContainer = document.querySelector("#allChatsContainer");
	
	startChatSelect.forEach((select ) => {
		const target = select as HTMLSelectElement;
		select.addEventListener('change', async () => {
			console.log(allChatsContainer);
			
			await store.createNewChat(target.value);
			await store.getAllChats();
		})
	})
	
	navigationHandle();
}