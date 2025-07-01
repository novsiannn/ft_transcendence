export const getModalTwoFactor = () => {
  return `<div id="modalWindowTwoFactor" class="fixed inset-0 hidden flex justify-center z-[9999] backdrop-brightness-25 transition-all duration-500">
                <div class="flex flex-col mt-10 justify-center items-center bg-white w-1/3 h-1/2 text-white rounded-lg shadow-lg opacity-0 transform -translate-y-full transition-all duration-500">
                        <p class="text-black" data-i18n='settings.yourQRCode'></p>
                        <img id="modalQrCode" class="w-48 h-48 m-2"></img>
                        <p id="secretPhrase" class="text-black"></p>
                        <input id="codeForTwoFactor" placeholder="..." class="p-1 m-2 border text-black"></input>
                        <p id="warningMessage" data-i18n='settings.incorrectCode' class="invisible text-red-500 text-sm"></p>
                        <button id="modalTwoFactorActivateBtn" data-i18n='buttons.send' class="w-24 h-8 p-1 m-2 bg-green-500 border rounded text-white "></button>
                </div>
            </div>`;
};
