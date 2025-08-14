export default function Logo({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <div className={`${className} relative`}>
      {/* Tree trunk and branches */}
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Main trunk */}
        <div className="w-1 h-8 bg-espresso rounded-full"></div>
        
        {/* Branches */}
        <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-espresso rotate-45 origin-left"></div>
        <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-espresso -rotate-45 origin-right"></div>
        
        {/* Leaves */}
        <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-leaf rounded-full"></div>
        <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-rose rounded-full ml-3"></div>
        <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-leaf rounded-full -ml-3"></div>
        
        {/* Heart in center */}
        <div className="absolute top-3 left-1/2 transform -translate-x-1/2 text-xs text-rose">♥</div>
        
        {/* Stars */}
        <div className="absolute -top-2 -left-1 text-xs text-gold">★</div>
        <div className="absolute -top-2 -right-1 text-xs text-gold">★</div>
        <div className="absolute top-0 -right-2 text-xs text-gold">★</div>
        
        {/* Sun rays */}
        <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-0.5 h-2 bg-gold/60"></div>
        <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-0.5 h-2 bg-gold/60 rotate-45 origin-bottom"></div>
        <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-0.5 h-2 bg-gold/60 -rotate-45 origin-bottom"></div>
        
        {/* Floating hearts */}
        <div className="absolute top-1 -left-3 text-xs text-rose">♥</div>
        <div className="absolute top-1 -right-3 text-xs text-rose">♥</div>
        
        {/* Roots/waves */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-espresso/60 rounded-full"></div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-espresso/40 rounded-full -mb-1"></div>
      </div>
    </div>
  )
}
