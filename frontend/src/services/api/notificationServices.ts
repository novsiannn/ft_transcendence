import { INotificationResponse } from "../../shared";
import instanceAPI from "./instanceAxios";

const notificationService = {
  getNotifications: async () => {
	  return await instanceAPI.get<INotificationResponse>("notifications");
  },
  deleteNotifications: async (notificationID: string) => {
	  return await instanceAPI.delete(`notifications/${notificationID}`);
  },
  readNotification: async () => {
    return await instanceAPI.put(`notifications/read-all`);
  },
};

export default notificationService;