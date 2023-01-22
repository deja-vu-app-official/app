/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: '#E8C589',
        gold_light: '#EFD6AC',
        background: '#16171A',
        backgroundLight: '#2A2C30',
        secondary: '#AE89CE',
        secondaryLight: '#AE89CE',
        white: '#FFF',
        black: 'black',
      },
      fontFamily: {
        caviar: ['CaviarDreams'],
        inter: ['Inter'],
        interBold: ['Inter-Bold'],
      },
      aspectRatio: {
        picture: '4 / 3',
        portrait: '2 / 3',
      },
    },
  },
  plugins: [],
}
