import { navigationHandle } from "../../elements/nagivation";
import { store } from "../../store/store";

export function handleChatsPage(mainWrapper?: HTMLDivElement) {
	const startChatSelect = document.querySelectorAll(".startChatSelect");
	
	startChatSelect.forEach((select ) => {
		const target = select as HTMLSelectElement;
		select.addEventListener('change', async () => {
			console.log(select);
			
			await store.createNewChat(target.value);
			await store.getAllChats();
		})
	})
	
	navigationHandle();
}