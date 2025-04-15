import { navigation } from "../../elements/nagivation";

export function playPage() {
    let res = `
                ${navigation()}
                <div class="flex flex-col items-center justify-center min-h-screen bg-gradient-to-t from-black via-black to-gray-800 space-y-8">
                    <button class="px-6 py-3 text-white bg-blue-500 rounded-lg text-xl hover:bg-blue-700 focus:outline-none" id="btn-play">
                        START
                    </button>
                </div>`;
    return res;
}