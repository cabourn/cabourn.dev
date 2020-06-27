const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  purge: {
    mode: 'production',
    content: ['./src/**/*.html'],
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'brand': {
          100: "#fcf6e8",
          200: "#f7e5ba",
          300: "#f2d48c",
          400: "#edc35e",
          500: "#e8b230",
          600: "#cf9917",
          700: "#a17712",
          800: "#73550d",
          900: "#453308",
        }
      }
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/ui'),
  ],
}
