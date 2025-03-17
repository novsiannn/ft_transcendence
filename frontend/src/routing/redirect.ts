import { navigateTo } from "./navigation";

export let userLoged = false;

export const checkLoggedUser = () => {
  if (userLoged) return true;
	return false;
};

export const userChangeLoginStatus = (bool: boolean) => {
	userLoged = bool;
	navigateTo('/');
}