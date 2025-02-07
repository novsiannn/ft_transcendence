import Page from '../../core/templates/page'


const enum TextAboutUs {
    Header = "Transcendence",
    TextDescription = "Здесь могла бы быть ваша реклама...",
    BtnContent = "Registration",
    SignIn = "Sign In",
    registrationHeader = "Registration"
}

class Registration extends Page
{
    
    constructor(id: string){
        super(id);
    }
    
    createPageElements(){
        // document.body.classList.add("asd");
        // let wrapper = document.createElement('div');
        let infoContainer = document.createElement('div');
        let headerInfo = document.createElement('h1');
        let textAboutProject = document.createElement('p');
        let registrationContainer = document.createElement('div');
        let registrationHeader = document.createElement('h2');
        let registrationForm = document.createElement('form');
        let inputName = document.createElement('input');
        let inputEmail = document.createElement('input');
        let inputPassword = document.createElement('input');
        let btnRegistration = document.createElement('input');
        let loginBtn = document.createElement('p');
        let linkForLogin = document.createElement('a');

        headerInfo.textContent = TextAboutUs.Header;
        textAboutProject.textContent = TextAboutUs.TextDescription;
        btnRegistration.textContent = TextAboutUs.BtnContent;
        linkForLogin.text = TextAboutUs.SignIn;
        registrationHeader.textContent = TextAboutUs.registrationHeader;
    
        //All IDs from this page
        registrationForm.id = "registerForm";
        inputName.id = "username";
        inputEmail.id = "email";
        inputPassword.id = "password";

        //All types
        inputName.type = "text";
        inputEmail.type = "email";
        inputPassword.type = "password";
        btnRegistration.type = "submit";

        //Placeholders
        inputName.placeholder = "username";
        inputEmail.placeholder = "your email";
        inputPassword.placeholder = "your password";
        linkForLogin.href = "#";



        //Elements class
        linkForLogin.classList.add("text-blue-500");
        loginBtn.classList.add("text-center", "mt-4");
        inputName.classList.add("w-full", "p-2", "border", "rounded");
        inputEmail.classList.add("w-full", "p-2", "border", "rounded");
        inputPassword.classList.add("w-full", "p-2", "border", "rounded");
        btnRegistration.classList.add("w-full", "bg-blue-500", "text-white", "p-2", "rounded", "hover:bg-blue-600");
        registrationForm.classList.add("space-y-4");
        registrationHeader.classList.add("text-2xl", "font-bold", "text-center", "mb-4");
        headerInfo.classList.add("text-4xl", "font-bold");
        textAboutProject.classList.add( "mt-4", "text-lg");
    
        //Container classes
        infoContainer.classList.add("w-3/5", "p-10", "flex", "flex-col", "justify-center", "bg-gradient-to-r", "from-purple-900", "to-blue-900", "text-white", "rounded-l-lg");

        registrationContainer.classList.add("w-2/5", "p-10", "flex", "flex-col", "justify-center", "rounded-r-lg");

        //Form append
        loginBtn.append(linkForLogin);
        registrationContainer.append(registrationHeader);
        registrationForm.append(inputName);
        registrationForm.append(inputEmail);
        registrationForm.append(inputPassword);
        registrationForm.append(btnRegistration);
        registrationForm.append(linkForLogin);

        
        registrationContainer.append(registrationForm);
        infoContainer.append(headerInfo);
        infoContainer.append(textAboutProject);

        // wrapper.append(infoContainer);
        // wrapper.append(registrationContainer);
        this.container.append(infoContainer);
        this.container.append(registrationContainer);
        // this.container.append(wrapper);
    }

    //this function is also exist in file game.ts. Put this function outside classes !!!!!!
    removeAllClassesFromElement(elem: HTMLElement): void {
        while (elem.classList.length > 0) {
          elem.classList.remove(elem.classList[0]);
        }
      }
    
    render(){
        this.removeAllClassesFromElement(this.container);
        document.body.classList.add("h-screen", "flex", "items-center", "justify-center", 'bg-gradient-to-t', 'from-black', 'via-black', 'to-gray-800');
        this.container.classList.add("w-4/5", "h-3/5", "flex", "shadow-lg", "rounded-lg", "bg-white");
        this.createPageElements();
        return this.container;
    }

}

export default Registration;