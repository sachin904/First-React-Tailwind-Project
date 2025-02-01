/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        blue:{
           200:"#5b7695",
           400:"#183f6a",
           500:"#183f6a",
           700:"#002a5a"

          
        },
        green:{
          200: "#3fdfd0",
           700:"#1c778c"
        },
        grey:{
          200:"#c0cad6",
        },
      }
    },
  },
  plugins: [],
}

