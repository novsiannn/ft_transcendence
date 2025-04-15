import { navigationHandle } from "../../elements/nagivation";
import { IUser } from "../../services/api/models/response/IUser";
import { IUsers } from "../../shared";
import { store } from "../../store/store";

const getUserBlock = (username: string) => {
  return `<div class="bg-gray-800 flex items-center justify-between rounded-lg p-4 mb-2 w-3/4 mx-auto hover:bg-gray-700 transition-colors duration-300">
  <div class="flex items-center space-x-4">
    <div class="w-14 h-14 rounded-full bg-green-700 flex items-center justify-center text-white font-bold text-xl hover:scale-105 transition-transform duration-200">
      J
    </div>
    <div>
		<span class="text-white text-xl font-semibold">${username}</span>
      <p class="text-gray-400 text-sm">Online</p>
    </div>
  </div>
</div>
`;
};

export const handleFriendsPage = async () => {
  const friendsContainer = document.querySelector("#friendsContainer");
  navigationHandle();
  const response = await store.getAllUsers();
  const users: IUser[] = response;

  users.forEach((el) => {
    const div = document.createElement("div");
    div.innerHTML = getUserBlock(el.username);
    friendsContainer?.append(div);
  });
};
