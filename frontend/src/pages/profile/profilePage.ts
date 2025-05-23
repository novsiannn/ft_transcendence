import { navigation } from "../../elements/navigation";

export function profilePage(mainWrapper: HTMLDivElement | undefined) {
  document.body.classList.add("bg-gray-500");

  mainWrapper!.className = "h-screen w-full flex flex-col items-center";
  let res = `
        ${navigation()}

            <div class="flex items-center justify-center w-full h-full  rounded-2xl text-center">
                <div class="grid grid-cols-8 grid-rows-4 w-2/3 h-2/3 bg-white rounded-3xl">
                    <div class="my-5 col-start-4 col-span-2" id="photoContainer">
                        <img id="profileImg" alt="Profile Photo" class="mx-auto hidden w-36 h-36 rounded-full border-4 border-white object-cover" draggable="false" >
                        <div id="profileImgEmpty" class="text-5xl hidden text-white font-bold mx-auto content-center w-36 h-36 rounded-full cursor-pointer"></div>
                    </div>

                    <div class="flex justify-center items-center col-start-4 col-span-2 ">
                        <h2 class="text-4xl font-bold text-gray-800" id="userNameProfile"></h2>
                    </div>

                    <div class="items-center col-start-2 col-span-6   flex justify-between text-gray-600 text-lg">
                        <div class="w-1/3 ">
                            <p class="text-2xl">0</p>
                            <p data-i18n='profile.level' class="text-sm">Level</p>
                        </div>
                        <div class="w-1/3 ">
                            <p class="text-2xl ">0</p>
                            <p data-i18n='profile.friends' class="text-sm">Friends</p>
                        </div>
                        <div class="w-1/3 ">
                            <p class="text-2xl">0</p>
                            <p data-i18n='profile.playedMatches' class="text-sm">Matches played</p>
                        </div>
                    </div>
                </div>
            </div>
        
    `;

  return res;
}
