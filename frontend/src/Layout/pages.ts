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
	return `
        <canvas id="game-board" width="800" height="500"></canvas>
        <p id="score-info" class="text-4xl" > Score </p>
        <button id="restart-btn" class="px-3 py-1 border-2 border-crimson rounded-[10px] bg-gray-500 text-white text-[25px]"> Restart </button>`;
}