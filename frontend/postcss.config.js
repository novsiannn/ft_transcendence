module.exports = {
  plugins: [
    require('@tailwindcss/postcss')({
      content: ['./src/**/*.{html,js,ts,jsx,tsx}', './public/index.html'],
      safelist: [
        'bottom-0',
        'bottom-5',
        'bottom-10',
        'left-1/2',
        'transform',
        '-translate-x-1/2',
        'animate-typing',
        'overflow-hidden',
        'whitespace-nowrap',
        'border-r-4',
        'border-r-white',
        'pr-5',
        'text-5xl',
        'text-white',
        'font-bold'
      ],
      plugins: [],
    }),
    require('autoprefixer'),
  ],
};