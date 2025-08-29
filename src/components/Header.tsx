'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'menu', 'events', 'contact', 'careers']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isActive = (section: string) => activeSection === section

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-seashell/95 backdrop-blur-md border-b border-desert-sand-200 shadow-lg">
      <div className="container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-4 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-caramel-300 to-mocha-300 rounded-full blur-lg group-hover:blur-xl transition-all duration-300"></div>
              <Image 
                src="/cafe-logo.jpg" 
                alt="Café Miracle Logo" 
                width={48} 
                height={48} 
                className="rounded-full shadow-lg group-hover:scale-110 transition-transform duration-300 relative z-10"
              />
            </div>
            <span className="font-serif text-2xl font-bold text-wenge">Café Miracle</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#about" className={`transition-all duration-300 font-medium relative group ${
              isActive('about') 
                ? 'text-wenge font-semibold' 
                : 'text-wenge-700 hover:text-wenge'
            }`}>
              <span>About</span>
              <div className={`absolute bottom-0 left-0 h-0.5 bg-rose-taupe transition-all duration-300 ${
                isActive('about') ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></div>
            </Link>
            <Link href="#menu" className={`transition-all duration-300 font-medium relative group ${
              isActive('menu') 
                ? 'text-wenge font-semibold' 
                : 'text-wenge-700 hover:text-wenge'
            }`}>
              <span>Menu</span>
              <div className={`absolute bottom-0 left-0 h-0.5 bg-rose-taupe transition-all duration-300 ${
                isActive('menu') ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></div>
            </Link>
            <Link href="#events" className={`transition-all duration-300 font-medium relative group ${
              isActive('events') 
                ? 'text-wenge font-semibold' 
                : 'text-wenge-700 hover:text-wenge'
            }`}>
              <span>Events</span>
              <div className={`absolute bottom-0 left-0 h-0.5 bg-rose-taupe transition-all duration-300 ${
                isActive('events') ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></div>
            </Link>

            <Link href="#contact" className={`transition-all duration-300 font-medium relative group ${
              isActive('contact') 
                ? 'text-wenge font-semibold' 
                : 'text-wenge-700 hover:text-wenge'
            }`}>
              <span>Contact</span>
              <div className={`absolute bottom-0 left-0 h-0.5 bg-rose-taupe transition-all duration-300 ${
                isActive('contact') ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></div>
            </Link>
            <Link 
              href="#menu" 
              className="bg-rose-taupe hover:bg-rose-taupe-700 text-white px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 font-semibold shadow-lg hover:shadow-xl"
            >
              Menu & Order
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
          <nav className="md:hidden py-4 border-t border-desert-sand-200/20">
            <div className="flex flex-col gap-4">
              <Link 
                href="#about" 
                className={`transition-colors py-3 font-medium ${
                  isActive('about') 
                    ? 'text-wenge font-semibold' 
                    : 'text-wenge-700 hover:text-wenge'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                href="#menu" 
                className={`transition-colors py-3 font-medium ${
                  isActive('menu') 
                    ? 'text-wenge font-semibold' 
                    : 'text-wenge-700 hover:text-wenge'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Menu
              </Link>
              <Link 
                href="#events" 
                className={`transition-colors py-3 font-medium ${
                  isActive('events') 
                    ? 'text-wenge font-semibold' 
                    : 'text-wenge-700 hover:text-wenge'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Events
              </Link>

              <Link 
                href="#contact" 
                className={`transition-colors py-3 font-medium ${
                  isActive('contact') 
                    ? 'text-wenge font-semibold' 
                    : 'text-wenge-700 hover:text-wenge'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Link 
                href="#menu" 
                className="bg-rose-taupe hover:bg-rose-taupe-700 text-white px-6 py-4 rounded-full transition-all duration-300 font-semibold shadow-lg text-center transform hover:scale-105"
                onClick={() => setIsMenuOpen(false)}
              >
                Menu & Order
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
