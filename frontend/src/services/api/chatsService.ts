import { IChatData, IChatsResponse, IMessage } from "../../shared";
import instanceAPI from "./instanceAxios";

const chatsService = {
  getAllChats: async (): Promise<IChatData[]> => {
    const response = await instanceAPI.get<IChatData[]>("chats");
    return response.data;
  },
  createChat: async (targetUserId: number | string) => {
    return await instanceAPI.post("chat/create", { targetUserId });
  },
  getMessagesFromChat: async (chatId: number) => {
    const response = await instanceAPI.get<IMessage[]>(`chat/messages/${chatId}`);
    return response.data;
  },
};

export default chatsService;
