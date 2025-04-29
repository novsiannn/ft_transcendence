import axios from "axios";
import { IAuthResponse } from "./models/response/AuthResponse";

const API_URL: string = "https://localhost:3000/";

const instanceAPI = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

instanceAPI.interceptors.request.use((config) => {
	
  if (config.headers)
    config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
  return config;
});

instanceAPI.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    const originalRequest = error.config;
    if (
      error.response.status === 401 &&
      error.response.data?.requiresTwoFactor &&
      error.config
    ) {
      return Promise.resolve({ 
        data: error.response.data,
        status: 401
      });
    }

    if (error.response?.status === 409) {
      const message = error.response.data?.message || "This username is already taken";
      return Promise.reject({ message, status: 409 });
    }

    if (
      error.response.status === 401 &&
      error.config &&
      !error.config._isRetry
    ) {
      originalRequest._isRetry = true;
      try {
        const response = await axios.get<IAuthResponse>(API_URL + "refresh", {
          withCredentials: true,
        });
        localStorage.setItem("token", response.data.accessToken);
        return instanceAPI.request(originalRequest);
      } catch (e: any) {
        console.log("user is not authorized");
      }
    }
    return Promise.reject(error);
  }
);

export default instanceAPI;
