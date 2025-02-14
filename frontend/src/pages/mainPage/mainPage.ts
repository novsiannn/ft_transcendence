import { routeToGame } from "../../routing";

export function handleMainPage(){
	document.getElementById("btn-play")!.addEventListener('click',  (e) =>{
		e.preventDefault();
		routeToGame();
	});
}