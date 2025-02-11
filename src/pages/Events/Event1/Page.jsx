import React from "react";
import T from "../../../components/T";
import { motion } from "framer-motion";
import events from "../../../lib/events.json";
import { Link } from "react-router-dom";
import SectionContainer from "../../../components/SectionContainer";

const EventPage = () => {
  const hoverAnimation = {
    scale: 1.05,
    transition: { type: "spring", stiffness: 300 },
  };

  return (
    <div className="w-full px-4 sm:px-6 lg:px-12">
      <div className="mt-12">
      <h1 className="text-xl text-center mb-5 lg:mb-12 uppercase lg:text-4xl font-press text-[#B01D15] drop-shadow-[0_0_20px_#B01D15]">
              the official events of ureckon’25 
            </h1>
        <SectionContainer>
          {/* Heading Section */}
          <div className="text-center lg:my-16 my-8 mb-12">
            
            <p className="text-lg text-center mb-5 lg:mb-12 uppercase lg:text-3xl font-press text-[#e1e1e1] drop-shadow-[0_0_20px_#e1e1e1]">
            SELECT YOUR CHOICE
            </p>
          </div>

          {/* Event Categories Grid */}
          <div className="w-full mx-auto">
            <div className="text-white font-bold text-xs sm:text-sm md:text-md mx-4 lg:text-lg">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 font-press">
                {events.map((event, index) => (
                  <motion.div
                    key={index}
                    className="bg-[#FF000033] opacity-90 w-full p-3 sm:p-4 lg:p-6 flex justify-center items-center text-center rounded-lg shadow-md transition-transform duration-200"
                    whileHover={hoverAnimation}
                  >
                    <Link
                      to={`/events/${event.name.toLowerCase()}`}
                      className="w-full h-full flex justify-center items-center text-xs sm:text-sm md:text-md lg:text-lg"
                    >
                      {event.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </SectionContainer>
      </div>
    </div>
  );
};

export default EventPage;
