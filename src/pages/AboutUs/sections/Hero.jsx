import React from 'react'
import aboutImg from "../../../assets/about.png"

const Hero = () => {
  return (
    <section>
    <div className="min-h-screen bg-black p-4 sm:p-6 md:p-8 relative overflow-hidden">
      {/* Stars background effect */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto">
        {/* Title with enhanced red glow effect */}
        <div className="relative text-center mb-4 sm:mb-6 md:mb-8">
          {/* Background shadow text */}
          <h1 className="text-[#FF0000] font-press text-3xl sm:text-4xl md:text-5xl font-mono tracking-wider absolute inset-0 blur-[20px] opacity-70">
            ABOUT US
          </h1>
          {/* Middle layer shadow text */}
          <h1 className="text-[#FF0000] font-press text-3xl sm:text-4xl md:text-5xl font-mono tracking-wider absolute inset-0 blur-[10px] opacity-80">
            ABOUT US
          </h1>
          {/* Main text with glow */}
          <h1
            className="text-[#FF0000] font-press text-3xl sm:text-4xl md:text-5xl font-mono tracking-wider relative 
            drop-shadow-[0_0_10px_rgba(255,0,0,0.8)]
            drop-shadow-[0_0_15px_rgba(255,0,0,0.6)]"
          >
            ABOUT US
          </h1>
        </div>

        {/* Pac-Man dots - Hide on very small screens */}
        <div className="flex justify-center items-center gap-1 xs:gap-2 md:gap-4 mb-4 sm:mb-6 md:mb-12">
          {[...Array(16)].map((_, i) => {
            if (i === 7) {
              return (
                <img
                  key={i}
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/GHOST-Qiqoh5ypywJKt06IAxh6k7IFvo7CY3.png"
                  alt="Pac-Man Ghost"
                  className="w-4 h-4 xs:w-5 xs:h-5 md:w-7 md:h-7 -mt-1 animate-bounce"
                />
              )
            }
            return <div key={i} className="w-1.5 h-1.5 xs:w-2 xs:h-2 md:w-3 md:h-3 rounded-full bg-yellow-300" />
          })}
        </div>


 {/* Image Container with Red Rectangle Background and Corner Decorations */}
 <div className="relative mb-6 sm:mb-8 mx-auto">
          {/* Red Rectangle Background */}
          <div className="relative">
            {/* Background Rectangle */}
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Rectangle%2065-QH9qk4m1nzxH4K5CsMyf7n8IJySbwz.png"
              alt=""
              className="w-full h-[224px] sm:h-[324px] md:h-[430px] object-cover"
            />

            {/* Plus Signs - Precisely positioned at corners */}
            <div className="absolute -top-3 -left-3 w-6 h-6 flex items-center justify-center">
              <span className="text-[#FF0000] text-2xl sm:text-3xl font-bold leading-none translate-y-[-2px]">+</span>
            </div>
            <div className="absolute -top-3 -right-3 w-6 h-6 flex items-center justify-center">
              <span className="text-[#FF0000] text-2xl sm:text-3xl font-bold leading-none translate-y-[-2px]">+</span>
            </div>
            <div className="absolute -bottom-3 -left-3 w-6 h-6 flex items-center justify-center">
              <span className="text-[#FF0000] text-2xl sm:text-3xl font-bold leading-none translate-y-[-2px]">+</span>
            </div>
            <div className="absolute -bottom-3 -right-3 w-6 h-6 flex items-center justify-center">
              <span className="text-[#FF0000] text-2xl sm:text-3xl font-bold leading-none translate-y-[-2px]">+</span>
            </div>

            {/* Main Image - Positioned absolutely over the red rectangle with padding */}
            <div className="absolute inset-3">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Rectangle%20114%20(1)-LR16oNm7NSNK3ETjtBvmGBskvgCC5S.png"
                alt="Portrait"
                className="w-full h-full object-cover object-center"
                width={1000}
                height={406}
              />
            </div>
          </div>
        </div>
        {/* Content with enhanced glow effect using Tailwind */}
        <div className="text-balance text-gray-300 font-mono leading-relaxed text-sm sm:text-base md:text-lg space-y-4 max-w-4xl mx-auto px-2 sm:px-4">
          <p className="text-sm md:text-2xl  text-gray-200 drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] shadow-white">
            Ureckon, the annual techno-management fest of the University of Engineering and Management (UEM), Kolkata,
            is back with its 7th edition! A confluence of innovation, technology, and creativity.
            We offer thrilling competitions, interactive workshops, inspiring talks, and business extravaganzas. With
            participants from across the country, it's a platform to showcase talent, foster learning, and build
            connections.
            Join us and be part of this unforgettable journey of excellence and discovery.
          </p>
        </div>

        {/* Decorative Glowing Bar */}
        <div className="relative w-full mb-8">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PAC%20MAN%20GHOST-FnaZRTH5uVzXmu1Zx3T09RQ9kwsorU.png"
            alt="Decorative Pac-Man Bar"
            className="w-full h-auto max-w-[800px] mx-auto"
          />
        </div>
      </div>
    </div>
    </section>
  )
}

export default Hero
