import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-espresso text-white">
      <div className="container py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="font-serif text-2xl font-bold mb-4">Café Miracle</h3>
            <p className="text-rose mb-6 max-w-md">
              Coffee, Mediterranean bites & local art on Beechwood. 
              Where community meets creativity in every cup.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-rose hover:text-gold transition-colors" aria-label="Instagram">
                📷
              </a>
              <a href="#" className="text-rose hover:text-gold transition-colors" aria-label="Facebook">
                📘
              </a>
              <a href="#" className="text-rose hover:text-gold transition-colors" aria-label="Twitter">
                🐦
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/menu" className="text-rose hover:text-gold transition-colors">
                  Menu
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-rose hover:text-gold transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/art" className="text-rose hover:text-gold transition-colors">
                  Art Gallery
                </Link>
              </li>
              <li>
                <Link href="/reservations" className="text-rose hover:text-gold transition-colors">
                  Reservations
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-rose">
              <p>📍 123 Beechwood Ave</p>
              <p>📞 (613) 555-0123</p>
              <p>✉️ hello@cafemiracle.ca</p>
              <p>🕒 Mon-Sun: 7AM-9PM</p>
            </div>
          </div>
        </div>

        <div className="border-t border-espresso/20 mt-12 pt-8 text-center text-rose/80">
          <p>&copy; 2024 Café Miracle. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
