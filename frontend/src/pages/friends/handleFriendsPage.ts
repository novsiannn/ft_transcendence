import { navigationHandle } from "../../elements/nagivation";
import { IUser } from "../../services/api/models/response/IUser";
import { IFriend } from "../../shared";
import { store } from "../../store/store";
import { getBlocks, getFriendBlock, getUserBlock } from "./utils";

export const handleFriendsPage = async () => {
  const allUsersContainer = document.querySelector<HTMLDivElement>("#allUsersContainer");
  const friendsContainer = document.querySelector<HTMLDivElement>("#friendsContainer");

  navigationHandle();
  const responseAllUsers = store.getAllUsers();
  const responseAllFriends = await store.getAllFriends();
  const myProfileID = store.getState().auth.user.id;

  const users: IUser[] = responseAllUsers;
  const friends: IFriend[] = responseAllFriends;

  getBlocks(users.length, users, myProfileID, getUserBlock, allUsersContainer);
  getBlocks(friends.length, friends, myProfileID, getFriendBlock, friendsContainer);
};
