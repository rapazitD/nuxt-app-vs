/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    fontFamily: {
      primary: ['Rubik'],
    },
    extend: {
      colors: {
        'green': '#0BD88F',
        'lightGray': '#F3F5FF'
      },
      screens: {
        'xl': '1440px',
      },
    },
  },
  plugins: [],
}
