import { navigationHandle } from "../../elements/nagivation";
import { IUser } from "../../services/api/models/response/IUser";
import { IFriendsResponse, IPendingFriendsResponse } from "../../shared";
import { store } from "../../store/store";
import { getFriendsBlock, getUsersBlock } from "./utils";

export const handleFriendsPage = async () => {
  const allUsersContainer = document.querySelector<HTMLDivElement>("#allUsersContainer");
  const friendsContainer = document.querySelector<HTMLDivElement>("#friendsContainer");

  navigationHandle();
  const responseAllUsers = store.getAllUsers();
  const responseAllFriends = await store.getAllFriends();
  const responseFriendshipSent = await store.getPendingFriendsRequests();
  
  const users: IUser[] = responseAllUsers;
  console.log(responseAllFriends.data);
  
  const friends: IFriendsResponse = responseAllFriends.data;

  getUsersBlock(users.length, users, friends, allUsersContainer, responseFriendshipSent);
  getFriendsBlock(friends.friends.length, friends.friends, friendsContainer);
};
