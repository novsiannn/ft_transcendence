import instanceAPI from "./instanceAxios";

const chatsService = {
  getAllChats: async () => {
	  return await instanceAPI.get("chat");
  },
  createChat: async (targetUserId: string) => {
	  return await instanceAPI.post("chat/create", {targetUserId});
  },
  getMessagesFromChat: async (chatId: number) => {
	  return await instanceAPI.get(`chat/messages/${chatId}`);
  },
};

export default chatsService;
