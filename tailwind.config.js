/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'custom-color1': '#FEFAEB',
        'custom-color2': '#FEF3C7',
        'custom-color3':'#0F172A',
        'custom-text-color': '#78350f',
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
      },
      boxShadow: {
        'light-xxl': '0 0 15px rgba(255, 255, 255, 0.07)',
        'light-xxl-blur': '0 0 50px -12px rgba(255, 255, 255, 0.25)',
        'light-xxl-blur-spread': '0 25px 50px -12px rgba(255, 255, 255, 0.25)',
        'dark-xl-blur-spread' : '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 0 10px 0 rgba(0, 0, 0, 0.10)',
        'dark-xxl-blur-spread': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        'custom-blur': '0 0 15px 0 rgba(0, 0, 0, 0.07)',
        'dark-xxl-combined': '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 15px 0 rgba(0, 0, 0, 0.07)',
        'user-card-shadow': '0 10px 15px -3px rgba(0, 0, 0, 0.1),0 0 6px 0 rgba(0, 0, 0, 0.07)',
        'button-shadow': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 0 4px 0 rgba(0, 0, 0, 0.07)',
      },
      aspectRatio: {
        'map': '633 / 1049',
        'ellipses': '455 / 724',

      },
      gridTemplateColumns: {
        'custom-grid': '256px 1fr',
      }
      
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.scrollbar-hide': {
          /* Firefox */
          'scrollbar-width': 'none',
          /* Safari and Chrome */
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        },
      };
      addUtilities(newUtilities);
    },
  ],
}

