import MainPage from '../mainPage/mainPage';
import Game from '../game/game';
import Page from '../../core/templates/page';
import Header from '../../core/components/headers/header';
import ErrorPage, {ErrorTypes} from '../error/error';

export const enum PageIds {
	MainPage = 'main-page',
	GamePage = 'game-page',
}

class App {
	private static  container: HTMLElement = document.body;
	private static defaultPageID: string = 'current-page'
	private initialPage: MainPage;
	private header: Header;

	static renderNewPage(idPage: string){
		const currentPageHTML = document.querySelector(`#${App.defaultPageID}`);
		if(currentPageHTML){
			currentPageHTML.remove();
		}
		// App.container.innerHTML = '';
		let page: Page | null = null;

		if(idPage === PageIds.MainPage){
			page = new MainPage(idPage)
		} else if (idPage === PageIds.GamePage){
			page = new Game(idPage);
		} else {
			page = new ErrorPage(idPage, ErrorTypes.Error_404);
		}

		if(page){
			const pageHTML = page.render();
			pageHTML.id = App.defaultPageID;
			App.container.append(pageHTML);
		}
	}

	private enableRouteChange(){
		window.addEventListener('hashchange', () =>{
			const hash = window.location.hash.slice(1);
			App.renderNewPage(hash);
		});
	}

	constructor(){
		this.initialPage = new MainPage('game-page');
		this.header = new Header('header', 'header');
	}

	run(){
		App.container.append(this.header.render());
		App.renderNewPage('main-page');
		this.enableRouteChange();
	}
}

export default App;