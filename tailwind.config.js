module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        zinc: "#18181b",
        maroon: "#861f41",
        "regal-blue": "#243c5a",
      },
    },
    fontFamily: {
      sans: ["Bahnschrift"],
    },
  },
  plugins: [require("@themesberg/flowbite/plugin")],
};
