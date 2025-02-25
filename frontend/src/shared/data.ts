import { IUserDataRegistrationType } from "./interfaces";
import { IUserDataTypeLogin } from "./interfaces";

export let userDataRegistration: IUserDataRegistrationType = {
	text: null,
	email: null,
	password: null
};

export let userDataLogin: IUserDataTypeLogin = {
	email: null,
	password: null
};