import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom
import SectionContainer from "../../components/SectionContainer";

const Partners = () => {
  const navigate = useNavigate(); // Create a navigate function

  const partner = [
    {
      title: "FOOD PARTNER",
      members: [
        { id: 1, name: "COCA COLA", image: "/src/assets/team.jpeg" },
        { id: 2, name: "Anirban Dasak", image: "/src/assets/team.jpeg" },
        { id: 3, name: "Anirban Dasak", image: "/src/assets/team.jpeg" },
      ],
    },
    {
      title: "SOCIAL MEDIA PARTNER",
      members: [
        { id: 4, name: "Anirban Dasak", image: "/src/assets/team.jpeg" },
        { id: 5, name: "Anirban Dasak", image: "/src/assets/team.jpeg" },
        { id: 6, name: "Anirban Dasak", image: "/src/assets/team.jpeg" },
      ],
    },
    {
      title: "BEVERAGE PARTNER",
      members: [
        { id: 7, name: "Anirban Dasak", image: "/src/assets/team.jpeg" },
        { id: 8, name: "Anirban Dasak", image: "/src/assets/team.jpeg" },
        { id: 9, name: "Anirban Dasak", image: "/src/assets/team.jpeg" },
      ],
    },
  ];

  return (
    <SectionContainer>
      <div className="team-page font-press px-4 py-8 text-white min-h-screen space-bg">
        {/* <button 
                className="absolute left-4 top-4 text-xl text-gray-300 hover:text-white transition"
                onClick={() => navigate(-1)} // This will navigate to the previous page
            >
                {"<< BACK"}
            </button> */}

        <h1 className="text-2xl text-center  mb-12 lg:mb-12 uppercase lg:text-5xl font-press text-[#B01D15] drop-shadow-[0_0_20px_#B01D15]">
          the official PARTNERS of ureckon’25
        </h1>

        <div className="flex justify-center mt-32">
          <h2 className="text-2xl text-center  mb-12 lg:mb-12 uppercase lg:text-5xl font-press text-[#B01D15] drop-shadow-[0_0_20px_#B01D15]">
            COMING SOON...
          </h2>
        </div>
        {/* <div className="w-full mx-auto space-y-12">
                {partner.map((category, index) => (
                    <div key={index} className="text-center">
                        <h2 className="text-xl text-center mb-5 lg:mb-12 lg:text-3xl font-press text-[#B01D15] drop-shadow-[0_0_20px_#B01D15]">
                            {category.title}
                        </h2>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center">
                            {category.members.map((member) => (
                                <div key={member.id} className={`relative p-4 justify-between rounded-lg shadow-lg bg-[rgba(255,0,0,0.2)] card-glow w-full h-[420px] max-w-[350px]`}>
                                    <img src={member.image} alt={member.name} className="w-full h-64 object-cover  rounded-md" />
                                    <h3 className="mt-3 text-lg font-bold tracking-wider">{member.name}</h3>
                                    <p className="text-gray-400">{member.role}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div> */}
      </div>
    </SectionContainer>
  );
};

export default Partners;
