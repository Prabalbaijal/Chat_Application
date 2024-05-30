import daisyui from './node_modules/daisyui'
import scrollbar from './node_modules/tailwind-scrollbar'
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [daisyui,scrollbar],
}

