import { store, API_URL } from "../../store/store"


const getProfileIcon = () => {
	const userPhoto = store.getUser().avatar;

	return `${userPhoto ? `<img id="profileIcon" draggable="false" src="${API_URL + userPhoto}" alt="Profile" class="w-12 h-12 rounded-full cursor-pointer">`:`<img id="profileIcon" draggable="false" src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png" alt="Profile" class="w-12 h-12 rounded-full cursor-pointer">`}`
}

const getSignInBtn = () => {
	return `<div id="signInBtn" alt="Profile" class="w-full select-none text-black font-thin rounded-md p-2 h-8 cursor-pointer bg-gray-100 flex items-center">
			<h1>Sign In</h1>
	</div>`
}

const getSignUpBtn = () => {
	return `<div id="registBtn" alt="Profile" class="w-full select-none text-black font-thin rounded-md p-2 h-8 cursor-pointer bg-gray-100 flex items-center">
			<h1>Sign Up</h1>
	</div>`
}

const getSignUpPage = () => {
	if (location.pathname === '/signUp')
		return false;
	return true
}

const getAuthBtn = () => {
	return getSignUpPage() ? getSignUpBtn() : getSignInBtn();
}

export function navigation() {
	return `
		<nav class="top-0 left-0 bg-black text-white h-16 w-full fixed flex items-center justify-between px-6">
    		<img src="https://img.icons8.com/plasticine/100/ping-pong--v1.png" draggable="false" alt="Logo" class="h-12 w-12 object-cover" id=imgLogoNavi>

			${store.getAuth() ? 
    		`<div class="flex-1 flex justify-center space-x-8">
       			<button class=" h-5 focus:outline-none transition delay-100 hover:text-green-500" id="naviBtn"> Home </button>
        		<button class=" h-5 focus:outline-none transition delay-100 hover:text-green-500" id="naviBtn"> Game </button>
    		</div>`
			: ''}

			<div class="relative">
				${store.getAuth() ? getProfileIcon() : getAuthBtn()}
        		

				${store.getAuth() ? 
        		`<div id="dropdownMenu" class="absolute right-0 mt-2 w-48 bg-white text-black shadow-lg rounded-lg p-2 hidden">
            		<a class="block px-4 py-2 hover:bg-gray-200 focus:outline-none">Profile</a>
					<a class="block px-4 py-2 hover:bg-gray-200 focus:outline-none">Game</a>
					<a class="block px-4 py-2 hover:bg-gray-200 focus:outline-none">Leaderboard</a>
            		<a class="block px-4 py-2 hover:bg-gray-200 focus:outline-none">Settings</a>
					<a class="block px-4 py-2 hover:bg-gray-200 focus:outline-none">Friends</a>
            		<a class="block px-4 py-2 text-red-600 hover:bg-gray-200">Logout</a>` : ''
				}
        		</div>
    		</div>
		</nav>
		`;
}