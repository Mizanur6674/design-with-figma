/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}", "./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#373F68",
        primary_light: "#647196",
        primary_deep: "#3A4374",
        secondary: "#AD1FEA",
        tertiary: "#4661E6",
        tertiary_light: "#62BCFA",
        white_light: "#F2F4FF",
        white_deep: "#F7F8FD",
        white_gray: "#647196",
        bOrrange: "#F49F85",
        bSky: "#62BCFA",
      },
      fontFamily: {
        jost: ["Jost"],
      },
    },
  },
  plugins: [],
};
