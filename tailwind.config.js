/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'banner': "url('https://ad.airtics.org/wp-content/uploads/2023/11/banner.jpg')",
        'footerbg': "url('https://ad.airtics.org/wp-content/uploads/2023/11/line-bg.jpg')",
        'whychoosebg':"url('https://ad.airtics.org/wp-content/uploads/2023/11/banner-bg-min.jpg')"
      },
    },
  },
  plugins: [],
}
