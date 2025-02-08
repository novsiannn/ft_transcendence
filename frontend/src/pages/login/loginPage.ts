import Page from '../../core/templates/page'

const enum TextCollection {
    LoginHeader = "Login",
    ForgotPassword = "Forgot Password?"
}

class Login extends Page
{
    
    constructor(id: string){
        super(id);
    }
    
    createPageElements(){
        let loginHeader = document.createElement('h2');
        let inputMail = document.createElement('input');
        let inputPassword = document.createElement('input');
        let btnSubmitLogin = document.createElement('button');
        let textForgotPassword = document.createElement('p');
        let linkForQuestion = document.createElement('a');

        // Classes of elements
        loginHeader.classList.add("text-xl", "font-semibold", "text-gray-700", "text-center", "mb-4");
        inputMail.classList.add("w-full", "mb-3", "px-3", "py-2", "border", "rounded", "focus:ring-2", "focus:ring-blue-400");
        inputPassword.classList.add("w-full", "mb-4", "px-3", "py-2", "border", "rounded", "focus:ring-2", "focus:ring-blue-400");
        btnSubmitLogin.classList.add("w-full", "bg-green-500", "text-white", "py-2", "rounded", "hover:bg-green-600");
        textForgotPassword.classList.add("text-center","mt-3");
        linkForQuestion.classList.add("text-blue-500", "hover:underline");

        // Types
        inputMail.type = "text";
        inputPassword.type = "password"

        linkForQuestion.href = "#"

        //Placeholders
        inputMail.placeholder = "your email";
        inputPassword.placeholder = "your password"

        loginHeader.textContent = TextCollection.LoginHeader;
        btnSubmitLogin.textContent = TextCollection.LoginHeader;
        linkForQuestion.textContent = TextCollection.ForgotPassword;

        textForgotPassword.append(linkForQuestion);
        this.container.append(loginHeader);
        this.container.append(inputMail);
        this.container.append(inputPassword);
        this.container.append(btnSubmitLogin);
        this.container.append(textForgotPassword);  
    }

    //this function is also exist in file game.ts. Put this function outside classes !!!!!!
    removeAllClassesFromElement(elem: HTMLElement): void {
        while (elem.classList.length > 0) {
            elem.classList.remove(elem.classList[0]);
        }
    }
    
    render(){
        this.removeAllClassesFromElement(this.container);
        document.body.classList.add("flex", "items-center", "justify-center", "min-h-screen", "bg-gray-100");
        this.container.className = "bg-white p-6 rounded-lg shadow w-80";
        this.createPageElements();
        return this.container;
    }

}

export default Login;