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

export const API_URL: string = "https://localhost:3000";

class Store {
  constructor() {}

  state: IInitialState = {
    auth: {
      user: {} as IUser,
      isAuth: false,
      isLoading: false,
      allUsers: [],
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
    this.state.auth.allUsers = data;
  };

  getAllUsers = (): IUser[] => {
    return this.state.auth.allUsers;
  };

  login = async (email: string | null, password: string | null) => {
    try {
      const response = await authService.login(email, password);
      if (response.status === 200) {
        localStorage.setItem("token", response.data.accessToken);
        this.setAuth(true);
        this.setUser(response.data.user);
        await this.checkAuth();
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
      console.log(response);

      localStorage.removeItem("token");
      this.setAuth(false);
      this.setUser({} as IUser);
      if (response.status === 200) navigateTo("/");
    } catch (e: any) {
      console.log(e.response?.data);
      console.log(e);
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
      // remove response.data.accessToken in statement
      if (response.status === 200 && response.data.accessToken) {
        localStorage.setItem("token", response.data.accessToken);
        this.setAuth(true);
        this.setUser(response.data.user);
        await this.checkAuth();
        navigateTo("/");
        handleModalSuccess("You have successfully logged in!");
      }
      return response;
    } catch (e: any) {
      console.log(e.response?.data);
    }
  };

  getAllUsersRequest = async () => {
    let response = await instanceAPI.get<IUser[]>(
      "https://localhost:3000/users"
    );
    this.setAllUsers(response.data);
    return response.data;
  };

  getAllFriends = async () => {
    const response = await friendsService.getFriends();
    return response.data;
  };

  getUserRequest = async () => {
    const response = await instanceAPI.get<IAuthResponse>(
        "https://localhost:3000/user/profile"
      );
      if(response.status === 200){
        this.setUser(response.data.user);
      }
  };

  checkAuth = async () => {
    this.setLoading(true);
    const accessToken = localStorage.getItem("token");

    if (accessToken) {
      this.setAuth(true);
      await this.getUserRequest();
      await this.getAllUsersRequest();
      this.setLoading(false);
      return;
    }
    try {
      const response = await axios.get<IAuthResponse>(API_URL + "/refresh", {
        withCredentials: true,
      });
      localStorage.setItem("token", response.data.accessToken);
      console.log(
        "New token set from checkAuth = " + response.data.accessToken
      );
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
