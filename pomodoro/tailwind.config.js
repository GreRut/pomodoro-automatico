import daisyui from "daisyui"

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      'prim' : '#bb4949',
      'sec' : '#fdf0d5',
      'terc' : '#d3d3d3',
    },
    extend: {},
  },
  plugins: [
    daisyui,
  ],
}

