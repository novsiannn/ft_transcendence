import { routeToHome } from "../../routing/index"
import { navigateTo } from "../../routing/index"
// import { postDatas } from "../../services/api";
import { IUserDataRegistrationType } from "../../shared";
import { userDataRegistration } from "../../shared";
import { userAPI } from "../../services/api";


export function handleRegistration() {
    const userNameInput = document.querySelector("#usernameRegistration") as HTMLInputElement;
    const emailInput = document.querySelector("#emailRegistration") as HTMLInputElement;
    const passwordInput = document.querySelector("#passwordRegistration") as HTMLInputElement;
    const btnRegistr = document.querySelector("#submitRegistration") as HTMLButtonElement;
    const signInBtn = document.querySelector('#questionAlreadyRegistr');

    const inputsUsers: HTMLInputElement[] = [userNameInput, emailInput, passwordInput];

    btnRegistr!.addEventListener('click', (e) => {
        e.preventDefault();
        try {
            inputsUsers.forEach(input => {
                const key = input.type.toLowerCase() as keyof IUserDataRegistrationType;
                if (!input.value) {
                    throw new Error("One of your inputs is empty!");
                }
                if (input.value.length < 3) {
                    throw new Error(`${input.placeholder} has to be minimum 3 characters`);
                }
                if (input.type === 'email' && !(input.value.match(/@/g))) {
                    throw new Error(`${input.placeholder} has contain ' @ ' symbol`);
                }
                userDataRegistration[key] = input.value;
            });
            userAPI.postDatas(userDataRegistration);
            routeToHome();
        } catch (error) {
            alert(error);
        }
    });
    signInBtn!.addEventListener('click', () => {
        navigateTo("/login");
    });
}
