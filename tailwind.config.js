module.exports = {
  mode: "jit",
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        zinc: "#18181b",
        maroon: "#861f41",
      },
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
