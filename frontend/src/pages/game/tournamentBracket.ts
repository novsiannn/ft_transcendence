export function tournamentBracket() {
  return `
  <div class="min-h-screen bg-gray-700 text-white p-8 flex justify-center items-start">
  <div class="flex flex-col items-center space-y-12">
    
    <!-- Чемпион -->
    <div class="bg-yellow-400 text-black font-bold px-4 py-2 rounded-lg shadow-lg">
      🏆 CHAMPION
    </div>

    <!-- Финал -->
    <div class="flex space-x-32">
      <div class="bg-gray-800 border border-white px-6 py-2 rounded shadow-md">Seed 1</div>
      <div class="bg-gray-800 border border-white px-6 py-2 rounded shadow-md">Seed 6</div>
    </div>

    <!-- Полуфинал -->
    <div class="flex space-x-64">
      <div class="flex flex-col space-y-6">
        <div class="bg-gray-800 border border-white px-6 py-2 rounded shadow-md">Seed 1</div>
        <div class="bg-gray-800 border border-white px-6 py-2 rounded shadow-md">Seed 4</div>
      </div>
      <div class="flex flex-col space-y-6">
        <div class="bg-gray-800 border border-white px-6 py-2 rounded shadow-md">Seed 6</div>
        <div class="bg-gray-800 border border-white px-6 py-2 rounded shadow-md">Seed 2</div>
      </div>
    </div>

    <!-- Четвертьфинал -->
    <div class="flex space-x-64">
      <div class="flex flex-col space-y-4">
        <div class="bg-gray-800 border border-white px-6 py-2 rounded shadow-md">Seed 1</div>
        <div class="bg-gray-800 border border-white px-6 py-2 rounded shadow-md">Seed 8</div>
        <div class="bg-gray-800 border border-white px-6 py-2 rounded shadow-md">Seed 4</div>
        <div class="bg-gray-800 border border-white px-6 py-2 rounded shadow-md">Seed 5</div>
      </div>
      <div class="flex flex-col space-y-4">
        <div class="bg-gray-800 border border-white px-6 py-2 rounded shadow-md">Seed 3</div>
        <div class="bg-gray-800 border border-white px-6 py-2 rounded shadow-md">Seed 6</div>
        <div class="bg-gray-800 border border-white px-6 py-2 rounded shadow-md">Seed 2</div>
        <div class="bg-gray-800 border border-white px-6 py-2 rounded shadow-md">Seed 7</div>
      </div>
    </div>
  </div>
</div>

    `;
}