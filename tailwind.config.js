/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        primary: '#FEA116',
        light: "#F1F8FF",
        dark: "#0F172B",
        'primary-dark': '#e59014',
      },
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
        heebo: ['Heebo', 'sans-serif'],
        pacifico: ['Pacifico', 'sans-serif']
      },
      animation: {
        slideInLeft: 'slideInLeft 1s ease-out',
        rotate: 'rotate 50s linear infinite',
      },
      keyframes: {
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-100px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        rotate: {
          '100%': { transform: 'rotate(360deg)' },
        },
      },
    },
    variants: {
      extend: {
        visibility: ['group-hover'],
      },
    },
  },
  plugins: [],
}

