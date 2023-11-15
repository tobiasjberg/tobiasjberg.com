/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'offwhite': '#f2f2f2',
      'electric': '#99D959',
      'charcoal': '#1E1E1E',
      'darkText': '#27272A'
    },
  },
  plugins: [],
}

