import React from 'react';
import { useParams } from "react-router-dom";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import teamData from "../../../lib/teamdata.json";
import SectionContainer from "../../SectionContainer";

const TeamDetailsPage = () => {
  const { domain } = useParams();

  // Flatten team data with roles
  let teamMembers = Object.entries(teamData).flatMap(([role, members]) =>
    members.map((member) => ({
      ...member,
      role,
    }))
  );

  // Apply filtering based on the domain in the URL
  if (domain) {
    teamMembers = teamMembers.filter(
      (member) => member.role.toLowerCase() === domain.toLowerCase()
    );
  }

  return (
<div>
<SectionContainer>
      <div className="text-white p-4 sm:p-6 md:p-8 lg:p-10 min-h-screen overflow-hidden max-w-4xl pb-20 sm:pb-24 md:pb-28 lg:pb-32 m-0 flex flex-col">
        <h1 className="mt-20 sm:mt-24 md:mt-28 lg:mt-36 font-['Press_Start_2P'] text-xl sm:text-2xl md:text-3xl p-2.5 text-[rgba(189,18,18,0.8)] text-shadow-red mb-5 uppercase text-center">
          The Official {domain} Team of Ureckon'25
        </h1>

        {/* Let's Start Section */}
        <div className="mt-8 lm:mt-12 md:mt-16 lg:mt-20 font-['Press_Start_2P'] text-lg sm:text-xl md:text-2xl text-[rgba(248,237,237,0.8)] text-shadow-white,0_0_50px_rgb(240,233,233)] text-center uppercase hidden md:block">
          <p>{domain}</p>
        </div>


        <div className="flex w-full sm:w-[95%] md:w-[90%] mx-auto mt-8 sm:mt-12 md:mt-16">
          <div className="bg-transparent w-full mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {teamMembers.length > 0 ? (
              teamMembers.map((member, index) => (
                <div
                  className="team-card bg-red-800/50 overflow-hidden transition-all duration-300 relative w-full h-auto max-w-full mx-auto p-4 sm:p-6 md:p-8 shadow-lg flex flex-col justify-between"
                  key={index}
                >
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-32 sm:h-36 md:h-40 object-cover rounded-md mb-4"
                  />
                  <h3 className="mt-2 text-base sm:text-lg md:text-xl font-semibold font-press text-center">
                    {member.name}
                  </h3>
                  <h3 className="font-['PacFont'] text-sm sm:text-base md:text-lg text-center">
                    {member.role}
                  </h3>
                  <div className="social-links flex gap-4 mt-2 justify-center">
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 text-lg sm:text-xl hover:scale-110 transition-transform"
                      >
                        <FaLinkedin />
                      </a>
                    )}
                    {member.instagram && (
                      <a
                        href={member.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-pink-500 text-lg sm:text-xl hover:scale-110 transition-transform"
                      >
                        <FaInstagram />
                      </a>
                    )}
                    {member.x && (
                      <a
                        href={member.x}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 text-lg sm:text-xl hover:scale-110 transition-transform"
                      >
                        <FaTwitter />
                      </a>
                    )}
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-lg sm:text-xl md:text-2xl text-gray-500 w-full col-span-full">
                No team members found for "{domain}"
              </p>
            )}
          </div>
        </div>
      </div>
    </SectionContainer>
</div>
  );
};

export default TeamDetailsPage;