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
        'whychoosebg':"url('https://ad.airtics.org/wp-content/uploads/2023/11/banner-bg-min.jpg')",
        'gradient': "radial-gradient(at center center, #111752 61%, #0C0F48 85%)",
        'exitpathway':"url('https://ad.airtics.org/wp-content/uploads/2023/11/exit-pathway-bg.jpg')"
      },
      fontFamily: {
        'alex-brush': ['Alex Brush', 'cursive'],
        /* Add other font families as needed */
      },
    },
  },
  plugins: [],
}
