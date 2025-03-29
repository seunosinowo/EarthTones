/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      sm: '340px',
      md: "540px",
      lg: "760px",
    },
    container: {
      center: true,
      padding: {
        default: "12px",
        md: "32px",
      },
      fontFamily: {
        lobster: ['Lobster', 'cursive']
      }
    }
  },
  plugins: [],
}