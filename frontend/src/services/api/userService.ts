import { IResponse } from "../../shared";
import instanceAPI from "./instanceAxios";
import { IUser } from "./models/response/IUser";

const userServices = {
  getUsers: async () => {
    return await instanceAPI.get<IUser[]>("users");
  }
};

export default userServices;
