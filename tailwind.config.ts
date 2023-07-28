/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    'components/**/*.{vue,js}',
    'layouts/**/*.vue',
    'pages/**/*.vue',
    'composables/**/*.{js,ts}',
    'plugins/**/*.{js,ts}',
    'App.{js,ts,vue}',
    'app.{js,ts,vue}',
    'error.{js,ts,vue}',
    'formkit.config.js',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins'],
      },
    },
  },
  daisyui: {
    themes: [
      {
        light: {
          primary: '#006bf7',
          secondary: '#3b82f6',
          accent: '#58d3c3',
          neutral: '#25253C',
          'base-100': '#E1E2EA',
          info: '#91BFEE',
          success: '#31C98A',
          warning: '#F8B14F',
          error: '#F3535B',
        },
        dark: {
          primary: '#006bf7',
          secondary: '#3b82f6',
          accent: '#58d3c3',
          neutral: '#25253C',
          'base-100': '#222224',
          info: '#91BFEE',
          success: '#31C98A',
          warning: '#F8B14F',
          error: '#F3535B',
        },
      },
    ],
  },
  plugins: [require('daisyui'), require('@formkit/themes/tailwindcss')],
}
