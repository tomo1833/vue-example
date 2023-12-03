/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        '2-no-rep': '150px 1fr',
        // Simple 16 column grid
        '24': 'repeat(24, minmax(0, 1fr))',
      }
    },
  },
  plugins: [],
}

