import i18next from "i18next";
import { getColorFromUsername } from "../../shared/randomColors";
import { store, API_URL } from "../../store/store";
import { attachNotificationListeners, } from "./navigation"; 

export const refreshNotifications = async () => {
  const dropdownMenuNotification = document.querySelector(
    "#dropdownMenuNotification"
  );
  await store.getAllNotifications();

  if (dropdownMenuNotification) {
    // dropdownMenuNotification.innerHTML = ``;
    dropdownMenuNotification!.innerHTML = getNotificationLayout();
    attachNotificationListeners();
  }
};



const getNotificationLayout = (): string => {
  const notificationsData = store.getNotification();

  if (!notificationsData?.notifications.length) {
    return `<div class="p-3 font-bold border-b border-gray-500">
                <p sentYouFriendRequest data-i18n="notification.notifications">${i18next.t("notification.notifications")}</p>
              </div><ul class="text-white"><li><a class="block px-4 py-2 hover:bg-gray-700 text-xs">Don't worry if you don't have any new notifications, we're all in this together!</a></li></ul>`;
  }

  let allNotifications: string = `<div class="p-3 font-bold border-b border-gray-500">
                <p sentYouFriendRequest data-i18n="notification.notifications">${i18next.t("notification.notifications")}</p>
              </div>`;

  notificationsData.notifications.forEach((n) => {
    const time = new Date(n.createdAt).toLocaleString();
    const color = getColorFromUsername(n.sender.username);
    const firstLetterOfUser = n.sender.username.charAt(0).toUpperCase();
    let notificationContent = "";

    switch (n.type) {
      case "friend_accepted":
        notificationContent = `<p data-i18n="notification.hasAcceptedFriendShip">${i18next.t("notification.hasAcceptedFriendShip")}</p>`;
        break;
      case "friend_request":
        notificationContent = `<p data-i18n="notification.sentYouFriendRequest">${i18next.t("notification.sentYouFriendRequest")}</p>`;
        break;
      case "game_invite":
        notificationContent = `<p data-i18n="notification.sentYouGameInvite">${i18next.t("notification.sentYouGameInvite")}</p>`;
        break;

      default:
        notificationContent = " unknown event";
        break;
    }
if(n.type === "game_invite"){
      allNotifications += `
      <div class="relative">

        <div data-user-id="${n.sender.id}"  data-game-id="${n.data.game.id}" data-game-playerOne="${n.data.game.player1Id}" data-game-playerTwo="${n.data.game.player2Id}"  notType="game_invite"
            class="flex notificationBlock items-start gap-3 px-4 py-3 pl-5 hover:bg-gray-700 transition cursor-pointer ${
              n.isRead ? "opacity-50" : "opacity-100"
            }">

          <div class="relative">
            ${
              n.sender.avatar
                ? `<img id="profileIcon" draggable="false" src="${
                    API_URL + n.sender.avatar
                  }" alt="Profile" class="w-12 h-12 mr-4 rounded-full cursor-pointer object-cover">`
                : `<div alt="Profile" class="flex mr-4 text-white font-bold text-s justify-center items-center content-center w-12 h-12 ${color} rounded-full cursor-pointer">${firstLetterOfUser}</div>`
            }
          </div>

          <div class="flex-1 text-xs">
            <div><span class="font-semibold">${
              n.sender.username
            }</span>${notificationContent}</div>
            <div class="text-[10px] text-gray-400 mt-1">${time}</div>
          </div>

          <div class="flex items-center gap-2 relative">
            <button
              class="deleteNotificationBtn z-10 h-6 w-6 flex items-center justify-center text-gray-400 hover:text-red-500 hover:bg-white/10 rounded-full transition"
              title="Delete"
              data-notification-id="${n.id}"
            >
            <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
        </button>
      
          ${
            !n.isRead
              ? `<span class="w-2 h-2 bg-blue-500 rounded-full"></span>`
              : ""
          }
        </div>

        </div>
      </div>
    `;
  }else{
    allNotifications += `
  <div class="relative">

    <div data-user-id="${n.sender.id}"  notType ="friendInvite" 
         class="flex notificationBlock items-start gap-3 px-4 py-3 pl-5 hover:bg-gray-700 transition cursor-pointer ${
           n.isRead ? "opacity-50" : "opacity-100"
         }">

      <div class="relative">
        ${
          n.sender.avatar
            ? `<img id="profileIcon" draggable="false" src="${
                API_URL + n.sender.avatar
              }" alt="Profile" class="w-12 h-12 mr-4 rounded-full cursor-pointer object-cover">`
            : `<div alt="Profile" class="flex mr-4 text-white font-bold text-s justify-center items-center content-center w-12 h-12 ${color} rounded-full cursor-pointer">${firstLetterOfUser}</div>`
        }
      </div>

      <div class="flex-1 text-xs">
        <div><span class="font-semibold">${
          n.sender.username
        }</span>${notificationContent}</div>
        <div class="text-[10px] text-gray-400 mt-1">${time}</div>
      </div>

      <div class="flex items-center gap-2 relative">
        <button
          class="deleteNotificationBtn z-10 h-6 w-6 flex items-center justify-center text-gray-400 hover:text-red-500 hover:bg-white/10 rounded-full transition"
          title="Delete"
          data-notification-id="${n.id}"
        >
        <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-4 h-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
        </svg>
    </button>
  
      ${
        !n.isRead
          ? `<span class="w-2 h-2 bg-blue-500 rounded-full"></span>`
          : ""
      }
    </div>

    </div>
  </div>
`;}
  });
  return allNotifications;
};

const getProfileIcon = (): string => {
  const userPhoto = store.getUser().avatar;
  const color = getColorFromUsername(store.getUser().username);
  const firstLetterOfUser = store.getUser().username.charAt(0).toUpperCase();
  const notificastions = store.getNotification();

  return `
    <div class="flex items-center relative">
      <div id="notificationMenu" class="cursor-pointer w-10 h-10 bg-gray-800 rounded-full flex justify-center items-center mr-4 relative">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-white">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5" />
        </svg>
        <span id="notificationIndicator" class="${
          notificastions?.hasUnread ? "" : "invisible"
        } animate-bounce absolute top-1 right-2 translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-red-500 rounded-full"></span>
        <div id="dropdownMenuNotification" class="hidden p-1 top-full mt-1 right-0 absolute w-80 bg-gray-800 border border-gray-200 rounded-lg shadow-lg z-50">
              
              ${getNotificationLayout()}
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
  return `<div id="signInBtn" alt="Profile" class="w-full select-none text-black font-thin rounded-md p-2 h-8 cursor-pointer bg-white flex items-center">
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
		<nav class="top-0 left-0  text-white h-16 w-full flex items-center justify-between px-6 select-none p-3 z-50">
      
    	<img src="https://img.icons8.com/plasticine/100/ping-pong--v1.png" draggable="false" alt="Logo" class="h-12 w-12 object-cover" id=imgLogoNavi>
      

			<div class="relative">
				${store.getAuth() ? getProfileIcon() : getAuthBtn()}
        		

				${
          store.getAuth()
            ? `<div id="dropdownMenu" class="absolute right-0 mt-2 w-48 bg-white text-black shadow-lg rounded-lg hidden">
            		<a id="profileDropNavi" class="block rounded-md px-4 py-2 hover:bg-gray-200 focus:outline-none" data-i18n='navigation.profile'>Profile</a>
                <a id="chatsDropNavi" class="block rounded-md px-4 py-2 hover:bg-gray-200 focus:outline-none" data-i18n='navigation.chats'>Chats</a>
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
