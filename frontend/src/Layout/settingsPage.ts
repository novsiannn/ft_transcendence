import { navigation } from "../elements"

export function settingsPage(mainWrapper: HTMLDivElement | undefined) {
	document.body.classList.add("bg-gradient-to-t", "from-black", "via-black", "to-gray-800", "h-full");
	mainWrapper!.className = "mx-auto h-screen w-full";
	let res = `
				${navigation()}
				<div class="w-full h-full flex flex-col flex-1 items-center justify-center min-h-screen font-mono my-5">
  					<div class="px-6 py-3 text-black bg-white rounded-lg text-xl w-4/5 h-4/5 text-center">
						<h1 class="font-bold text-3xl">Your Profile</h1>
						<div class="grid grid-cols-10 grid-rows-5 gap-4 w-5/5 h-4/5 my-5 py-2 px-2 text-gray-500">
    						<div class=" col-start-5 col-span-2 row-start-1 row-span-2">
								<img class="w-full h-full rounded-full" src="https://sun9-70.userapi.com/s/v1/if1/0dnizdWPQ3cONuoV4XvoRgGaRgww_soAiuiKggxtK0osPEztZJ1whUCW7aRW2dtqjpipv5OX.jpg?quality=96&as=32x32,48x48,72x72,108x108,160x160,240x240,360x360,480x481,540x541,640x641,720x721,750x751&from=bu&u=31RWzUJ62kF-wUgdT29B-pOeb1nh3a-qir5gcRCZFf4&cs=750x751" alt="Joe Biden">
							</div>
							<div class=" col-start-2 col-span-4 row-start-3">
								<p >Your first name</p>
								<input placeholder="first name" class="border-2 border-blue-700 max-w-xs p-1 m-1" id="inputUserInfo"> </input>
							</div>
							<div class="col-start-6 col-span-4" >
								<p >Your last name</p>
								<input placeholder="last name" class="border-2 border-blue-700 max-w-xs p-1 m-1"> </input>
							</div>
							<div class=" col-start-2 col-span-4">
								<p >Your username</p>
								<input placeholder="your username" class="border-2 border-blue-700 max-w-xs p-1 m-1"> </input>
							</div>
							<div class=" col-start-6 col-span-4">
								<p >Your email</p>
								<input placeholder="email" class="border-2 border-blue-700 max-w-xs p-1 m-1"> </input>
							</div>
							<div class="grid col-start-2 col-span-4 place-items-center max-w-s ">
								<p >Your phone number</p>
								<input placeholder="number" class="border-2 border-blue-700 max-w-xs p-1 m-1"> </input>
							</div>
							<div class="col-start-6 col-span-4 max-w-s">
								<p >Upload Profile Image</p>
								<button class=" p-1 border border-solid border-black focus:outline-none"> Select Photo </button>
							</div>
							<div class=" col-start-5 col-span-2"><button class="w-full h-full text-white focus:outline-none bg-blue-300"> SAVE CHANGES </button></div>
						</div>
  					</div>
				</div>`;
	return res;
}