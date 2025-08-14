// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        espresso: '#2A2322',
        cream: '#F4EFE8',
        rose: '#E5C2B8',
        leaf: '#2D6B5A',
        gold: '#C6A15B',
        ink: '#1F2937',
        white: '#ffffff',
      },
      fontFamily: {
        sans: ['var(--font-sans)'],
        serif: ['var(--font-serif)'],
      },
      boxShadow: {
        soft: '0 10px 30px rgba(0,0,0,.06)',
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
