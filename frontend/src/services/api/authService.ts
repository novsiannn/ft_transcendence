import instanceAPI from "./instanceAxios";
import { IAuthResponse } from "./models/response/AuthResponse";
import { getSocket, disconnectSocket } from "../../websockets/client";
import { IResponse } from "../../shared";

const authService = {
  login: async (email: string | null, password: string | null) => {
    return await instanceAPI.post<IAuthResponse>("login", { email, password });
  },

  registration: async (
    username: string | null,
    email: string | null,
    password: string | null
  ) => {
    return await instanceAPI.post<IAuthResponse>("registration", {
      username,
      email,
      password,
    });
  },
  logout: async () => {
    const socket = getSocket();
    if (socket && socket.connected) {
      socket.emit("user:logout");
    }
    disconnectSocket();

    return await instanceAPI.post("logout");
  },
  enableTwoFactor: async () => {
    return await instanceAPI.post("2fa/enable");
  },
  verifyTwoFactor: async (token: string) => {
    return await instanceAPI.post("2fa/verify", {
      token,
    });
  },
  disableTwoFactor: async (token: string) => {
    return await instanceAPI.post("2fa/disable", {
      token,
    });
  },
  loginWithTwoFactor: async (token: string, userId: string) => {
    return await instanceAPI.post<IAuthResponse>("2fa/login", {
      token,
      userId,
    });
  },
  deleteUser: async (password: string) => {
    return await instanceAPI.delete<IResponse>("user/profile", {
      data: { password },
    });
  },
};

export default authService;
