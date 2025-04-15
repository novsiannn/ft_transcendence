import { navigationHandle } from "../../elements/nagivation";
import { routeToGame } from "../../routing";

export function handlePlayPage() {
	navigationHandle();

	document.getElementById("btn-play")!.addEventListener('click', (e) => {
		e.preventDefault();
		routeToGame();
	});
}