/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bluePrimary: 'var(--mainBlue)',
        redSecondary: 'var(--secondaryRed)',
        mainGrey: 'var(--textGrey)',
        bgWhite: 'var(--bgWhite)'
      },
      fontSize: {
        h1: ['1.875rem', {
          lineHeight: '2.25rem',
          fontWeight: '600'
        }]
      }
    },
  },
  plugins: [
    plugin(function ({ addBase }) {
      addBase({

      });
    }),
  ],
}

