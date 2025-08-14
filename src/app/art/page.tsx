export default function ArtPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="section bg-gradient-to-br from-cream via-rose/20 to-gold/10">
        <div className="container text-center">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-espresso mb-6">
            Art Gallery
          </h1>
          <p className="text-xl text-ink max-w-2xl mx-auto">
            Celebrating local artists and their creative vision in our community space
          </p>
        </div>
      </section>

      {/* Current Exhibition */}
      <section className="section bg-white">
        <div className="container">
          <h2 className="font-serif text-4xl font-bold text-espresso text-center mb-12">
            Current Exhibition
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="font-serif text-3xl font-bold text-espresso mb-4">
                "Ottawa Through Local Eyes"
              </h3>
              <p className="text-lg text-ink mb-6 leading-relaxed">
                This month, we're proud to showcase the work of three talented local artists 
                who capture the essence of Ottawa in their unique styles.
              </p>
              <p className="text-lg text-ink mb-6 leading-relaxed">
                From urban landscapes to intimate portraits, each piece tells a story 
                of our city and its people. The exhibition runs until the end of the month.
              </p>
              <div className="flex items-center gap-4 text-sm text-ink/70">
                <span>📅 Until August 31st</span>
                <span>🎨 Free Admission</span>
              </div>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-soft">
              <div className="absolute inset-0 bg-gradient-to-br from-leaf/20 to-gold/20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-6xl text-espresso/60">🖼️</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Artists */}
      <section className="section bg-cream">
        <div className="container">
          <h2 className="font-serif text-4xl font-bold text-espresso text-center mb-12">
            Featured Artists
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card text-center">
              <div className="text-4xl mb-4">👩‍🎨</div>
              <h3 className="font-serif text-2xl font-bold text-espresso mb-3">Sarah Chen</h3>
              <p className="text-ink mb-4">
                Watercolor artist specializing in urban landscapes and architectural studies. 
                Sarah's work captures the changing face of Ottawa's neighborhoods.
              </p>
              <div className="text-sm text-ink/70">
                <p>Medium: Watercolor & Ink</p>
                <p>Style: Contemporary Realism</p>
              </div>
            </div>
            
            <div className="card text-center">
              <div className="text-4xl mb-4">👨‍🎨</div>
              <h3 className="font-serif text-2xl font-bold text-espresso mb-3">Marcus Rodriguez</h3>
              <p className="text-ink mb-4">
                Mixed media artist exploring themes of community and connection. 
                Marcus creates vibrant, textured pieces that celebrate diversity.
              </p>
              <div className="text-sm text-ink/70">
                <p>Medium: Mixed Media</p>
                <p>Style: Abstract Expressionism</p>
              </div>
            </div>
            
            <div className="card text-center">
              <div className="text-4xl mb-4">👩‍🎨</div>
              <h3 className="font-serif text-2xl font-bold text-espresso mb-3">Emma Thompson</h3>
              <p className="text-ink mb-4">
                Photographer documenting everyday moments in Ottawa. 
                Emma's work reveals the beauty in ordinary life and local culture.
              </p>
              <div className="text-sm text-ink/70">
                <p>Medium: Photography</p>
                <p>Style: Documentary</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Art Program */}
      <section className="section bg-white">
        <div className="container">
          <h2 className="font-serif text-4xl font-bold text-espresso text-center mb-12">
            Our Art Program
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="font-serif text-2xl font-bold text-espresso mb-6">
                Supporting Local Creativity
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-leaf text-xl">✓</span>
                  <div>
                    <p className="font-semibold text-ink">Monthly Rotations</p>
                    <p className="text-ink/70">New exhibitions every month featuring different artists</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <span className="text-leaf text-xl">✓</span>
                  <div>
                    <p className="font-semibold text-ink">Artist Support</p>
                    <p className="text-ink/70">Commission-free sales and promotional support</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <span className="text-leaf text-xl">✓</span>
                  <div>
                    <p className="font-semibold text-ink">Community Events</p>
                    <p className="text-ink/70">Opening receptions and artist talks</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <span className="text-leaf text-xl">✓</span>
                  <div>
                    <p className="font-semibold text-ink">Networking</p>
                    <p className="text-ink/70">Connecting artists with art lovers and collectors</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="p-6 bg-cream rounded-lg">
                <h4 className="font-serif text-lg font-semibold text-espresso mb-3">
                  Want to Exhibit?
                </h4>
                <p className="text-ink mb-4">
                  We're always looking for new local artists to showcase. 
                  Send us your portfolio and exhibition proposal.
                </p>
                <a 
                  href="mailto:art@cafemiracle.ca" 
                  className="text-leaf hover:underline font-semibold"
                >
                  Submit Your Work →
                </a>
              </div>
              
              <div className="p-6 bg-rose/10 rounded-lg">
                <h4 className="font-serif text-lg font-semibold text-espresso mb-3">
                  Art for Sale
                </h4>
                <p className="text-ink mb-4">
                  All exhibited artwork is available for purchase. 
                  Support local artists and take home a piece of Ottawa.
                </p>
                <p className="text-sm text-ink/70">
                  Contact us for pricing and availability
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-espresso text-white">
        <div className="container text-center">
          <h2 className="font-serif text-4xl font-bold mb-6">
            Experience Local Art
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Visit us to see the current exhibition and discover Ottawa's artistic talent
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:art@cafemiracle.ca" 
              className="btn bg-white text-espresso hover:bg-cream"
            >
              Contact Curator
            </a>
            <a 
              href="/contact" 
              className="btn btn-ghost border-white text-white hover:bg-white/10"
            >
              Visit Gallery
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
