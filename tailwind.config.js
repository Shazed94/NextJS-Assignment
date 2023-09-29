/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
    fontSize: {
      f14: "14px",
      f16: "16px",
      f18: "18px",
      f20: "20px",
      f24: "24px",
      f30: "30px",
      f40: "40px",
      f50: "50px",
    },
    colors: {
      "white": "#fff",
      "light-green-text": "#20B15A",
      "light-green-bg": "#D7F5DC",
      "light-green-200-bg": "#F8F9FC",
      "purple": "#1E1F4B",
      "light-gray": "#8B8B8B",
      "light-gray/900": "#101A29",
      "9d9d9d": "#9d9d9d",
      "orange": "#F55F1D",
      "black": "#000",
    }
  },
  plugins: [],
}
