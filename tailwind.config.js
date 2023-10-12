import plugin from "tailwindcss/plugin";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      screens: {
        "2xl": "1250px",
      },
    },
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        bluePrimary: "var(--mainBlue)",
        redSecondary: "var(--secondaryRed)",
        mainGrey: "var(--textGrey)",
        bgWhite: "var(--bgWhite)",
      },
      boxShadow: {
        bsRound: '5px 5px 0 3px var(--mainBlue)',
        bsRound2: '16px 16px 8px -5px rgba(0, 0, 0, 0.3)',
      },
      fontSize: {
        h1: [
          "1.875rem",
          {
            lineHeight: "2.25rem",
            fontWeight: "600",
          },
        ],
      },
    },
  },
  plugins: [
    plugin(function ({ addBase }) {
      addBase({});
    }),
  ],
};
