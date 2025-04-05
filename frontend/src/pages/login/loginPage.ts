import { userDataLogin } from "../../shared";
import { IUserDataTypeLogin } from "../../shared";
import { userAPI } from "../../services/api";
import { hideWarning } from "../../Layout";
import { navigationHandle } from "../../nagivation";
import { handleModalError } from "../../elements";

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
      await userAPI.postDatas(userDataLogin, "login");
    } catch (error: any) {
      handleModalError(error);
    }
  });
}
