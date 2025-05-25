export interface IUser {
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
  lvl: number;
  elo: number;
  winrate: number;
  totalGames: number;
  wonGames: number;
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
