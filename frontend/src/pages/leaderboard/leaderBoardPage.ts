
import { navigation } from "../../elements/nagivation";
import { filterLeaderBoard } from "./leaderboard";

const testData: Array<{ id: number, username: string, playedGames: number, wonGames: number, totalPoints: number }> = [
	{ id: 1, username: 'john', wonGames: 10, playedGames: 11, totalPoints: 0 },
	{ id: 2, username: 'terminator2599', wonGames: 1, playedGames: 56, totalPoints: 0 },
	{ id: 3, username: 'belka405', wonGames: 32, playedGames: 50, totalPoints: 0 },
	{ id: 4, username: 'player4', wonGames: 15, playedGames: 20, totalPoints: 0 },
	{ id: 5, username: 'blick3', wonGames: 25, playedGames: 35, totalPoints: 0 },
	{ id: 6, username: 'player6', wonGames: 10, playedGames: 5, totalPoints: 0 },
	{ id: 7, username: 'metori', wonGames: 50, playedGames: 60, totalPoints: 0 },
	{ id: 8, username: 'pl3434ayer8', wonGames: 30, playedGames: 80, totalPoints: 0 },
	{ id: 9, username: 'nagibator', wonGames: 5, playedGames: 10, totalPoints: 0 },
	{ id: 10, username: 'player10', wonGames: 8, playedGames: 8, totalPoints: 0 },
	{ id: 11, username: 'erf', wonGames: 400, playedGames: 2200, totalPoints: 0 },
	{ id: 16, username: 'player6', wonGames: 120, playedGames: 125, totalPoints: 0 },
	{ id: 17, username: 'dotaSHLYAPA', wonGames: 40, playedGames: 100, totalPoints: 0 },
	{ id: 28, username: 'plat', wonGames: 30, playedGames: 80, totalPoints: 0 },
	{ id: 29, username: 'player9', wonGames: 5, playedGames: 10, totalPoints: 0 },
	{ id: 110, username: 'kilchenk', wonGames: 8, playedGames: 8, totalPoints: 0 },
]

const changeColorLeaderBoard = (i: number) => {
		return i < 4 ? `<p class="font-bold text-xl text-yellow-400"> ${i} </p>` 
		: `<p class="font-bold text-l"> ${i} </p>`;
}

const countPoints = (data: Array<{ id: number, username: string, playedGames: number, wonGames: number, totalPoints: number }>) => {
	return data.map(user => {
		let calc: number = (user.wonGames * 5) - (user.playedGames - user.wonGames);
		return {
			...user,
			totalPoints : calc < 0 ? 0 : calc
		}
	});
}

const leaderboardPlayers = (data: Array<{ id: number, username: string, playedGames: number, wonGames: number, totalPoints: number }>) => {
	let i: number = 0;

	return data.map(user => {
		i++;
		return `<div class="grid w-full h-8/10 grid-cols-5 justify-center content-center">
					${changeColorLeaderBoard(i)}
						<p > ${user.username} </p>
						<p > ${user.playedGames} </p>
						<p > ${user.wonGames} </p>
						<p > ${user.totalPoints} </p>
			</div>`;
	}).join("");
}

const headerLeaderBoard = () => {
	return `<div class="grid w-full h-8/10 grid-cols-5 justify-center content-center">
		<p> Position </p>
		<p> Player </p>
		<p> Matches Played </p>
		<p> Matches Won </p>
		<p> Points </p>
	</div>`;
}



export function leaderBoardPage(mainWrapper: HTMLDivElement | undefined) {
	document.body.classList.add("bg-gray-500", "overflow-hidden");
	mainWrapper!.className = "h-screen w-full flex items-center";

	let res = `
		${navigation()}

			<div class="flex items-center justify-center w-full h-full  rounded-2xl text-center mt-24 m-12">
				<div class="grid gap-2 h-4/5 w-full bg-white rounded-3xl p-7">
					<div>
						<h1 class="text-2xl mt-3">Leaderboard</h1>
					</div>
					${headerLeaderBoard()}
					${leaderboardPlayers(filterLeaderBoard(countPoints(testData)))}
				</div>
			</div>
		
	`;

	return res;
}
