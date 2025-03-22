export function activateAccountPage() {
  document.body.style.margin = "0";
  document.body.style.padding = "0";
  document.body.classList.add(
    "bg-gradient-to-t",
    "from-black",
    "via-black",
    "to-gray-800"
  );
  
  return `
        <div class="flex flex-col items-center justify-center min-h-screen ">
                    <div class=" p-10 text-black bg-white rounded-lg text-xl focus:outline-none text-center">
                        <h1 class="font-bold p-3">We've sent a confirmation email</h1> 
                        <h3 >Please check your inbox and verify your account</h3>
                    </div>
                </div>
		`;
}
