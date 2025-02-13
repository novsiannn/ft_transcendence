// import Page from '../../core/templates/page'
// import { PageIds } from '../../shared';
import {routeToHome} from "../../routing/index"
import { navigateTo } from "../../routing/index"

interface IUserDataType{
    text: string | null,
    email: string | null,
    password: string | null
}


export function handleRegistration(){
    const userNameInput = document.querySelector("#usernameRegistration") as HTMLInputElement;
    const emailInput = document.querySelector("#emailRegistration") as HTMLInputElement;
    const passwordInput = document.querySelector("#passwordRegistration") as HTMLInputElement;
    const btnRegistr = document.querySelector("#submitRegistration") as HTMLButtonElement;
    const signInBtn = document.querySelector('#questionAlreadyRegistr');

    const inputsUsers: HTMLInputElement[] = [userNameInput, emailInput, passwordInput];
    // dataBase has to be removed. It's created only for tests :)
    let userData : IUserDataType = {
        text : null,
        email : null,
        password: null
    };
    const temporaryDataBase: string[][] = [];
    // till this string

    btnRegistr!.addEventListener('click', (e) => {
        e.preventDefault();
        try {
            inputsUsers.forEach(input => {
            const key = input.type.toLowerCase() as keyof IUserDataType;
            if (!input.value){
                throw new Error("One of your inputs is empty!");
            }
            if (input.value.length < 3){
                throw new Error(`${input.placeholder} has to be minimum 3 characters`);
            }
            if (input.type === 'email' && !(input.value.match(/@/g))) {
                throw new Error (`${input.placeholder} has contain ' @ ' symbol`);
            }
            userData[key] = input.value;
        });
        routeToHome();
        } catch (error) {
            alert(error);
        }
    });
    signInBtn!.addEventListener('click', () =>{
        navigateTo("/login");
    });
}
