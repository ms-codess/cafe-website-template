import Image from 'next/image'
import Link from 'next/link'
import Logo from '@/components/Logo'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-cream">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-cream via-rose/20 to-gold/10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23E5C2B8" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
        <div className="container text-center z-10">
          <div className="mb-8">
            <Logo className="w-32 h-32 mx-auto" />
          </div>
          <h1 className="font-serif text-6xl md:text-8xl font-bold text-espresso mb-6">
            Café Miracle
          </h1>
          <p className="text-xl md:text-2xl text-ink mb-8 max-w-2xl mx-auto">
            Coffee, Mediterranean bites & workshops
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/menu" 
              className="btn btn-primary text-lg px-8 py-3"
            >
              View Menu
            </Link>
            <Link 
              href="/events" 
              className="btn btn-ghost text-lg px-8 py-3"
            >
              See Events
            </Link>
          </div>
        </div>
        <div className="absolute inset-0 bg-espresso/5"></div>
      </section>

      {/* Logo Showcase */}
      <section className="section bg-gradient-to-br from-white via-rose/5 to-gold/5">
        <div className="container text-center">
          <h2 className="font-serif text-4xl font-bold text-espresso mb-8">
            Our Story
          </h2>
          <div className="max-w-2xl mx-auto">
            <div className="w-48 h-48 mx-auto mb-6 bg-gradient-to-br from-rose/20 via-gold/20 to-leaf/20 rounded-full flex items-center justify-center shadow-soft">
              <Logo className="w-24 h-24" />
            </div>
            <p className="text-lg text-ink leading-relaxed">
              Like the organic tree in our logo, we grow from strong roots of community, 
              creativity, and authentic Mediterranean hospitality. Every branch represents 
              a connection, every leaf a story, and every heart the love we pour into 
              every cup and every gathering.
            </p>
          </div>
        </div>
      </section>

      {/* Special of the Week */}
      <section className="section bg-gradient-to-br from-rose/10 via-rose/5 to-gold/5">
        <div className="container text-center">
          <h2 className="font-serif text-3xl font-bold text-espresso mb-4">
            Special of the Week
          </h2>
          <div className="max-w-md mx-auto">
            <div className="card text-center bg-white/80 backdrop-blur-sm">
              <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-rose/20 to-gold/20 rounded-full flex items-center justify-center shadow-soft">
                <span className="text-4xl">🥟</span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-espresso mb-3">Spinel</h3>
              <p className="text-ink mb-4">
                Fresh spinach pastry - our signature Mediterranean delight
              </p>
              <p className="text-leaf font-semibold">$6.50</p>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Highlights */}
      <section className="section bg-gradient-to-br from-white via-cream to-white">
        <div className="container">
          <h2 className="font-serif text-4xl font-bold text-espresso text-center mb-12">
            Menu Highlights
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card text-center bg-white/90 backdrop-blur-sm hover:shadow-xl transition-shadow">
              <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-rose/20 to-gold/20 rounded-full flex items-center justify-center shadow-soft">
                <span className="text-4xl text-gold">☕</span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-espresso mb-3">Coffee & Tea</h3>
              <p className="text-ink mb-4">
                Single-origin beans, expertly roasted and brewed to perfection
              </p>
              <Link href="/menu#drinks" className="text-leaf hover:underline">
                View Selection →
              </Link>
            </div>
            
            <div className="card text-center bg-white/90 backdrop-blur-sm hover:shadow-xl transition-shadow">
              <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-rose/20 to-gold/20 rounded-full flex items-center justify-center shadow-soft">
                <span className="text-4xl text-gold">🥐</span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-espresso mb-3">Fresh Pastries</h3>
              <p className="text-ink mb-4">
                Daily baked goods including our famous Spinel and other Mediterranean treats
              </p>
              <Link href="/menu#pastries" className="text-leaf hover:underline">
                View Selection →
              </Link>
            </div>
            
            <div className="card text-center bg-white/90 backdrop-blur-sm hover:shadow-xl transition-shadow">
              <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-rose/20 to-gold/20 rounded-full flex items-center justify-center shadow-soft">
                <span className="text-4xl text-gold">🍽️</span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-espresso mb-3">Breakfast & Lunch</h3>
              <p className="text-ink mb-4">
                Fresh, authentic dishes inspired by Mediterranean traditions
              </p>
              <Link href="/menu#food" className="text-leaf hover:underline">
                View Selection →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Events & Workshops Teaser */}
      <section className="section bg-gradient-to-br from-rose/10 via-rose/5 to-gold/5">
        <div className="container text-center">
          <h2 className="font-serif text-4xl font-bold text-espresso mb-6">
            Events & Workshops
          </h2>
          <p className="text-xl text-ink mb-8 max-w-3xl mx-auto">
            Join us for paint nights, community gatherings, and creative workshops. 
            Connect with fellow art lovers and coffee enthusiasts in our welcoming space.
          </p>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="w-full h-48 bg-gradient-to-br from-rose/20 to-gold/20 rounded-lg flex items-center justify-center shadow-soft">
              <span className="text-6xl">🎨</span>
            </div>
            <div className="w-full h-48 bg-gradient-to-br from-rose/20 to-gold/20 rounded-lg flex items-center justify-center shadow-soft">
              <span className="text-6xl">☕</span>
            </div>
          </div>
          <Link href="/events" className="btn btn-primary">
            See Upcoming Events
          </Link>
        </div>
      </section>

      {/* Local Art Section */}
      <section className="section bg-gradient-to-br from-white via-cream to-white">
        <div className="container">
          <h2 className="font-serif text-4xl font-bold text-espresso text-center mb-12">
            Artists on Our Walls
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="h-48 bg-gradient-to-br from-rose/20 to-gold/20 rounded-lg mb-4 flex items-center justify-center shadow-soft">
                <span className="text-4xl text-espresso/60">🖼️</span>
              </div>
              <h3 className="font-serif text-lg font-semibold text-espresso">Sarah Chen</h3>
              <p className="text-sm text-ink">Watercolor landscapes</p>
            </div>
            
            <div className="text-center">
              <div className="h-48 bg-gradient-to-br from-rose/20 to-gold/20 rounded-lg mb-4 flex items-center justify-center shadow-soft">
                <span className="text-4xl text-espresso/60">🎨</span>
              </div>
              <h3 className="font-serif text-lg font-semibold text-espresso">Marcus Rodriguez</h3>
              <p className="text-sm text-ink">Mixed media</p>
            </div>
            
            <div className="text-center">
              <div className="h-48 bg-gradient-to-br from-rose/20 to-gold/20 rounded-lg mb-4 flex items-center justify-center shadow-soft">
                <span className="text-4xl text-espresso/60">📸</span>
              </div>
              <h3 className="font-serif text-lg font-semibold text-espresso">Emma Thompson</h3>
              <p className="text-sm text-ink">Photography</p>
            </div>
            
            <div className="text-center">
              <div className="h-48 bg-gradient-to-br from-rose/20 to-gold/20 rounded-lg mb-4 flex items-center justify-center shadow-soft">
                <span className="text-4xl text-espresso/60">✏️</span>
              </div>
              <h3 className="font-serif text-lg font-semibold text-espresso">Local Artists</h3>
              <p className="text-sm text-ink">Rotating exhibitions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Visit Block */}
      <section className="section bg-gradient-to-br from-espresso via-espresso/95 to-espresso text-white">
        <div className="container text-center">
          <h2 className="font-serif text-4xl font-bold mb-6">
            Visit Us
          </h2>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="font-serif text-2xl font-semibold mb-4">Location</h3>
              <p className="text-rose mb-2">123 Beechwood Avenue</p>
              <p className="text-rose mb-2">Ottawa, ON K1M 1M9</p>
              <p className="text-rose">Located in the heart of Beechwood Village</p>
            </div>
            <div>
              <h3 className="font-serif text-2xl font-semibold mb-4">Hours</h3>
              <p className="text-rose mb-2">Mon-Fri: 7:00 AM - 9:00 PM</p>
              <p className="text-rose mb-2">Sat: 8:00 AM - 10:00 PM</p>
              <p className="text-rose">Sun: 8:00 AM - 8:00 PM</p>
            </div>
          </div>
          <div className="w-full h-48 bg-gradient-to-br from-white/10 to-white/5 rounded-lg mb-8 flex items-center justify-center shadow-soft">
            <span className="text-4xl text-white/60">🗺️</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+16135550123" 
              className="btn bg-white text-espresso hover:bg-cream"
            >
              📞 Call
            </a>
            <Link href="/contact" className="btn btn-ghost border-white text-white hover:bg-white/10">
              🗺️ Directions
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
