export function errorPage(){
	document.body.classList.add("bg-gradient-to-t", "from-black", "via-black", "to-gray-800");
	return `<div class="flex flex-col items-center justify-center min-h-screen bg-gradient-to-t from-black via-black to-gray-800 space-y-8">
				<h1 class="text-9xl text-white font-black"> Error 404 </h1>
				<h1 class="text-7xl py-3 text-white" font-medium> This page was not found </h1>
			</div>`
}