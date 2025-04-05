import { handleModalSuccess } from "../../elements/ModalSuccess";
import { activateWarning } from "../../Layout";
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
			console.log('here');
			activateWarning();
			break;
		case 200:
			navigateTo("/");
			handleModalSuccess("You have successfully logged in.");
			break;
		default:
			navigateTo("/");
	}
}