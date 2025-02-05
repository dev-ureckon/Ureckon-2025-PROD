import React from "react";

const domains = ["TECH", "COORD", "GRAPHICS", "BRANDING", "CORE", "SOCIAL MEDIA"];

const TeamPage = () => {
  return (
    <div
      className="bg-black text-white w-full h-screen flex flex-col items-center justify-center relative font-press"
    >
      <Header />
      <CenterSection />
    </div>
  );
};

const Header = () => (
        <div className="text-red-500 text-xl font-bold tracking-widest text-shadow-red text-center sm:text-lg">
          THE OFFICIAL TEAM OF URECKON'25
        </div>
);

const CenterSection = () => (
  <div className="text-center mt-12 z-10">
    <h2 className="text-xl tracking-wider text-gray-200 mb-20 text-glow-white">
      SELECT THE DOMAIN
    </h2>
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
      {domains.map((domain, idx) => (
        <button
          key={idx}
          className="bg-red-950 hover:bg-red-950/90 text-white py-8 px-4 font-bold tracking-wide"
        >
          {domain}
        </button>
      ))}
    </div>
  </div>
);

export default TeamPage;
