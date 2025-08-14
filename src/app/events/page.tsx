import Link from 'next/link'

export default function EventsPage() {
  return (
    <main className="min-h-screen bg-cream">
      {/* Hero */}
      <section className="section bg-gradient-to-br from-cream via-rose/20 to-gold/10">
        <div className="container text-center">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-espresso mb-6">
            Events & Workshops
          </h1>
          <p className="text-xl text-ink max-w-2xl mx-auto">
            Join our community for creative workshops, paint nights, and special gatherings
          </p>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="section bg-white">
        <div className="container">
          <h2 className="font-serif text-4xl font-bold text-espresso text-center mb-12">
            Upcoming Events
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card">
              <div className="text-4xl mb-4 text-gold">🎨</div>
              <h3 className="font-serif text-xl font-bold text-espresso mb-3">Paint Night</h3>
              <p className="text-ink mb-4">
                Express your creativity with guided painting sessions. 
                All skill levels welcome!
              </p>
              <div className="text-sm text-ink/70 mb-4">
                <p>📅 Every Thursday, 7:00 PM</p>
                <p>💰 $25 (includes materials)</p>
              </div>
              <Link href="/contact" className="text-leaf hover:underline font-semibold">
                Reserve Your Spot →
              </Link>
            </div>
            
            <div className="card">
              <div className="text-4xl mb-4 text-gold">☕</div>
              <h3 className="font-serif text-xl font-bold text-espresso mb-3">Coffee & Conversation</h3>
              <p className="text-ink mb-4">
                Join fellow coffee enthusiasts for morning discussions 
                about art, culture, and community.
              </p>
              <div className="text-sm text-ink/70 mb-4">
                <p>📅 Every Saturday, 9:00 AM</p>
                <p>💰 Free (coffee purchase encouraged)</p>
              </div>
              <Link href="/contact" className="text-leaf hover:underline font-semibold">
                Join Us →
              </Link>
            </div>
            
            <div className="card">
              <div className="text-4xl mb-4 text-gold">🎭</div>
              <h3 className="font-serif text-xl font-bold text-espresso mb-3">Artist Meet & Greet</h3>
              <p className="text-ink mb-4">
                Meet our featured artists and learn about their work. 
                Light refreshments provided.
              </p>
              <div className="text-sm text-ink/70 mb-4">
                <p>📅 First Sunday of each month</p>
                <p>💰 Free admission</p>
              </div>
              <Link href="/contact" className="text-leaf hover:underline font-semibold">
                RSVP →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Workshop Series */}
      <section className="section bg-rose/10">
        <div className="container">
          <h2 className="font-serif text-4xl font-bold text-espresso text-center mb-12">
            Workshop Series
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="font-serif text-2xl font-bold text-espresso mb-6">
                Creative Workshops
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-leaf text-xl">✓</span>
                  <div>
                    <p className="font-semibold text-ink">Watercolor Basics</p>
                    <p className="text-ink/70">Learn fundamental techniques with local artist Sarah Chen</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <span className="text-leaf text-xl">✓</span>
                  <div>
                    <p className="font-semibold text-ink">Photography Fundamentals</p>
                    <p className="text-ink/70">Capture beautiful moments with Emma Thompson</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <span className="text-leaf text-xl">✓</span>
                  <div>
                    <p className="font-semibold text-ink">Mixed Media Art</p>
                    <p className="text-ink/70">Explore texture and composition with Marcus Rodriguez</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="p-6 bg-white rounded-lg shadow-soft">
                <h4 className="font-serif text-lg font-semibold text-espresso mb-3">
                  Private Events
                </h4>
                <p className="text-ink mb-4">
                  Host your own workshop or private gathering in our space. 
                  Perfect for team building, birthday parties, or special celebrations.
                </p>
                <Link href="/contact" className="text-leaf hover:underline font-semibold">
                  Inquire About Space →
                </Link>
              </div>
              
              <div className="p-6 bg-white rounded-lg shadow-soft">
                <h4 className="font-serif text-lg font-semibold text-espresso mb-3">
                  Community Partnerships
                </h4>
                <p className="text-ink mb-4">
                  We collaborate with local artists, musicians, and creatives 
                  to bring unique experiences to our community.
                </p>
                <Link href="/contact" className="text-leaf hover:underline font-semibold">
                  Partner With Us →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Calendar */}
      <section className="section bg-white">
        <div className="container">
          <h2 className="font-serif text-4xl font-bold text-espresso text-center mb-12">
            Monthly Calendar
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-serif text-2xl font-bold text-espresso mb-6">Regular Events</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-gold/30">
                    <span className="text-ink">Mondays</span>
                    <span className="font-semibold text-ink">Community Coffee Hour</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gold/30">
                    <span className="text-ink">Thursdays</span>
                    <span className="font-semibold text-ink">Paint Night</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gold/30">
                    <span className="text-ink">Saturdays</span>
                    <span className="font-semibold text-ink">Coffee & Conversation</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gold/30">
                    <span className="text-ink">1st Sunday</span>
                    <span className="font-semibold text-ink">Artist Meet & Greet</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="font-serif text-2xl font-bold text-espresso mb-6">Special Workshops</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-rose/10 rounded-lg">
                    <p className="font-semibold text-ink">Watercolor Workshop</p>
                    <p className="text-sm text-ink/70">2nd Saturday, 2:00 PM</p>
                  </div>
                  <div className="p-4 bg-rose/10 rounded-lg">
                    <p className="font-semibold text-ink">Photography Walk</p>
                    <p className="text-sm text-ink/70">3rd Saturday, 10:00 AM</p>
                  </div>
                  <div className="p-4 bg-rose/10 rounded-lg">
                    <p className="font-semibold text-ink">Mixed Media Art</p>
                    <p className="text-sm text-ink/70">4th Saturday, 2:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-espresso text-white">
        <div className="container text-center">
          <h2 className="font-serif text-4xl font-bold mb-6">
            Join Our Community
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Connect with fellow creatives and coffee lovers at Café Miracle
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn bg-white text-espresso hover:bg-cream">
              Contact Us
            </Link>
            <a 
              href="tel:+16135550123" 
              className="btn btn-ghost border-white text-white hover:bg-white/10"
            >
              Call to Book
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
