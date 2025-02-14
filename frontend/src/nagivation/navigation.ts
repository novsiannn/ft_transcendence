import { navigateTo } from "../routing";
import { naviRoutes } from "./navigationRoutes";

export function navigationHandle(){
	let navigationBtns = document.querySelectorAll("#naviBtn");
	
	navigationBtns.forEach((btn) => {
		btn.addEventListener('click', (e) => {
			if(btn.innerHTML.trim() in naviRoutes){
				navigateTo(naviRoutes[btn.innerHTML.trim()]);	
			}
		});
	})
}