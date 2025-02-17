import React from "react";

const BackgroundParticles = ({ count = 350, children }) => {
  return (
    <div className="relative w-full h-full">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(count)].map((_, i) => (
          <div
            key={i}
            className="absolute w-[3px] h-[3px] bg-white rounded-full animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 1}s`,
            }}
          />
        ))}
      </div>
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default BackgroundParticles;
