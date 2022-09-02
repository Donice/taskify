/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width: {
        32: "32%",
        95: "95%",
      },
    },
    screens: {
      md: { max: "800px" },
    },
  },
  plugins: [],
};
