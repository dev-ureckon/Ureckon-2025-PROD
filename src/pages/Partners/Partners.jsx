import React from "react";
import SectionContainer from "../../components/SectionContainer";

const Partners = () => {
  const partners = [
    { name: "Sova", type: "Snacks Partner", image: "/partners/sova.webp" },
    { name: "Mio Biscuits", type: "Snacks Partner", image: "partners/mio.webp" },
    { name: "Tea Junction", type: "Snacks Partner", image: "/partners/teajunction.webp" },
    { name: "Berlin Burgers", type: "Food Partner", image: "/partners/berlinburgers.webp" },
    { name: "Inkzoid Foundation", type: "Promotional Partner", image: "/partners/inkzoid.webp" },
    { name: "HackX Community", type: "Community Partner", image: "/partners/hackx.webp" },
    { name: "Unbuttoned Bangaliana", type: "Social Media Partner", image: "/partners/ub.webp" },
    { name: "Edugraph", type: "Digital Media Partner", image: "/partners/edugraph.webp" },
    { name: "Kranti Foundation (Unity Rbtx)", type: "Workshop Partner", image: "/partners/kranti.webp" },
    { name: "Friends FM", type: "Exclusive Radio Partner", image: "/partners/friends.webp" },
    { name: "Jus' Jumpin'", type: "Official Fun Partner", image: "/partners/jusjumpin.webp" },
    { name: "Mercy For Animals", type: "Goodwill Partner", image: "/partners/mercy.webp" },
    { name: "Hayati", type: "Style Partner", image: "/partners/hayati.webp" },
    { name: "Crazine", type: "Style Partner", image: "/partners/crazine.webp" },
    { name: "Body Engineering Suppliment", type: "Fitness Partner", image: "/partners/bes.webp" },
    { name: "Nalin Chandra Das & Sons", type: "Dessert Partner", image: "/partners/nalin.webp" },
    { name: "Catoff", type: "Esports Partner", image: "/partners/catoff.webp" },
    { name: "Marnix", type: "Auto Expo Partner", image: "/partners/marnix.webp" },
    { name: "Bengal Harley Davidson", type: "Auto Expo Partner", image: "/partners/bhd.webp" },
    { name: "Harley Davidson X440", type: "Auto Expo Partner", image: "/partners/x400.webp" },
    { name: "Citroën", type: "Auto Expo Partner", image: "/partners/citron.webp" },
    { name: "Illicium Motors", type: "Electric Mobility Partner", image: "/partners/illiciummotors.webp" },
    { name: "Printeez", type: "Merchandise Partner", image: "/partners/printeez.webp" },
    { name: "UGG", type: "Partner Club", image: "/partners/ugg.webp" },
    { name: "Iris", type: "Partner Club", image: "/partners/iris.webp" },
    { name: "GDG on Campus UEMK", type: "Partner Club", image: "/partners/gdguemk.webp" },
    { name: "ACM UEMK Student Chapter", type: "Partner Club", image: "/partners/acmuemk.webp" },
    { name: "IEEE UEMK SB", type: "Partner Club", image: "/partners/ieeeuem.webp" },
    { name: "GFG Student Chapter UEMK", type: "Partner Club", image: "/partners/gfguemk.webp" },
    { name: "Design Society UEMK", type: "Partner Club", image: "/partners/dsuemk.webp" },
    { name: "Robo Mellontikos UEMK", type: "Partner Club", image: "/partners/rm.webp" },
    { name: "SPIE OPTICA", type: "Partner Club", image: "/partners/spieoptica.webp" },
    { name: "Pragya", type: "Partner Club", image: "/partners/pragya.webp" },
    { name: "UEMK CODING CLUB", type: "Partner Club", image: "/partners/ucc.webp" },
    { name: "⁠Institution's Innovation Council UEMK", type: "Partner Club", image: "/partners/iicuem.webp" },
    { name: "UEMK Space Observatory", type: "Partner Club", image: "/partners/uso.webp" },
  ];

  return (
    <SectionContainer>
      <div className="team-page font-press px-4 py-8 text-white min-h-screen space-bg">
        <h1 className="text-2xl text-center mb-12 lg:mb-12 uppercase lg:text-5xl font-press text-[#B01D15] drop-shadow-[0_0_20px_#B01D15]">
          The Official Partners of Ureckon’25
        </h1>

        <div className="w-full mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
          {partners.map((partner, index) => (
            <div
              key={index}
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
