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
        'display': ['var(--font-space-grotesk)', 'system-ui', 'sans-serif'],
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
      primary: {
        50: '#f0fdf4',
        100: '#dcfce7',
        200: '#bbf7d0',
        300: '#86efac',
        400: '#4ade80',
        500: '#22c55e', // Lime green
        600: '#16a34a',
        700: '#15803d',
        800: '#166534',
        900: '#14532d',
      },
      secondary: {
        50: '#fafafa',
        100: '#f4f4f5',
        200: '#e4e4e7',
        300: '#d4d4d8',
        400: '#a1a1aa',
        500: '#71717a',
        600: '#52525b',
        700: '#3f3f46',
        800: '#27272a',
        900: '#18181b',
      },
      accent: {
        lime: '#d4ff00', // Bright lime like Lando's site
        'dark-green': '#0a1f0f',
        'grey-1': '#1a1a1a',
        'grey-2': '#2a2a2a',
      },
      dark: '#0a0a0a',
      light: '#fafafa',
    },
  },
  plugins: [],
};
