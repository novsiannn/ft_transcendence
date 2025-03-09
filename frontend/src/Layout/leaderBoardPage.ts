import { navigation } from "../elements";

const testData: Array<{ id: number, username: string, playedGames: number, wonGames: number }> = [
	{ id: 1, username: 'john', wonGames: 10, playedGames: 11 },
	{ id: 2, username: 'terminator2599', wonGames: 1, playedGames: 56 },
	{ id: 3, username: 'belka405', wonGames: 32, playedGames: 50 },
	{ id: 4, username: 'player4', wonGames: 15, playedGames: 20 },
	{ id: 5, username: 'player5', wonGames: 25, playedGames: 35 },
	{ id: 6, username: 'player6', wonGames: 10, playedGames: 5 },
	{ id: 7, username: 'player7', wonGames: 40, playedGames: 100 },
	{ id: 8, username: 'player8', wonGames: 30, playedGames: 80 },
	{ id: 9, username: 'player9', wonGames: 5, playedGames: 10 },
	{ id: 10, username: 'player10', wonGames: 8, playedGames: 8 },
	{ id: 11, username: 'player11', wonGames: 50, playedGames: 150 }
]

const changeColorLeaderBoard = (i: number) => {
		return i < 4 ? `<p class=" bg-gray-200 font-bold text-xl text-yellow-400"> ${i} </p>` 
		: `<p class=" bg-gray-200 font-bold text-l"> ${i} </p>`;
}

const leaderboardPlayers = (data: Array<{ id: number, username: string, playedGames: number }>) => {
	let i: number = 0;

	return data.map(user => {
		i++;
		return `<div class="grid w-full h-8/10 grid-cols-3 justify-center content-center">
					${changeColorLeaderBoard(i)}
					<div class=" bg-gray-200">
						<p > ${user.username} </p>
					</div>
					<div class=" bg-gray-200">
						<p > ${user.playedGames} </p>
					</div>
			</div>`;
	}).join("");
}

const headerLeaderBoard = () => {
	return `<div class="grid w-full h-8/10 grid-cols-3 justify-center content-center">
		<p> Position </p>
		<p> Player </p>
		<p> Matches Played </p>
	</div>`;
}

const filterLeaderBoard = (data: Array<{ id: number, username: string, playedGames: number }>) => {
	return data.sort((a, b) => b.playedGames - a.playedGames).slice(0, 8);
}

export function leaderBoardPage(mainWrapper: HTMLDivElement | undefined) {
	// document.body.classList.add(
	//     "h-screen", "flex", "flex-col",
	//     "bg-gradient-to-t", "from-black", "via-black", "to-gray-800",
	//     "overflow-hidden"
	// );
	document.body.classList.add("bg-gradient-to-t", "from-black", "via-black", "to-gray-800", "h-full");
	mainWrapper!.className = "h-screen w-full flex items-center";

	//mx-auto p-6 mt-64 v container dobavit
	let res = `
		${navigation()}

			<div class="flex items-center justify-center w-full h-full  rounded-2xl text-center">
				<div class="grid gap-2 h-3/4 w-full bg-white rounded-3xl">
					<div>
						<h1 class="text-2xl mt-3">Leaderboard</h1>
					</div>
					${headerLeaderBoard()}
					${leaderboardPlayers(filterLeaderBoard(testData))}
				</div>
			</div>
		
	`;

	return res;
}
