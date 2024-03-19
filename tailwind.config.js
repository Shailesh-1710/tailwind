/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        navyBlue: "#05445E",
        lightblue: "#189AB4",
        bluegreen: "#75E6DA",
        babyblue: "#D4F1F4",
      },
    },
  },
  plugins: [],
};
