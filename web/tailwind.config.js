module.exports = {
  content: ['./src/**/*.tsx'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          300: '#996dff',
          500: '#8257e6',
        },
      },
      dropShadow: {
        brand: '0px 8px 24px rgba(130, 87, 229, 0.25)',
      },
      borderRadius: {
        md: '4px',
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('tailwind-scrollbar')],
};
