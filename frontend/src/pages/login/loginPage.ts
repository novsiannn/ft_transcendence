// import { postDatas } from "../../services/api";
import { userDataLogin } from "../../shared";
import { IUserDataTypeLogin } from "../../shared";
import { userAPI } from "../../services/api";
import { navigateTo } from "../../routing";


// Post datas !!! Delete userAPI if u are using fetch request
export function handleLogin() {
    const loginEmailInput = document.getElementById("loginInput") as HTMLInputElement;
    const loginPassInput = document.getElementById("loginPass") as HTMLInputElement;;
    const loginBtn = document.getElementById("loginBtn");

    const LoginBtns: HTMLInputElement[] = [loginEmailInput, loginPassInput];

    loginBtn!.addEventListener("click", (e) => {
        e.preventDefault();
        try {
            LoginBtns.forEach((input) => {
                const key = input.type.toLowerCase() as keyof IUserDataTypeLogin;
                if (!input.value) {
                    throw new Error("One of your inputs is empty!");
                }
                userDataLogin[key] = input.value;
            });
            console.log(userDataLogin);
            userAPI.postDatas(userDataLogin, 'login');
            navigateTo("/");
        } catch (error) {
            alert(error);
        }
    })
}