import { navigationHandle } from "../../elements/nagivation";
import { IUser } from "../../services/api/models/response/IUser";
import { IFriendsResponse } from "../../shared";
import { store } from "../../store/store";
import { getFriendsBlock, getUsersBlock } from "./utils";
import { getLoader } from '../../elements/Loader';
import { getLanguageSelector, updateContent } from '../../elements/LanguageSelector';

export const handleFriendsPage = async (mainWrapper: HTMLDivElement | undefined) => {
  const allUsersContainer = document.querySelector<HTMLDivElement>("#allUsersContainer");
  const friendsContainer = document.querySelector<HTMLDivElement>("#friendsContainer");

  mainWrapper?.classList.add("relative")
  mainWrapper!.append(getLanguageSelector());
  allUsersContainer!.innerHTML =
      `<h1 data-i18n='friends.allUsers'  class="text-2xl text-white font-black text-center mb-4">All Users</h1>
        ${getLoader()}
      `;
    friendsContainer!.innerHTML =
        `<h1 data-i18n='friends.yourFriends'  class="text-2xl text-white font-black text-center mb-4">Your Friends</h1>
        ${getLoader()}
      `;

  navigationHandle();
  const responseAllUsers = store.getAllUsers();
  const responseAllFriends = await store.getAllFriends();
  const responseFriendshipSent = await store.getPendingFriendsRequests();
  const responseFriendshipReceived = await store.getIncomingFriendRequest();
  
  const users: IUser[] = responseAllUsers;
  const friends: IFriendsResponse = responseAllFriends.data;

  getUsersBlock(users, friends, allUsersContainer, responseFriendshipSent, responseFriendshipReceived);
  getFriendsBlock(friends.friends, friendsContainer);
  updateContent();
};
