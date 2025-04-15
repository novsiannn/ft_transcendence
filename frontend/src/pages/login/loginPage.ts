import { userDataLogin } from "../../shared";
import { IUserDataTypeLogin } from "../../shared";
import { activateWarning, hideWarning } from "../../Layout";
import { navigationHandle } from "../../nagivation";
import { store } from "../../store/store";

export function handleLogin() {
  navigationHandle();
  const loginEmailInput = document.getElementById(
    "loginInput"
  ) as HTMLInputElement;
  const loginPassInput = document.getElementById(
    "loginPass"
  ) as HTMLInputElement;
  const loginBtn = document.getElementById("loginBtn");
  

  const LoginBtns: HTMLInputElement[] = [loginEmailInput, loginPassInput];

  LoginBtns.forEach((input) => {
    input.addEventListener("click", () => {
      hideWarning('#warningMessage');
    });
  });

  loginBtn!.addEventListener("click", async (e) => {
    e.preventDefault();
    try {
      LoginBtns.forEach((input) => {
        const key = input.type.toLowerCase() as keyof IUserDataTypeLogin;
        if (input.type === "email") {
          userDataLogin[key] = input.value.toLowerCase();
        } else {
          userDataLogin[key] = input.value;
        }
      });
      const response = await store.login(userDataLogin.email, userDataLogin.password);
      console.log(response);
    } catch (error: any) {
      activateWarning('#warningMessage','Incorrect email or password');
    }
  });
}
