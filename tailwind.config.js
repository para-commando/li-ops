/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    
    extend: {
      colors: {
        camo_match: '#242424',
      },
      backgroundImage: {
        camoflage: "url('src/assets/camo.jpg')",
      },
    },
  },
  plugins: [],
};
