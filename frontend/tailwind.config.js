/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ff6b6b',
        secondary: '#1e1e2e',
        dark: '#0f0f1e',
        light: '#e0e0e0',
      },
      container: {
        center: true,
        padding: '1rem',
      },
    },
  },
  plugins: [],
}