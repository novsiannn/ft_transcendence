import MainPage from '../mainPage/mainPage';
import Game from '../game/game';
import Page from '../../core/templates/page';
import Header from '../../core/components/headers/header';
import ErrorPage, {ErrorTypes} from '../error/error';

export const enum PageIds {
	MainPage = 'home',
	GamePage = 'game',
	DefaultPage = 'home'
}

class App {
	private static  container: HTMLElement = document.body;
	private static defaultPageID: string = 'current'
	private initialPage: MainPage;
	private header: Header;

	static renderNewPage(idPage: string){
		const currentPageHTML = document.querySelector(`#${App.defaultPageID}`);
		if(currentPageHTML){
			currentPageHTML.remove();
		}
		let page: Page | null = null;

		if(idPage === PageIds.MainPage){
			page = new MainPage(idPage)
		} else if (idPage === PageIds.GamePage){
			page = new Game(idPage);
		} else {
			page = new ErrorPage(idPage, ErrorTypes.Error_404);
		}
		console.log(idPage);
		localStorage.setItem('PageName', idPage);
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
		this.initialPage = new MainPage('home');
		this.header = new Header('header', 'header');
	}

	run(){
		let currentPage = localStorage.getItem('PageName');
		App.container.append(this.header.render());
		if (currentPage === null)
			currentPage = PageIds.DefaultPage;
		App.renderNewPage(currentPage);
		this.enableRouteChange();
	}
}

export default App;