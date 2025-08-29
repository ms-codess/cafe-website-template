// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Custom Color Palette
        'wenge': {
          DEFAULT: '#584b53',
          50: '#f5f4f5',
          100: '#ebe9eb',
          200: '#d7d3d7',
          300: '#c3bdc3',
          400: '#afa7af',
          500: '#9b919b',
          600: '#877b87',
          700: '#736573',
          800: '#5f4f5f',
          900: '#4b394b'
        },
        'rose-taupe': {
          DEFAULT: '#9d5c63',
          50: '#fdf5f6',
          100: '#fbeaec',
          200: '#f7d5d8',
          300: '#f3c0c4',
          400: '#efabb0',
          500: '#eb969c',
          600: '#e78188',
          700: '#e36c74',
          800: '#df5760',
          900: '#db424c'
        },
        'seashell': {
          DEFAULT: '#fef5ef',
          50: '#fefdfc',
          100: '#fefbfa',
          200: '#fdf7f5',
          300: '#fdf3f0',
          400: '#fcefeb',
          500: '#fcebe6',
          600: '#fbe7e1',
          700: '#fbe3dc',
          800: '#fadfd7',
          900: '#fadbd2'
        },
        'desert-sand': {
          DEFAULT: '#e4bb97',
          50: '#fdfbf8',
          100: '#fbf7f1',
          200: '#f7efe3',
          300: '#f3e7d5',
          400: '#efdfc7',
          500: '#ebd7b9',
          600: '#e7cfab',
          700: '#e3c79d',
          800: '#dfbf8f',
          900: '#dbb781'
        }
      },
      fontFamily: {
        sans: ['var(--font-sans)'],
        serif: ['var(--font-serif)'],
      },
      boxShadow: {
        soft: '0 10px 30px rgba(0,0,0,.06)',
        elegant: '0 20px 40px rgba(139, 125, 107, 0.1)',
      },
      borderRadius: {
        '2xl': '1rem',
      },
      container: {
        center: true,
        padding: '1rem',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}

export default config
