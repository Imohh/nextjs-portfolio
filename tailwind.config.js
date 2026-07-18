/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['var(--font-inter)', 'system-ui', 'sans-serif'],
        'display': ['var(--font-display)', 'system-ui', 'sans-serif'],
        'body': ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        'marquee-left': 'marquee-left 30s linear infinite',
        'marquee-right': 'marquee-right 30s linear infinite',
        'fade-in-up': 'fade-in-up 0.75s cubic-bezier(0.65, 0.05, 0, 1) forwards',
        'fade-in': 'fade-in 0.75s cubic-bezier(0.65, 0.05, 0, 1) forwards',
        'scale-in': 'scale-in 0.75s cubic-bezier(0.65, 0.05, 0, 1) forwards',
        'slide-in-left': 'slide-in-left 0.75s cubic-bezier(0.65, 0.05, 0, 1) forwards',
        'slide-in-right': 'slide-in-right 0.75s cubic-bezier(0.65, 0.05, 0, 1) forwards',
      },
      keyframes: {
        'marquee-left': {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        'marquee-right': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'slide-in-left': {
          '0%': { opacity: '0', transform: 'translateX(-50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'slide-in-right': {
          '0%': { opacity: '0', transform: 'translateX(50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
      fontSize: {
        'display-xl': ['clamp(3rem, 8vw, 8.25rem)', { lineHeight: '0.83', letterSpacing: '-0.1875rem' }],
        'display-lg': ['clamp(2.5rem, 6vw, 6rem)', { lineHeight: '0.9', letterSpacing: '-0.125rem' }],
        'display-md': ['clamp(2rem, 4vw, 4rem)', { lineHeight: '1', letterSpacing: '-0.0625rem' }],
        'display-sm': ['clamp(1.5rem, 3vw, 3rem)', { lineHeight: '1.1', letterSpacing: '-0.03rem' }],
      },
      backdropBlur: {
        xs: '2px',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.65, 0.05, 0, 1)',
      },
      transitionDuration: {
        '750': '750ms',
      },
    },
    colors: {
      ...colors,
      // Warm gold / bronze family (drives gradients + glows)
      primary: {
        50: '#faf6ec',
        100: '#f2e8cf',
        200: '#e6d3a2',
        300: '#dabd76',
        400: '#cfa757',
        500: '#c79a45',
        600: '#a87f36',
        700: '#84632c',
        800: '#5f4822',
        900: '#3d2f18',
      },
      // Warm neutral greys (text + surfaces)
      secondary: {
        50: '#f7f4ee',
        100: '#ece7dd',
        200: '#d8d1c3',
        300: '#c3baa9',
        400: '#9d9482',
        500: '#7a7264',
        600: '#5b5449',
        700: '#423d34',
        800: '#2a2620',
        900: '#1a1712',
      },
      accent: {
        lime: '#c79a45', // muted amber/gold (was neon lime)
        'dark-green': '#1c1712', // warm dark tint used in gradients
        'grey-1': '#1a1712',
        'grey-2': '#26221b',
      },
      dark: '#14120e', // warm charcoal (was pure black)
      light: '#f2ede3', // warm off-white
    },
  },
  plugins: [],
};
