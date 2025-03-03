import { navigation } from "../elements"

export function settingsPage(mainWrapper: HTMLDivElement | undefined) {
	document.body.classList.add("bg-gradient-to-t", "from-black", "via-black", "to-gray-800", "h-full");
	mainWrapper!.className = "mx-auto h-screen w-full";
	let res = `
				${navigation()}
				<div class="w-full h-full flex flex-col flex-1 items-center justify-center min-h-screen">
  					<div class="px-6 py-3 text-black bg-white rounded-lg text-xl w-4/5 h-4/5 text-center">
						<h1 class="font-bold text-3xl">Your Profile</h1>
						<div class="grid grid-cols-10 grid-rows-5 gap-4 w-5/5 h-4/5 bg-blue-100 my-5 py-2 px-2">
    						<div class=" col-start-5 col-span-2 row-start-1 row-span-2">
								<img class="w-full h-full rounded-full" src="https://sun9-70.userapi.com/s/v1/if1/0dnizdWPQ3cONuoV4XvoRgGaRgww_soAiuiKggxtK0osPEztZJ1whUCW7aRW2dtqjpipv5OX.jpg?quality=96&as=32x32,48x48,72x72,108x108,160x160,240x240,360x360,480x481,540x541,640x641,720x721,750x751&from=bu&u=31RWzUJ62kF-wUgdT29B-pOeb1nh3a-qir5gcRCZFf4&cs=750x751" alt="Joe Biden">
							</div>
							<div class="bg-red-500 col-start-1 col-span-5 row-start-3">
								<p>Your first name</p>
								<input placeholder="first name"> </input>
							</div>
							<div class="bg-pink-500 col-start-6 col-span-5" >
								<p>Your last name</p>
								<input placeholder="last name"> </input>
							</div>
							<div class="bg-purple-500 col-start-1 col-span-5">
								<p>Your username</p>
								<input placeholder="your username"> </input>
							</div>
							<div class="bg-yellow-500 col-start-6 col-span-5">
								<p>Your email</p>
								<input placeholder="email"> </input>
							</div>
							<div class="bg-gray-500 col-start-1 col-span-5">
								<p>Your phone number</p>
								<input placeholder="number"> </input>
							</div>
							<div class="bg-purple-200 col-start-6 col-span-5">
								<p>Upload Profile Image</p>
								<button class="text-white"> Select Photo </button>
							</div>
							<div class="bg-green-400 col-start-5 col-span-2"><button class="w-full h-full text-white"> SAVE CHANGES </button></div>
						</div>
  					</div>
				</div>`;
	return res;
}