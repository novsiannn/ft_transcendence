import instanceAPI from "./instanceAxios";

const gameService = {
  sendFriendMatchRequest: async (friendId: number) => {
    console.log(friendId);
    
    return await instanceAPI.post("game/casual", { friendId });
  },
};

export default gameService;
