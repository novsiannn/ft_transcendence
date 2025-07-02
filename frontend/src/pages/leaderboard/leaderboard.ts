import { leaderBoardPage } from './leaderBoardPage';
import { navigationHandle } from "../../elements/navigation";
import { store } from "../../store/store";

interface ILeaderBoardElement {
  id: number;
  username: string;
  elo: number;
  totalGames: number;
  wonGames: number;
  winrate: number;
}

const getLeaderboardContent = (data: ILeaderBoardElement[]): string => {
  let leaderboardContent: string = "";

  data.forEach((user, i) => {
     leaderboardContent += `<div class="grid w-full grid-cols-6 mb-4">
	 					<p > ${++i} </p>
						<p > ${user.username} </p>
						<p > ${user.totalGames} </p>
						<p > ${user.wonGames} </p>
						<p > ${user.winrate} </p>
						<p > ${user.elo} </p>
			</div>`;
  });

  return leaderboardContent;
};

export const handleLeaderboardPage = async () => {
  const leaderBoard = document.querySelector("#leaderBoardContainer");

  const response = await store.getLeaderBoard();
  const leaderboardContentContainer = document.createElement('div');

  let leaderboardContent: string = getLeaderboardContent(response.data);
  leaderboardContentContainer.innerHTML = leaderboardContent;
//   leaderboardContentContainer.className = 'flex flex-col justify-start'
  leaderBoard?.append(leaderboardContentContainer)


  navigationHandle();
};
