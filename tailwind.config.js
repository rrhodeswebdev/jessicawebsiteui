const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#1a1713',
        secondary: '#c8c2b9',
        accent: '#b18e72',
        shade: '#e0ddd7',
      },
    },
    fontFamily: {
      sans: ['Nunito', ...defaultTheme.fontFamily.sans],
      serif: [...defaultTheme.fontFamily.serif],
      mono: [...defaultTheme.fontFamily.mono],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
