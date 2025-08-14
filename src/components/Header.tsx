'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-espresso/10">
      <div className="container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="font-serif text-2xl font-bold text-espresso">
            Café Miracle
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/menu" className="text-ink hover:text-leaf transition-colors">
              Menu
            </Link>
            <Link href="/about" className="text-ink hover:text-leaf transition-colors">
              About
            </Link>
            <Link href="/art" className="text-ink hover:text-leaf transition-colors">
              Art Gallery
            </Link>
            <Link href="/contact" className="text-ink hover:text-leaf transition-colors">
              Contact
            </Link>
            <Link href="/reservations" className="btn btn-primary">
              Book Table
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`block w-5 h-0.5 bg-espresso transition-all ${isMenuOpen ? 'rotate-45 translate-y-1' : ''}`}></span>
              <span className={`block w-5 h-0.5 bg-espresso transition-all mt-1 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-5 h-0.5 bg-espresso transition-all mt-1 ${isMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-espresso/10">
            <div className="flex flex-col gap-4">
              <Link 
                href="/menu" 
                className="text-ink hover:text-leaf transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Menu
              </Link>
              <Link 
                href="/about" 
                className="text-ink hover:text-leaf transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/art" 
                className="text-ink hover:text-leaf transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Art Gallery
              </Link>
              <Link 
                href="/contact" 
                className="text-ink hover:text-leaf transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Link 
                href="/reservations" 
                className="btn btn-primary w-full justify-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Book Table
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
