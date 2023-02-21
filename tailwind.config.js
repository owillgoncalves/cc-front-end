/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#161616",
        "primary-light": "#676767",
        "primary-lighter": "#B5B5B5",
        secondary: "#F5F5F5",
        "secondary-dark": "#F3F3F3",
        accent: "#FFED4F",
        "light-blue": "#B8F6F5",
      },
    },
  },
  plugins: [],
}
