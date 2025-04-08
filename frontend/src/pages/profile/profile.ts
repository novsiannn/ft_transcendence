import { navigationHandle } from "../../nagivation";
import { getUserData } from "./getUserData";

export function handleProfilePage() {
	getUserData();
	navigationHandle();
}