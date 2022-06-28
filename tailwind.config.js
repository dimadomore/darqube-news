/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      'gray-dark': '#242525',
    },
    fontFamily: {
      sans: ['Ubuntu', 'sans-serif'],
    },
    textColor: {
      body: 'white',
    },
    spacing: {
      1: '8px',
      2: '12px',
      3: '16px',
      4: '24px',
      5: '32px',
      6: '48px',
      7: '56px',
      8: '60px',
      9: '64px',
    },
  },
  plugins: [],
};
