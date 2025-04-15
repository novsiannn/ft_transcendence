export const getModalTwoFactor = () => {
  return `<div id="modalWindowTwoFactor" class="fixed inset-0 hidden flex justify-center bg-black bg-opacity-50 z-[9999] transition-all duration-500">
                <div class="flex flex-col mt-10 justify-center items-center bg-white w-1/3 h-1/2 text-white rounded-lg shadow-lg opacity-0 transform -translate-y-full transition-all duration-500">
                        <p class="text-black">Your QR-Code</p>
                        <img id="modalQrCode" class="w-48 h-48 m-2"></img>
                        <p id="secretPhrase" class="text-black"></p>
                        <input id="codeForTwoFactor" placeholder="enter your code" class="p-1 m-2 border text-black"></input>
                        <p id="warningMessage" class="hidden text-red-500 text-sm">test</p>
                        <button id="modalTwoFactorActivateBtn" class="p-1 m-2 bg-green-500 border rounded text-white "> Send </button>
                </div>
            </div>`;
};
