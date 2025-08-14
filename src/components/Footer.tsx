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
              Coffee, Mediterranean bites & workshops on Beechwood. 
              Where community meets creativity in every cup.
            </p>
            <div className="flex gap-4">
              <a href="https://instagram.com/cafemiracle" target="_blank" rel="noopener noreferrer" className="text-rose hover:text-gold transition-colors" aria-label="Instagram">
                📷 Instagram
              </a>
              <a href="https://facebook.com/cafemiracle" target="_blank" rel="noopener noreferrer" className="text-rose hover:text-gold transition-colors" aria-label="Facebook">
                📘 Facebook
              </a>
              <a href="https://twitter.com/cafemiracle" target="_blank" rel="noopener noreferrer" className="text-rose hover:text-gold transition-colors" aria-label="Twitter">
                🐦 Twitter
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
                <Link href="/events" className="text-rose hover:text-gold transition-colors">
                  Events
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

        {/* Contact Form */}
        <div className="mt-12 pt-8 border-t border-espresso/20">
          <div className="max-w-2xl mx-auto">
            <h4 className="font-serif text-xl font-semibold text-center mb-6">Get in Touch</h4>
            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input 
                  type="text" 
                  placeholder="Name" 
                  className="w-full px-4 py-2 rounded-lg bg-white/10 border border-rose/30 text-white placeholder-rose/70 focus:outline-none focus:border-rose"
                />
                <input 
                  type="email" 
                  placeholder="Email" 
                  className="w-full px-4 py-2 rounded-lg bg-white/10 border border-rose/30 text-white placeholder-rose/70 focus:outline-none focus:border-rose"
                />
              </div>
              <textarea 
                placeholder="Message" 
                rows={4}
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-rose/30 text-white placeholder-rose/70 focus:outline-none focus:border-rose"
              ></textarea>
              <div className="text-center">
                <button type="submit" className="btn bg-leaf text-white hover:opacity-90">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="border-t border-espresso/20 mt-12 pt-8 text-center text-rose/80">
          <p>&copy; 2024 Café Miracle. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
