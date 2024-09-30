/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height:{
        '192': '48rem',
        '168':'42rem',
        '144':'36rem',
        '128':'32rem',
        '112': '28rem',
      },
      width:{
        '192':'48rem',
        '128':'32rem',
        '168':'42rem',
      },
      maxHeight:{
        '168':'42rem',
        '144':'36rem',
        '128':'32rem',
      }
    },
  },
  plugins: [],
}