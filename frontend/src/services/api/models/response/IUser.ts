export interface IUser {
  avatar: string;
  createdAt: string;
  email: string;
  firstName: string;
  id: number;
  isActivated: boolean;
  lastName: string;
  phoneNumber: string;
  updatedAt: string;
  username: string;
  isTwoFactorEnabled: boolean;
  language: string;
}

export interface IUserProfile {
  avatar: string;
  email: string;
  firstName: string;
  id: number;
  isActivated: boolean;
  lastName: string;
  phoneNumber: string;
  username: string;
  isTwoFactorEnabled: boolean;
  language: string;
}

