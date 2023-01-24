/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        'main-blue': {
          100: '#E5F0FE',
          200: '#B2C8E6',
          300: '#84B3F3',
          400: '#4d80c5',
          500: '#014AAD',
          600: '#003B8A',
          800: '#002454'
        }
      },
      scale: { 300: '3' },
      spacing: {
        '15': '3.75rem',
      },
    }
  },
  plugins: []
};
