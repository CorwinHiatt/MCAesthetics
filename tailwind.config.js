/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4f46e5', // Your brand color
        'primary-dark': '#4338ca', // A darker shade for hover states
        pink: {
          500: '#ec4899', // Explicitly defining pink-500 to ensure it works
        },
      },
    },
  },
  plugins: [],
}
