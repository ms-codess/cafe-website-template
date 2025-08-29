import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-seashell/90 backdrop-blur-sm border-t border-desert-sand-200 text-wenge">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full border-2 border-desert-sand-300 overflow-hidden">
                <Image
                  src="/cafe-logo.jpg"
                  alt="Café Miracle Logo"
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-2xl font-bold text-wenge">Café Miracle</span>
            </div>
            <p className="text-wenge-700 mb-6 max-w-md leading-relaxed">
              A warm corner for coffee & miracles. Join our community where every cup tells a story 
              and every gathering creates magic.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/beechwoodmiracle/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-rose-taupe/20 hover:bg-rose-taupe/30 rounded-full flex items-center justify-center transition-colors"
              >
                <svg className="w-5 h-5 text-rose-taupe" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-wenge mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#menu" className="text-wenge-700 hover:text-wenge transition-colors">
                  Menu
                </Link>
              </li>
              <li>
                <Link href="#events" className="text-wenge-700 hover:text-wenge transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link href="#careers" className="text-wenge-700 hover:text-wenge transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-wenge-700 hover:text-wenge transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-wenge mb-6">Contact Info</h3>
            <div className="space-y-3 text-wenge-700">
              <div className="flex items-center gap-3">
                <span className="text-rose-taupe">📍</span>
                <span>141 Beechwood Avenue, Ottawa, ON</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-rose-taupe">📞</span>
                <span>(613) 555-0123</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-rose-taupe">✉️</span>
                <span>beechwoodmiracle@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-desert-sand-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-wenge-600 text-sm mb-4 md:mb-0">
              © 2025 Café Miracle. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href="#" className="text-wenge-600 hover:text-wenge transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-wenge-600 hover:text-wenge transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="text-wenge-600 hover:text-wenge transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
