module.exports = {
  mode: "jit",
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        'regal-blue': '#243c5a',
        'zinc' :'#18191c'
      }
    },
    fontFamily: {
      sans: ["Bahnschrift"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@themesberg/flowbite/plugin")],
};
