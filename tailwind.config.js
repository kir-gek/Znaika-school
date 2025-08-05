/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        great: ['"Great Vibes"', "cursive"],
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out",
        "gradient-flow": "gradient-flow 3s ease infinite",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        "gradient-flow": {
          "0%": { "background-position": "0% 50%" },
          "50%": { "background-position": "100% 50%" },
          "100%": { "background-position": "0% 50%" },
        },
      },
    },
  },
  plugins: [],
};
