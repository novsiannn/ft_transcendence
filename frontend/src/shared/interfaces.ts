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

export interface IUsers {
  users: IUser[]
}
