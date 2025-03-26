export const getModalWindowError = () => {
	return `<div id="modalWindow" class="fixed inset-0 hidden flex justify-center bg-black bg-opacity-50 z-[9999] transition-all duration-500">
                <div class="flex mt-12 flex-col justify-center items-center bg-white w-80 h-52 text-white p-6 rounded-lg shadow-lg opacity-0 transform -translate-y-full transition-all duration-500">
                    <div class="flex justify-center mb-4">
                        <svg class="w-10 h-10 text-red-500" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M12 8v4m0 4h.01M12 2a10 10 0 1010 10A10 10 0 0012 2z" />
                        </svg>
                    </div>
                    <p class="text-black text-center text-sm font-semibold" id="modalErrorText"></p>
                    <button id="closeModal" class=" m-2 w-1/2 bg-green-100 text-black p-1 rounded cursor-pointer
                    outline-transparent" > OK </button>
                </div>
            </div>`
}