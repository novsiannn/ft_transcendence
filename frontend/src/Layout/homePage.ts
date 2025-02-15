import { navigation } from "../elements"
// import  myImg  from "../img/ping-pong.png"

export function homePage(mainWrapper: HTMLDivElement | undefined){
	document.body.classList.add("h-screen", "flex",  "flex-col", "bg-gradient-to-t", "from-black", "via-black", "to-gray-800", "overflow-hidden");
                // ${navigation()}
	let res = `
        	${navigation()}
        	<div class="container mx-auto p-6 mt-24">
        	    <div class="flex flex-col md:flex-row items-center justify-between bg-white p-8 rounded-2xl shadow-lg">
        	        <div class="md:w-1/2 p-6">
        	            <h1 class="text-4xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">FT_TRANSCENDENSCE</h1>
        	            <p class="mt-4 text-gray-600 text-lg">
        	                Transcendence is a 42 school project, to learn about web developpement and SPA.<br>
							The goal is to create a web app to play Pong, and socialize with other users.<br><br>
        	            </p>
						<p class"mt-4 text-gray-900 text-lg">Developed by novsiann and kilchenk </p>
        	        </div>

        	        <div class="md:w-1/2 flex justify-center p-6">
        	            <img src="../img/ping-pong.png" alt="Rocket for ping pong" class="w-128 h-128 object-cover rounded-xl shadow-md">
        	        </div>
        	    </div>
        	</div>`;
	return res;
}