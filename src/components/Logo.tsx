export default function Logo({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <div className={`${className} relative flex items-center justify-center`}>
      {/* Background circle for better visibility */}
      <div className="absolute inset-0 bg-gradient-to-br from-rose/20 to-gold/20 rounded-full"></div>
      
      {/* Tree trunk and branches */}
      <div className="relative z-10 flex items-center justify-center">
        {/* Main trunk */}
        <div className="w-2 h-10 bg-espresso rounded-full shadow-md"></div>
        
        {/* Branches */}
        <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-espresso rotate-45 origin-left rounded-full shadow-md"></div>
        <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-espresso -rotate-45 origin-right rounded-full shadow-md"></div>
        
        {/* Leaves */}
        <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-leaf rounded-full shadow-md"></div>
        <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-rose rounded-full ml-4 shadow-md"></div>
        <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-leaf rounded-full -ml-4 shadow-md"></div>
        
        {/* Heart in center */}
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 text-sm text-rose drop-shadow-sm">♥</div>
        
        {/* Stars */}
        <div className="absolute -top-3 -left-2 text-sm text-gold drop-shadow-sm">★</div>
        <div className="absolute -top-3 -right-2 text-sm text-gold drop-shadow-sm">★</div>
        <div className="absolute top-0 -right-3 text-sm text-gold drop-shadow-sm">★</div>
        
        {/* Sun rays */}
        <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-1 h-3 bg-gold/80 rounded-full"></div>
        <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-1 h-3 bg-gold/80 rotate-45 origin-bottom rounded-full"></div>
        <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-1 h-3 bg-gold/80 -rotate-45 origin-bottom rounded-full"></div>
        
        {/* Floating hearts */}
        <div className="absolute top-2 -left-4 text-sm text-rose drop-shadow-sm">♥</div>
        <div className="absolute top-2 -right-4 text-sm text-rose drop-shadow-sm">♥</div>
        
        {/* Roots/waves */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-10 h-1 bg-espresso/80 rounded-full shadow-md"></div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-espresso/60 rounded-full -mb-1 shadow-md"></div>
      </div>
    </div>
  )
}
