import axios from "axios";
import authService from "../services/api/authService";
import instanceAPI from "../services/api/instanceAxios";
import { IAuthResponse } from "../services/api/models/response/AuthResponse";
import { IUser } from "./../services/api/models/response/IUser";
import { navigateTo } from "../routing";
import { handleModalSuccess } from "../elements/ModalSuccess";

const API_URL: string = "https://localhost:3000/";

class Store {
  constructor() {}

  state = {
    auth: {
      user: {} as IUser,
      isAuth: false,
      isLoading: false,
    },
  };

  setAuth = (bool: boolean) => {
    this.state.auth.isAuth = bool;
  };

  setUser = (user: IUser) => {
    this.state.auth.user = user;
  };

  setLoading = (bool: boolean) => {
    this.state.auth.isLoading = bool;
  };

  getAuth = () => {
    return this.state.auth.isAuth;
  };

  getState = () => {
    return this.state;
  };

  login = async (email: string | null, password: string | null) => {
    try {
      const response = await authService.login(email, password);
      console.log(response);
      localStorage.setItem("token", response.data.accessToken);
      console.log(
        "New token set from login = " + localStorage.getItem("token")
      );
      this.setAuth(true);
      this.setUser(response.data.user);
      if(response.status === 200){
        navigateTo('/');
        handleModalSuccess('You have successfully logged in!')
      }
    } catch (e: any) {
      throw new Error(e.response?.data)
    }
  };

  registration = async (
    userName: string | null,
    email: string | null,
    password: string | null
  ) => {
    try {
      const response = await authService.registration(userName, email, password);
      if(response.status === 201){
        navigateTo('/activate');
        handleModalSuccess('You have successfully created an account')
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
      if(response.status)
        navigateTo('/');
    } catch (e: any) {
      console.log(e.response?.data);
    }
  };

  checkAuth = async () => {
    console.log("check");

    this.setLoading(true);
    const accessToken = localStorage.getItem("token");

    if (accessToken) {
      this.setAuth(true);
      let response = await instanceAPI.get<IAuthResponse>(
        "https://localhost:3000/user/profile"
      );
      this.setUser(response.data.user);
      this.setLoading(false);
      return;
    }
    try {
      const response = await axios.get<IAuthResponse>(API_URL + "refresh", {withCredentials: true});
      console.log(response);
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
