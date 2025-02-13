import { mainWrapper } from '../elements';
import { startGame } from "../pages/game/game";
import { routes } from "../routing/index"
import { routeToGame } from "../routing/index";
import { errorPage } from "../Layout/index"
import { handleRegistration } from '../pages/registration';
import { handleLogin } from '../pages/login';
// import { navigateTo } from '../routing/index';

export default function runSPA(path ?: string){
	document.body.append(mainWrapper);

    if(location.pathname in routes) {

        mainWrapper.removeAttribute("id");
        mainWrapper.className = "";
        document.body.className = "";
        mainWrapper.innerHTML = routes[location.pathname]();
    
        if(location.pathname === '/game'){  
            mainWrapper.id = "game-container";
            mainWrapper.classList.add("h-screen", "flex", "flex-col", "gap-2.5", "justify-center", "items-center");
            startGame();
        } else if (location.pathname === '/'){
            routeToGame();
        } else if (location.pathname === '/registration'){
            handleRegistration();
        } else if (location.pathname === '/login'){
            handleLogin();
        }
    }
    if(!(location.pathname in routes)) {
        mainWrapper.innerHTML = errorPage();
    }
}

window.addEventListener("popstate", () => {
    runSPA(location.pathname);
});