import React from "react";

const domains = ["TECH", "COORD", "GRAPHICS", "BRANDING", "CORE", "SOCIAL MEDIA"];

const TeamPage = () => {
  return (
    <div
      className=" text-white w-full h-screen flex flex-col items-center justify-center relative font-press mx-auto"
    >
      <Header />
      <CenterSection />
    </div>
  );
};

const Header = () => (
        <div className="text-red-500 text-lg md:text-xl font-bold tracking-widest text-shadow-red text-center ">
          THE OFFICIAL TEAM OF URECKON'25
        </div>
);

const CenterSection = () => (
  <div className="text-center ">
    <h2 className="text-base md:text-xl  tracking-wider text-gray-200 mb-10 text-glow-white mt-10">
      SELECT THE DOMAIN
    </h2>
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 mx-4">
      {domains.map((domain, idx) => (
        <button
          key={idx}
          className="bg-red-950 hover:bg-red-950/90 text-white md:py-8 py-4 px-4 font-bold tracking-wide"
        >
          {domain}
        </button>
      ))}
    </div>
  </div>
);

export default TeamPage;
