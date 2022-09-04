/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width: {
        32: "32%",
        47: "47.5%",
        40: "40%",
        80: "80%",
        85: "85%",
        90: "90%",
        95: "95%",
      },
    },
    screens: {
      sm: { max: "800px" },
      md: { max: "1200px" },
    },
  },
  plugins: [],
};
