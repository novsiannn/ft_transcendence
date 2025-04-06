import instanceAPI from "./instanceAxios";
import { IAuthResponse } from "./models/response/AuthResponse";

const authService = {
  login: async (email: string | null, password: string | null) => {
    return await instanceAPI.post<IAuthResponse>("login", { email, password });
  },

  registration: async (username: string | null, email: string | null, password: string | null) => {
    return await instanceAPI.post<IAuthResponse>("registration", {
      username,
      email,
      password,
    });
  },
  logout: async () => {
    return await instanceAPI.post("logout");
  },
};

export default authService;
