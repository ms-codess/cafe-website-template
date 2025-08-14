import './globals.css'
import { Playfair_Display, Inter } from 'next/font/google'
import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-serif' })
const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })

export const metadata: Metadata = {
  title: 'Café Miracle — Beechwood, Ottawa',
  description: 'Coffee, Mediterranean bites & local art on Beechwood.',
  themeColor: '#F4EFE8',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-sans bg-cream text-ink antialiased">
        <Header />
        <div className="pt-16">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}
