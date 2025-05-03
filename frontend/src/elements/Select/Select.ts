export const Select = () => {
	return `
    <div class="relative mb-4 ml-4 mr-4">
      <select
        class="w-full appearance-none bg-white text-sm text-gray-400 px-4 py-2 rounded-md focus:outline-none cursor-pointer"
      >
        <option disabled selected>Start a new chat</option>
      </select>
      <div class="pointer-events-none absolute right-3 top-2.5 text-gray-400">
        <!-- Down arrow icon -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>`;
}