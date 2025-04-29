export const getModalWindowSuccess = () => {
  return `<div id="modalWindowSucess" class="fixed inset-0 hidden flex justify-center transition-all duration-500">
              <div class="flex mt-12 flex-col justify-center items-center bg-white w-60 h-24 text-white p-6 rounded-lg shadow-lg opacity-0 transform -translate-y-full transition-all duration-500">
                  <div class="flex justify-center mt-4">
                      <svg class="w-8 h-8 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
                          <path d="M20 6L9 17l-5-5" />
                      </svg>
                  </div>
                  <p class="text-black text-center text-xs font-semibold mb-4" id="successMessage"></p>
              </div>
          </div>`;
};