import { navigateTo } from "../../routing/index"
import { IUserDataRegistrationType } from "../../shared";
import { userDataRegistration } from "../../shared";
import { userAPI } from "../../services/api";
import { validateInput } from "../../shared/validation";

//changed from novsiann
export function handleRegistration() {
    const userNameInput = document.querySelector("#usernameRegistration") as HTMLInputElement;
    const emailInput = document.querySelector("#emailRegistration") as HTMLInputElement;
    const passwordInput = document.querySelector("#passwordRegistration") as HTMLInputElement;
    const btnRegistr = document.querySelector("#submitRegistration") as HTMLButtonElement;
    const signInBtn = document.querySelector('#questionAlreadyRegistr');
    let username: null | string = null;
    const inputsUsers: HTMLInputElement[] = [userNameInput, emailInput, passwordInput];

    btnRegistr!.addEventListener('click', (e) => {
        e.preventDefault();
        try {
            const userDataRegistration: IUserDataRegistrationType = {
                username: null,
                email: null,
                password: null
            };
            inputsUsers.forEach(input => {
                let key = input.type.toLowerCase() as keyof IUserDataRegistrationType;
                validateInput(input);
                if(input.type === 'text'){
                    key = 'username';
                }
                userDataRegistration[key] = input.value;
            });
            userAPI.postDatas(userDataRegistration, 'registration');
            navigateTo("/activate");
        } catch (error) {
            alert(error);
        }
    });
    signInBtn!.addEventListener('click', () => { 
        navigateTo("/login");
    });
}
