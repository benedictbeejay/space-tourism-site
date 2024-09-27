/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      transitionProperty : {
        'top': 'top 0.5s ease-in-out',
      },
      backgroundColor : {
        'transparent' : 'rgba(255, 255, 255, 0.5)'
      }
      // inset : {
      //   'offScreen' : ''
      // }
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
  },
  plugins: []
}

