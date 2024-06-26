/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        'poppins':'Poppins'
      },
      colors:{
        'primary':'#3F51B5',
        'brand-col':'#e24481'
      }
    },
  },
  plugins: [],
}

