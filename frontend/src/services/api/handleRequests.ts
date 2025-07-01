import { handleModalSuccess } from "../../elements/ModalSuccess";
import { activateWarning } from "../../pages/login/loginPage";
import { navigateTo } from "../../routing";

export const handleRequests = (status: number) => {

	switch (status){
		case 201:
			navigateTo("/activate");
			break;
		case 409:
			throw new Error("This username or email was already created!");
		case 401:
		case 400:
			activateWarning('#warningMessage', 'Bad Request');
			break;
		case 200:
			navigateTo("/");
			handleModalSuccess('modalWindowsMessages.loggedInSuccess');
			break;
		default:
			navigateTo("/");
	}
}
