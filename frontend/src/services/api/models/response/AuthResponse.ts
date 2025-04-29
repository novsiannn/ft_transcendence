import { IUser } from "./IUser";

export interface IAuthResponse {
	accessToken: string;
	refreshToken: string;
	requiresTwoFactor: boolean;
	user: IUser;
	userId: string;
	status: number;
}
