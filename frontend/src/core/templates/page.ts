abstract class Page{
	protected container: HTMLElement;

	constructor(id: string){
		this.container = document.createElement('div');
		this.container.classList.add('flex', 'flex-col', 'items-center', 'justify-center', 'min-h-screen', 
		'bg-gradient-to-t', 'from-black', 'via-black', 'to-gray-800', 'space-y-8');
		this.container.id = id;
	}

	render(){
		return this.container;
	}
}

export default Page;