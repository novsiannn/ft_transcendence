export function preGameModal() {
  return `
    <div id="preGameModal" style="background-color: rgba(0, 0, 0, 0.7);" class="fixed inset-0 flex items-center justify-center z-50">
        <div class="bg-white p-6 rounded-lg shadow-lg text-black space-y-4 w-80 text-center">
            <button id="rankedGameBtn" class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
                Рейтинговая игра
            </button>
            <button id="createTournamentBtn" class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
                Создать турнир
            </button>
        </div>
    </div>
  `;
}