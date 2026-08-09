/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Light mode surfaces
        paper: '#F7F8FA',
        surface: '#FFFFFF',
        ink: '#14171F',
        // Dark mode surfaces
        midnight: '#0B0F14',
        panel: '#121821',
        fog: '#E7ECF1',
        // Accents (shared across modes)
        teal: {
          DEFAULT: '#0E9F8E',
          soft: '#2DD4BF',
        },
        amber: {
          DEFAULT: '#F2A93B',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      keyframes: {
        blink: {
          '0%, 49%': { opacity: '1' },
          '50%, 100%': { opacity: '0' },
        },
      },
      animation: {
        blink: 'blink 1s step-start infinite',
      },
    },
  },
  plugins: [],
};
