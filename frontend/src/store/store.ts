import {
  IChatData,
  IChatsResponse,
  IFriend,
  IFriendshipResponseData,
  IMessage,
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
import i18next from "i18next";
import chatsService from "../services/api/chatsService";
import { initializeSocket, socket } from "../websockets";

export const API_URL: string = "https://localhost:3000";

class Store {
  constructor() {}

  state: IInitialState = {
    auth: {
      user: {} as IUser,
      isAuth: false,
      isLoading: false,
    },
    friendsPage: {
      allUsers: [],
      friends: [],
    },
  };

  setAuth = (bool: boolean): void => {
    this.state.auth.isAuth = bool;
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
    const response = await friendsService.getFriends();

    this.setAllFriends(response.data.friends);
    return response;
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
        await initializeSocket();
        i18next.changeLanguage(this.getUserLanguage());
        navigateTo("/");
        handleModalSuccess("You have successfully logged in!");
      } else if (response.status === 401 && response.data.requiresTwoFactor) {
        handleModalInput("2fa/login", "Code for 2FA", response.data.userId);
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
        navigateTo("/activate");
        handleModalSuccess("You have successfully created an account");
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
        handleModalSuccess("You have successfully logged in!");
      }
      return response;
    } catch (e: any) {
      return e;
    }
  };

  getAllUsersRequest = async () => {
    let response = await instanceAPI.get<IUser[]>(`${API_URL}/users`);
    this.setAllUsers(response.data);
    return response.data;
  };

  getUserRequest = async () => {
    const response = await instanceAPI.get<IAuthResponse>(
      `${API_URL}/user/profile`
    );

    if (response.status === 200) {
      this.setUser(response.data.user);
    }
  };

  updateUserData = async (data: IUpdateProfileData) => {
    const response = await instanceAPI.put<IAuthResponse>(
      `${API_URL}/user/profile`,
      data
    );
    if (response.status === 200) {
      await this.setUser(response.data.user);
    }
    return response;
  };

  sendFriendRequest = async (addresseeId: number) => {
    const response = await friendsService.sendFriendRequest(addresseeId);

    if (response.status === 201) {
      handleModalSuccess("You have successfully sent a friend request");
      socket.emit('notification:friendRequest', {
        addresseeId
    });
    }
    return response.status;
  };

  getPendingFriendsRequests = async (): Promise<IFriendshipResponseData> => {
    const response = await friendsService.getPendingFriendsRequests();
    return response.data as IFriendshipResponseData;
  };

  getIncomingFriendRequest = async (): Promise<IFriendshipResponseData> => {
    const response = await friendsService.getIncomingFriendRequest();
    return response.data as IFriendshipResponseData;
  };

  cancelPendingFriendRequest = async (idFriendship: number) => {
    const response = await friendsService.cancelPendingFriendRequest(
      idFriendship
    );
    if (response.status === 204) {
      handleModalSuccess("You have successfully cancelled a friend request");
    }
    return response.status;
  };

  deleteFriend = async (id: number) => {
    const response = await friendsService.deleteFriend(id);
    return response;
  };

  acceptFriendship = async (friendshipId: number) => {
    const response = await friendsService.acceptFriendship(friendshipId);
    return response;
  };

  rejectFriendship = async (friendshipId: number) => {
    const response = await friendsService.rejectFriendship(friendshipId);
    return response;
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
    const response =  await chatsService.getAllChats();
    return response;
  };

  getMessagesFromChat = async (chatID: number): Promise<IMessage[]> => {
    const response =  await chatsService.getMessagesFromChat(chatID);
    console.log(response);
    
    return response;
  };

  checkAuth = async () => {
    this.setLoading(true);
    const accessToken = localStorage.getItem("token");

    if (accessToken) {
      this.setAuth(true);
      await this.getUserRequest();
      await this.getAllUsersRequest();
      await this.getAllFriendsRequest();
      this.setLoading(false);
      return;
    }
    try {
      const response = await axios.get<IAuthResponse>(`${API_URL}/refresh`, {
        withCredentials: true,
      });
      localStorage.setItem("token", response.data.accessToken);
      this.setAuth(true);
      this.setUser(response.data.user);
    } catch (e: any) {
      console.log(e.response?.data);
    } finally {
      this.setLoading(false);
    }
  };
}

export const store = new Store();
