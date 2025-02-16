export function navigation(){
	return `
		<nav class="top-0 left-0 bg-black text-white h-16 w-full fixed flex items-center px-6">
    		<img src="https://img.icons8.com/plasticine/100/ping-pong--v1.png" alt="Logo" class="h-12 w-12 object-cover">


    		<div class="flex-1 flex justify-center space-x-8">
       			<button class="font-mono h-5" id="naviBtn"> Home </button>
        		<button class="font-mono h-5" id="naviBtn"> Game </button>
        		<button class="font-mono h-5" id="naviBtn"> Registration </button>
        		<button class="font-mono h-5" id="naviBtn"> Login </button>
    		</div>


			<div class="relative">
        		<img id="profileIcon" src="https://img.icons8.com/fluency/48/test-account--v1.png" alt="Profile" class="w-12 h-12 rounded-full cursor-pointer">


        		<div id="dropdownMenu" class="absolute right-0 mt-2 w-48 bg-white text-black shadow-lg rounded-lg p-2 hidden">
            		<a class="block px-4 py-2 hover:bg-gray-200">Profile</a>
					<a class="block px-4 py-2 hover:bg-gray-200">Game</a>
					<a class="block px-4 py-2 hover:bg-gray-200">Leaderboard</a>
            		<a class="block px-4 py-2 hover:bg-gray-200">Settings</a>
            		<a class="block px-4 py-2 text-red-600 hover:bg-gray-200">Logout</a>
        		</div>
    		</div>
		</nav>
		`;
}