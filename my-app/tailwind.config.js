/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        pacifico: ["Pacifico"],
        playwrite: ["Playwrite GB S"],
        dyna: ["DynaPuff"],
        lexend: ["Lexend Deca"],
      },
    },
  },
  plugins: [],
};
