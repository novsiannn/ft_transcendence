import {
  IChatData,
  IChatsResponse,
  IFriend,
  IFriendGame,
  IFriendshipResponseData,
  IMessage,
  INotificationResponse,
  IResponse,
  IUpdateProfileData,
} from "./../shared/interfaces";
import axios from "axios";
import authService from "../services/api/authService";
import instanceAPI from "../services/api/instanceAxios";
import { IAuthResponse } from "../services/api/models/response/AuthResponse";
import { IUser } from "./../services/api/models/response/IUser";
import { navigateTo } from "../routing";
import { handleModalSuccess } from "../elements/ModalSuccess";
import { IInitialState, IQRCodeEnableResponse } from "../shared";
import { handleModalInput } from "../elements/ModalInput";
import friendsService from "../services/api/friendsService";
import gameService from "../services/api/gameService";
import i18next from "i18next";
import chatsService from "../services/api/chatsService";
import { initializeSocket, socket } from "../websockets";
import notificationService from "../services/api/notificationServices";
import { refreshNotifications } from "../elements/navigation";
import userServices from "../services/api/userService";

export const API_URL: string = `https://${window.location.hostname}:3000`;

class Store {
  constructor() {}

  state: IInitialState = {
    auth: {
      user: {} as IUser,
      isAuth: false,
      isLoading: false,
      notification: null,
    },
    friendsPage: {
      allUsers: [],
      friends: [],
    },
    chatPage: {
      activeChatID: null,
      onChatsPage: false,
    },
    friendGame: {
      game: {
        id: 0,
        player1Id: 0,
        player2Id: 0,
      },
    } as IFriendGame,
  };

  setFriendGameId = (gameId: number): void => {
    this.state.friendGame.game.id = gameId;
  };

  setFriendPlayerOne = (player1: number): void => {
    this.state.friendGame.game.player1Id = player1;
  };

  setFriendPlayerTwo = (player2: number): void => {
    this.state.friendGame.game.player2Id = player2;
  };

  // getFriendGameId = (): number => {
  //   return this.state.friendGame.gameId;
  // };

  // getFriendPlayerOne = (): number => {
  //   return this.state.friendGame.player1;
  // };

  // getFriendPlayerTwo = (): number => {
  //   return this.state.friendGame.player2;
  // };
  getFriendGameData = (): IFriendGame => {
    return this.state.friendGame;
  };

  setAuth = (bool: boolean): void => {
    this.state.auth.isAuth = bool;
  };

  setActiveChatID = (chatId: number | null): void => {
    this.state.chatPage.activeChatID = chatId;
  };

  getActiveChatID = (): number | null => {
    return this.state.chatPage.activeChatID;
  };

  setChatsPageActive = (value: boolean): void => {
    this.state.chatPage.onChatsPage = value;
  };

  getChatsPageActive = (): boolean => {
    return this.state.chatPage.onChatsPage;
  };

  setUser = (user: IUser): void => {
    this.state.auth.user = user;
  };

  getUser = (): IUser => {
    return this.state.auth.user;
  };

  getUserLanguage = () => {
    return this.state.auth.user.language || "eng";
  };

  setUserLanguage = (lng: string) => {
    this.state.auth.user.language = lng;
  };

  setNotification = (data: INotificationResponse | null): void => {
    this.state.auth.notification = data;
  };

  getNotification = (): INotificationResponse | null => {
    return this.state.auth.notification;
  };

  setLoading = (bool: boolean): void => {
    this.state.auth.isLoading = bool;
  };

  getAuth = () => {
    return this.state.auth.isAuth;
  };

  getState = (): IInitialState => {
    return this.state;
  };

  setAllUsers = (data: IUser[]): void => {
    this.state.friendsPage.allUsers = data;
  };

  getAllUsers = (): IUser[] => {
    return this.state.friendsPage.allUsers;
  };

  setAllFriends = (data: IFriend[]): void => {
    this.state.friendsPage.friends = data;
  };

  getAllFriends = (): IFriend[] => {
    return this.state.friendsPage.friends;
  };

  getAllFriendsRequest = async () => {
    try {
      const response = await friendsService.getFriends();

      this.setAllFriends(response.data.friends);
      return response;
    } catch (e) {
      console.log(e);
    }
  };

