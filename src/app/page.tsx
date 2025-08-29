"use client"

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function HomePage() {
  const [cart, setCart] = useState<Array<{name: string, price: number, description: string, quantity: number}>>([]);
  const [showCart, setShowCart] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    phone: '',
    pickupTime: '',
    pickupLocation: 'Café Miracle - 141 Beechwood Avenue'
  });

  const addToCart = (name: string, price: number, description: string) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.name === name);
      if (existingItem) {
        return prevCart.map(item => 
          item.name === name 
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { name, price, description, quantity: 1 }];
    });
    setShowCart(true);
  };

  const removeFromCart = (name: string) => {
    setCart(prevCart => prevCart.filter(item => item.name !== name));
  };

  const updateQuantity = (name: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeFromCart(name);
      return;
    }
    setCart(prevCart => 
      prevCart.map(item => 
        item.name === name ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const handleOrderSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the order to your backend
    alert(`Order submitted! Total: $${getTotalPrice().toFixed(2)}\nPickup at: ${customerInfo.pickupLocation}\nTime: ${customerInfo.pickupTime}`);
    setCart([]);
    setShowCart(false);
    setCustomerInfo({ name: '', phone: '', pickupTime: '', pickupLocation: 'Café Miracle - 141 Beechwood Avenue' });
  };

  return (
    <main className="min-h-screen bg-seashell">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/coffeee.jpg"
            alt="Café Miracle - Beautiful Coffee"
            fill
            className="object-cover"
            priority
            quality={95}
          />
          <div className="absolute inset-0 bg-wenge-900/50"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <div className="mb-8">
            <Image
              src="/cafe-logo.jpg"
              alt="Café Miracle Logo"
              width={120}
              height={120}
              className="mx-auto rounded-full border-4 border-seashell-200/40 shadow-2xl"
            />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 font-serif text-white">
            Café Miracle
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/95 max-w-2xl mx-auto">
            A warm corner for coffee & miracles
          </p>
          <p className="text-lg mb-12 text-white/90">
            Artisan Coffee • Mediterranean Delights • Creative Workshops
          </p>
          
                      <div className="flex justify-center">
              <Link
                href="#menu"
                className="bg-rose-taupe hover:bg-rose-taupe-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                View Menu & Order
              </Link>
            </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative overflow-hidden">
        {/* Background Photo Collage */}
        <div className="absolute inset-0 grid grid-cols-2 gap-2 opacity-20">
          <div className="relative overflow-hidden">
            <Image
              src="/cafe-interior-window.jpg.webp"
              alt="Coffee Window"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative overflow-hidden">
            <Image
              src="/turkish-coffee-pour.jpg.jpg"
              alt="Turkish Coffee"
              fill
              className="object-cover"
            />
          </div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 max-w-6xl">
          <div className="bg-seashell/90 backdrop-blur-sm rounded-3xl p-12 border border-desert-sand-200 shadow-lg">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-wenge mb-8 font-serif">
                Our Story
              </h2>
              <p className="text-lg text-wenge-700 mb-6 leading-relaxed">
                Like the organic elements in our identity, we grow from strong roots of community, 
                creativity, and authentic Mediterranean hospitality.
              </p>
              <p className="text-lg text-wenge-700 mb-8 leading-relaxed">
                Every connection represents a story, every gathering the love we pour into every cup and creative moment. 
                We believe in the power of community and the magic that happens when people come together over great coffee.
              </p>

            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/cafe-exterior.jpg.webp"
                  alt="Café Miracle Exterior - Our Beautiful Cafe Building"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 relative overflow-hidden">
        {/* Background Photo Collage */}
        <div className="absolute inset-0 grid grid-cols-2 gap-2 opacity-20">
          <div className="relative overflow-hidden">
            <Image
              src="/baklava-display.jpg.jpg"
              alt="Baklava Display"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative overflow-hidden">
            <Image
              src="/coffee-baklava.jp.jpg"
              alt="Coffee and Baklava"
              fill
              className="object-cover"
            />
          </div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 max-w-6xl">
          <div className="bg-seashell/90 backdrop-blur-sm rounded-3xl p-12 border border-desert-sand-200 shadow-lg">
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-12">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-wenge mb-8 font-serif">
                  Order Online
                </h2>
                <p className="text-lg text-wenge-700 mb-6 leading-relaxed">
                  Discover our carefully crafted selection of coffee, Mediterranean delights, and artisanal pastries
                </p>
                <p className="text-lg text-wenge-700 mb-8 leading-relaxed">
                  Each item is prepared with love and the finest ingredients. Order online for quick pickup!
                </p>

              </div>
              
              <div className="relative">
                <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="/bakery-counter-display.jpg.webp"
                    alt="Bakery Counter Display - Our Beautiful Pastries"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
            
            {/* Category Filters */}
            <div className="flex flex-wrap gap-4 mb-8 justify-center">
              <button 
                onClick={() => setSelectedCategory('all')}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                  selectedCategory === 'all' 
                    ? 'bg-rose-taupe text-white shadow-lg' 
                    : 'bg-desert-sand-100 text-wenge-700 hover:bg-desert-sand-200'
                }`}
              >
                🍽️ All Items
              </button>
              <button 
                onClick={() => setSelectedCategory('coffee')}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                  selectedCategory === 'coffee' 
                    ? 'bg-rose-taupe text-white shadow-lg' 
                    : 'bg-desert-sand-100 text-wenge-700 hover:bg-desert-sand-200'
                }`}
              >
                ☕ Coffee & Drinks
              </button>
              <button 
                onClick={() => setSelectedCategory('food')}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                  selectedCategory === 'food' 
                    ? 'bg-rose-taupe text-white shadow-lg' 
                    : 'bg-desert-sand-200 text-wenge-700 hover:bg-desert-sand-300'
                }`}
              >
                🥐 Food & Sandwiches
              </button>
              <button 
                onClick={() => setSelectedCategory('pastries')}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                  selectedCategory === 'pastries' 
                    ? 'bg-rose-taupe text-white shadow-lg' 
                    : 'bg-desert-sand-100 text-wenge-700 hover:bg-desert-sand-200'
                }`}
              >
                🍰 Mediterranean Bites
              </button>
            </div>

            {/* Menu Items */}
            <div className="space-y-6">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-rose-taupe/20 rounded-full flex items-center justify-center">
                  <span className="text-2xl">☕</span>
                </div>
                <h3 className="text-2xl font-bold text-wenge">Coffee & Drinks</h3>
              </div>
              <div className="space-y-2 text-left">
                <div className="flex justify-between items-center py-2 border-b border-neutral-200 px-3">
                  <div>
                    <span className="font-medium text-neutral-800">Turkish Coffee</span>
                    <p className="text-neutral-600 text-sm">Traditional brewing method</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-neutral-700 font-bold text-lg">$5.50</span>
                    <button 
                      onClick={() => addToCart('Turkish Coffee', 5.50, 'Traditional brewing method')}
                      className="bg-rose-taupe hover:bg-rose-taupe-700 text-white px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-105 font-semibold shadow-lg hover:shadow-xl"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-neutral-200 px-3">
                  <div>
                    <span className="font-medium text-neutral-800">Espresso</span>
                    <p className="text-neutral-600 text-sm">Single shot of premium espresso</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-neutral-700 font-bold text-lg">$3.50</span>
                    <button 
                      onClick={() => addToCart('Espresso', 3.50, 'Single shot of premium espresso')}
                      className="bg-rose-taupe hover:bg-rose-taupe-700 text-white px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-105 font-semibold shadow-lg hover:shadow-xl"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-neutral-200 px-3">
                  <div>
                    <span className="font-medium text-neutral-800">Cappuccino</span>
                    <p className="text-neutral-600 text-sm">Espresso with steamed milk & foam</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-neutral-700 font-bold text-lg">$4.50</span>
                    <button 
                      onClick={() => addToCart('Cappuccino', 4.50, 'Espresso with steamed milk & foam')}
                      className="bg-rose-taupe hover:bg-rose-taupe-700 text-white px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-105 font-semibold shadow-lg hover:shadow-xl"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-neutral-200 px-3">
                  <div>
                    <span className="font-medium text-neutral-800">Latte</span>
                    <p className="text-neutral-600 text-sm">Espresso with steamed milk</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-neutral-700 font-bold text-lg">$4.75</span>
                    <button 
                      onClick={() => addToCart('Latte', 4.75, 'Espresso with steamed milk')}
                      className="bg-rose-taupe hover:bg-rose-taupe-700 text-white px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-105 font-semibold shadow-lg hover:shadow-xl"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-neutral-200 px-3">
                  <div>
                    <span className="font-medium text-neutral-800">Mocha</span>
                    <p className="text-neutral-600 text-sm">Espresso with chocolate & milk</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-neutral-700 font-bold text-lg">$5.25</span>
                    <button 
                      onClick={() => addToCart('Mocha', 5.25, 'Espresso with chocolate & milk')}
                      className="bg-rose-taupe hover:bg-rose-taupe-700 text-white px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-105 font-semibold shadow-lg hover:shadow-xl"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-neutral-200 px-3">
                  <div>
                    <span className="font-medium text-neutral-800">Milk Miracle</span>
                    <p className="text-neutral-600 text-sm">Our signature coffee creation</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-neutral-700 font-bold text-lg">$6.50</span>
                    <button 
                      onClick={() => addToCart('Milk Miracle', 6.50, 'Our signature coffee creation')}
                      className="bg-rose-taupe hover:bg-rose-taupe-700 text-white px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-105 font-semibold shadow-lg hover:shadow-xl"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Mediterranean Bites */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-rose-taupe/20 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🥐</span>
                </div>
                <h3 className="text-2xl font-bold text-wenge">Mediterranean Bites</h3>
              </div>
              <div className="space-y-2 text-left">
                <div className="flex justify-between items-center py-2 border-b border-neutral-200 px-3">
                  <div>
                    <span className="font-medium text-neutral-800">Velvet Baklava</span>
                    <p className="text-neutral-600 text-sm">Rich chocolate with pistachios</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-neutral-700 font-bold text-lg">$8.50</span>
                    <button 
                      onClick={() => addToCart('Velvet Baklava', 8.50, 'Rich chocolate with pistachios')}
                      className="bg-rose-taupe hover:bg-rose-taupe-700 text-white px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-105 font-semibold shadow-lg hover:shadow-xl"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-neutral-200 px-3">
                  <div>
                    <span className="font-medium text-neutral-800">CoCoLoco</span>
                    <p className="text-neutral-600 text-sm">Lemon poppy seed cake</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-neutral-700 font-bold text-lg">$7.50</span>
                    <button 
                      onClick={() => addToCart('CoCoLoco', 7.50, 'Lemon poppy seed cake')}
                      className="bg-rose-taupe hover:bg-rose-taupe-700 text-white px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-105 font-semibold shadow-lg hover:shadow-xl"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-neutral-200 px-3">
                  <div>
                    <span className="font-medium text-neutral-800">Miracita</span>
                    <p className="text-neutral-600 text-sm">Cherry yogurt danish</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-neutral-700 font-bold text-lg">$6.75</span>
                    <button 
                      onClick={() => addToCart('Miracita', 6.75, 'Cherry yogurt danish')}
                      className="bg-rose-taupe hover:bg-rose-taupe-700 text-white px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-105 font-semibold shadow-lg hover:shadow-xl"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-neutral-200 px-3">
                  <div>
                    <span className="font-medium text-neutral-800">Spinach Borek</span>
                    <p className="text-neutral-600 text-sm">Phyllo with spinach & feta</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-neutral-700 font-bold text-lg">$8.75</span>
                    <button 
                      onClick={() => addToCart('Spinach Borek', 8.75, 'Phyllo with spinach & feta')}
                      className="bg-rose-taupe hover:bg-rose-taupe-700 text-white px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-105 font-semibold shadow-lg hover:shadow-xl"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-neutral-200 px-3">
                  <div>
                    <span className="font-medium text-neutral-800">Hummus Plate</span>
                    <p className="text-neutral-600 text-sm">Fresh hummus with pita</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-neutral-700 font-bold text-lg">$9.50</span>
                    <button 
                      onClick={() => addToCart('Hummus Plate', 9.50, 'Fresh hummus with pita')}
                      className="bg-rose-taupe hover:bg-rose-taupe-700 text-white px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-105 font-semibold shadow-lg hover:shadow-xl"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Sandwiches & Paninis */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-rose-taupe/20 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🥪</span>
                </div>
                <h3 className="text-2xl font-bold text-wenge">Sandwiches & Paninis</h3>
              </div>
              <div className="space-y-2 text-left">
                <div className="flex justify-between items-center py-2 border-b border-neutral-200 px-3">
                  <div>
                    <span className="font-medium text-neutral-800">Falafel Wrap</span>
                    <p className="text-neutral-600 text-sm">Crispy falafel with tahini sauce</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-neutral-700 font-bold text-lg">$10.25</span>
                    <button 
                      onClick={() => addToCart('Falafel Wrap', 10.25, 'Crispy falafel with tahini sauce')}
                      className="bg-rose-taupe hover:bg-rose-taupe-700 text-white px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-105 font-semibold shadow-lg hover:shadow-xl"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-neutral-200 px-3">
                  <div>
                    <span className="font-medium text-neutral-800">Mediterranean Club</span>
                    <p className="text-neutral-600 text-sm">Turkey, hummus, cucumber, tomato</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-neutral-700 font-bold text-lg">$13.75</span>
                    <button 
                      onClick={() => addToCart('Mediterranean Club', 13.75, 'Turkey, hummus, cucumber, tomato')}
                      className="bg-rose-taupe hover:bg-rose-taupe-700 text-white px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-105 font-semibold shadow-lg hover:shadow-xl"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-neutral-200 px-3">
                  <div>
                    <span className="font-medium text-neutral-800">Veggie Delight</span>
                    <p className="text-neutral-600 text-sm">Fresh vegetables with avocado spread</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-neutral-700 font-bold text-lg">$11.50</span>
                    <button 
                      onClick={() => addToCart('Veggie Delight', 11.50, 'Fresh vegetables with avocado spread')}
                      className="bg-rose-taupe hover:bg-rose-taupe-700 text-white px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-105 font-semibold shadow-lg hover:shadow-xl"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-neutral-200 px-3">
                  <div>
                    <span className="font-medium text-neutral-800">Chicken Shawarma</span>
                    <p className="text-neutral-600 text-sm">Marinated chicken with garlic sauce</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-neutral-700 font-bold text-lg">$14.25</span>
                    <button 
                      onClick={() => addToCart('Chicken Shawarma', 14.25, 'Marinated chicken with garlic sauce')}
                      className="bg-rose-taupe hover:bg-rose-taupe-700 text-white px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-105 font-semibold shadow-lg hover:shadow-xl"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-neutral-200 px-3">
                  <div>
                    <span className="font-medium text-neutral-800">Tuna Melt</span>
                    <p className="text-neutral-600 text-sm">Tuna salad with melted cheese</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-neutral-700 font-bold text-lg">$12.75</span>
                    <button 
                      onClick={() => addToCart('Tuna Melt', 12.75, 'Tuna salad with melted cheese')}
                      className="bg-rose-taupe hover:bg-rose-taupe-700 text-white px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-105 font-semibold shadow-lg hover:shadow-xl"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Brunch & Breakfast */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-rose-taupe/20 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🍳</span>
                </div>
                <h3 className="text-2xl font-bold text-wenge">Brunch & Breakfast</h3>
              </div>
              <div className="space-y-2 text-left">
                <div className="flex justify-between items-center py-2 border-b border-neutral-200 px-3">
                  <div>
                    <span className="font-medium text-neutral-800">Turkish Breakfast</span>
                    <p className="text-neutral-600 text-sm">Olives, cheese, tomatoes, eggs</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-neutral-700 font-bold text-lg">$16.50</span>
                    <button 
                      onClick={() => addToCart('Turkish Breakfast', 16.50, 'Olives, cheese, tomatoes, eggs')}
                      className="bg-rose-taupe hover:bg-rose-taupe-700 text-white px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-105 font-semibold shadow-lg hover:shadow-xl"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-neutral-200 px-3">
                  <div>
                    <span className="font-medium text-neutral-800">Avocado Toast</span>
                    <p className="text-neutral-600 text-sm">Sourdough with avocado & poached egg</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-neutral-700 font-bold text-lg">$13.75</span>
                    <button 
                      onClick={() => addToCart('Avocado Toast', 13.75, 'Sourdough with avocado & poached egg')}
                      className="bg-rose-taupe hover:bg-rose-taupe-700 text-white px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-105 font-semibold shadow-lg hover:shadow-xl"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-neutral-200 px-3">
                  <div>
                    <span className="font-medium text-neutral-800">Shakshuka</span>
                    <p className="text-neutral-600 text-sm">Eggs poached in tomato sauce</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-neutral-700 font-bold text-lg">$15.25</span>
                    <button 
                      onClick={() => addToCart('Shakshuka', 15.25, 'Eggs poached in tomato sauce')}
                      className="bg-rose-taupe hover:bg-rose-taupe-700 text-white px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-105 font-semibold shadow-lg hover:shadow-xl"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-neutral-200 px-3">
                  <div>
                    <span className="font-medium text-neutral-800">Berry Pancakes</span>
                    <p className="text-neutral-600 text-sm">Fluffy pancakes with fresh berries</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-neutral-700 font-bold text-lg">$12.50</span>
                    <button 
                      onClick={() => addToCart('Berry Pancakes', 12.50, 'Fluffy pancakes with fresh berries')}
                      className="bg-rose-taupe hover:bg-rose-taupe-700 text-white px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-105 font-semibold shadow-lg hover:shadow-xl"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-neutral-200 px-3">
                  <div>
                    <span className="font-medium text-neutral-800">Greek Yogurt Bowl</span>
                    <p className="text-neutral-600 text-sm">Yogurt with honey, nuts & fruits</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-neutral-700 font-bold text-lg">$10.75</span>
                    <button 
                      onClick={() => addToCart('Greek Yogurt Bowl', 10.75, 'Yogurt with honey, nuts & fruits')}
                      className="bg-rose-taupe hover:bg-rose-taupe-700 text-white px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-105 font-semibold shadow-lg hover:shadow-xl"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-neutral-200 px-3">
                  <div>
                    <span className="font-medium text-neutral-800">Breakfast Burrito</span>
                    <p className="text-neutral-600 text-sm">Eggs, cheese, potatoes & salsa</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-neutral-700 font-bold text-lg">$14.50</span>
                    <button 
                      onClick={() => addToCart('Breakfast Burrito', 14.50, 'Eggs, cheese, potatoes & salsa')}
                      className="bg-rose-taupe hover:bg-rose-taupe-700 text-white px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-105 font-semibold shadow-lg hover:shadow-xl"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>

          {/* Shopping Cart & Order Form */}
          {showCart && (
            <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
              <div className="bg-seashell rounded-3xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-desert-sand-200">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-bold text-wenge">Your Order</h3>
                  <button 
                    onClick={() => setShowCart(false)}
                    className="text-rose-taupe hover:text-rose-taupe-700 text-2xl"
                  >
                    ×
                  </button>
                </div>

                {/* Cart Items */}
                {cart.length > 0 ? (
                  <div className="space-y-4 mb-6">
                    {cart.map((item, index) => (
                      <div key={index} className="flex items-center justify-between p-4 bg-desert-sand-50 rounded-xl border border-desert-sand-200">
                        <div className="flex-1">
                          <h4 className="font-semibold text-wenge">{item.name}</h4>
                          <p className="text-sm text-wenge-700">{item.description}</p>
                          <p className="text-rose-taupe font-bold">${item.price}</p>
                        </div>
                        <div className="flex items-center gap-3">
                          <button 
                            onClick={() => updateQuantity(item.name, item.quantity - 1)}
                            className="w-8 h-8 bg-rose-taupe/20 hover:bg-rose-taupe/30 rounded-full flex items-center justify-center text-rose-taupe hover:text-rose-taupe-700"
                          >
                            -
                          </button>
                          <span className="w-8 text-center font-semibold text-wenge">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.name, item.quantity + 1)}
                            className="w-8 h-8 bg-rose-taupe/20 hover:bg-rose-taupe/30 rounded-full flex items-center justify-center text-rose-taupe hover:text-rose-taupe-700"
                          >
                            +
                          </button>
                          <button 
                            onClick={() => removeFromCart(item.name)}
                            className="text-red-500 hover:text-red-700 ml-2"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    ))}
                    
                    <div className="text-right text-xl font-bold text-wenge">
                      Total: ${getTotalPrice().toFixed(2)}
                    </div>
                  </div>
                ) : (
                  <p className="text-neutral-600 text-center py-8">Your cart is empty</p>
                )}

                {/* Customer Information Form */}
                {cart.length > 0 && (
                  <form onSubmit={handleOrderSubmit} className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-wenge mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={customerInfo.name}
                          onChange={(e) => setCustomerInfo({...customerInfo, name: e.target.value})}
                          className="w-full px-4 py-3 border border-desert-sand-300 rounded-xl focus:ring-2 focus:ring-rose-taupe focus:border-transparent"
                          placeholder="Enter your full name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-wenge mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          value={customerInfo.phone}
                          onChange={(e) => setCustomerInfo({...customerInfo, phone: e.target.value})}
                          className="w-full px-4 py-3 border border-desert-sand-300 rounded-xl focus:ring-2 focus:ring-rose-taupe focus:border-transparent"
                          placeholder="(613) 555-0123"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-wenge mb-2">
                        Pickup Location
                      </label>
                      <select
                        value={customerInfo.pickupLocation}
                        onChange={(e) => setCustomerInfo({...customerInfo, pickupLocation: e.target.value})}
                        className="w-full px-4 py-3 border border-desert-sand-300 rounded-xl focus:ring-2 focus:ring-rose-taupe focus:border-transparent"
                      >
                        <option value="Café Miracle - 141 Beechwood Avenue">Café Miracle - 141 Beechwood Avenue</option>
                        <option value="Beechwood Mall Pickup">Beechwood Mall Pickup</option>
                        <option value="Downtown Ottawa Pickup">Downtown Ottawa Pickup</option>
                      </select>
                    </div>
                    
                    <div className="bg-rose-taupe/10 p-4 rounded-xl border border-rose-taupe/20">
                      <div className="flex items-center gap-3">
                        <span className="text-rose-taupe text-xl">💳</span>
                        <div>
                          <h4 className="font-semibold text-wenge mb-1">Payment Information</h4>
                          <p className="text-sm text-wenge-700">
                            Payment will be collected when you pick up your order. We accept cash, credit cards, and debit cards.
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-wenge mb-2">
                        Preferred Pickup Time *
                      </label>
                      <select
                        required
                        value={customerInfo.pickupTime}
                        onChange={(e) => setCustomerInfo({...customerInfo, pickupTime: e.target.value})}
                        className="w-full px-4 py-3 border border-desert-sand-300 rounded-xl focus:ring-2 focus:ring-rose-taupe focus:border-transparent"
                      >
                        <option value="">Select pickup time</option>
                        <option value="ASAP (15-20 min)">ASAP (15-20 min)</option>
                        <option value="30 minutes">30 minutes</option>
                        <option value="1 hour">1 hour</option>
                        <option value="2 hours">2 hours</option>
                        <option value="3+ hours">3+ hours</option>
                      </select>
                    </div>

                                        <div className="bg-desert-sand-50 p-4 rounded-xl border border-desert-sand-200">
                      <h4 className="font-semibold text-wenge mb-2">Pickup Hours</h4>
                      <p className="text-sm text-wenge-700">
                        <strong>Everyday:</strong> 7:00 AM - 7:00 PM<br/>
                        <strong>Sunday:</strong> 7:00 AM - 5:00 PM
                      </p>
                      <p className="text-sm text-wenge-600 mt-2">
                        Orders are typically ready in 15-20 minutes. We'll call you when it's ready!
                      </p>
                    </div>
                    
                    <div className="flex gap-4 pt-4">
                      <button
                        type="submit"
                        className="flex-1 bg-rose-taupe hover:bg-rose-taupe-700 text-white py-4 rounded-xl font-semibold transition-colors shadow-lg"
                      >
                        Place Order - ${getTotalPrice().toFixed(2)}
                      </button>
                      <button
                        type="button"
                        onClick={() => setShowCart(false)}
                        className="px-6 py-4 border border-desert-sand-300 text-wenge hover:bg-desert-sand-50 rounded-xl font-semibold transition-colors"
                      >
                        Continue Shopping
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          )}

          {/* Cart Summary */}
          <div className="mt-12 text-center">
            <div className="bg-desert-sand-50 p-6 rounded-2xl border border-desert-sand-200">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-2xl">🛒</span>
                <h3 className="text-xl font-semibold text-wenge">Your Cart</h3>
                <span className="text-2xl">🛒</span>
              </div>
              
              {cart.length === 0 ? (
                <p className="text-wenge-700 mb-4">Your cart is empty. Add some delicious items!</p>
              ) : (
                <div className="mb-4">
                  <p className="text-wenge-700 mb-2">
                    <strong>{cart.reduce((total, item) => total + item.quantity, 0)} items</strong> in your cart
                  </p>
                  <p className="text-lg font-bold text-rose-taupe">
                    Total: ${getTotalPrice().toFixed(2)}
                  </p>
                </div>
              )}
              
              <button 
                onClick={() => setShowCart(true)}
                disabled={cart.length === 0}
                className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg ${
                  cart.length === 0 
                    ? 'bg-desert-sand-300 text-desert-sand-500 cursor-not-allowed' 
                    : 'bg-rose-taupe hover:bg-rose-taupe-700 text-white hover:shadow-xl'
                }`}
              >
                {cart.length === 0 ? 'Add Items to Cart' : `View Cart (${cart.length} items)`}
              </button>
            </div>
          </div>
        </div>
      </section>



      {/* Miracle Jar Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Background Photo Collage */}
        <div className="absolute inset-0 grid grid-cols-2 gap-2 opacity-20">
          <div className="relative overflow-hidden">
            <Image
              src="/cafe-interior-window.jpg.webp"
              alt="Coffee Window"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative overflow-hidden">
            <Image
              src="/turkish-coffee-pour.jpg.jpg"
              alt="Turkish Coffee"
              fill
              className="object-cover"
            />
          </div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 max-w-4xl">
          <div className="bg-seashell/90 backdrop-blur-sm rounded-3xl p-12 border border-desert-sand-200 shadow-lg">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <Image
                  src="/miracle-jar.jpg.jpg"
                  alt="The Miracle Jar - Take one, Leave one"
                  width={300}
                  height={300}
                  className="rounded-2xl shadow-lg border-2 border-desert-sand-200"
                />
              </div>
              <div className="lg:w-1/2 text-center lg:text-left">
                <h3 className="text-3xl font-bold text-wenge mb-6 font-serif">
                  The Miracle Jar
                </h3>
                <p className="text-lg text-wenge-700 leading-relaxed mb-4 font-medium">
                  Take one. Leave one. A little magic, just when you need it...
                </p>
                <p className="text-lg text-wenge-600 leading-relaxed">
                  Our community jar filled with notes of hope, inspiration, and small miracles. 
                  Share your blessing or take one when your heart needs lifting.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-20 relative overflow-hidden">
        {/* Background Photo Collage */}
        <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 gap-2 opacity-15">
          <div className="relative overflow-hidden">
            <Image
              src="/cafe-interior-window.jpg.webp"
              alt="Coffee Window"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative overflow-hidden">
            <Image
              src="/turkish-coffee-pour.jpg.jpg"
              alt="Turkish Coffee"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative overflow-hidden">
            <Image
              src="/latte-art-mug.jpg.webp"
              alt="Latte Art"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative overflow-hidden">
            <Image
              src="/savory-pastry-dip.jpg.webp"
              alt="Savory Pastry"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative overflow-hidden">
            <Image
              src="/milkmirice.jpg.PNG"
              alt="Milk Miracle"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative overflow-hidden">
            <Image
              src="/baklava-display.jpg.jpg"
              alt="Baklava Display"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative overflow-hidden">
            <Image
              src="/coffee-baklava.jp.jpg"
              alt="Coffee and Baklava"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative overflow-hidden">
            <Image
              src="/bakery-counter.jpg.jpg"
              alt="Bakery Counter"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative overflow-hidden">
            <Image
              src="/iced-latte-glass.jpg.webp"
              alt="Iced Latte"
              fill
              className="object-cover"
            />
          </div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 max-w-6xl">
          <div className="bg-seashell/90 backdrop-blur-sm rounded-3xl p-12 border border-desert-sand-200 shadow-lg">
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-wenge mb-8 font-serif">
                  Events & Workshops
                </h2>
                <p className="text-lg text-wenge-700 mb-6 leading-relaxed">
                  Join our vibrant community for creative workshops, coffee classes, and cultural events
                </p>
                <p className="text-lg text-wenge-700 mb-8 leading-relaxed">
                  Discover new skills, meet fellow coffee enthusiasts, and immerse yourself in our creative community.
                </p>

              </div>
              
              <div className="relative">
                <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="/cafe-interior-window.jpg.webp"
                    alt="Café Interior - Our Creative Space"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-seashell/90 backdrop-blur-sm rounded-2xl p-8 border border-desert-sand-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-20 h-20 bg-rose-taupe/20 rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-3xl">🎨</span>
              </div>
              <h3 className="text-2xl font-bold text-wenge mb-4 text-center">Art Workshops</h3>
              <p className="text-wenge-700 text-center mb-6">Weekly creative sessions for all skill levels</p>
              <div className="text-center">
                <span className="text-wenge-600 font-semibold">Every Saturday • 2PM</span>
              </div>
            </div>
            
            <div className="bg-seashell/90 backdrop-blur-sm rounded-2xl p-8 border border-desert-sand-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-20 h-20 bg-rose-taupe/20 rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-3xl">☕</span>
              </div>
              <h3 className="text-2xl font-bold text-wenge mb-4 text-center">Coffee Classes</h3>
              <p className="text-wenge-700 text-center mb-6">Learn the art of coffee brewing</p>
              <div className="text-center">
                <span className="text-wenge-600 font-semibold">Every Sunday • 11AM</span>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <Link href="#contact" className="bg-rose-taupe hover:bg-rose-taupe-700 text-white px-10 py-4 rounded-full font-semibold transition-colors shadow-lg">
              Contact Us for Events
            </Link>
          </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative overflow-hidden">
        {/* Background Photo Collage */}
        <div className="absolute inset-0 grid grid-cols-2 gap-2 opacity-20">
          <div className="relative overflow-hidden">
            <Image
              src="/cafe-exterior.jpg.webp"
              alt="Café Exterior"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative overflow-hidden">
            <Image
              src="/bakery-counter.jpg.jpg"
              alt="Bakery Counter"
              fill
              className="object-cover"
            />
          </div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 max-w-6xl">
          <div className="bg-seashell/90 backdrop-blur-sm rounded-3xl p-12 border border-desert-sand-200 shadow-lg">
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-wenge mb-8 font-serif">
                  Visit Us
                </h2>
                <p className="text-lg text-wenge-700 mb-6 leading-relaxed">
                  Come experience the magic of Café Miracle in the heart of Ottawa
                </p>
                <p className="text-lg text-wenge-700 mb-8 leading-relaxed">
                  We're more than just a café - we're a creative hub where artists, coffee lovers, and dreamers come together.
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-rose-taupe/20 rounded-full flex items-center justify-center">
                    <span className="text-3xl">📍</span>
                  </div>
                  <div className="w-16 h-16 bg-rose-taupe/20 rounded-full flex items-center justify-center">
                    <span className="text-2xl">☕</span>
                  </div>
                  <div className="w-16 h-16 bg-rose-taupe/20 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🎨</span>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="/cafe-exterior.jpg.webp"
                    alt="Café Exterior - Our Beautiful Location"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="bg-seashell/90 backdrop-blur-sm rounded-2xl p-8 border border-desert-sand-200 shadow-lg">
                <h3 className="text-2xl font-bold text-wenge mb-6">Location & Hours</h3>
                <div className="space-y-4 text-wenge-700 mb-8">
                  <div className="flex items-center gap-3">
                    <span className="text-rose-taupe text-xl">📍</span>
                    <span>141 Beechwood Avenue, Ottawa, ON</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-rose-taupe text-xl">🕒</span>
                    <span>Everyday: 7AM - 7PM</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-rose-taupe text-xl">🕒</span>
                    <span>Sunday: 7AM - 5PM</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-rose-taupe text-xl">📞</span>
                    <span>(613) 555-0123</span>
                  </div>
                </div>
                
                {/* Interactive Map */}
                <div className="mb-6">
                  <h4 className="font-semibold text-wenge mb-3">Find Us</h4>
                  <div className="aspect-video rounded-xl overflow-hidden border border-desert-sand-200 shadow-lg">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2800.8952587!2d-75.6974!3d45.4215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDXCsDI1JzE3LjQiTiA3NcKwNDEnNTAuNiJX!5e0!3m2!1sen!2sca!4v1234567890"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Café Miracle Location"
                      className="w-full h-full"
                    ></iframe>
                  </div>
                  <div className="text-center mt-3">
                    <a
                      href="https://maps.google.com/?q=141+Beechwood+Avenue+Ottawa+ON"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-rose-taupe hover:text-rose-taupe-700 transition-colors font-semibold text-sm"
                    >
                      <span>Open in Google Maps</span>
                      <span>→</span>
                    </a>
                  </div>
                </div>
                

              </div>
            </div>
            

          </div>
          </div>
        </div>
      </section>



      {/* Join Our Team Section */}
      <section id="careers" className="py-20 relative overflow-hidden">
        {/* Background Photo Collage */}
        <div className="absolute inset-0 grid grid-cols-2 gap-2 opacity-20">
          <div className="relative overflow-hidden">
            <Image
              src="/cafe-interior-window.jpg.webp"
              alt="Coffee Window"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative overflow-hidden">
            <Image
              src="/turkish-coffee-pour.jpg.jpg"
              alt="Turkish Coffee"
              fill
              className="object-cover"
            />
          </div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 max-w-4xl">
          <div className="bg-seashell/90 backdrop-blur-sm rounded-3xl p-12 border border-desert-sand-200 shadow-lg">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-wenge mb-6 font-serif">
                Join Our Team! 🚀
              </h2>
              <p className="text-lg text-wenge-700 mb-8 leading-relaxed max-w-2xl mx-auto">
                We're looking for passionate baristas, creative souls, and coffee enthusiasts 
                who want to be part of something magical. No experience needed - just bring your heart!
              </p>
            </div>

            {/* Barista Job Posting */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-desert-sand-200 shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-rose-taupe/20 rounded-full flex items-center justify-center">
                  <span className="text-3xl">☕</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-wenge">Barista Position</h3>
                  <p className="text-rose-taupe font-semibold">Full-time & Part-time Available</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="font-semibold text-wenge mb-3 text-lg">What You'll Do:</h4>
                  <ul className="space-y-2 text-wenge-700">
                    <li className="flex items-start gap-2">
                      <span className="text-rose-taupe">•</span>
                      Craft exceptional coffee beverages with precision and care
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-rose-taupe">•</span>
                      Provide warm, welcoming customer service
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-rose-taupe">•</span>
                      Maintain cleanliness and organization of the café
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-rose-taupe">•</span>
                      Learn about our coffee origins and brewing methods
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-rose-taupe">•</span>
                      Contribute to our creative community atmosphere
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-wenge mb-3 text-lg">What We Offer:</h4>
                  <ul className="space-y-2 text-wenge-700">
                    <li className="flex items-start gap-2">
                      <span className="text-rose-taupe">•</span>
                      Competitive hourly wage + tips
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-rose-taupe">•</span>
                      Flexible scheduling options
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-rose-taupe">•</span>
                      Free coffee and meals during shifts
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-rose-taupe">•</span>
                      Training in coffee brewing and latte art
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-rose-taupe">•</span>
                      Growth opportunities within our café family
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-rose-taupe/10 p-6 rounded-xl border border-rose-taupe/20 mb-8">
                <h4 className="font-semibold text-wenge mb-3 text-lg">Requirements:</h4>
                <div className="grid md:grid-cols-2 gap-4 text-wenge-700">
                  <div>
                    <p className="font-medium text-rose-taupe mb-2">Must Have:</p>
                    <ul className="space-y-1 text-sm">
                      <li>• Passion for coffee and customer service</li>
                      <li>• Positive attitude and team spirit</li>
                      <li>• Ability to work in a fast-paced environment</li>
                      <li>• Reliable and punctual</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-medium text-rose-taupe mb-2">Nice to Have:</p>
                    <ul className="space-y-1 text-sm">
                      <li>• Previous café experience</li>
                      <li>• Knowledge of coffee brewing methods</li>
                      <li>• Artistic skills (latte art, food presentation)</li>
                      <li>• Multilingual abilities</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                  <a 
                    href="mailto:jobs@cafemiracle.com?subject=Barista%20Application" 
                    className="bg-rose-taupe hover:bg-rose-taupe-700 text-white px-8 py-3 rounded-xl transition-colors font-semibold shadow-lg transform hover:scale-105"
                  >
                    Apply Now
                  </a>
                  <a 
                    href="mailto:jobs@cafemiracle.com?subject=Barista%20Inquiry" 
                    className="bg-desert-sand-100 hover:bg-desert-sand-200 text-wenge px-8 py-3 rounded-xl transition-colors font-semibold border border-desert-sand-200"
                  >
                    Ask Questions
                  </a>
                </div>
                <p className="text-sm text-wenge-600">
                  Send your resume and a brief message about why you'd love to join our team!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

