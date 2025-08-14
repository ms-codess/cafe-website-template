import Image from 'next/image'
import Link from 'next/link'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-cream">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-cream via-rose/20 to-gold/10">
        <div className="container text-center z-10">
          <h1 className="font-serif text-6xl md:text-8xl font-bold text-espresso mb-6">
            Café Miracle
          </h1>
          <p className="text-xl md:text-2xl text-ink mb-8 max-w-2xl mx-auto">
            Coffee, Mediterranean bites & local art on Beechwood
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/menu" 
              className="btn btn-primary text-lg px-8 py-3"
            >
              View Menu
            </Link>
            <Link 
              href="/reservations" 
              className="btn btn-ghost text-lg px-8 py-3"
            >
              Make Reservation
            </Link>
          </div>
        </div>
        <div className="absolute inset-0 bg-espresso/5"></div>
      </section>

      {/* About Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-espresso mb-6">
                Welcome to Beechwood's Hidden Gem
              </h2>
              <p className="text-lg text-ink mb-6 leading-relaxed">
                Nestled in the heart of Beechwood, Café Miracle brings you the perfect blend of 
                artisanal coffee, authentic Mediterranean cuisine, and a vibrant space for local artists.
              </p>
              <p className="text-lg text-ink mb-8 leading-relaxed">
                Every cup tells a story, every bite carries tradition, and every visit connects you 
                to our community's creative spirit.
              </p>
              <Link href="/about" className="btn btn-primary">
                Learn More
              </Link>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-soft">
              <div className="absolute inset-0 bg-gradient-to-br from-leaf/20 to-gold/20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-4xl text-espresso/60">☕</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Preview */}
      <section className="section bg-rose/10">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-espresso mb-6">
              Our Menu
            </h2>
            <p className="text-xl text-ink max-w-2xl mx-auto">
              From freshly roasted coffee to authentic Mediterranean dishes
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card text-center">
              <div className="text-4xl mb-4 text-gold">☕</div>
              <h3 className="font-serif text-2xl font-bold text-espresso mb-3">Coffee & Drinks</h3>
              <p className="text-ink mb-4">
                Single-origin beans, expertly roasted and brewed to perfection
              </p>
              <Link href="/menu#drinks" className="text-leaf hover:underline">
                View Selection →
              </Link>
            </div>
            
            <div className="card text-center">
              <div className="text-4xl mb-4 text-gold">🥙</div>
              <h3 className="font-serif text-2xl font-bold text-espresso mb-3">Mediterranean Bites</h3>
              <p className="text-ink mb-4">
                Fresh, authentic dishes inspired by Mediterranean traditions
              </p>
              <Link href="/menu#food" className="text-leaf hover:underline">
                View Selection →
              </Link>
            </div>
            
            <div className="card text-center">
              <div className="text-4xl mb-4 text-gold">🎨</div>
              <h3 className="font-serif text-2xl font-bold text-espresso mb-3">Local Art</h3>
              <p className="text-ink mb-4">
                Rotating exhibitions featuring Ottawa's talented artists
              </p>
              <Link href="/art" className="text-leaf hover:underline">
                View Gallery →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section bg-espresso text-white">
        <div className="container text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            Visit Us Today
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Experience the magic of Café Miracle in the heart of Beechwood
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn bg-white text-espresso hover:bg-cream">
              Get Directions
            </Link>
            <Link href="/reservations" className="btn btn-ghost border-white text-white hover:bg-white/10">
              Book a Table
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
