const withMT = require("@material-tailwind/react/utils/withMT");
/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      // Configure your color palette here
      primary: {
        50: "#eceff1",
        100: "#cfd8dc",
        200: "#b0bec5",
        300: "#90a4ae",
        400: "#78909c",
        500: "#607d8b",
        600: "#546e7a",
        700: "#455a64",
        800: "#37474f",
        900: "#263238",
      },
    },
    extend: {},
  },
  plugins: [],
});
