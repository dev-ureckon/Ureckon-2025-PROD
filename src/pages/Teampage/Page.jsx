import React, { useEffect, useState } from "react";
import teamsData from "../../constants/teamroutes.json";
import { Link } from "react-router";
import SectionContainer from "../../components/SectionContainer";

const TeamPage = () => {
  const [domains, setDomains] = useState([]);

  useEffect(() => {
    setDomains(teamsData);
  }, []);

  return (
    <SectionContainer>
      <div className="text-white w-full h-screen flex flex-col items-center justify-center relative font-press mx-auto">
        <Header />
        <CenterSection domains={domains} />
      </div>
    </SectionContainer>
  );
};

const Header = () => (
  <div className="text-base text-center mt-56  mb-5 lg:mb-12 uppercase lg:text-4xl font-press text-[#B01D15] drop-shadow-[0_0_20px_#B01D15]">
    THE OFFICIAL TEAM OF URECKON'25
  </div>
);

const CenterSection = ({ domains }) => (
  <div className="text-center">
    <h2 className="text-lg text-center mb-5 lg:mb-12 uppercase lg:text-3xl font-press text-[#e1e1e1] drop-shadow-[0_0_20px_#e1e1e1]">
      SELECT THE DOMAIN
    </h2>
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 mx-4">
      {domains.map((domain, idx) => (
        <Link key={idx} to={`/teams/${domain.route}`} className="w-full">
          <button className="bg-red-950 hover:bg-red-950/90 text-white md:py-6 py-3 px-6 font-bold tracking-wide w-full min-w-[150px] text-sm">
            {domain.name}
          </button>
        </Link>
      ))}
    </div>
  </div>
);

export default TeamPage;
