// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'xs': '475px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      fontFamily: {
        sans: [
          'ui-sans-serif',
          'system-ui',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"'
        ],
      },
      colors: {
        // Основные цвета
        primary: 'var(--color-primary)',
        accent: 'var(--color-accent)',
        'accent-dark': 'var(--color-accent-dark)',
        'accent-secondary': 'var(--color-accent-secondary)',
        'neutral-dark': 'var(--color-neutral-dark)',
        surface: 'var(--color-surface)',
        'surface-light': 'var(--color-surface-light)',
        border: 'var(--color-border)',
        
        // Дополнительные цвета
        'warm-accent': 'var(--color-warm-accent)',
        'earth-brown': 'var(--color-earth-brown)',
        'green-fern': 'var(--color-green-fern)',
        'muted-teal': 'var(--color-muted-teal)',
        'faded-copper': 'var(--color-faded-copper)',
        
        // Прозрачные белые
        'white-90': 'var(--color-white-90)',
        'white-80': 'var(--color-white-80)',
        'white-60': 'var(--color-white-60)',
        'white-40': 'var(--color-white-40)',
      },
      backgroundColor: {
        // Основные
        'primary': 'var(--color-primary)',
        'accent': 'var(--color-accent)',
        'accent-dark': 'var(--color-accent-dark)',
        'accent-secondary': 'var(--color-accent-secondary)',
        'surface': 'var(--color-surface)',
        'surface-light': 'var(--color-surface-light)',
        
        // Прозрачные варианты
        'accent-20': 'var(--color-accent-20)',
        'accent-40': 'var(--color-accent-40)',
        'primary-95': 'var(--color-primary-95)',
        'primary-90': 'var(--color-primary-90)',
        'primary-80': 'var(--color-primary-80)',
        
        // Дополнительные
        'warm-accent': 'var(--color-warm-accent)',
        'earth-brown': 'var(--color-earth-brown)',
        'green-fern': 'var(--color-green-fern)',
        'muted-teal': 'var(--color-muted-teal)',
        'faded-copper': 'var(--color-faded-copper)',
        
        // Прозрачные белые
        'white-90': 'var(--color-white-90)',
        'white-80': 'var(--color-white-80)',
        'white-60': 'var(--color-white-60)',
        'white-40': 'var(--color-white-40)',
      },
      textColor: {
        // Основные
        'primary': 'var(--color-primary)',
        'accent': 'var(--color-accent)',
        'accent-secondary': 'var(--color-accent-secondary)',
        'neutral-dark': 'var(--color-neutral-dark)',
        
        // Дополнительные
        'warm-accent': 'var(--color-warm-accent)',
        'earth-brown': 'var(--color-earth-brown)',
        'green-fern': 'var(--color-green-fern)',
        'muted-teal': 'var(--color-muted-teal)',
        'faded-copper': 'var(--color-faded-copper)',
        
        // Белые варианты
        'white': 'var(--color-white)',
        'white-90': 'var(--color-white-90)',
        'white-80': 'var(--color-white-80)',
        'white-60': 'var(--color-white-60)',
        'white-40': 'var(--color-white-40)',
      },
      borderColor: {
        'primary': 'var(--color-primary)',
        'accent': 'var(--color-accent)',
        'border': 'var(--color-border)',
        'accent-secondary': 'var(--color-accent-secondary)',
      },
      backdropBlur: {
        sm: '4px',
        md: '8px',
        lg: '12px',
      },
      boxShadow: {
        'strong': '0 4px 20px var(--shadow-strong)',
        'medium': '0 2px 10px var(--shadow-medium)',
        'light': '0 1px 5px var(--shadow-light)',
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: true,
  },
}

export default config