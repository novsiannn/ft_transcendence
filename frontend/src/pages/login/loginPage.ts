import { userDataLogin } from "../../shared";
import { IUserDataTypeLogin } from "../../shared";
// import { userAPI } from "../../services/api";
import { activateWarning, hideWarning } from "../../Layout";
import { navigationHandle } from "../../nagivation";
import { handleModalError } from "../../elements";
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
      hideWarning();
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
      await store.login(userDataLogin.email, userDataLogin.password);
    } catch (error: any) {
      activateWarning();
    }
  });
}
