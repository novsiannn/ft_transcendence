import {btn, mainWrapper} from '../elements';
import { ERoutes } from './types'
import { IRoutes } from './types'
import startGame from "../pages/game/game";

function homePage()
{
	return `<div class="flex flex-col items-center justify-center min-h-screen bg-gradient-to-t from-black via-black to-gray-800 space-y-8">
                <button class="px-6 py-3 text-white bg-blue-500 rounded-lg text-xl hover:bg-blue-700 focus:outline-none">
                    START
                </button>
            </div>`;
}

function gamePage()
{
    document.body.style.margin = "0";
    document.body.style.padding = "0";
	return `
        <canvas id="game-board" width="800" height="500"></canvas>
        <p id="score-info" class="text-4xl" > Score </p>
        <button id="restart-btn" class="px-3 py-1 border-2 border-crimson rounded-[10px] bg-gray-500 text-white text-[25px]"> Restart </button>`;
}


const routes: Record< string, () => string > = {
    "/": homePage,
    "/game": gamePage,
};

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

// function enableRouteChange(){
// 		window.addEventListener('hashchange', () =>{
// 			const hash = location.pathname;
// 			console.log(hash);
			
// 		});
// }

// enableRouteChange();
