import React from "react";
import SectionContainer from "../../components/SectionContainer";


const Partners = () => {
  const partners = [
    { id: 1, name: "Sova", type: "Snack Partner", image: "/partners/sova.webp" },
    { id: 2, name: "Mio Biscuits", type: "Snack Partner", image: "partners/mio.webp" },
    { id: 3, name: "Inkzoid Foundation", type: "Community Partner", image: "/partners/inkzoid.webp" },
    { id: 4, name: "HackX Community", type: "Promotional Partner", image: "/partners/hackx.webp" },
    { id: 5, name: "Unbuttoned Bangaliana", type: "Social Media Partner", image: "/partners/ub.webp" },
    { id: 6, name: "Edugraph", type: "Digital Media Partner", image: "/partners/edugraph.webp" },
    { id: 7, name: "Kranti Foundation (Unity Rbtx)", type: "Workshop Partner", image: "/partners/kranti.webp" },
    { id: 8, name: "Friends FM", type: "Exclusive Radio Partner", image: "/partners/friends.webp" },
    { id: 9, name: "Jus' Jumpin'", type: "Official Fun Partner", image: "/partners/jusjumpin.webp" },
    { id: 10, name: "Mercy For Animals", type: "Goodwill Partner", image: "/partners/mercy.webp" },
    { id: 11, name: "Hayati", type: "Style Partner", image: "/partners/hayati.webp" },
    { id: 12, name: "Body Engineering Suppliment", type: "Fitness Partner", image: "/partners/bes.webp" },
    { id: 13, name: "Lets Game Now", type: "Experience Zone Partner", image: "/partners/game.webp" },
    { id: 14, name: "Nalin Chandra Das & Sons", type: "Dessert Partner", image: "/partners/nalin.webp" },
    { id: 15, name: "Marnix", type: "Auto Expo Partner", image: "/partners/marnix.webp" },
    { id: 16, name: "Bengal Harley Davidson", type: "Auto Expo Partner", image: "/partners/bhd.webp" },
    { id: 17, name: "Harley Davidson X440", type: "Auto Expo Partner", image: "/partners/x400.webp" },
    { id: 18, name: "Citroën", type: "Auto Expo Partner", image: "/partners/citron.webp" }
];

  

  return (
    <SectionContainer>
      <div className="team-page font-press px-4 py-8 text-white min-h-screen space-bg">
        <h1 className="text-2xl text-center mb-12 lg:mb-12 uppercase lg:text-5xl font-press text-[#B01D15] drop-shadow-[0_0_20px_#B01D15]">
          The Official Partners of Ureckon’25
        </h1>

        <div className="w-full mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="relative p-4 justify-between rounded-lg shadow-lg bg-[rgba(255,0,0,0.2)] card-glow w-full h-[420px] max-w-[350px]"
            >
              <img
                src={partner.image}
                alt={partner.name}
                className="w-full h-64 object-contain rounded-md"
              />
              <h3 className="mt-3 text-lg font-bold tracking-wider text-center">
                {partner.name}
              </h3>
              <p className="text-yellow-500 text-sm text-center">{partner.type}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};

export default Partners;