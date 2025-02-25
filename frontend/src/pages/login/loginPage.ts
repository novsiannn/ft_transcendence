import { postDatas } from "../../services/api";
import { userDataLogin } from "../../shared";
import { IUserDataTypeLogin } from "../../shared";
import { routeToHome } from "../../routing";

export function handleLogin() {
    const loginEmailInput = document.getElementById("loginInput") as HTMLInputElement;
    const loginPassInput = document.getElementById("loginPass") as HTMLInputElement;;
    const loginBtn = document.getElementById("loginBtn");
    const forgotPassword = document.getElementById("questionPassForgot"); // later implement

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
            postDatas(userDataLogin);
            routeToHome();
        } catch (error) {
            alert(error);
        }



    })
}