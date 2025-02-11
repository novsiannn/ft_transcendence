// import Page from '../../core/templates/page'
// import { PageIds } from '../app/classApp';

// class MainPage extends Page{
// 	// static textObject = {
// 	// 	MainTitle: 'Main Page 123'
// 	// };

// 	constructor(id: string){
// 		super(id);
// 	}

// 	createButton(){
// 		const btn = document.createElement('button');
// 		btn.textContent = 'START GAME';
// 		btn.classList.add('bg-white', 'text-black', 'font-press-start', 'border-2', 'border-black', 'px-8', 'py-4', 'transform', 'skew-x-[-10deg]', 'shadow-[4px_4px_0_0_black]', 'hover:shadow-[2px_2px_0_0_black]', 'active:shadow-[1px_1px_0_0_black]', 'transition-shadow'
// 		);
// 		btn.addEventListener('click', () => {
// 			window.location.hash = PageIds.GamePage;
// 		});
// 		return btn;
// 	}

// 	render(){
// 		const btn = this.createButton();
// 		this.container.append(btn);
// 		return this.container;
// 	}
// }

// export default MainPage;