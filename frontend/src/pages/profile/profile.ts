import { navigationHandle } from "../../elements/nagivation";
import { getUserData } from "./getUserData";

export function handleProfilePage() {
	getUserData();
	navigationHandle();
}