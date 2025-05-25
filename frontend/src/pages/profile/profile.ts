import { navigationHandle } from "../../elements/navigation";
import { IRouteParams } from "../../shared";
import { store } from "../../store/store";
import { getUserData } from "./getUserData";

export function handleProfilePage(mainWrapper?: HTMLDivElement, params?: IRouteParams) {
	let id;
	
	console.log(params);

	console.log(store.getState().auth.user);
	
	
	if (params?.id){
		id = params.id;
	} else {
		id = store.getState().auth.user.id;
	}
	getUserData(id);
	navigationHandle();
}