/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sora: "Sora",
      },
      colors: {
        primaryColor: '#9538E2',
        secondaryColor: '#09080F'
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

