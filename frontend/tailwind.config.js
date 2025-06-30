const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/js/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        'cuponRed': '#BB4050',
        'cuponBlue': '#4050BB',
        'cuponGrey': '#D9D9D9',
      },
      fontFamily: {
        montserrat: ["Montserrat", 'sans-serif'],
        poppins: ["Poppins", 'sans-serif'],
      },
    },
  },
  plugins: [require("tw-elements/plugin.cjs")],
  darkMode: "class"
});
