export function homePage()
{
	let res =  `<div class="flex flex-col items-center justify-center min-h-screen bg-gradient-to-t from-black via-black to-gray-800 space-y-8">
                <button class="px-6 py-3 text-white bg-blue-500 rounded-lg text-xl hover:bg-blue-700 focus:outline-none" id="btn-play">
                    START
                </button>
            </div>`;
	return res;
}

export function gamePage()
{
    document.body.style.margin = "0";
    document.body.style.padding = "0";
    document.body.classList.add("bg-gradient-to-t", "from-black", "via-black", "to-gray-800");
	return `
        <canvas id="game-board" width="800" height="500" class="bg-gray-500 border"></canvas>
        <p id="score-info" class="text-4xl text-white" class="bg-gray-500" > Score </p>
        <button id="restart-btn" class="px-3 py-1 border-2 border-crimson rounded-[10px] bg-gray-500 text-white text-[25px]"> Restart </button>`;
}

export function errorPage(){
	document.body.classList.add("bg-gradient-to-t", "from-black", "via-black", "to-gray-800");
	return `<div class="flex flex-col items-center justify-center min-h-screen bg-gradient-to-t from-black via-black to-gray-800 space-y-8">
				<h1 class="text-9xl text-white font-black"> Error 404 </h1>
				<h1 class="text-7xl py-3 text-white" font-medium> This page was not found </h1>
			</div>`
}

export function registrationPage(){
    document.body.classList.add("h-screen", "flex", "items-center", "justify-center", "bg-gradient-to-t", "from-black", "via-black", "to-gray-800");
    return `
            <div class="w-5/5 h-4/5 flex shadow-lg rounded-lg bg-white">
                <div class="w-3/5 p-10 flex flex-col justify-center bg-gradient-to-r from-purple-900 to-blue-900 text-white rounded-l-lg">
                    <h1 class="text-4xl font-bold">Transcendence</h1>
                    <p class="mt-4 text-lg">Join us today and start your journey with our amazing platform.</p>
                </div>
                <div class="w-2/5 p-10 flex flex-col justify-center rounded-r-lg">
                    <h2 class="text-2xl font-bold text-center mb-4">Registration</h2>
                    <form id="registerForm" class="space-y-4">
                        <input id="usernameRegistration" type="text" placeholder="Username" class="w-full p-2 border rounded">
                        <input id="emailRegistration" type="email" placeholder="Your email" class="w-full p-2 border rounded">
                        <input id="passwordRegistration" type="password" placeholder="Your password" class="w-full p-2 border rounded">
                        <input id="submitRegistration" type="submit" value="Register" class="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 cursor-pointer">
                    </form>
                    <p class="text-center mt-4">Already registered? <a class="text-blue-500">Sign In</a></p>
                </div>
            </div>
    `
}

export function loginPage(){
    document.body.classList.add("h-screen", "flex", "items-center", "justify-center", "bg-gradient-to-t", "from-black", "via-black", "to-gray-800");
    return `
            <div class="max-w-sm mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
                <h2 class="text-xl font-semibold text-gray-700 text-center mb-4">Login</h2>
                <input type="text" placeholder="your email" class="w-full mb-3 px-3 py-2 border rounded focus:ring-2 focus:ring-blue-400">
                <input type="password" placeholder="your password" class="w-full mb-4 px-3 py-2 border rounded focus:ring-2 focus:ring-blue-400">
                <button class="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600">Login</button>
                <p class="text-center mt-3"><a href="#" class="text-blue-500 hover:underline">Forgot Password?</a></p>
            </div>
        `
}