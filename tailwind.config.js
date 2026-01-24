/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'eve-black': '#050505',
        'eve-gray': '#121212',
        'eve-gold': '#c4a000',
        'eve-blue': '#0080ff',
      },
      fontFamily: {
        'mono': ['JetBrains Mono', 'monospace'],
        'sans': ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
