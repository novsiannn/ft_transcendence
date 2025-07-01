import { getModalInput } from "../../elements/ModalInput";
import { getModalWindowSuccess } from "../../elements/ModalSuccess";
import { getModalTwoFactor } from "../../elements/ModalTwoFactor";
import { navigation } from "../../elements/navigation";
import { getColorFromUsername } from "../../shared/randomColors";
import { store } from "../../store/store";
import { getModalWindowError } from "../../elements";

export function settingsPage(mainWrapper: HTMLDivElement | undefined) {
  document.body.classList.add("bg-gray-500", "overflow-hidden");
  const color = getColorFromUsername(store.getUser().username);
  const firstLetterOfUser = store.getUser().username.charAt(0).toUpperCase();
  const userPhoto = store.getUser().avatar;

  mainWrapper!.className = "h-screen w-full flex flex-col items-center";
  let res = `
				${navigation()}
				<div class="w-full h-full flex flex-col items-center justify-center">
  					<div class="px-6  text-black bg-white rounded-lg text-xl w-1/2 h-2/3 text-center font-sans">
    					<div class="flex relative justify-between p-10">
      						<div class="flex flex-col items-center gap-4">
        						<div class="relative inline-block">
          							${
                          userPhoto
                            ? `<img id="profileImg" class="rounded-full object-cover w-48 h-48 cursor-pointer" draggable="false" alt="Profile Image">`
                            : `<div id="profileImg" class="text-5xl text-white font-bold flex justify-center items-center w-48 h-48 ${color} rounded-full cursor-pointer select-none">${firstLetterOfUser}</div>`
                        }
          							<div id="imgDropdownMenu" class="hidden absolute top-full mt-2 left-1/2 -translate-x-1/2 z-10 w-52 bg-white rounded-lg shadow-lg border border-gray-300">
            							<button data-i18n='buttons.changePhoto' id="changePhotoBtn" class="w-full text-center px-4 py-2 hover:bg-gray-100 text-xs"></button>
            							<hr>
            							<input type="file" accept="image/*" id="uploadImgInput" hidden class="text-xs w-full px-4 py-1 text-gray-700" />
            							<button data-i18n='buttons.deletePhoto' id="deletePhotoBtn" class="w-full text-center px-4 py-2 hover:bg-gray-100 text-xs border-t"></button>
          							</div>
        						</div>

        						<div class="flex flex-col items-center mt-4">
          						<p data-i18n='settings.2fa' class="text-s">2FA Authentication</p>
          						<div class="flex gap-2 mt-2">
            						<button data-i18n='buttons.disable' id="disableTwoFactorBtn" class="cursor-pointer bg-red-500 px-4 py-2 rounded text-white hover:bg-red-600">Disable</button>
            						<button data-i18n='buttons.enable' id="enableTwoFactorBtn"  class="cursor-pointer bg-green-500 px-4 py-2 rounded text-white hover:bg-green-600">Enable</button>
          						</div>
        					</div>
      					</div>
      					<div class="flex flex-col flex-wrap gap-4">
        					<div>
          						<p data-i18n='settings.firstName' class="text-left text-sm">First name</p>
          						<input class="inputUserInfo w-full border-2 border-black  p-2" placeholder="..." name="firstName" autocomplete="first name" />
        					</div>
       						<div>
          						<p data-i18n='settings.lastName' class="text-left text-sm">Last name</p>
          						<input class="inputUserInfo border-2 w-full border-black p-2" placeholder="..." name="lastName" autocomplete="last name" />
        					</div>
        					<div>
          						<p data-i18n='settings.userName' class="text-left text-sm">Username</p>
          						<input class="inputUserInfo w-full border-2 border-black p-2" name="username" placeholder="Username" autocomplete="username" />
        					</div>
        					<div>
          						<p data-i18n='settings.email' class="text-left text-sm">Email</p>
          						<input type="email" readonly class="inputUserInfo w-full text-sm border-2 border-black p-2" name="E-mail" placeholder="Email" autocomplete="email" />
        					</div>
							
      					</div>
    				</div>
					<button data-i18n='buttons.save' id="saveChangesSettings" class="cursor-pointer hover:bg-blue-700 bg-blue-500 w-28 h-10 text-white focus:outline-none  font-medium rounded text-sm px-5 py-2.5 text-center me-2 mb-2">Save</button>
					<button data-i18n='buttons.deleteAccount' id="deleteAccountBtn" class="cursor-pointer hover:bg-red-800 bg-red-500 w-42 h-10 text-white focus:outline-none  font-medium rounded text-sm px-5 py-2.5 text-center me-2 mb-2">Delete Account</button>
  				</div>
  			${getModalWindowError()}
  			${getModalTwoFactor()}
  			${getModalInput()}
  			${getModalWindowSuccess()}
		</div>`;
  return res;
}
