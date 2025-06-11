import axios from "axios";
import { IAuthResponse } from "./models/response/AuthResponse";
import { navigateTo } from "../../routing";
import { store } from "../../store/store";
import { IUser } from "./models/response/IUser";

const API_URL: string = `https://${window.location.hostname}:3000/`;

const instanceAPI = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

let isRefreshing = false;
let failedQueue: any[] = [];

const processQueue = (error: any, token: string | null = null) => {
  failedQueue.forEach((prom) => {
    if (token) {
      prom.resolve(token);
    } else {
      prom.reject(error);
    }
  });
  failedQueue = [];
};

instanceAPI.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

instanceAPI.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (!error.response) {
      return Promise.reject(error);
    }

    // Обработка двухфакторной аутентификации
    if (
      error.response.status === 401 &&
      error.response.data?.requiresTwoFactor &&
      error.config
    ) {
      console.log("Two-factor authentication required");
      return Promise.resolve({
        data: error.response.data,
        status: 401,
      });
    }

    // Обновление токена при истечении срока действия
    if (
      error.response.status === 401 &&
      !originalRequest._isRetry &&
      !error.response.data?.requiresTwoFactor
    ) {
      originalRequest._isRetry = true;

      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject });
        })
          .then((token) => {
            originalRequest.headers.Authorization = `Bearer ${token}`;
            return instanceAPI.request(originalRequest);
          })
          .catch((err) => Promise.reject(err));
      }

      isRefreshing = true;

      try {
        const response = await axios.get<IAuthResponse>(API_URL + "refresh", {
          withCredentials: true,
        });

        const newToken = response.data.accessToken;
        localStorage.setItem("token", newToken);
        console.log("here");

        processQueue(null, newToken);

        originalRequest.headers.Authorization = `Bearer ${newToken}`;
        return instanceAPI.request(originalRequest);
      } catch (e: any) {
        processQueue(e, null);
        console.log(e);
        // const res = await store.logout();
        // if (res!.status === 200) {
        localStorage.removeItem("token");
        store.setAuth(false);
        store.setUser({} as IUser);
        navigateTo("/signIn");
        // }
      } finally {
        isRefreshing = false;
      }
    }

    // Если ошибка не обработана, возвращаем её
    return Promise.reject(error);
  }
);

export default instanceAPI;
