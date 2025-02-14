import { routeToGame } from "../../routing";
import { navigationHandle } from "../../nagivation";
// import { loginPage } from "../../Layout";

export function handleMainPage(){
	navigationHandle();

	document.getElementById("btn-play")!.addEventListener('click',  (e) =>{
		e.preventDefault();
		routeToGame();
	});
}