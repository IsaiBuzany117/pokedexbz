/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dragon: {
          0: "#ff0000",
          200: "#ff5a00",
          400: "#ff9a00",
          600: "#ffce00",
          800: "#ffe808",
        },
        dark: {
          0: '#050505',
          200: '#171917',
          400: '#1e1e1e',
          600: '#383838',
          800: '#6a6767'
        },
        fairy: {
          0: '#CE98FF',
          200: '#7C579E',
          400: '#7C378A',
          600: '#6F699E',
          800: '#523451'
        }
      },
      fontFamily: {
        flexo: ["Flexo"],
      },
    },
  },
  plugins: [],
};
