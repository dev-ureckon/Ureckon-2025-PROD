import React from "react";
import { Link } from "react-router-dom";
import SectionContainer from "../../../components/SectionContainer";
import dummyEvent from "../../../assets/dummyEvent.png";
import PacBorderWrapper from "../../../components/PacBorder";

const EventsPage2 = ({ events }) => {
  return (
    <div className="mt-12 px-4 w-full">
      <SectionContainer>
        <Link
          to="/events"
          className="w-full py-2 sm:py-3 lg:py-4 px-3 sm:px-4 lg:px-6 relative block"
        >
          <h1 className="font-['Press_Start_2P'] text-[12px] sm:text-[20px] lg:text-[24px] leading-[24px] sm:leading-[32px] lg:leading-[44px] font-normal text-white">
            &lt;&lt; BACK
          </h1>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/10 to-black/30"></div>
        </Link>

        {events.map((event, index) => (
          <div key={index} className="mt-12 flex justify-center">
            <div className="relative w-full max-w-2xl bg-[rgba(255,0,0,0.2)] mx-4 p-4 lg:p-6">
              {/* Decorative "+" Signs */}
              {[
                "-top-3 -left-3",
                "-top-3 -right-3",
                "-bottom-3 -left-3",
                "-bottom-3 -right-3",
              ].map((pos, idx) => (
                <div
                  key={idx}
                  className={`absolute ${pos} w-6 h-6 flex items-center justify-center`}
                >
                  <span className="text-[#FF0000] text-2xl sm:text-3xl font-bold leading-none">
                    +
                  </span>
                </div>
              ))}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Image Section */}
                <div className="h-48 sm:h-64 lg:h-72">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover rounded"
                  />
                </div>

                {/* Event Details */}
                <div className="flex flex-col justify-center items-center space-y-4 text-center">
                  <h2 className="font-['Press_Start_2P'] text-xs lg:text-lg text-white">
                    {event.title}
                  </h2>
                  <p className="font-['Press_Start_2P'] text-[8px] lg:text-[10px] text-white text-center leading-relaxed">
                    {event.description}
                  </p>
                  <div className="flex flex-col items-center space-y-2 text-white">
                    <p className="text-[8px] lg:text-xs font-press">
                      VENUE: {event.venue}
                    </p>
                    <p className="text-[8px] lg:text-xs font-press">
                      TIME: {event.time}
                    </p>
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-2 sm:gap-4 py-3">
                    {event.actions.map((action, idx) => (
                      <Link
                        key={idx}
                        to={`/event/${event.title
                          .replace(/\s+/g, "-")
                          .toLowerCase()}`}
                        className="bg-[#FF0000] px-4 sm:px-6 py-2 text-xs sm:text-sm lg:text-base font-['Press_Start_2P'] hover:bg-[#cc0000] transition-colors"
                      >
                        {action}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </SectionContainer>
    </div>
  );
};

// Dummy event data with proper image paths
const dummyEvents = [
  {
    title: "BOSHE AKO PROTIJOGITA",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    venue: "XYZ HALL",
    time: "04:20 AM",
    image: dummyEvent, // Fix image path
    actions: ["VIEW"],
  },
  {
    title: "DRAWING COMPETITION",
    description:
      "Showcase your creativity with colors. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    venue: "ABC CENTER",
    time: "10:30 AM",
    image: dummyEvent, // Fix image path
    actions: ["VIEW"],
  },
];

export default () => <EventsPage2 events={dummyEvents} />;
