export const theme = {
  colors: {
    primary: {
      50: '#fdf2f8',
      100: '#fce7f3',
      200: '#fbcfe8',
      300: '#f9a8d4',
      400: '#f472b6',
      500: '#ec4899',
      600: '#db2777',
      700: '#be185d',
      800: '#9d174d',
      900: '#831843',
    },
    background: {
      primary: '#18181b',
      secondary: '#27272a',
      tertiary: '#3f3f46',
      card: '#1f1f23',
    },
    text: {
      primary: '#f4f4f5',
      secondary: '#a1a1aa',
      muted: '#71717a',
      accent: '#ec4899',
    },
    border: {
      primary: '#3f3f46',
      secondary: '#52525b',
      accent: '#ec4899',
    }
  },
  spacing: {
    xs: '0.5rem',
    sm: '1rem',
    md: '1.5rem',
    lg: '2rem',
    xl: '3rem',
    '2xl': '4rem',
    '3xl': '6rem',
  },
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
  borderRadius: {
    sm: '0.375rem',
    md: '0.5rem',
    lg: '0.75rem',
    xl: '1rem',
    '2xl': '1.5rem',
    full: '9999px',
  },
  shadows: {
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
    xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
  }
};

export const responsive = {
  padding: {
    x: 'px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16',
    y: 'py-4 sm:py-6 md:py-8 lg:py-12',
    all: 'p-4 sm:p-6 md:p-8 lg:p-12',
  },
  margin: {
    x: 'mx-4 sm:mx-6 md:mx-8 lg:mx-12 xl:mx-16',
    y: 'my-4 sm:my-6 md:my-8 lg:my-12',
    all: 'm-4 sm:m-6 md:m-8 lg:m-12',
  },
  grid: {
    responsive: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4',
    gap: 'gap-4 sm:gap-6 lg:gap-8',
  },
  text: {
    heading: {
      h1: 'text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold',
      h2: 'text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold',
      h3: 'text-xl sm:text-2xl md:text-3xl font-bold',
      h4: 'text-lg sm:text-xl md:text-2xl font-semibold',
    },
    body: {
      large: 'text-base sm:text-lg md:text-xl',
      medium: 'text-sm sm:text-base md:text-lg',
      small: 'text-xs sm:text-sm md:text-base',
    }
  }
};
