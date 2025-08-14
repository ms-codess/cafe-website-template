export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="section bg-gradient-to-br from-cream via-rose/20 to-gold/10">
        <div className="container text-center">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-espresso mb-6">
            Our Story
          </h1>
          <p className="text-xl text-ink max-w-2xl mx-auto">
            From a dream of community connection to Beechwood's beloved gathering place
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-4xl font-bold text-espresso mb-6">
                The Miracle Begins
              </h2>
              <p className="text-lg text-ink mb-6 leading-relaxed">
                Café Miracle was born from a simple vision: to create a space where coffee, 
                culture, and community could come together in perfect harmony. What started 
                as a small coffee cart in 2018 has grown into Beechwood's most cherished 
                gathering place.
              </p>
              <p className="text-lg text-ink mb-6 leading-relaxed">
                Our founder, Sarah, spent years traveling through Mediterranean countries, 
                learning the art of coffee preparation and falling in love with the region's 
                rich culinary traditions. She brought these experiences back to Ottawa, 
                determined to share the magic she had discovered.
              </p>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-soft">
              <div className="absolute inset-0 bg-gradient-to-br from-leaf/20 to-gold/20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-6xl text-espresso/60">🌟</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="section bg-cream">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-espresso mb-6">
              Our Mission
            </h2>
            <p className="text-xl text-ink max-w-3xl mx-auto">
              To create meaningful connections through exceptional coffee, authentic cuisine, 
              and the celebration of local artistic talent.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card text-center">
              <div className="text-4xl mb-4">☕</div>
              <h3 className="font-serif text-2xl font-bold text-espresso mb-3">Quality Coffee</h3>
              <p className="text-ink">
                We source the finest single-origin beans and roast them to perfection, 
                ensuring every cup delivers an exceptional experience.
              </p>
            </div>
            
            <div className="card text-center">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="font-serif text-2xl font-bold text-espresso mb-3">Authentic Cuisine</h3>
              <p className="text-ink">
                Our Mediterranean-inspired menu honors traditional recipes while 
                embracing local, seasonal ingredients.
              </p>
            </div>
            
            <div className="card text-center">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="font-serif text-2xl font-bold text-espresso mb-3">Community Art</h3>
              <p className="text-ink">
                We provide a platform for local artists to showcase their work, 
                enriching our space and supporting creative expression.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section bg-espresso text-white">
        <div className="container">
          <h2 className="font-serif text-4xl font-bold text-center mb-12">
            Our Values
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-serif text-2xl font-semibold mb-4">Sustainability</h3>
              <p className="text-rose mb-6">
                We're committed to eco-friendly practices, from compostable packaging 
                to supporting fair-trade coffee producers and reducing our carbon footprint.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-2xl font-semibold mb-4">Community</h3>
              <p className="text-rose mb-6">
                Café Miracle is more than a business—it's a gathering place where 
                neighbors become friends and strangers become family.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-2xl font-semibold mb-4">Authenticity</h3>
              <p className="text-rose mb-6">
                Every recipe, every coffee blend, and every artistic choice reflects 
                our commitment to genuine, meaningful experiences.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-2xl font-semibold mb-4">Excellence</h3>
              <p className="text-rose mb-6">
                We never compromise on quality, from the beans we select to the 
                service we provide to the art we showcase.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
