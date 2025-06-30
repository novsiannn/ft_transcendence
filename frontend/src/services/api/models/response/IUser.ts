export interface IRecentGame {
  id: number;
  player1Username: string;
  player2Username: string;
  player1Score: number;
  player2Score: number;
  gameDate: string;
}

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
  friendsCount: number;
  blockedUserIds: number[];
  blockedByUserIds: number[];
  recentGames: IRecentGame[];
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
