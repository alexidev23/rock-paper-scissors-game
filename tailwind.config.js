/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        DarkText: 'hsl(229, 25%, 31%)',
        ScoreText: 'hsl(229, 64%, 46%)',
        HeaderOutline: 'hsl(217, 16%, 45%)'
      },
      boxShadow: {
        paper: '1px 6px 1px rgba(48, 67, 163, 0.9)',
        rock: '1px 6px 1px rgba(151, 32, 54, 0.9)',
        scissors: '1px 6px 1px rgba(168, 113, 11, 0.9)'
      }
    }
  },
  plugins: []
}
