import { navigation } from "../../elements/navigation";

const headerLeaderBoard = () => {
  return `<div class="grid w-full h-full grid-cols-6 justify-center pt-4 pb-4 font-bold">
		<p> Position </p>
		<p> Player </p>
		<p> Matches Played </p>
		<p> Matches Won </p>
		<p> Points </p>
		<p> Elo </p>
	</div>`;
};

export const leaderBoardPage = (mainWrapper: HTMLDivElement | undefined) => {
  document.body.classList.add("bg-gray-500", "overflow-hidden");
  mainWrapper!.className = "h-screen flex flex-col";

  let res = `
		${navigation()}
			
			<div class="flex flex-col w-full h-full  rounded-2xl text-center">
				<h1 class="text-2xl text-white">Global Rankings</h1>
				<h3 class="text-gray-200">Top players ranked by performance and skill</h3>
				<div class="grid mx-8 h-dvh bg-white rounded-xl mt-3" id="leaderBoardContainer">
					${headerLeaderBoard()}
				</div>
			</div>
		
	`;

  return res;
};
