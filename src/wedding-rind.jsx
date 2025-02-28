export function WeddingRings() {
    return (
      <div className="absolute bottom-4 right-4 z-10">
        <div className="relative animate-rings-float">
          <svg className="w-12 h-12 text-rose-300" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="9" cy="12" r="3" className="stroke-current animate-ring-pulse" strokeWidth="2" />
            <circle cx="15" cy="12" r="3" className="stroke-current animate-ring-pulse delay-300" strokeWidth="2" />
          </svg>
        </div>
      </div>
    )
  }
  
  