/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'black-blue': '#243c5a',
        'cream-bg': "#DFD0B8",
        'pant': "#948979",
        'btn-bg': "#3C5B6F",
        'new-bg': "#153448"
      },
    },
  },
  plugins: [],
}

