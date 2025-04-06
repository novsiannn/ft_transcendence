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
  console.log(config.headers);
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
	throw error;
  }
);

export default instanceAPI;
