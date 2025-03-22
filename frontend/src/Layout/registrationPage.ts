export function registrationPage() {
    // document.body.classList.add("h-screen", "flex", "items-center", "justify-center", "bg-gradient-to-t", "from-black", "via-black", "to-gray-800");
    document.body.classList.add(
        "h-screen", "flex", "flex-col",
        "bg-gradient-to-t", "from-black", "via-black", "to-gray-800",
        "overflow-hidden"
    );

    return `
    
            <div class="mt-10 w-5/5 h-3/5 flex shadow-lg rounded-lg bg-white">
                <div class="w-3/5 p-10 flex flex-col justify-center bg-gradient-to-r from-purple-900 to-blue-900 text-white rounded-l-lg">
                    <h1 class="text-4xl font-bold cursor-default">Transcendence</h1>
                    <p class=" cursor-default mt-4 text-lg">Join us today and start your journey with our amazing platform.</p>
                </div>
                <div class="w-2/5 p-10 flex flex-col justify-center rounded-r-lg">
                    <h2 class="text-2xl font-bold text-center mb-4 cursor-default">Registration</h2>
                    <form id="registerForm" class="space-y-4">
                        <input id="usernameRegistration" type="text" placeholder="Username" class="w-full p-2 border rounded">
                        <input id="emailRegistration" type="email" placeholder="Your email" class="w-full p-2 border rounded">
                        <input id="passwordRegistration" type="password" placeholder="Your password" class="w-full p-2 border rounded">
                        <input id="submitRegistration" type="submit" value="Register" class="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 cursor-pointer">
                    </form>
                    <p class="text-center mt-4 cursor-default">Already registered? <a class="text-blue-500 cursor-pointer" id="questionAlreadyRegistr">Sign In</a></p>
                </div>
            </div>
    `
}