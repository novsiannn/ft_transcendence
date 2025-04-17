import { navigationHandle } from "../../elements/nagivation";
import { IRouteParams } from "../../shared";
import { store } from "../../store/store";
import { getUserData } from "./getUserData";

export function handleProfilePage(mainWrapper?: HTMLDivElement, params?: IRouteParams) {
	let id;
	
	if (params?.id){
		id = params.id;
	} else {
		id = store.getState().auth.user.id;
	}
	getUserData(id);
	navigationHandle();
}