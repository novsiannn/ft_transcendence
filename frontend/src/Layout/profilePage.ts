import { navigation } from "../elements";

export function profilePage(mainWrapper: HTMLDivElement | undefined) {
    document.body.classList.add(
        "h-screen", "flex", "flex-col",
        "bg-gradient-to-t", "from-black", "via-black", "to-gray-800",
        "overflow-hidden"
    );

//mx-auto p-6 mt-64 v container dobavit
    let res = `
        ${navigation()}

    
        <div class="h-full w-full rounded-lg shadow-lg my-auto flex justify-center items-center">
            <div class="w-5/6 h-96 bg-white p-10 rounded-2xl shadow-lg text-center relative">
        
                <div class="absolute -top-20 left-1/2 transform -translate-x-1/2">
                    <img src="img/goat.jpg" alt="Profile Photo" 
                         class="w-36 h-36 rounded-full border-4 border-white shadow-md">
                </div>

                <div class="mt-28">
                    <h2 class="text-4xl font-bold text-gray-800">Username</h2>

                    <div class="mt-8 flex justify-between text-gray-600 text-lg">
                        <div class="w-1/3">
                            <p class="text-2xl font-semibold">0</p>
                            <p class="text-sm">Level</p>
                        </div>
                        <div class="w-1/3">
                            <p class="text-2xl font-semibold">0</p>
                            <p class="text-sm">Friends</p>
                        </div>
                        <div class="w-1/3">
                            <p class="text-2xl font-semibold">0</p>
                            <p class="text-sm">Matches played</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

    return res;
}
