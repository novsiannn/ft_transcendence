import { store } from "../store/store";
import { socket } from "../websockets";

interface IRefreshOnlineStatusProps {
  isOnline: boolean;
  userId: number;
}

export const refreshOnlineStatus = ({
  isOnline,
  userId,
}: IRefreshOnlineStatusProps) => {
  const userOnlineStatus = document.querySelector("#userOnlineStatusProfile");

  if (userOnlineStatus) {
    userOnlineStatus.innerHTML = isOnline
      ? `<p class="text-green-500 ">Online</p>
              <div class=" animate-pulse w-2 h-2 rounded-full bg-green-500"></div>`
      : `<p class="text-gray-500 ">Offline</p>`;
  }
};

interface IUserOnlineStatus {
  isOnline: boolean;
  id: number;
  username: string;
  avatar: string;
}

export const refreshOnlineStatusFriendsPage = (data: IUserOnlineStatus[]) => {
  const allUsersOnlineStatusLayout = document.querySelectorAll(
    "[data-userOnlineStatusFriendsPage]"
  );
  
  allUsersOnlineStatusLayout.forEach((el) => {
    const userIdFromLayout = Number(el.id.replace(/\D/g, ""));
    let returnedUser;

    if (data) {
      returnedUser = data?.find((user) => {
      
        if (user.id == userIdFromLayout) return user;
        else if (user.id === store.getUser().id) {
          return null;
        }
      });
    }

    if (returnedUser) {
      el.innerHTML = returnedUser.isOnline
        ? `<p class="text-green-500 ">Online</p>
              <div class="animate-pulse w-1.5 h-1.5 rounded-full bg-green-500"></div>`
        : `<p class="text-gray-500 ">Offline</p>`;
    }
  });
};
