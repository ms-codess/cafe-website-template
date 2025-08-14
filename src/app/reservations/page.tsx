export default function ReservationsPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="section bg-gradient-to-br from-cream via-rose/20 to-gold/10">
        <div className="container text-center">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-espresso mb-6">
            Reservations
          </h1>
          <p className="text-xl text-ink max-w-2xl mx-auto">
            Book your table and experience the magic of Café Miracle
          </p>
        </div>
      </section>

      {/* Booking Info */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-4xl font-bold text-espresso mb-6">
                Make a Reservation
              </h2>
              <p className="text-lg text-ink mb-6 leading-relaxed">
                We accept reservations for groups of 4 or more, or for special occasions. 
                For smaller groups, we operate on a first-come, first-served basis to 
                maintain the welcoming, community atmosphere that makes Café Miracle special.
              </p>
              <p className="text-lg text-ink mb-8 leading-relaxed">
                To make a reservation, please call us directly or send us an email. 
                We'll confirm your booking within 24 hours.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">📞</span>
                  <div>
                    <p className="font-semibold text-ink">Phone Reservations</p>
                    <p className="text-ink">(613) 555-0123</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <span className="text-2xl">✉️</span>
                  <div>
                    <p className="font-semibold text-ink">Email Reservations</p>
                    <p className="text-ink">reservations@cafemiracle.ca</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="card">
                <h3 className="font-serif text-xl font-bold text-espresso mb-4">
                  Reservation Policy
                </h3>
                <ul className="space-y-2 text-ink">
                  <li>• Groups of 4+ can reserve tables</li>
                  <li>• Special occasions welcome</li>
                  <li>• 24-hour advance notice required</li>
                  <li>• 15-minute grace period for late arrivals</li>
                </ul>
              </div>
              
              <div className="card">
                <h3 className="font-serif text-xl font-bold text-espresso mb-4">
                  Special Events
                </h3>
                <p className="text-ink mb-3">
                  Planning a special celebration? We can accommodate:
                </p>
                <ul className="space-y-1 text-ink text-sm">
                  <li>• Birthday parties</li>
                  <li>• Anniversary celebrations</li>
                  <li>• Small business meetings</li>
                  <li>• Art opening receptions</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Walk-in Info */}
      <section className="section bg-cream">
        <div className="container">
          <h2 className="font-serif text-4xl font-bold text-espresso text-center mb-12">
            Walk-in Guests Welcome
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card text-center">
              <div className="text-4xl mb-4">☕</div>
              <h3 className="font-serif text-2xl font-bold text-espresso mb-3">Coffee & Pastries</h3>
              <p className="text-ink">
                Perfect for a quick coffee break or casual meetup. 
                No reservation needed for our café seating.
              </p>
            </div>
            
            <div className="card text-center">
              <div className="text-4xl mb-4">🍽️</div>
              <h3 className="font-serif text-2xl font-bold text-espresso mb-3">Dining</h3>
              <p className="text-ink">
                Our main dining area operates on a first-come basis. 
                Peak hours are 12-2 PM and 6-8 PM.
              </p>
            </div>
            
            <div className="card text-center">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="font-serif text-2xl font-bold text-espresso mb-3">Art Viewing</h3>
              <p className="text-ink">
                Browse our current art exhibition anytime during business hours. 
                No appointment necessary.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Peak Hours */}
      <section className="section bg-white">
        <div className="container">
          <h2 className="font-serif text-4xl font-bold text-espresso text-center mb-12">
            Peak Hours & Tips
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="font-serif text-2xl font-bold text-espresso mb-6">
                Busiest Times
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-espresso/10">
                  <span className="text-ink">Weekday Mornings</span>
                  <span className="font-semibold text-ink">7:00 - 9:00 AM</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-espresso/10">
                  <span className="text-ink">Lunch Rush</span>
                  <span className="font-semibold text-ink">12:00 - 2:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-espresso/10">
                  <span className="text-ink">Dinner Service</span>
                  <span className="font-semibold text-ink">6:00 - 8:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-espresso/10">
                  <span className="text-ink">Weekend Brunch</span>
                  <span className="font-semibold text-ink">9:00 - 11:00 AM</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="font-serif text-2xl font-bold text-espresso mb-6">
                Pro Tips
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-leaf text-xl">💡</span>
                  <div>
                    <p className="font-semibold text-ink">Early Bird Special</p>
                    <p className="text-ink/70">Beat the crowds by arriving before 8 AM</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <span className="text-leaf text-xl">💡</span>
                  <div>
                    <p className="font-semibold text-ink">Mid-Afternoon Lull</p>
                    <p className="text-ink/70">2-5 PM is usually our quietest time</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <span className="text-leaf text-xl">💡</span>
                  <div>
                    <p className="font-semibold text-ink">Weekend Planning</p>
                    <p className="text-ink/70">Saturdays are busiest, Sundays are more relaxed</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <span className="text-leaf text-xl">💡</span>
                  <div>
                    <p className="font-semibold text-ink">Group Dining</p>
                    <p className="text-ink/70">Always call ahead for groups of 6+</p>
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
            Ready to Book?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Contact us today to secure your table at Café Miracle
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+16135550123" 
              className="btn bg-white text-espresso hover:bg-cream"
            >
              Call to Book
            </a>
            <a 
              href="mailto:reservations@cafemiracle.ca" 
              className="btn btn-ghost border-white text-white hover:bg-white/10"
            >
              Email Request
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
