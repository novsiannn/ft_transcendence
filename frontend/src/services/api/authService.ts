import instanceAPI from "./instanceAxios";
import { IAuthResponse } from "./models/response/AuthResponse";

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
    return await instanceAPI.post("2fa/login", {
      token,
      userId,
    });
  },
};

export default authService;
