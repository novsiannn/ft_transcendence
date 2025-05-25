import { IFriend, IFriendsResponse } from "../../shared";
import instanceAPI from "./instanceAxios";

const friendsService = {
  getFriends: async () => {
    return await instanceAPI.get<IFriendsResponse>("friendship");
  },
  sendFriendRequest: async (addresseeId: number) => {
    return await instanceAPI.post<IFriend[]>("friendship", { addresseeId });
  },
  getPendingFriendsRequests: async () => {
    return await instanceAPI.get("friendship/sent-pending");
  },
  cancelPendingFriendRequest: async (friendshipId: number) => {
    console.log(friendshipId);
    
    return await instanceAPI.delete(`friendship/outgoing/${friendshipId}`);
  },
  deleteFriend: async (id: number) => {
    return await instanceAPI.delete(`friendship/${id}`);
  },
  getIncomingFriendRequest: async () => {
    return await instanceAPI.get("friendship/incoming");
  },
  acceptFriendship: async (friendshipId: number) => {
    return await instanceAPI.put(`friendship/${friendshipId}/accept`);
  },
  rejectFriendship: async (friendshipId: number) => {
    return await instanceAPI.put(`friendship/${friendshipId}/reject`);
  },
};

export default friendsService;
