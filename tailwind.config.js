/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontSize: {
        f16: "16px",
        f18: "18px",
        f20: "20px",
        f24: "24px",
        f30: "30px",
        f40: "40px",
        f50: "50px",
      },

    },
    colors: {
      "white": "#fff",
      "light-green-text": "#20B15A", 
      "light-green-bg": "#D7F5DC", 
      "black": "#000", 
    }
  },
  plugins: [],
}
