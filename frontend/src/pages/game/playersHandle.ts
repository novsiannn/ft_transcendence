import { store, API_URL } from "../../store/store";

const userPhoto = store.getUser().avatar;
export function getFirstPlayer (){
    return `<div class="flex flex-col items-left gap-4">
            <img id="profileIcon" draggable="false" src="${API_URL + userPhoto}" alt="Profile" class="w-12 h-12 rounded-full cursor-pointer object-cover">
    </div>;`
}