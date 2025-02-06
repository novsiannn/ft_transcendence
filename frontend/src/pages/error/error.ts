import Page from '../../core/templates/page'

export const enum ErrorTypes{
	Error_404 = `  ERROR 404 | PAGE DOESN'T EXIST  `,
}

class ErrorPage extends Page{
	private errorType: ErrorTypes | string;

	constructor(id: string, errorType: ErrorTypes | string){
		super(id);
		this.errorType = errorType;
	}

	render(){
		let errorMsg1 = document.createElement('h1');
		this.container.classList.add('text-white', 'p-6');
		errorMsg1.classList.add('text-2xl', 'font-bold');
		errorMsg1.textContent = ErrorTypes.Error_404;
		this.container.append(errorMsg1);
		return this.container;
	}
}

export default ErrorPage;