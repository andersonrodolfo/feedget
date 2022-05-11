module.exports = {
  content: ['./src/**/*.tsx'],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        'max-2xl': { max: '1535px' },
        'max-xl': { max: '1279px' },
        'max-lg': { max: '1023px' },
        'max-md': { max: '767px' },
        'max-sm': { max: '639px' },
      },
      colors: {
        light: '#f6f6f5',
        dark: '#09090A',
        brand: {
          300: '#996dff',
          500: '#8257e6',
        },
        on: {
          brand: '#ffff',
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
