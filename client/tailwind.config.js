/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        font1: ['"Font 1"', 'Arial', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        'sf-pro-rounded': ['SF Pro Rounded', 'sans-serif'],
        uber: ['"UberMoveText"', 'system-ui', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif']
      },
      colors: {
        border: {
          50: "#EBEDF2",
          100: "#D8DADC"
        },
        text_Black: {
          50: "#343A40",
          75: "#060606",
          100: "#455154"

        },
        text_gray: {
          50: "#c9c9c8",
          75: "#F7F7F7",
          100: "#979797"
        },
        text_blue: {
          50: "#007BFF",
          100: "#198AE3",
          200:"#060606",
          500: "#1A2A5A"
        }
      }
    },
  },
  plugins: [],
}
