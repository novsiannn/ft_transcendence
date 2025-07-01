export const getModalInput = () => {
  return `<div id="modalWindowInput" class="fixed inset-0 hidden flex justify-center transition-all duration-500 font-sans">
              <div class="flex flex-col mt-10 justify-center items-center bg-white border border-black w-1/4 h-1/5 text-white rounded-lg transform -translate-y-full transition-all duration-500">
                  <p class="text-black text-center text-xs font-semibold" id="modalInputHeader" ></p>
				          <input type="password" placeholder="..." class="p-1 m-2 border text-black" id="modalInput"></input>
                  <p id="warningMessageModalInput" class="invisible text-red-500 text-sm"></p>
				          <button id="modalInputBtn" data-i18n='buttons.send' class="cursor-pointer hover:bg-green-600 p-1 m-2 w-22 h-8 bg-green-500 border rounded text-white">Send<button/>
              </div>
          </div>`;
};
