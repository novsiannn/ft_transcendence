import { getModalWindowError } from "../../elements";
import { getModalInput } from "../../elements/ModalInput";
import { navigation } from "../../nagivation";


export const activateWarning = (elementID: string, errorValue?: string) => {
    const text = document.querySelectorAll(elementID);
    text.forEach((el) => {
        el.classList.remove('hidden');
        if(errorValue)
            el.textContent = errorValue;
    });
}

export const hideWarning = (elementID: string) => {
    const text = document.querySelectorAll(elementID);
    text.forEach((el) => {
            el.classList.add('hidden');
    });
}

export function loginPage(mainWrapper: HTMLDivElement | undefined) {
    document.body.classList.add("h-screen", "flex", "items-center", "justify-center", "bg-gradient-to-t", "from-black", "via-black", "to-gray-800", "overflow-hidden");
    return `
        ${navigation()}
            <div class="w-1/3 min-h-1/3 mx-auto mt-24 p-6 bg-white shadow-md rounded-lg flex flex-col justify-center items-center">
                <h2 class="text-xl select-none font-semibold text-gray-700 text-center mb-4">Login</h2>
                <input type="email" placeholder="your email" class="w-full m-2 px-3 py-2 border rounded focus:ring-2 focus:ring-blue-400" id="loginInput">
                <p id="warningMessage" class="hidden text-red-500 text-sm"></p>
                <input type="password" placeholder="your password" class="w-full m-2 px-3 py-2 border rounded focus:ring-2 focus:ring-blue-400" id="loginPass">
                <p id="warningMessage" class="hidden text-red-500 text-sm"></p>
                <button class="w-full select-none bg-green-500 m-1 text-white py-2 rounded hover:bg-green-600" id="loginBtn">Login</button>
            </div>
            ${getModalWindowError()}
            ${getModalInput()}
        `
}