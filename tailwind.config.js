
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    screens: {
      xs: '320px',
      sm: '426px',
      md: '769px',
      lg: '976px',
      lgmd: '1200px',
      xl: '1440px',
    },
    extend: {
      colors: {
        Grey: 'hsl(231, 7%, 60%)',
        White: 'hsl(0, 0%, 100%)',
        red: 'hsl(0, 97%, 50%)',
        Green: '#006400',
        Blue: '#00008b',
      },
      
      fontSize: {
        'baseSize': '16px',
        'mediumSize': '14px',
        'belowSize': '12px',
      },
      boxShadow: {
        'colorShadow': '0px 1px 9px 1px rgba(41, 40, 40, 0.2), 0px -1px 9px 1px rgba(41, 40, 40, 0.2)',
      },
      
    },
  },
  variants: {
    fill: ['hover', 'focus'],
  },
  plugins: [],
};
