import { navigateTo } from "../../routing";

export function handleLogin(){
    const loginEmailInput = document.getElementById("loginInput") as HTMLInputElement;
    const loginPassInput = document.getElementById("loginPass") as HTMLInputElement;; 
    const loginBtn = document.getElementById("loginBtn");
    const forgotPassword = document.getElementById("questionPassForgot"); // later implement

    console.log(loginEmailInput);
    console.log(loginPassInput);
    console.log(loginBtn);

    loginBtn!.addEventListener("click", (e) => {
        e.preventDefault();
        if(loginEmailInput.value === 'admin' && loginPassInput.value === 'admin'){
            navigateTo("/");
        }
    })

    
}