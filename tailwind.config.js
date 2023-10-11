/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bluePrimary: '#0029FF',
        redSecondary: '#FF007A'
      }
    },
  },
  plugins: [],
}

