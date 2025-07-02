import { updateContent } from "../../elements/LanguageSelector";
import { getLoader } from "../../elements/Loader";
import { navigationHandle } from "../../elements/navigation";
import { getEyeHidePassword, getEyeShowPassword } from "../../elements/PasswordVisibility";
import { userDataLogin } from "../../shared";
import { IUserDataTypeLogin } from "../../shared";
import { store } from "../../store/store";
import { activateWarning, hideWarning } from "./loginPage";

export function handleLogin() {
  navigationHandle();
  const loginEmailInput = document.getElementById(
    "loginInput"
  ) as HTMLInputElement;
  const loginPassInput = document.getElementById(
    "loginPass"
  ) as HTMLInputElement;
  const loginBtn = document.getElementById("loginBtn");
  const loginSvgEye = document.getElementById("loginSvgEye");

  loginSvgEye!.addEventListener('click', () => {
    if (loginPassInput.type === 'password') {
      loginPassInput.type = 'text';
      loginSvgEye!.innerHTML = getEyeHidePassword();
    } else {
      loginPassInput.type = 'password';
      loginSvgEye!.innerHTML = getEyeShowPassword();
    }
  });

  const LoginBtns: HTMLInputElement[] = [loginEmailInput, loginPassInput];

  LoginBtns.forEach((input) => {
    input.addEventListener("click", () => {
      hideWarning('#warningMessage');
    });
  });

  loginBtn!.addEventListener("click", async (e) => {
    e.preventDefault();
    loginPassInput.type = 'password';
    try {
      LoginBtns.forEach((input) => {
        const key = input.type.toLowerCase() as keyof IUserDataTypeLogin;
        if (input.type === "email") {
          userDataLogin[key] = input.value.toLowerCase();
        } else {
          userDataLogin[key] = input.value;
        }
      });
      loginBtn!.innerHTML = getLoader();
      await store.login(userDataLogin.email, userDataLogin.password);
      loginBtn!.innerHTML = "Login";
    } catch (error: any) {
      activateWarning('#warningMessage','settings.incorrectEmailOrPassword');
      updateContent();
      loginBtn!.innerHTML = "Login";
    }
  });
}
