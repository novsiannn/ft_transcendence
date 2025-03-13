import { IUserDataRegistrationType } from "./interfaces";
import { IUserDataTypeLogin } from "./interfaces";

export let userDataRegistration: IUserDataRegistrationType = {
	username: null,
	email: null,
	password: null
};

export let userDataLogin: IUserDataTypeLogin = {
	email: null,
	password: null
};