  login = async (email: string | null, password: string | null) => {
    try {
      const response = await authService.login(email, password);
      if (response.status === 200) {
        localStorage.setItem("token", response.data.accessToken);
        this.setAuth(true);
        this.setUser(response.data.user);
        await this.getUserRequest();
        await this.checkAuth();
        initializeSocket();
        i18next.changeLanguage(this.getUserLanguage());
        navigateTo("/");
        handleModalSuccess("modalWindowsMessages.loggedInSuccess");
      } else if (response.status === 401 && response.data.requiresTwoFactor) {
        handleModalInput(
          "2fa/login",
          "modalWindowsMessages.codeFor2FA",
          response.data.userId
        );
      }
      return response;
    } catch (e: any) {
      throw new Error(e.response?.data);
    }
  };

  registration = async (
    userName: string | null,
    email: string | null,
    password: string | null
  ) => {
    try {
      const response = await authService.registration(
        userName,
        email,
        password
      );
      if (response.status === 201) {
        navigateTo("/signIn");
        handleModalSuccess("modalWindowsMessages.yourAccountCreated");
      }
    } catch (e: any) {
      throw new Error(e.response?.data);
    }
  };

  logout = async () => {
    try {
      const response = await authService.logout();
      localStorage.removeItem("token");
      this.setAuth(false);
      this.setUser({} as IUser);
      console.log("here");

      navigateTo("/");
      return response;
    } catch (e: any) {
      console.log(e.response?.data);
    }
  };
  enableTwoFactor = async () => {
    try {
      const response = await authService.enableTwoFactor();
      console.log(response);
      return <IQRCodeEnableResponse>response.data;
    } catch (e: any) {
      console.log(e.response?.data);
    }
  };

  verifyTwoFactor = async (token: string) => {
    try {
      const response = await authService.verifyTwoFactor(token);
      await this.checkAuth();
      return response;
    } catch (e: any) {
      console.log(e.response?.data);
      return e.response;
    }
  };

  disableTwoFactor = async (token: string) => {
    try {
      const response = await authService.disableTwoFactor(token);
      await this.checkAuth();
      return response;
    } catch (e: any) {
      console.log(e.response?.data);
    }
  };

  loginWithTwoFactor = async (token: string, userID: string) => {
    try {
      const response = await authService.loginWithTwoFactor(token, userID);

      if (response.status === 200) {
        localStorage.setItem("token", response.data.accessToken);
        this.setAuth(true);
        this.setUser(response.data.user);
        await this.checkAuth();
        navigateTo("/");
        handleModalSuccess("modalWindowsMessages.loggedInSuccess");
      }
      return response;
    } catch (e: any) {
      return e;
    }
  };

  getAllUsersRequest = async () => {
    try {
      let response = await instanceAPI.get<IUser[]>(`${API_URL}/users`);
      this.setAllUsers(response.data);
      return response.data;
    } catch (e) {
      console.log(e);
    }
  };

  getUserRequest = async () => {
    try {
      const response = await instanceAPI.get<IAuthResponse>(
        `${API_URL}/user/profile`
      );

      if (response.status === 200) {
        this.setUser(response.data.user);
      }
    } catch (e) {
      console.log(e);
    }
  };

  setUserUpdateData = (user: IUser) => {
    this.state.auth.user = {
      ...this.state.auth.user,
      username: user.username,
      firstName: user.firstName,
      lastName: user.firstName,
      phoneNumber: user.phoneNumber,
    };
  };

  updateUserData = async (data: IUpdateProfileData) => {
    const response = await instanceAPI.put<IAuthResponse>(
      `${API_URL}/user/profile`,
      data
    );
    if (response.status === 200) {
      await this.setUserUpdateData(response.data.user);
    }
    return response;
  };

  sendFriendGameRequest = async (friendId: number) => {
    const response = await gameService.sendFriendMatchRequest(friendId);

    console.log("STORE RESPONSE ", response);

    if (response.status === 201) {
      handleModalSuccess("You have successfully sent a game request");
    }

    return response;
  };

  sendFriendRequest = async (addresseeId: number) => {
    try {
      const response = await friendsService.sendFriendRequest(addresseeId);

      if (response.status === 201) {
        handleModalSuccess("modalWindowsMessages.friendShipRequest");
        socket?.emit("notification:friendRequest", {
          addresseeId,
        });
      }
      return response.status;
    } catch (e) {
      return {};
    }
  };

