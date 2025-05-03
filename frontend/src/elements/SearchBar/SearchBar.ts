import i18next from "i18next";

export const SearchBar = (placeholderKey: string = 'TRANSLATION UNKNOWN', id: string) => {
  const placeholderText = i18next.t(placeholderKey);

	console.log(placeholderKey);
	
  return `<div class="m-4">
  			<div class="relative">
    			<input
      				id=${id}
      				type="text"
					placeholder='${placeholderText}'
      				class="w-full pl-10 pr-4 py-2 bg-white text-sm text-gray-700 placeholder-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300"
    			/>
    			<div class="absolute left-3 top-2.5 text-gray-400 pointer-events-none">
      			<svg
        			xmlns="http://www.w3.org/2000/svg"
        			class="h-4 w-4"
        			fill="none"
        			viewBox="0 0 24 24"
        			stroke="currentColor"
        			stroke-width="2"
      			>
        			<path
          				stroke-linecap="round"
          				stroke-linejoin="round"
          				d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"
        			/>
      			</svg>
    		</div>
  		</div>
	</div>`;
};
