/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        "custom-bg-black": "#070b0d",
        "navbar-grey": "#41494f",
        "border-red": "#40080a",
        "dark-red": "#a41715",
        "highlight-red": "#db2d28"
      },
      borderWidth: {
        "1": "1px",
        "2": "2px"
      },
      animation: {
        typing: 'typing 3s steps(30, end) infinite, blink .75s step-end infinite'
      },
      keyframes: {
        typing: {
          '0%': { width: '0' },
          '100%': { width: '100%' }
        },
        blink: {
          '0%': { borderColor: 'transparent' },
          '100%': { borderColor: 'transparent' }
        }
      },
    },
  },
  plugins: [],
}

