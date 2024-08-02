/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage : {
        'hero-img' : "url('./src/assets/bg.jpg')",
        'hero-img2' : "url('./src/assets/bg-2.jpg')",
        'hero-img3' : "url('./src/assets/bg-3.jpeg')",
      }
    },
  },
  plugins: [],
}

