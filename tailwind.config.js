/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: { 950: '#0e0d13', 900: '#15131c', 800: '#1d1a26' },
        plum: { 900: '#221b29', 700: '#3a2d42', 400: '#9a85a3' },
      },
    },
  },
  plugins: [],
};
