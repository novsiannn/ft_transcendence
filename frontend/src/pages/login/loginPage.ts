import { getModalWindowError } from "../../elements";
import { getModalInput } from "../../elements/ModalInput";
import { navigation } from "../../elements/navigation";
import { getEyeShowPassword } from "../../elements/PasswordVisibility";

export const activateWarning = (elementID: string, errorValue?: string) => {
  const text = document.querySelectorAll(elementID);
  console.log(text);

  text.forEach((el) => {
    el.classList.remove("invisible");
    if (errorValue) el.setAttribute("data-i18n", errorValue ? errorValue : "fix translation plssss");
  });
};

export const hideWarning = (elementID: string) => {
  const text = document.querySelectorAll(elementID);
  text.forEach((el) => {
    el.classList.add("invisible");
  });
};

export function loginPage(mainWrapper: HTMLDivElement | undefined) {
  document.body.classList.add(
    "h-screen",
    "flex",
    "items-center",
    "justify-center",
    "bg-gray-500",
    "overflow-hidden"
  );
  return `
        ${navigation()}
            <div class="w-1/3 min-h-1/3 mx-auto mt-24 p-6 bg-white shadow-md rounded-lg flex flex-col justify-center items-center">
                <h2 class="text-xl select-none font-semibold text-gray-700 text-center mb-4">Login</h2>
                <input type="email" placeholder="your email" class="w-full m-2 px-3 py-2 border rounded focus:ring-2 focus:ring-blue-400" id="loginInput">
                <p id="warningMessage" class="invisible text-red-500 text-sm"></p>
                <div class="relative w-full m-2">
                    <input
                        type="password"
                        placeholder="your password"
                        id="loginPass"
                        class="w-full px-3 py-2 pr-10 border rounded focus:ring-2 focus:ring-blue-400"
                    />
                    <div
                        id="loginSvgEye"
                        class="absolute inset-y-0 right-3 flex items-center cursor-pointer text-gray-500"
                    >
                    ${getEyeShowPassword()}
                    </div>
            </div>
                <p id="warningMessage" class="invisible text-red-500 text-sm"></p>
                <button class="cursor-pointer w-full select-none bg-green-500 m-1 text-white py-2 rounded hover:bg-green-600" id="loginBtn">Login</button>
            </div>
            ${getModalWindowError()}
            ${getModalInput()}
        `;
}
