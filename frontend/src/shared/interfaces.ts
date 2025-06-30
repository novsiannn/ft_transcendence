import { IUser } from "./../services/api/models/response/IUser";

export interface IUserDataRegistrationType {
  username: string | null;
  email: string | null;
  password: string | null;
}

export interface IUserDataTypeLogin {
  email: string | null;
  password: string | null;
}

export interface IQRCodeEnableResponse {
  qrCodeUrl: string;
  secret: string;
}

export interface IRouteParams {
  id?: number;
}

export interface IResponse {
  status: number;
  message?: string;
}

export interface IResponseData {
  user: IUser;
}

export interface IResponseSetLanguage extends IResponse {
  data: IResponseData;
}

export interface IMessage {
  id: number;
  chatId: number;
  content: string;
  senderId: number;
  createdAt: string;
}

export interface IChatData {
  id: number;
  userId: number;
  avatar: string;
  username: string;
  message: IMessage
}

export interface ISender {
  id: number,
  username: string,
  avatar: string,
}

export interface INotificationData {
  id: number;
  type: string;
  senderId: number;
  isRead: boolean;
  createdAt:string;
  sender: ISender
}

export interface INotificationResponse extends IResponse {
  notifications: INotificationData[];
  hasUnread: boolean
}

export interface IChatsResponse extends IResponse {
  data: IChatData[];
}

export interface IFriendRequestIncoming extends IResponse {
  data: IFriendshipResponseData;
}

export interface IAuth {
  user: IUser;
  isAuth: boolean;
  isLoading: boolean;
  notification: INotificationResponse | null
}

export interface IFriendsPage {
  allUsers: IUser[];
  friends: IFriend[];
}

interface IChatPage{
  activeChatID: number | null
  onChatsPage: boolean
}

export interface IInitialState {
  auth: IAuth;
  friendsPage: IFriendsPage;
  chatPage: IChatPage
}

export interface IFriend {
  avatar: string;
  email: string;
  id: number;
  username: string;
}

export interface IFriendsResponse {
  friends: IFriend[];
}

export interface IFriendshipResponse {
  addresseeId: number;
  createdAt: string;
  id: number;
  requesterId: number;
  status: string;
  updatedAt: string;
}

export interface IFriendshipResponseData {
  pendingUserIds?: number[];
  requests: IFriendshipResponse[];
}

export interface IUpdateProfileData {
  username: string;
  firstName: string | null;
  lastName: string | null;
  phoneNumber: string | null;
}
