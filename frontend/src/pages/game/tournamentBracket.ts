export function tournamentBracket() {
  return `
  <div id="tournamentBracket"class="hidden min-h-screen bg-gray-800 text-white flex items-center justify-center p-6">
  <div class="flex flex-col items-center space-y-6">
    <!-- Champion -->
    <div class="bg-yellow-400 text-gray-800 font-bold px-4 py-2 rounded shadow-lg">
      CHAMPION
    </div>

    <!-- Final -->
    <div class="flex space-x-12">
      <div class="bg-gray-700 border border-white px-4 py-2 rounded shadow-md">Seed 1</div>
      <div class="bg-gray-700 border border-white px-4 py-2 rounded shadow-md">Seed 6</div>
    </div>

    <!-- Semifinals -->
    <div class="flex space-x-48">
      <div class="flex flex-col space-y-4">
        <div class="bg-gray-700 border border-white px-4 py-2 rounded shadow-md">Seed 1</div>
        <div class="bg-gray-700 border border-white px-4 py-2 rounded shadow-md">Seed 4</div>
      </div>
      <div class="flex flex-col space-y-4">
        <div class="bg-gray-700 border border-white px-4 py-2 rounded shadow-md">Seed 6</div>
        <div class="bg-gray-700 border border-white px-4 py-2 rounded shadow-md">Seed 2</div>
      </div>
    </div>

    <!-- Quarterfinals -->
    <div class="flex space-x-48">
      <div class="flex flex-col space-y-4">
        <div class="bg-gray-700 border border-white px-4 py-2 rounded shadow-md">Seed 1</div>
        <div class="bg-gray-700 border border-white px-4 py-2 rounded shadow-md">Seed 8</div>
        <div class="bg-gray-700 border border-white px-4 py-2 rounded shadow-md">Seed 4</div>
        <div class="bg-gray-700 border border-white px-4 py-2 rounded shadow-md">Seed 5</div>
      </div>
      <div class="flex flex-col space-y-4">
        <div class="bg-gray-700 border border-white px-4 py-2 rounded shadow-md">Seed 3</div>
        <div class="bg-gray-700 border border-white px-4 py-2 rounded shadow-md">Seed 6</div>
        <div class="bg-gray-700 border border-white px-4 py-2 rounded shadow-md">Seed 2</div>
        <div class="bg-gray-700 border border-white px-4 py-2 rounded shadow-md">Seed 7</div>
      </div>
    </div>
  </div>
</div>
    `;
}