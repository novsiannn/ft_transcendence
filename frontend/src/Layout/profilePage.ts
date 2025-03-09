import { navigation } from "../elements";

export function profilePage(mainWrapper: HTMLDivElement | undefined) {
    // document.body.classList.add(
    //     "h-screen", "flex", "flex-col",
    //     "bg-gradient-to-t", "from-black", "via-black", "to-gray-800",
    //     "overflow-hidden"
    // );
    document.body.classList.add("bg-gradient-to-t", "from-black", "via-black", "to-gray-800", "h-full");
    mainWrapper!.className = "h-screen w-full flex items-center";

    //mx-auto p-6 mt-64 v container dobavit
    let res = `
        ${navigation()}

            <div class="flex items-center justify-center w-full h-full  rounded-2xl text-center">
                <div class="grid grid-cols-8 grid-rows-4 w-2/3 h-2/3  mt-12 bg-white rounded-3xl">
                    <div class="my-5 col-start-4 col-span-2">
                            <img src="img/goat.jpg" alt="Profile Photo" 
                         class="mx-auto w-36 h-36 rounded-full border-4 border-white">
                    </div>

                    <div class="flex justify-center items-center col-start-4 col-span-2 ">
                        <h2 class="text-4xl font-bold text-gray-800">Username</h2>
                    </div>

                    <div class=" flex justify-center items-center col-start-2 col-span-6   flex justify-between text-gray-600 text-lg">
                        <div class="w-1/3 ">
                            <p class="text-2xl">0</p>
                            <p class="text-sm">Level</p>
                        </div>
                        <div class="w-1/3 ">
                            <p class="text-2xl ">0</p>
                            <p class="text-sm">Friends</p>
                        </div>
                        <div class="w-1/3 ">
                            <p class="text-2xl">0</p>
                            <p class="text-sm">Matches played</p>
                        </div>
                    </div>
                </div>
            </div>
        
    `;

    return res;
}
