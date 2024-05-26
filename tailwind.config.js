/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        camoflage: "url('src/assets/camo.jpg')",
      },
    },
  },
  plugins: [],
};
