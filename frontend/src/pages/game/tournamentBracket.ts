export function tournamentBracketEightPlayers() {
  return `
 <div class="min-h-screen bg-gray-700 text-white p-8 flex justify-center items-center">
  <div class="flex gap-16 items-center">
    
    <!-- Четвертьфинал -->
    <div class="flex flex-col items-center gap-5">
      <div class="font-bold text-lg text-yellow-400 mb-3">Четвертьфинал</div>
      <div class="flex flex-col gap-10">
        <!-- Матч 1 -->
        <div class="relative">
          <div class="flex flex-col">
            <div class="bg-gray-800 border border-white px-6 py-3 rounded shadow-md min-w-[120px] text-center">Seed 1</div>
            <div class="bg-gray-800 border border-white px-6 py-3 rounded shadow-md min-w-[120px] text-center">Seed 8</div>
          </div>
          <!-- Горизонтальная линия -->
          <div class="absolute -right-8 top-1/2 w-8 h-0.5 bg-white transform -translate-y-0.5"></div>
        </div>
        
        <!-- Матч 2 -->
        <div class="relative">
          <div class="flex flex-col">
            <div class="bg-green-600 border border-green-400 px-6 py-3 rounded shadow-md min-w-[120px] text-center">Seed 4</div>
            <div class="bg-gray-800 border border-white px-6 py-3 rounded shadow-md min-w-[120px] text-center">Seed 5</div>
          </div>
          <div class="absolute -right-8 top-1/2 w-8 h-0.5 bg-white transform -translate-y-0.5"></div>
        </div>
        
        <!-- Матч 3 -->
        <div class="relative">
          <div class="flex flex-col">
            <div class="bg-gray-800 border border-white px-6 py-3 rounded shadow-md min-w-[120px] text-center">Seed 3</div>
            <div class="bg-green-600 border border-green-400 px-6 py-3 rounded shadow-md min-w-[120px] text-center">Seed 6</div>
          </div>
          <div class="absolute -right-8 top-1/2 w-8 h-0.5 bg-white transform -translate-y-0.5"></div>
        </div>
        
        <!-- Матч 4 -->
        <div class="relative">
          <div class="flex flex-col">
            <div class="bg-green-600 border border-green-400 px-6 py-3 rounded shadow-md min-w-[120px] text-center">Seed 2</div>
            <div class="bg-gray-800 border border-white px-6 py-3 rounded shadow-md min-w-[120px] text-center">Seed 7</div>
          </div>
          <div class="absolute -right-8 top-1/2 w-8 h-0.5 bg-white transform -translate-y-0.5"></div>
        </div>
      </div>
      <!-- Вертикальная соединительная линия -->
      <div class="absolute w-0.5 h-full bg-white right-0 top-0 transform translate-x-8"></div>
    </div>

    <!-- Полуфинал -->
    <div class="flex flex-col items-center gap-5">
      <div class="font-bold text-lg text-yellow-400 mb-3">Полуфинал</div>
      <div class="flex flex-col gap-20">
        <!-- Матч 1 -->
        <div class="relative">
          <div class="flex flex-col">
            <div class="bg-green-600 border border-green-400 px-6 py-3 rounded shadow-md min-w-[120px] text-center">Seed 1</div>
            <div class="bg-gray-800 border border-white px-6 py-3 rounded shadow-md min-w-[120px] text-center">Seed 4</div>
          </div>
          <div class="absolute -right-8 top-1/2 w-8 h-0.5 bg-white transform -translate-y-0.5"></div>
        </div>
        
        <!-- Матч 2 -->
        <div class="relative">
          <div class="flex flex-col">
            <div class="bg-green-600 border border-green-400 px-6 py-3 rounded shadow-md min-w-[120px] text-center">Seed 6</div>
            <div class="bg-gray-800 border border-white px-6 py-3 rounded shadow-md min-w-[120px] text-center">Seed 2</div>
          </div>
          <div class="absolute -right-8 top-1/2 w-8 h-0.5 bg-white transform -translate-y-0.5"></div>
        </div>
      </div>
    </div>

    <!-- Финал -->
    <div class="flex flex-col items-center gap-5">
      <div class="font-bold text-lg text-yellow-400 mb-3">Финал</div>
      <div class="flex flex-col gap-10">
        <div class="relative">
          <div class="flex flex-col">
            <div class="bg-green-600 border border-green-400 px-6 py-3 rounded shadow-md min-w-[120px] text-center">Seed 1</div>
            <div class="bg-gray-800 border border-white px-6 py-3 rounded shadow-md min-w-[120px] text-center">Seed 6</div>
          </div>
          <div class="absolute -right-8 top-1/2 w-8 h-0.5 bg-white transform -translate-y-0.5"></div>
        </div>
      </div>
    </div>

    <!-- Чемпион -->
    <div class="flex flex-col items-center gap-5">
      <div class="font-bold text-lg text-yellow-400 mb-3">Чемпион</div>
      <div class="bg-yellow-400 text-black font-bold px-8 py-4 rounded-lg shadow-lg text-xl">
        🏆 Seed 1
      </div>
    </div>

  </div>
</div>

    `;
}

export function tournamentBracketFourPlayers() {
  return `
 <div class="min-h-screen bg-gray-700 text-white p-8 justify-center items-center hidden">
  <div class="flex gap-16 items-center">
    <!-- Полуфинал -->
    <div class="flex flex-col items-center gap-5">
      <div class="font-bold text-lg text-yellow-400 mb-3">Полуфинал</div>
      <div class="flex flex-col gap-20">
        <!-- Матч 1 -->
        <div class="relative">
          <div class="flex flex-col">
            <div class="bg-green-600 border border-green-400 px-6 py-3 rounded shadow-md min-w-[120px] text-center">Seed 1</div>
            <div class="bg-gray-800 border border-white px-6 py-3 rounded shadow-md min-w-[120px] text-center">Seed 4</div>
          </div>
          <div class="absolute -right-8 top-1/2 w-8 h-0.5 bg-white transform -translate-y-0.5"></div>
        </div>
        
        <!-- Матч 2 -->
        <div class="relative">
          <div class="flex flex-col">
            <div class="bg-green-600 border border-green-400 px-6 py-3 rounded shadow-md min-w-[120px] text-center">Seed 6</div>
            <div class="bg-gray-800 border border-white px-6 py-3 rounded shadow-md min-w-[120px] text-center">Seed 2</div>
          </div>
          <div class="absolute -right-8 top-1/2 w-8 h-0.5 bg-white transform -translate-y-0.5"></div>
        </div>
      </div>
    </div>

    <!-- Финал -->
    <div class="flex flex-col items-center gap-5">
      <div class="font-bold text-lg text-yellow-400 mb-3">Финал</div>
      <div class="flex flex-col gap-10">
        <div class="relative">
          <div class="flex flex-col">
            <div class="bg-green-600 border border-green-400 px-6 py-3 rounded shadow-md min-w-[120px] text-center">Seed 1</div>
            <div class="bg-gray-800 border border-white px-6 py-3 rounded shadow-md min-w-[120px] text-center">Seed 6</div>
          </div>
          <div class="absolute -right-8 top-1/2 w-8 h-0.5 bg-white transform -translate-y-0.5"></div>
        </div>
      </div>
    </div>

    <!-- Чемпион -->
    <div class="flex flex-col items-center gap-5">
      <div class="font-bold text-lg text-yellow-400 mb-3">Чемпион</div>
      <div class="bg-yellow-400 text-black font-bold px-8 py-4 rounded-lg shadow-lg text-xl">
        🏆 Seed 1
      </div>
    </div>

  </div>
</div>

    `;
}