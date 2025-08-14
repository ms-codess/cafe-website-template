import Link from 'next/link'

export default function MenuPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="section bg-gradient-to-br from-cream via-rose/20 to-gold/10">
        <div className="container text-center">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-espresso mb-6">
            Our Menu
          </h1>
          <p className="text-xl text-ink max-w-2xl mx-auto">
            From freshly roasted coffee to authentic Mediterranean dishes, 
            every item is crafted with care and tradition.
          </p>
        </div>
      </section>

      {/* Coffee & Drinks */}
      <section id="drinks" className="section bg-white">
        <div className="container">
          <h2 className="font-serif text-4xl font-bold text-espresso text-center mb-12">
            Coffee & Drinks
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card">
              <h3 className="font-serif text-xl font-semibold text-espresso mb-2">Espresso</h3>
              <p className="text-ink mb-3">Single-origin beans, perfectly extracted</p>
              <p className="text-leaf font-semibold">$3.50</p>
            </div>
            
            <div className="card">
              <h3 className="font-serif text-xl font-semibold text-espresso mb-2">Cappuccino</h3>
              <p className="text-ink mb-3">Rich espresso with velvety steamed milk</p>
              <p className="text-leaf font-semibold">$4.50</p>
            </div>
            
            <div className="card">
              <h3 className="font-serif text-xl font-semibold text-espresso mb-2">Pour Over</h3>
              <p className="text-ink mb-3">Hand-crafted single-cup brewing</p>
              <p className="text-leaf font-semibold">$4.00</p>
            </div>
            
            <div className="card">
              <h3 className="font-serif text-xl font-semibold text-espresso mb-2">Cold Brew</h3>
              <p className="text-ink mb-3">18-hour steeped, smooth and bold</p>
              <p className="text-leaf font-semibold">$4.50</p>
            </div>
            
            <div className="card">
              <h3 className="font-serif text-xl font-semibold text-espresso mb-2">Chai Latte</h3>
              <p className="text-ink mb-3">Spiced tea with steamed milk</p>
              <p className="text-leaf font-semibold">$4.75</p>
            </div>
            
            <div className="card">
              <h3 className="font-serif text-xl font-semibold text-espresso mb-2">Hot Chocolate</h3>
              <p className="text-ink mb-3">Rich Belgian chocolate, house-made</p>
              <p className="text-leaf font-semibold">$4.25</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mediterranean Food */}
      <section id="food" className="section bg-cream">
        <div className="container">
          <h2 className="font-serif text-4xl font-bold text-espresso text-center mb-12">
            Mediterranean Bites
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card">
              <h3 className="font-serif text-xl font-semibold text-espresso mb-2">Hummus Plate</h3>
              <p className="text-ink mb-3">Creamy chickpea dip with warm pita</p>
              <p className="text-leaf font-semibold">$8.50</p>
            </div>
            
            <div className="card">
              <h3 className="font-serif text-xl font-semibold text-espresso mb-2">Falafel Wrap</h3>
              <p className="text-ink mb-3">Crispy chickpea fritters with tahini</p>
              <p className="text-leaf font-semibold">$12.00</p>
            </div>
            
            <div className="card">
              <h3 className="font-serif text-xl font-semibold text-espresso mb-2">Greek Salad</h3>
              <p className="text-ink mb-3">Fresh vegetables with feta and olives</p>
              <p className="text-leaf font-semibold">$10.50</p>
            </div>
            
            <div className="card">
              <h3 className="font-serif text-xl font-semibold text-espresso mb-2">Shakshuka</h3>
              <p className="text-ink mb-3">Eggs poached in spiced tomato sauce</p>
              <p className="text-leaf font-semibold">$14.00</p>
            </div>
            
            <div className="card">
              <h3 className="font-serif text-xl font-semibold text-espresso mb-2">Baklava</h3>
              <p className="text-ink mb-3">Layered pastry with honey and nuts</p>
              <p className="text-leaf font-semibold">$6.50</p>
            </div>
            
            <div className="card">
              <h3 className="font-serif text-xl font-semibold text-espresso mb-2">Turkish Delight</h3>
              <p className="text-ink mb-3">Rose and pistachio confection</p>
              <p className="text-leaf font-semibold">$5.00</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-espresso text-white">
        <div className="container text-center">
          <h2 className="font-serif text-4xl font-bold mb-6">
            Ready to Experience?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Visit us today or make a reservation to enjoy our menu in person
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/reservations" className="btn bg-white text-espresso hover:bg-cream">
              Book a Table
            </Link>
            <Link href="/contact" className="btn btn-ghost border-white text-white hover:bg-white/10">
              Get Directions
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
