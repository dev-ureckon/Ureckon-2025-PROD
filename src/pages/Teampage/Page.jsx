import React, { useEffect, useState } from "react";
import teamsData from "../../lib/team_data_routes.json";
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
  <div className="text-red-500 mt-32 text-lg md:text-xl font-bold tracking-widest text-shadow-red text-center">
    THE OFFICIAL TEAM OF URECKON'25
  </div>
);

const CenterSection = ({ domains }) => (
  <div className="text-center">
    <h2 className="text-base md:text-xl tracking-wider text-gray-200 mb-10 text-glow-white mt-10">
      SELECT THE DOMAIN
    </h2>
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 mx-4">
      {domains.map((domain, idx) => (
        <Link key={idx} to={`/teams/${domain.route}`} className="w-full">
          <button className="bg-red-950 hover:bg-red-950/90 text-white md:py-8 py-4 px-6 font-bold tracking-wide w-full min-w-[150px]">
            {domain.name}
          </button>
        </Link>
      ))}
    </div>
  </div>
);

export default TeamPage;
