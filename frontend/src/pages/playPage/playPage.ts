import { routeToGame } from "../../routing";
import { navigationHandle } from "../../nagivation";

export function handlePlayPage(){
	navigationHandle();

	document.getElementById("btn-play")!.addEventListener('click',  (e) =>{
		e.preventDefault();
		routeToGame();
	});
}