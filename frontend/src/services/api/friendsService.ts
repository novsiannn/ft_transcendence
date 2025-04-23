import { IFriend } from "../../shared";
import instanceAPI from "./instanceAxios";

const friendsService = {
  getFriends: async () => {
	return await instanceAPI.get<IFriend[]>("friendship");
  },
  sendFriendRequest: async (addresseeId: number) => {
    return await instanceAPI.post<IFriend[]>("friendship", {addresseeId});
  }
};

export default friendsService;
