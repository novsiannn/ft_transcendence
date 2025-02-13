import {navigateTo} from "./index"

export function routeToGame(){
	document.getElementById("btn-play")!.addEventListener('click',  (e) =>{
		e.preventDefault();
		navigateTo("/game");
	});
}

export function routeToHome(){
	navigateTo("/");
}