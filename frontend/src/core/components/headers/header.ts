import Component from '../../templates/components'
import {PageIds} from '../../../pages/app/classApp'

const Buttons = [
	{
		id: PageIds.MainPage,
		text: 'main-page',
	},
	{
		id: PageIds.GamePage,
		text: 'game-page',
	}
];

class Header extends Component{
	constructor(tagName: string, className: string){
		super(tagName, className);
	}

	renderPageButtons(){
		const pageButtons = document.createElement('div');
		Buttons.forEach((e) => {
			const buttonHTML = document.createElement('a');
			buttonHTML.href = `#${e.id}`;
			buttonHTML.innerText = e.text;
			pageButtons.append(buttonHTML);
		});
		this.container.append(pageButtons); 
	}

	render(){
		this.renderPageButtons()
		return this.container;
	}
}

export default Header;