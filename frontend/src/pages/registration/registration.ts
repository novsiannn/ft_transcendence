import { navigateTo } from "../../routing/index"
import { IUserDataRegistrationType } from "../../shared";
import { userDataRegistration } from "../../shared";
import { userAPI } from "../../services/api";
import { validateInput } from "../../shared/validation";
import { navigationHandle } from "../../nagivation";

//changed from novsiann
export function handleRegistration() {
    const userNameInput = document.querySelector("#usernameRegistration") as HTMLInputElement;
    const emailInput = document.querySelector("#emailRegistration") as HTMLInputElement;
    const passwordInput = document.querySelector("#passwordRegistration") as HTMLInputElement;
    const btnRegistr = document.querySelector("#submitRegistration") as HTMLButtonElement;
    const signInBtn = document.querySelector('#questionAlreadyRegistr');
    const inputsUsers: HTMLInputElement[] = [userNameInput, emailInput, passwordInput];

    const showModal = document.querySelector('#showModal');
    const modalWindow = document.querySelector('#modalWindow');
    const modalContent = modalWindow?.querySelector("div");
    const closeModal = document.querySelector('#closeModal');

    showModal?.addEventListener("click", () => {
        modalWindow?.classList.remove("hidden");
        setTimeout(() => {
            modalContent?.classList.remove("-translate-y-full", "opacity-0");
            modalContent?.classList.add("translate-y-0", "opacity-100");
        }, 10);
    });

        closeModal?.addEventListener("click", () => {
        modalContent?.classList.remove("translate-y-0", "opacity-100");
        modalContent?.classList.add("-translate-y-full", "opacity-0");

        setTimeout(() => {
            modalWindow?.classList.add("hidden");
        }, 500);
    });

    modalWindow?.addEventListener("click", (e) => {
        if (e.target === modalWindow) {
            modalContent?.classList.remove("translate-y-0", "opacity-100");
            modalContent?.classList.add("-translate-y-full", "opacity-0");

            setTimeout(() => {
                modalWindow?.classList.add("hidden");
            }, 500);
        }
    });


    navigationHandle();

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
        navigateTo("/signIn");
    });
}
