export const IconLVL = (lvl: number) => {
  return `<div class="relative mr-2">
                    <div class="relative w-6 h-6 ">
                        <div class="absolute inset-0 rounded-full bg-gray-800 flex items-center justify-center ${
                          lvl < 2
                            ? "text-gray-500"
                            : lvl < 4
                            ? "text-green-500"
                            : lvl < 8
                            ? "text-yellow-400"
                            : lvl < 10
                            ? "text-orange-500"
                            : "text-red-600"
                        }
                         font-bold text-[10px]">
                            ${lvl}
                        </div>

                    <svg class="absolute top-0 left-0 w-full h-full" viewBox="0 0 100 100">
                        <path
                        d="
                          M 20,78
                          A 40,40 0 1,1 80,78
                        "
                        stroke='${
                          lvl < 2
                            ? "#6B7280"
                            : lvl < 4
                            ? "#22C55E"
                            : lvl < 8
                            ? "#FACC15"
                            : lvl < 10
                            ? "#F97316"
                            : "#DC2626"
                        }'
                        stroke-width="8"
                        fill="none"
                        stroke-linecap="round"
                        />
                    </svg>
                    </div>
                </div>`;
};
