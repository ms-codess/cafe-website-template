export default function ContactPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="section bg-gradient-to-br from-cream via-rose/20 to-gold/10">
        <div className="container text-center">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-espresso mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-ink max-w-2xl mx-auto">
            Visit us in Beechwood or get in touch. We'd love to hear from you!
          </p>
        </div>
      </section>

      {/* Location & Hours */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Location */}
            <div>
              <h2 className="font-serif text-3xl font-bold text-espresso mb-6">
                Find Us
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">📍</span>
                  <div>
                    <p className="font-semibold text-ink">Café Miracle</p>
                    <p className="text-ink">123 Beechwood Avenue</p>
                    <p className="text-ink">Ottawa, ON K1M 1M9</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <span className="text-2xl">📞</span>
                  <div>
                    <p className="font-semibold text-ink">Phone</p>
                    <p className="text-ink">(613) 555-0123</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <span className="text-2xl">✉️</span>
                  <div>
                    <p className="font-semibold text-ink">Email</p>
                    <p className="text-ink">hello@cafemiracle.ca</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div>
              <h2 className="font-serif text-3xl font-bold text-espresso mb-6">
                Hours
              </h2>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-espresso/10">
                  <span className="text-ink">Monday - Friday</span>
                  <span className="font-semibold text-ink">7:00 AM - 9:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-espresso/10">
                  <span className="text-ink">Saturday</span>
                  <span className="font-semibold text-ink">8:00 AM - 10:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-espresso/10">
                  <span className="text-ink">Sunday</span>
                  <span className="font-semibold text-ink">8:00 AM - 8:00 PM</span>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-cream rounded-lg">
                <p className="text-sm text-ink">
                  <strong>Note:</strong> Hours may vary on holidays. 
                  Follow us on social media for updates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="section bg-cream">
        <div className="container">
          <h2 className="font-serif text-3xl font-bold text-espresso text-center mb-8">
            Location
          </h2>
          <div className="relative h-96 rounded-2xl overflow-hidden shadow-soft bg-gradient-to-br from-leaf/20 to-gold/20">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <span className="text-6xl text-espresso/60 mb-4 block">🗺️</span>
                <p className="text-lg text-espresso font-semibold">Interactive Map Coming Soon</p>
                <p className="text-espresso/70">Located in the heart of Beechwood Village</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Getting There */}
      <section className="section bg-white">
        <div className="container">
          <h2 className="font-serif text-3xl font-bold text-espresso text-center mb-12">
            Getting There
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card text-center">
              <div className="text-4xl mb-4">🚌</div>
              <h3 className="font-serif text-xl font-bold text-espresso mb-3">Public Transit</h3>
              <p className="text-ink mb-4">
                OC Transpo routes 5, 7, and 85 serve Beechwood Avenue. 
                Get off at the Beechwood & St. Laurent stop.
              </p>
            </div>
            
            <div className="card text-center">
              <div className="text-4xl mb-4">🚗</div>
              <h3 className="font-serif text-xl font-bold text-espresso mb-3">Driving</h3>
              <p className="text-ink mb-4">
                Free street parking available on Beechwood Avenue. 
                Additional parking behind the building.
              </p>
            </div>
            
            <div className="card text-center">
              <div className="text-4xl mb-4">🚶</div>
              <h3 className="font-serif text-xl font-bold text-espresso mb-3">Walking</h3>
              <p className="text-ink mb-4">
                Located in the heart of Beechwood Village, 
                easily accessible from surrounding neighborhoods.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-espresso text-white">
        <div className="container text-center">
          <h2 className="font-serif text-4xl font-bold mb-6">
            Ready to Visit?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            We can't wait to welcome you to Café Miracle
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+16135550123" 
              className="btn bg-white text-espresso hover:bg-cream"
            >
              Call Us Now
            </a>
            <a 
              href="mailto:hello@cafemiracle.ca" 
              className="btn btn-ghost border-white text-white hover:bg-white/10"
            >
              Send Email
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
