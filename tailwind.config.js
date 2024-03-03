/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      animation: {
        expand: "expand 0.25s ease-in-out forwards",
      },
      keyframes: {
        expand: {
          "0%, 100%": {
            transform: "scale(1)",
          },
          "50%": {
            transform: "scale(1.05)",
          }
        }
      }
    },
  },
  plugins: [],
}

