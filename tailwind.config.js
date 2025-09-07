export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#ec4899',
          dark: '#be185d',
          light: '#f9a8d4',
        },
        background: {
          DEFAULT: '#18181b',
          light: '#27272a',
        },
        text: {
          DEFAULT: '#f4f4f5',
          muted: '#a1a1aa',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      screens: {
        'xs': '375px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      spacing: {
        'section': '3rem',
        'card': '1.5rem',
      },
    },
  },
  plugins: [],
}