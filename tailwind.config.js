/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
      serif: ['Merriweather', 'serif'],
      sans: ['Lato', 'sans-serif'],
    },
    animation: {
    float: 'float 6s ease-in-out infinite',
  },
  keyframes: {
    float: {
      '0%, 100%': { transform: 'translateY(0)' },
      '50%': { transform: 'translateY(-10px)' },
    },
  },
    },
  },
  plugins: [],
}

