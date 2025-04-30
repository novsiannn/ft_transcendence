import { getColorFromUsername } from "../../shared/randomColors";
import { store, API_URL } from "../../store/store";

const getProfileIcon = () => {
  const userPhoto = store.getUser().avatar;
  const color = getColorFromUsername(store.getUser().username);
  const firstLetterOfUser = store.getUser().username.charAt(0).toUpperCase();

  return `
    <div class="flex items-center relative">
      <div id="notificationMenu" class="w-10 h-10 bg-gray-800 rounded-full flex justify-center items-center mr-4 relative">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-white">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5" />
          </svg>
     <span class="animate-bounce absolute top-1 right-2 translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-red-500 rounded-full"></span>
     <div id="dropdownMenuNotification" class="hidden top-full mt-1 right-0 absolute w-60 bg-gray-800 border border-gray-200 rounded-lg shadow-lg z-50">
      <ul class="text-white">
        <li><a class="block px-4 py-2 hover:bg-gray-700 text-xs">Notification will come soon!!!</a></li>
      </ul>
    </div>
    </div>
    ${
      userPhoto
        ? `<img id="profileIcon" draggable="false" src="${
            API_URL + userPhoto
          }" alt="Profile" class="w-12 h-12 rounded-full cursor-pointer object-cover">`
        : `<div id="profileIcon" alt="Profile" class="flex text-white font-bold text-s justify-center items-center content-center w-12 h-12 ${color} rounded-full cursor-pointer">${firstLetterOfUser}</div>`
    }
  </div>`;
};

const getSignInBtn = () => {
  return `<div id="signInBtn" alt="Profile" class="w-full select-none text-white font-thin rounded-md p-2 h-8 cursor-pointer bg-gray-500 flex items-center">
			<h1>Sign In</h1>
	</div>`;
};

const getSignUpBtn = () => {
  return `<div id="registBtn" alt="Profile" class="w-full select-none text-black font-thin rounded-md p-2 h-8 cursor-pointer bg-gray-100 flex items-center">
			<h1>Sign Up</h1>
	</div>`;
};

const getSignUpPage = () => {
  if (location.pathname === "/signUp") return false;
  return true;
};

const getAuthBtn = () => {
  return getSignUpPage() ? getSignUpBtn() : getSignInBtn();
};

export function navigation() {
  return `
		<nav class="top-0 left-0  text-white h-16 w-full fixed flex items-center justify-between px-6 select-none">
    		<img src="https://img.icons8.com/plasticine/100/ping-pong--v1.png" draggable="false" alt="Logo" class="h-12 w-12 object-cover" id=imgLogoNavi>

			<div class="relative">
				${store.getAuth() ? getProfileIcon() : getAuthBtn()}
        		

				${
          store.getAuth()
            ? `<div id="dropdownMenu" class="absolute right-0 mt-2 w-48 bg-white text-black shadow-lg rounded-lg hidden">
            		<a id="profileDropNavi" class="block rounded-md px-4 py-2 hover:bg-gray-200 focus:outline-none" data-i18n='navigation.profile'>Profile</a>
					      <a id="gameDropNavi" class="block px-4 py-2 hover:bg-gray-200 focus:outline-none" data-i18n='navigation.game'>Game</a>
					      <a id="leaderboardDropNavi" class="block px-4 py-2 hover:bg-gray-200 focus:outline-none" data-i18n='navigation.leaderboard'>Leaderboard</a>
            		<a id="settingsDropNavi" class="block px-4 py-2 hover:bg-gray-200 focus:outline-none" data-i18n='navigation.settings'>Settings</a>
					      <a id="friendsDropNavi" class="block px-4 py-2 hover:bg-gray-200 focus:outline-none" data-i18n='navigation.friends'>Friends</a>
                <hr class="border-t border-gray-300">
            		<p class="flex rounded-md px-4 py-2 text-red-600 hover:bg-gray-200 gap-2" id="logoutBtn" data-i18n='navigation.logout'>Logout</p>
                `
            : ""
        }
        		</div>
    		</div>
		</nav>
    
		`;
}
