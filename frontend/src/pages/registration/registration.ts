import { navigateTo } from "../../routing/index"
import { IUserDataRegistrationType } from "../../shared";
import { validateInput } from "../../shared/validation";
import { navigationHandle } from "../../nagivation";
import { handleModalError } from "../../elements/ModalError/handleModalError";
import { store } from "../../store/store";

//changed from novsiann
export function handleRegistration() {
    const userNameInput = document.querySelector("#usernameRegistration") as HTMLInputElement;
    const emailInput = document.querySelector("#emailRegistration") as HTMLInputElement;
    const passwordInput = document.querySelector("#passwordRegistration") as HTMLInputElement;
    const btnRegistr = document.querySelector("#submitRegistration") as HTMLButtonElement;
    const signInBtn = document.querySelector('#questionAlreadyRegistr');
    const inputsUsers: HTMLInputElement[] = [userNameInput, emailInput, passwordInput];

    navigationHandle();

    inputsUsers.forEach((input)=> {
        input.addEventListener('click', () => {
            input.className = "w-full p-2 border rounded"
        })
    });

    btnRegistr!.addEventListener('click', async (e) => {
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
            await store.registration(userDataRegistration.username, userDataRegistration.email, userDataRegistration.password);
        } catch (error: any) {
            handleModalError(error);
        }
    });
    signInBtn!.addEventListener('click', () => { 
        navigateTo("/signIn");
    });
}
