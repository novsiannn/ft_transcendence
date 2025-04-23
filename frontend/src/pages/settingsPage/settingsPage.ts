import { getModalInput } from "../../elements/ModalInput";
import { getModalWindowSuccess } from "../../elements/ModalSuccess";
import { getModalTwoFactor } from "../../elements/ModalTwoFactor";
import { navigation } from "../../elements/nagivation";
import { getColorFromUsername } from "../../shared/randomColors";
import { store } from "../../store/store";

export function settingsPage(mainWrapper: HTMLDivElement | undefined) {
  document.body.classList.add(
    "bg-gradient-to-t",
    "from-black",
    "via-black",
    "to-gray-800",
    "h-full",
    "overflow-hidden"
  );
  const color = getColorFromUsername(store.getUser().username);
  const firstLetterOfUser = store.getUser().username.charAt(0).toUpperCase();
  const userPhoto = store.getUser().avatar;

  mainWrapper!.className = "mx-auto h-screen w-full";
  let res = `
				${navigation()}
				<div class="w-full h-full flex flex-col flex-1 items-center justify-center min-h-screen font-mono my-5">
  					<div class="px-6 py-3 text-black bg-white rounded-lg text-xl w-4/5 h-4/5 text-center">
						<h1 class="font-bold text-3xl">Your Profile</h1>
						<div class="grid grid-cols-10 grid-rows-5 gap-4 w-5/5 h-4/5 my-5 py-2 px-2 text-gray-500">
    						<div class=" col-start-5 col-span-2 row-start-1 row-span-2">
								${
                  userPhoto
                    ? `<img id="profileImg" class="rounded-full w-48 h-48" draggable="false" alt="Profile Image">`
                    : `<div id="profileImg" class="text-5xl text-white font-bold mx-auto flex justify-center items-center object-cover content-center select-none w-48 h-48 ${color} rounded-full cursor-pointer">
                      ${firstLetterOfUser}
                    </div>`
                }
								
								
								 <div id="imgDropdownMenu"
									class="hidden absolute z-10 w-48 bg-white rounded-lg shadow-lg">
									<button id="changePhotoBtn" class="block w-full text-left px-4 py-2 hover:bg-gray-100">Change photo</button>
									<input type="file" accept="image/*" class=" text-xs border-2 border-blue-700 max-w-xs p-1 m-1" id="uploadImgInput" hidden/>
								</div>
							</div>
							<div class=" col-start-2 col-span-4 row-start-3">
								<h1 >Your first name</h1>
								<input class="border-2 border-blue-700 max-w-xs p-2 m-1" id="inputUserInfo" </input>
							</div>
							<div class="col-start-6 col-span-4" >
								<p >Your last name</p>
								<input class="border-2 border-blue-700 max-w-xs p-2 m-1" id="inputUserInfo"> </input>
							</div>
							<div class=" col-start-2 col-span-4">
								<p >Your username</p>
								<input class="border-2 border-blue-700 max-w-xs p-2 m-1" id="inputUserInfo"> </input>
							</div>
							<div class=" col-start-6 col-span-4">
								<p >Your email</p>
								<input class="border-2 border-blue-700 max-w-xs p-2 m-1" id="inputUserInfo"> </input>
							</div>
							<div class="grid col-start-2 col-span-4 m-2 place-items-center max-w-s ">
								<p>Two-factor Authentication </p>
								<div class="flex">
                    				<button class='bg-red-500 p-2 m-1 border rounded text-white' id='disableTwoFactorBtn'>Disable</button>
                					<button class='bg-green-500 p-2 m-1 border rounded text-white' id='enableTwoFactorBtn'>Enable</button>
								</div>
							</div>
							<div class=" col-start-5 col-span-2"><button class="w-full h-full text-white focus:outline-none bg-blue-300" id="saveChangesSettings"> SAVE CHANGES </button></div>
						</div>
  					</div>
					${getModalTwoFactor()}
					${getModalInput()}
					${getModalWindowSuccess()}
				</div>`;
  return res;
}
