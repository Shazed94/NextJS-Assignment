/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // bg: "white",
        // textColor: "black",
        // softBg: "#f0f0f0",
        // softTextColor: "#626262"
      },
    },
    screens: {
      'sm': { 'min': '480px', 'max': '767px' },
      // => @media (min-width: 640px) { ... }

      'md': { 'min': '768px' },
      // => @media (min-width: 768px) { ... }

      'lg': { 'min': '1024px' },
      // => @media (min-width: 1024px) { ... }

      'xl': { 'min': '1280px' },
      // => @media (min-width: 1280px ) { ... }

      '2xl': { 'min': '1536px' },
      // => @media (min-width: 1536px) { ... }
    },
    container: {
      center: true,
    },
  },
  plugins: [],
})
