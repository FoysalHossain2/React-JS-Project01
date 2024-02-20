/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container:{
      center: true,
    },
    extend: {
      fontFamily:{
        DM_Sans:"var(--DM__Sans)",
      },
      colors:{
        bg_Primary_color: "var(--bg_Primary_color)",
        bg_Secondary_color: "var(--bg_Secondary_color)",
        main_text_color: "var(--main_text_color)",
        secondary_text_color: "var(--secondary_text_color)",
      },
    },
  },
  plugins: [],
}

