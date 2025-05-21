import { getModalWindowError} from "../../elements";

export function preGameModal() {
  return `
    <div id="preGameModal" style="background-color: rgba(0, 0, 0, 0.7);" class="fixed inset-0 flex items-center justify-center z-50">
      <div class="bg-white p-6 rounded-lg shadow-lg text-black space-y-2 w-max h-auto text-center">
        <div class="relative inline-block text-left mb-2">
          <button id="gameDropdownButton" data-dropdown-toggle="gameDropdownMenu" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
            Select Game Mode
            <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
            </svg>
          </button>
          <div id="gameDropdownMenu" class="z-10 hidden absolute left-0 mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700">
            <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="gameDropdownButton">
              <li>
                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="relative inline-block text-left">
          <button id="tournamentDropdownButton" data-dropdown-toggle="tournamentDropdownMenu" class="justify-start text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
            Create Tournament 
            <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
            </svg>
          </button>
          <div id="tournamentDropdownMenu" class="z-10 hidden absolute left-0 mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700">
            <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="tournamentDropdownButton">
              <li>
                <button id="fourPlayersGameBtn" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">4 Players</button>
              </li>
              <li>
                <button id="eightPlayersGameBtn" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">8 Players</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  `;
}

export function tournamentModal() {
  return `
    <div id="tournamentModal" style="background-color: rgba(0, 0, 0, 0.7);" class="fixed inset-0 flex items-center justify-center z-50 hidden">
      <div class="bg-white p-6 rounded-lg shadow-lg text-black space-y-2 w-max h-auto text-center">
        <h2 class="text-lg font-semibold">Tournament Created!</h2>
        <div class="relative w-full">
          <button id="avatarSelectBtn" class="w-full flex items-center justify-between border p-2 rounded bg-white">
            <img id="selectedAvatar" src="../../img/tournamentDefault.png" class="w-8 h-8 rounded-full" alt="avatar" />
            <span>Выберите аватар</span>
            <svg class="w-4 h-4 ml-2"></svg>
          </button>
          <div id="avatarDropdown" class="absolute left-0 mt-2 w-full bg-white border rounded shadow-lg hidden z-10">
            <div class="flex flex-col">
              <button class="flex items-center p-2 hover:bg-gray-100" data-avatar="../../img/granny.jpg">
                <img src="../../img/granny.jpg" class="w-8 h-8 rounded-full mr-2" alt="avatar1" /> Аватар 1
              </button>
              <button class="flex items-center p-2 hover:bg-gray-100" data-avatar="../../img/spichka.jpg">
                <img src="../../img/spichka.jpg" class="w-8 h-8 rounded-full mr-2" alt="avatar2" /> Аватар 2
              </button>
              <button class="flex items-center p-2 hover:bg-gray-100" data-avatar="../../img/tyler.jpg">
                <img src="../../img/tyler.jpg" class="w-8 h-8 rounded-full mr-2" alt="avatar2" /> Аватар 2
              </button>
              <!-- Добавь еще аватары -->
            </div>
          </div>
        </div>
        <input type="text" id="playerNickname" placeholder="Enter Players Nickname" class="mt-2 p-2 border border-gray-300 rounded w-full" />
        <button id="submitNicknameBtn" type="submit" class=" mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Submit</button>
        <button id="startTournament" class="hidden mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Start Tournament!</button>
      </div>
      ${getModalWindowError()}
    </div>
  `;
}