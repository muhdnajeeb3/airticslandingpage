/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'banner': "url('https://ad.airtics.org/wp-content/uploads/2023/11/banner.jpg')",
      },
    },
  },
  plugins: [],
}
