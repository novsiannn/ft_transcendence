import { IUser } from "../services/api/models/response/IUser";
import { store } from "../store/store";

export const findUser = (id: number): IUser | undefined => {
	return store.getAllUsers().find((user) => user.id === id);
}