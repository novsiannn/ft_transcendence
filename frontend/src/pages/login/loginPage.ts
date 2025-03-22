// import { postDatas } from "../../services/api";
import { userDataLogin } from "../../shared";
import { IUserDataTypeLogin } from "../../shared";
import { userAPI } from "../../services/api";
import { navigateTo } from "../../routing";
import { activateWarning, loginPage } from "../../Layout";

export function handleLogin() {
  const loginEmailInput = document.getElementById(
    "loginInput"
  ) as HTMLInputElement;
  const loginPassInput = document.getElementById(
    "loginPass"
  ) as HTMLInputElement;
  const loginBtn = document.getElementById("loginBtn");

  const LoginBtns: HTMLInputElement[] = [loginEmailInput, loginPassInput];

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
      const response = await userAPI.postDatas(userDataLogin, "login");
      if (response.status === 401) {
        console.log('asd');
        
        activateWarning();
      } else {
        navigateTo("/");
      }
      console.log(response);
    } catch (error) {
      alert(error);
    }
  });
}
