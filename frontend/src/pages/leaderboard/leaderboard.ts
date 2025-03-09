import { navigationHandle } from "../../nagivation";

export const filterLeaderBoard = (data: Array<{ id: number, username: string, playedGames: number, wonGames: number, totalPoints: number }>) => {
	return data.sort((a, b) => b.totalPoints - a.totalPoints).slice(0, 8);
}

export function handleLeaderboardPage() {
	navigationHandle();
}