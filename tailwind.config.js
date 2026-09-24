/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#030712', // Very dark slate/gray, modern Vercel style
          card: 'rgba(17, 24, 39, 0.7)', // Glassmorphic card dark
        },
        light: {
          bg: '#f9fafb', // Modern light bg
          card: 'rgba(255, 255, 255, 0.7)', // Glassmorphic card light
        }
      },
      fontFamily: {
        sans: ['Inter', 'SF Pro Display', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      animation: {
        'gradient-x': 'gradient-x 15s ease infinite',
        'gradient-y': 'gradient-y 15s ease infinite',
        'gradient-xy': 'gradient-xy 15s ease infinite',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
        'gradient-y': {
          '0%, 100%': { 'background-position': '50% 0%' },
          '50%': { 'background-position': '50% 100%' },
        },
        'gradient-xy': {
          '0%, 100%': { 'background-position': '0% 0%' },
          '50%': { 'background-position': '100% 100%' },
        }
      }
    },
  },
  plugins: [],
}
