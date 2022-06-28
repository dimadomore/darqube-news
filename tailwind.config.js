/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      'gray-light': '#3C3C3C',
      'gray-dark': '#242525',
    },
    fontFamily: {
      sans: ['Ubuntu', 'sans-serif'],
    },
    textColor: {
      body: 'white',
    },
    spacing: {
      1: '4px',
      2: '8px',
      3: '12px',
      4: '16px',
      5: '20px',
      6: '24px',
      7: '28px',
      8: '32px',
      9: '48px',
      10: '56px',
      11: '60px',
      12: '64px',
      20: '240px',
      30: '425px',
    },
  },
  plugins: [],
};
