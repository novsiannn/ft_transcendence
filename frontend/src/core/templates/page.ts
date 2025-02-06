abstract class Page{
	protected container: HTMLElement;
	static textObject = {
	
	};

	constructor(id: string){
		this.container = document.createElement('div');
		this.container.classList.add('flex', 'flex-col', 'items-center', 'justify-center', 'min-h-screen', 
		'bg-gradient-to-t', 'from-black', 'via-black', 'to-gray-800', 'space-y-8');
		this.container.id = id;
	}

	protected createHeaderTitle(text: string){
		const headerTitle = document.createElement('h1');
		headerTitle.innerText = text;
		return headerTitle; 
	}

	render(){
		return this.container;
	}
}

export default Page;