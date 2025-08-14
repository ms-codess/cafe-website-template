// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        espresso: '#2A2322',   // headings / lines
        cream: '#F4EFE8',      // page background
        ink: '#1F2937',        // body text
        rose: '#E5C2B8',       // soft section bg / badges
        leaf: '#2D6B5A',       // primary buttons / links
        gold: '#C6A15B',       // accents / dividers
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
