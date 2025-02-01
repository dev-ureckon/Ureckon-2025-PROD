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
        {/* Title with double text effect for red blur */}
        <div className="relative text-center mb-4 sm:mb-6 md:mb-8">
          <h1 className="text-[#FF2D2D] font-press text-3xl sm:text-4xl md:text-5xl font-mono tracking-wider absolute inset-0 blur-[1px]">
            ABOUT US
          </h1>
          <h1 className="text-[#FF2D2D] font-press text-3xl sm:text-4xl md:text-5xl font-mono tracking-wider relative">
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
            return (
              <div
                key={i}
                className="w-1.5 h-1.5 xs:w-2 xs:h-2 md:w-3 md:h-3 rounded-full bg-yellow-300 animate-pulse"
              />
            )
          })}
        </div>

{/* Image Container with Custom Border and Corner Decorations */}
<div className="relative mb-6 sm:mb-8 mx-auto">
          {/* Main border container with no padding */}
          <div className="relative border-[6px] sm:border-[8px] border-[#8B0000]">
            {/* Plus Signs - Precisely positioned at corners */}
            <div className="absolute -top-[14px] -left-[14px] sm:-top-[18px] sm:-left-[18px] text-[#8B0000] font-bold text-xl sm:text-2xl leading-none">
              +
            </div>
            <div className="absolute -top-[14px] -right-[14px] sm:-top-[18px] sm:-right-[18px] text-[#8B0000] font-bold text-xl sm:text-2xl leading-none">
              +
            </div>
            <div className="absolute -bottom-[14px] -left-[14px] sm:-bottom-[18px] sm:-left-[18px] text-[#8B0000] font-bold text-xl sm:text-2xl leading-none">
              +
            </div>
            <div className="absolute -bottom-[14px] -right-[14px] sm:-bottom-[18px] sm:-right-[18px] text-[#8B0000] font-bold text-xl sm:text-2xl leading-none">
              +
            </div>

            {/* Image */}
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Rectangle%20114%20(1)-LR16oNm7NSNK3ETjtBvmGBskvgCC5S.png"
              alt="Portrait"
              className="w-full h-[200px] sm:h-[300px] md:h-[406px] object-cover object-center block"
              width={800}
              height={359}
            />
          </div>
        </div>


        {/* Content with enhanced glow effect using Tailwind */}
        <div className="text-gray-300 font-mono leading-relaxed text-sm sm:text-base md:text-lg space-y-4 max-w-4xl mx-auto px-2 sm:px-4">
          <p className="text-2xl text-gray-200 drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] shadow-white">
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
