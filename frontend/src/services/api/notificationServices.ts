import { INotificationResponse } from "../../shared";
import instanceAPI from "./instanceAxios";

const notificationService = {
  getNotifications: async () => {
	  return await instanceAPI.get<INotificationResponse>("notifications");
  },
  deleteNotifications: async (notificationID: string) => {
	  return await instanceAPI.delete(`notifications/${notificationID}`);
  },
  readNotification: async (friendshipId: number) => {
    return await instanceAPI.put(`friendship/${friendshipId}/accept`);
  },
};

export default notificationService;