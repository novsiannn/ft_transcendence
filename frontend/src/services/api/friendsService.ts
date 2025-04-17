import { IFriend } from "../../shared";
import instanceAPI from "./instanceAxios";

const friendsService = {
  getFriends: async () => {
	return await instanceAPI.get<IFriend[]>("friendship");
  },
};

export default friendsService;
