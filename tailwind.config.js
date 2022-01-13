module.exports = {
  mode: "jit",
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      sans: ["Bahnschrift"],
    },
  },
  variants: {
    extend: {},
  },
<<<<<<< HEAD
  plugins: [require("@themesberg/flowbite/plugin")],
=======
  plugins: [
    require('@themesberg/flowbite/plugin')
  ],
>>>>>>> 2649f099a2ce6478c02be7285e15e1f7dd7722f2
};
