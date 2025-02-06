import React from "react";
import SectionContainer from '../../../components/SectionContainer'
import { Link } from 'react-router-dom';
import EventBox from '../../../components/EventBox';
import eventData from '../../../lib/eventdata.json';

const EventsPage2 = () => {
  const dummyData = eventData;

  return (
    <div className="mt-12">
      <SectionContainer>
      <Link to="/events" className="w-full py-2 sm:py-3 lg:py-4 px-3 sm:px-4 lg:px-6 relative block">
        <h1 className="font-['Press_Start_2P'] text-[16px] sm:text-[20px] lg:text-[24px] leading-[24px] sm:leading-[32px] lg:leading-[44px] font-normal text-white">&lt;&lt; BACK</h1>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/10 to-black/30"></div>
      </Link>
        {dummyData.map((event, index) => (
          <div key={index} className="mt-12">
            <EventBox {...event} />
          </div>
        ))}
      </SectionContainer>
    </div>
  );
};

export default EventsPage2;