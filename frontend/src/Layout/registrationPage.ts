import { navigation } from "../nagivation";

export function registrationPage() {
  document.body.classList.add(
    "w-full",
    "h-screen",
    "flex",
    "flex-col",
    "bg-gradient-to-t",
    "from-black",
    "via-black",
    "to-gray-800",
    "overflow-hidden"
  );

  return `
            ${navigation()}
            <div class="w-full h-full flex shadow-lg  bg-white">
                <div class="w-full p-10 flex flex-col justify-center bg-gradient-to-r from-purple-900 to-blue-900 text-white">
                    <h1 class="text-4xl font-bold cursor-default">Transcendence</h1>
                    <p class=" cursor-default mt-4 text-lg">Join us today and start your journey with our amazing platform.</p>
                </div>
                <div class="w-full p-10 flex flex-col justify-center rounded-r-lg">
                    <h2 class="text-2xl font-bold text-center mb-4 cursor-default">Registration</h2>
                    <form id="registerForm" class="space-y-4">
                        <input id="usernameRegistration" type="text" placeholder="Username" class="w-full p-2 border rounded">
                        <input id="emailRegistration" type="email" placeholder="Your email" class="w-full p-2 border rounded">
                        <input id="passwordRegistration" type="password" placeholder="Your password" class="w-full p-2 border rounded">
                        <input id="submitRegistration" type="submit" value="Register" class="w-full bg-green-500 text-white p-2 rounded hover:bg-blue-600 cursor-pointer">
                    </form>
                    <p class="text-center mt-4 cursor-default">Already registered? <a class="text-blue-500 cursor-pointer" id="questionAlreadyRegistr">Sign In</a></p>
                    <button id="showModal" class="bg-blue-500">Show Modal</button>
                </div>
            </div>
            <div id="modalWindow" class="fixed inset-0 hidden flex justify-center bg-black bg-opacity-50 z-[9999] transition-all duration-500">
                <div class="flex mt-12 flex-col justify-center items-center bg-white w-80 h-52 text-white p-6 rounded-lg shadow-lg opacity-0 transform -translate-y-full transition-all duration-500">
                    <div class="flex justify-center mb-4">
                        <svg class="w-10 h-10 text-red-500" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M12 8v4m0 4h.01M12 2a10 10 0 1010 10A10 10 0 0012 2z" />
                        </svg>
                    </div>
                    <p class="text-black text-center text-lg font-semibold">Дружище, пароль-то неправильный!</p>
                </div>
            </div>
    `;
}
