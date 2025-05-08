// import { store, API_URL } from "../../store/store";
// import { getColorFromUsername } from "../../shared/randomColors";

// const userPhoto = store.getUser().avatar;
//   const color = getColorFromUsername(store.getUser().username);
//   const firstLetterOfUser = store.getUser().username.charAt(0).toUpperCase();
// export function getFirstPlayer (){
//     return `<div class="relative inline-block">
//           							${
//                           userPhoto
//                             ? `<img id="profileImg" class="rounded-full object-cover w-48 h-48 cursor-pointer" draggable="false" alt="Profile Image">`
//                             : `<div id="profileImg" class="text-5xl text-white font-bold flex justify-center items-center w-48 h-48 ${color} rounded-full cursor-pointer select-none">${firstLetterOfUser}</div>`
//                         }
//           							<div id="imgDropdownMenu" class="hidden absolute top-full mt-2 left-1/2 -translate-x-1/2 z-10 w-52 bg-white rounded-lg shadow-lg border border-gray-300">
//             							<button id="changePhotoBtn" class="w-full text-center px-4 py-2 hover:bg-gray-100 text-xs">Change photo</button>
//             							<hr>
//             							<input type="file" accept="image/*" id="uploadImgInput" hidden class="text-xs w-full px-4 py-1 text-gray-700" />
//             							<button id="deletePhotoBtn" class="w-full text-center px-4 py-2 hover:bg-gray-100 text-xs border-t">Delete photo</button>
//           							</div>
//         						</div>`
// }