import { navigationHandle } from "../../elements/navigation";
import { routeToGame } from "../../routing";

export function handlePlayPage() {
	navigationHandle();

	document.getElementById("btn-play")!.addEventListener('click', (e) => {
		e.preventDefault();
		routeToGame();
	});
}