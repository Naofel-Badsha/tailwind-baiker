/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        color:{
          clifford: '#da373d',
          'bike-primary': '#e76f51',
          'bike-primary-bg': 'rgba(231, 111, 81, 0.10)',
        }
      },
    },
    plugins: [],
  }