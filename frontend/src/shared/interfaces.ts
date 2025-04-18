import { IUser } from "../services/api/models/response/IUser";

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
    id?: number
}

export interface IAuth {
  user: IUser,
  isAuth: boolean,
  isLoading: boolean,
  allUsers: IUser[]
}

export interface IInitialState {
  auth: IAuth
}

export interface IFriend {
  avatar: string;
  email: string;
  id: number;
  username: string;
}
