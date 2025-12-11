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
      // Добавляем кастомный шрифт
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
        primary: 'var(--color-primary)',
        accent: 'var(--color-accent)',
        'accent-dark': 'var(--color-accent-dark)',
        'neutral-dark': 'var(--color-neutral-dark)',
        surface: 'var(--color-surface)',
        border: 'var(--color-border)',
        'white-90': 'var(--color-white-90)',
        'white-80': 'var(--color-white-80)',
        'white-60': 'var(--color-white-60)',
      },
      backgroundColor: {
        'primary': 'var(--color-primary)',
        'accent': 'var(--color-accent)',
        'accent-dark': 'var(--color-accent-dark)',
        'surface': 'var(--color-surface)',
        'accent-20': 'var(--color-accent-20)',
        'primary-95': 'var(--color-primary-95)',
        'primary-90': 'var(--color-primary-90)',
        'primary-80': 'var(--color-primary-80)',
        'white-90': 'var(--color-white-90)',
        'white-80': 'var(--color-white-80)',
        'white-60': 'var(--color-white-60)',
      },
      textColor: {
        'primary': 'var(--color-primary)',
        'accent': 'var(--color-accent)',
        'neutral-dark': 'var(--color-neutral-dark)',
        'white': 'var(--color-white)',
        'white-90': 'var(--color-white-90)',
        'white-80': 'var(--color-white-80)',
        'white-60': 'var(--color-white-60)',
      },
      backdropBlur: {
        sm: '4px',
        md: '8px',
        lg: '12px',
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: true,
  },
}

export default config