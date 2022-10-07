/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/index.html', './src/**/*.{html,js}'],
  theme: {
    extend: {
      backgroundImage: {
        'sanFrancisco': "url('./public/img/sanFrancisco.jpeg",
        'sanFranciscoDesktop': "url('./public/img/sanFranciscoDesktop.jpeg')",
        'yosemite': "url('./public/img/yosemite.jpeg')",
        'LA': "url('./public/img/LA.jpeg')",
        'seattle': "url('./public/img/seattle.jpeg')",
        'new_york': "url('./public/img/new_york.jpeg')",
        'norway': "url('./img/norway.jpeg')",
        'sydney': "url('./public/img/sydney.jpeg')",
        'miami': "url('./public/img/miami.jpeg')",
        'switzerland': "url('./public/img/switzerland.jpeg')",
        'bali': "url('./public/img/bali.jpeg')",
        'chicago': "url('./public/img/chicago.jpeg')",
        'europe': "url('./public/img/europe.jpeg')",
        'iceland': "url('./public/img/iceland.jpeg')",
      },
      backgroundColor: theme =>({
      ...theme('colors'),
        'primary': '#CC2D4A',
        'secondary': '#8FA206',
        'tertiary': '#61AEC9',
        }),
      textColor:{
      'primary': '#CC2D4A',
      'secondary': '#8FA206',
      'tertiary': '#61AEC9',
   },
   fontFamily: {
    Montserrat:['Montserrat', 'sans-serif']
   },
    },
  },
  variants: {
		width: ["responsive", "hover", "focus"],
		extend: {
	 },
  },
  plugins: [],
}
