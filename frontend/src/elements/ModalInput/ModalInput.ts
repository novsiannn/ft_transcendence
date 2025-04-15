export const getModalInput = () => {
  return `<div id="modalWindowInput" class="fixed inset-0 hidden flex justify-center bg-black bg-opacity-50 z-[9999] transition-all duration-500">
              <div class="flex flex-col mt-10 justify-center items-center bg-white w-1/4 h-1/5 text-white rounded-lg shadow-lg opacity-0 transform -translate-y-full transition-all duration-500">
                  <p class="text-black text-center text-xs font-semibold" id="modalInputHeader" ></p>
				  <input placeholder="Your code" class="p-1 m-2 border text-black" id="modalInput"></input>
          <p id="warningMessageModalInput" class="hidden text-red-500 text-sm"></p>
				  <button id="modalInputBtn" class="p-1 m-2 bg-green-500 border rounded text-white">Send<button/>
              </div>
          </div>`;
};