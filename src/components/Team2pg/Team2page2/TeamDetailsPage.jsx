import React from "react";
import { useParams } from "react-router-dom";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import teamData from "../../../constants/teamdata.json";
import SectionContainer from "../../SectionContainer";

const TeamDetailsPage = () => {
  const { domain } = useParams();

  const teamMembers = Object.entries(teamData)
    .flatMap(([role, members]) =>
      members.map((member) => ({ ...member, role }))
    )
    .filter(
      (member) => !domain || member.role.toLowerCase() === domain.toLowerCase()
    );

  return (
    <div>
      <SectionContainer>
        <div className="text-white p-4 min-h-screen max-w-4xl mx-auto flex flex-col">
          <h1 className="mt-12 text-xl sm:text-2xl md:text-3xl p-2.5 text-red-700 text-shadow-red mb-5 uppercase text-center font-['Press_Start_2P']">
            The Official {domain} Team of Ureckon'25
          </h1>

          <div className="mt-4 text-lg sm:text-xl md:text-2xl text-white text-shadow-white text-center uppercase hidden md:block font-['Press_Start_2P']">
            <p>{domain}</p>
          </div>

          <div className="flex w-full mx-auto mt-8">
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {teamMembers.length > 0 ? (
                teamMembers.map((member, index) => (
                  <div
                    className="team-card bg-red-800/50 p-4 shadow-lg flex flex-col justify-between"
                    key={index}
                  >
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full object-cover rounded-full mb-4"
                    />
                    <h3 className="mt-2 text-base sm:text-lg md:text-xl font-semibold text-center font-['Press_Start_2P']">
                      {member.name}
                    </h3>
                    <div className="social-links flex gap-4 mt-2 justify-center">
                      {member.linkedin && (
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 hover:scale-110 transition-transform"
                        >
                          <div className="w-12 h-12 bg-red-700 flex justify-center items-center rounded-full">
                            <FaLinkedin className="text-white" />
                          </div>
                        </a>
                      )}
                      {member.instagram && (
                        <a
                          href={member.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-pink-500 hover:scale-110 transition-transform"
                        >
                          <div className="w-12 h-12 bg-red-700 flex justify-center items-center rounded-full">
                            <FaInstagram className="text-white" />
                          </div>
                        </a>
                      )}
                      {member.x && (
                        <a
                          href={member.x}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-400 hover:scale-110 transition-transform"
                        >
                          <div className="w-12 h-12 bg-red-700 flex justify-center items-center rounded-full">
                            <FaTwitter className="text-white" />
                          </div>
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