  getPendingFriendsRequests = async (): Promise<IFriendshipResponseData> => {
    try {
      const response = await friendsService.getPendingFriendsRequests();
      return response.data as IFriendshipResponseData;
    } catch (e) {
      console.log(e);
      return {} as IFriendshipResponseData;
    }
  };

  getIncomingFriendRequest = async (): Promise<IFriendshipResponseData> => {
    try {
      const response = await friendsService.getIncomingFriendRequest();
      return response.data as IFriendshipResponseData;
    } catch (e) {
      return {} as IFriendshipResponseData;
    }
  };

  cancelPendingFriendRequest = async (idFriendship: number) => {
    try {
      const response = await friendsService.cancelPendingFriendRequest(
        idFriendship
      );

      if (response.status === 204) {
        handleModalSuccess("modalWindowsMessages.friendShipCancel");
      }
      return response.status;
    } catch (e) {
      return {};
    }
  };

  deleteFriend = async (id: number) => {
    try {
      const response = await friendsService.deleteFriend(id);
      return response;
    } catch (e: any) {
      return e.response;
    }
  };

  acceptFriendship = async (friendshipId: number) => {
    try {
      const response = await friendsService.acceptFriendship(friendshipId);
      return response;
    } catch (e: any) {
      return e.response;
    }
  };

  rejectFriendship = async (friendshipId: number) => {
    try {
      const response = await friendsService.rejectFriendship(friendshipId);
      return response;
    } catch (e: any) {
      return e.response;
    }
  };

  setUserLanguageRequest = async (language: string) => {
    const response = (await instanceAPI.post(`${API_URL}/user/language`, {
      language,
    })) as IResponse;
    if (response.status === 200) {
      await this.setUserLanguage(language);
    }
    return response;
  };

  createNewChat = async (targetUserId: number | string) => {
    const response = await chatsService.createChat(targetUserId);
    return response;
  };

  getAllChats = async (): Promise<IChatData[]> => {
    try {
      const response = await chatsService.getAllChats();
      return response;
    } catch (e) {
      return {} as IChatData[];
    }
  };

  getMessagesFromChat = async (chatID: number): Promise<IMessage[]> => {
    const response = await chatsService.getMessagesFromChat(chatID);
    return response;
  };

  getAllNotifications = async () => {
    try {
      const response = await notificationService.getNotifications();
      this.setNotification(response.data);
      return response;
    } catch (e) {
      console.log(e);
    }
  };

  deleteNotification = async (notificationID: string): Promise<number> => {
    try {
      const response = await notificationService.deleteNotifications(
        notificationID
      );

      if (response.status === 204) {
        refreshNotifications();
      }
      return response.status;
    } catch (e) {
      return {} as Promise<number>
    }
  };

  readNotification = async () => {
    try {
      const response = await notificationService.readNotification();
      if (response.status === 200) {
        await this.getAllNotifications();
      }
    } catch (e) {
      console.log(e);
    }
  };

  blockUser = async (userId: number) => {
    const response = await friendsService.blockUser(userId);
  };

  getLeaderBoard = async () => {
    const response = await userServices.getLeaderboard();

    return response;
  };

  deleteAccount = async (password: string) => {
    try {
      const response = await authService.deleteUser(password);
      console.log(response);
      if (response.status === 204) {
        await this.logout();
        handleModalSuccess("modalWindowsMessages.yourAccountDeleted");
      }
      return response.data;
    } catch (e: any) {
      return e.response;
    }
  };

  unblockUser = async (userId: number) => {
    const response = await friendsService.unblockUser(userId);
  };

  checkAuth = async () => {
    this.setLoading(true);
    const accessToken = localStorage.getItem("token");

    if (accessToken) {
      this.setAuth(true);
      await this.getUserRequest();
      await this.getAllUsersRequest();
      await this.getAllFriendsRequest();
      await this.getAllNotifications();
      this.setLoading(false);
      return;
    }
    try {
      const response = await axios.get<IAuthResponse>(`${API_URL}/refresh`, {
        withCredentials: true,
      });

      console.log(response);

      localStorage.setItem("token", response.data.accessToken);
      this.setAuth(true);
      this.setUser(response.data.user);
    } catch (e: any) {
      // console.log(e.response?.data);
    } finally {
      this.setLoading(false);
    }
  };
}

export const store = new Store();
