import { navigationHandle } from "../../elements/navigation";
import { IUser } from "../../services/api/models/response/IUser";
import { IFriend } from "../../shared";
import { store } from "../../store/store";
import { getFriendsBlock, getUsersBlock } from "./utils";
import { getLoader } from "../../elements/Loader";
import {
  getLanguageSelector,
  updateContent,
} from "../../elements/LanguageSelector";
import { rerenderFriendsPage } from "./handleBtns";
import { socket } from "../../websockets";

export const filterUsers = (data: IUser[], filterString: string) => {
  return data.filter((user) => user.username.startsWith(filterString));
};

export const handleFriendsPage = async (
  mainWrapper: HTMLDivElement | undefined
) => {
  const allUsersContainer =
    document.querySelector<HTMLDivElement>("#allUsersContainer");
  const friendsContainer =
    document.querySelector<HTMLDivElement>("#friendsContainer");
  const usersSelector = document.querySelector<HTMLInputElement>(
    "#searchInputFriendsPage"
  );

  mainWrapper?.classList.add("relative");
  mainWrapper!.append(getLanguageSelector());
  allUsersContainer!.innerHTML = `${getLoader()}`;
  friendsContainer!.innerHTML = `${getLoader()}`;

  navigationHandle();
  const responseAllUsers = store.getAllUsers();
  const responseAllFriends = store.getAllFriends();
  const responseFriendshipSent = await store.getPendingFriendsRequests();
  const responseFriendshipReceived = await store.getIncomingFriendRequest();

  let users: IUser[] = responseAllUsers;
  const friends: IFriend[] = responseAllFriends;

  getUsersBlock(
    users,
    friends,
    allUsersContainer,
    responseFriendshipSent,
    responseFriendshipReceived
  );
  getFriendsBlock(friends, friendsContainer);
  updateContent();
  usersSelector!.addEventListener("input", async () => {
    users = store.getAllUsers();
    users = filterUsers(users, usersSelector!.value);
    usersSelector!.readOnly = true;
    await rerenderFriendsPage(users);
    usersSelector!.readOnly = false;
  });
  socket?.emit("online:get:all:status");
};
