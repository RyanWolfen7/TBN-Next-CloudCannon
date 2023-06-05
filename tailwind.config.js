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
        accent: '#7F6085',
        secondary: '#8D6B94',
        main: '#B084A6',
        splash: '#8f5a9a',
        splashTransition: '#b6a6c9',
        tan: '#F7F1ED'
      },
      backgroundImage: {
        tornBottem: "url(/public/effects/tornPaperDown.svg)"
      },
    },
  },
  plugins: [],
}
