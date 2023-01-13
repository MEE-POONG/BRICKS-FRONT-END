/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#f7594f",
      },
      fontFamily: {
        'Th': ['ChakraPetch', 'system-ui'],
      },
    },
  },
  plugins: [],
};
