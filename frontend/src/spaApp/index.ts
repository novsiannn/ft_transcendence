import {btn, mainWrapper} from '../elements';
import startGame from "../pages/game/game";
import { homePage, gamePage } from '../Layout/index';
import { routes } from "../routing/index"
import { routeToGame } from "../routing/index";


export default function runSPA(){
	document.body.append(mainWrapper);
	
    for (const k in routes) {
        if(location.pathname === k) {

            mainWrapper.removeAttribute("id");
            mainWrapper.className = "";
            document.body.className = "";
            mainWrapper.innerHTML = routes[k]();
    
            if(location.pathname === '/game'){
                
                mainWrapper.id = "game-container";
                mainWrapper.classList.add("h-screen", "flex", "flex-col", "gap-2.5", "justify-center", "items-center");
                window.addEventListener("DOMContentLoaded", () => {
                    startGame();
                });
            } else if(location.pathname === '/'){
                routeToGame();
            }

        }  
    }
}



const router = (i: number) => {
	// const changePage = routes[i][location.pathname] || null;
	// document.getElementById("app")!.innerHTML = changePage(); 
}

router(0);

const navigateTo = (url: string) => {
  history.pushState(null, "", url); // Меняем URL без перезагрузки
//   router(); // Запускаем отрисовку страницы
};

