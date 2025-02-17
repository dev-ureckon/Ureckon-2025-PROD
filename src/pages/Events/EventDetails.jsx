import React from "react";
import { useParams } from "react-router-dom";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import placeholder from "../../assets/placeholder_profile.jpg";
import eventsData from "../../constants/eventdata.json";

const EventDetails = () => {
  const { eventId } = useParams();

  let event;
  for (const category in eventsData) {
    event = eventsData[category].find(
      (e) =>
        e.name
          .toLowerCase()
          .replace(/\s+/g, "-")
          .replace(/[^a-z0-9-]/g, "")
          .replace(/['’,]/g, "") === eventId
    );

    if (event) break;
  }

  if (!event) {
    return <div className="text-center text-white">Event not found!</div>;
  }

  const transformedEvent = {
    name: event.name,
    description: event.description,
    date: event.date,
    eventimage: event.poster || "https://example.com/default-event.png",
    rules: [],
    coordinators: event.coordinators.map((coord) => ({
      name: coord.name,
      mobile: coord.contact,
      image: coord.image,
      instagram: coord.instagram || "",
      linkedin: coord.linkedin || "",
      twitter: coord.x || "",
    })),
    problemStatementLink: event.problem || "#",
    registerLink: event.form || "#",
  };

  return (
    <section>
      <div className="bg-cover bg-center min-h-screen p-6 font-mono">
        <div className="max-w-7xl mx-auto">
          {/* Title */}
          <h1 className="text-4xl text-center md:text-6xl mb-5 lg:mb-12 lg:text-6xl font-press text-orange-500 text-glow-orange">
            {transformedEvent.name}
          </h1>
          <div className="flex justify-center items-center gap-2 md:gap-8 mb-4 sm:mb-6 md:mb-12">
            {[...Array(16)].map((_, i) => {
              if (i === 7) {
                return (
                  <img
                    key={i}
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/GHOST-Qiqoh5ypywJKt06IAxh6k7IFvo7CY3.png"
                    alt="Pac-Man Ghost"
                    className="w-4 h-4 xs:w-5 xs:h-5 md:w-7 md:h-7 -mt-1 animate-bounce"
                  />
                );
              }
              return (
                <div
                  key={i}
                  className="w-2 h-2 xs:w-2 xs:h-2 md:w-4 md:h-4 rounded-full bg-yellow-300"
                />
              );
            })}
          </div>

          {/* About Section */}
          <div className="p-6 md:p-10 font-press rounded-lg mb-8 text-white">
            <h2 className="text-2xl md:text-2xl text-center lg:text-left mb-4 text-yellow-500 text-glow-yellow tracking-widest">
              ABOUT
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 items-start">
              {/* Description */}
              <p className="text-gray-400 text-balance lg:text-left text-glow-gray text-sm md:text-base leading-loose text-justify">
                {transformedEvent.description}
              </p>

              {/* Image Section */}
              <div className="relative mx-auto w-full max-w-sm">
                <div className="relative w-full h-[400px] md:h-[480px]">
                  <div className="absolute inset-0 bg-[#FF000A]/50 rounded-lg"></div>
                  {[
                    "-top-3 -left-3",
                    "-top-3 -right-3",
                    "-bottom-3 -left-3",
                    "-bottom-3 -right-3",
                  ].map((pos, index) => (
                    <div
                      key={index}
                      className={`absolute ${pos} w-6 h-6 flex items-center justify-center`}
                    >
                      <span className="text-[#FF0000] text-sm lg:text-xl font-bold leading-none transform translate-x-[2px] translate-y-[2px]">
                        +
                      </span>
                    </div>
                  ))}
                  {/* Event Image */}
                  <div className="absolute inset-4 md:inset-5 aspect-[4/5]">
                    <img
                      src={transformedEvent.eventimage}
                      alt="Event"
                      className="w-full h-full object-cover rounded-lg shadow-lg"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Date & Time */}
            <div className="flex flex-col lg:flex-row items-center justify-center gap-4 mt-24">
              <div className="relative flex flex-col items-center">
                <span className="bg-[#B01D15]/50 px-6 py-6 rounded-md text-[#B01D15] text-center tracking-wide mt-2 text-lg sm:text-xl">
                  {transformedEvent.date}
                </span>
              </div>
            </div>
          </div>

          {/* Rules Section */}
          <div className="p-6 font-press rounded-lg mb-8">
            <h2 className="text-2xl text-center lg:text-left md:text-2xl mb-4 text-blue-500 text-glow-blue tracking-widest">
              RULES
            </h2>
            <p className="text-gray-400 text-glow-gray text-sm md:text-base leading-loose text-justify">
              Team Size: As specified in registration form. See problem
              statement for detailed rules.
            </p>
          </div>

          {/* Prizes Section */}
          <div className="p-6 rounded-lg mb-8 font-press text-center">
            <h2 className="text-2xl text-center lg:text-left md:text-2xl mb-4 text-pink-500 text-glow-pink tracking-widest">
              PRIZES
            </h2>

            {/* Grid Container */}
            <div className="flex flex-col md:flex-row justify-center items-center gap-6">
              {/* Prize Cards */}
              {[
                { title: "1ST", subtitle: "COMING SOON" },
                { title: "2ND", subtitle: "COMING SOON" },
                { title: "3RD", subtitle: "COMING SOON" },
              ].map((prize, index) => (
                <div
                  key={index}
                  className="bg-[#FF000A]/10 p-6 h-[320px] w-[309px] text-center flex flex-col items-center justify-center"
                >
                  <div className="text-4xl font-bold tracking-wide text-[#B01D15] drop-shadow-[0_0_15px_#B01D15]">
                    {prize.title}
                  </div>
                  <div className="text-md mt-2 tracking-widest text-[#B01D15] drop-shadow-[0_0_15px_#B01D15]">
                    {prize.subtitle}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Event Coordinators */}
          <h2 className="text-2xl font-press uppercase text-center lg:text-left md:text-2xl mb-4 text-orange-500 text-glow-orange tracking-widest">
            Event Coordinators
          </h2>

          {transformedEvent.coordinators &&
          transformedEvent.coordinators.length > 0 ? (
            <div
              className={`grid gap-6 font-press justify-center 
                            ${
                              transformedEvent.coordinators.length === 1
                                ? "grid-cols-1 max-w-xs mx-auto"
                                : transformedEvent.coordinators.length === 2
                                ? "lg:grid-cols-2 grid-cols-1 justify-center max-w-2xl mx-auto"
                                : "lg:grid-cols-3 md:grid-cols-2 grid-cols-1 max-w-5xl mx-auto"
                            } 
                            bg-[#FF000A]/10`}
            >
              {transformedEvent.coordinators.map((coordinator, index) => (
                <div
                  key={index}
                  className="text-center h-[380px] py-6 bg-[#FF000A]/10"
                >
                  {/* Coordinator Image */}
                  <div className="w-32 h-32 bg-red-700 rounded-full mx-auto mb-2 overflow-hidden">
                    <img
                      src={coordinator.image || placeholder}
                      alt={coordinator.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = placeholder;
                      }}
                    />
                  </div>

                  {/* Name & Contact */}
                  <div className="text-xl uppercase text-white text-glow-white">
                    {coordinator.name}
                  </div>
                  <div className="text-lg text-yellow-500 text-glow-yellow">
                    {coordinator.mobile}
                  </div>

                  {/* Social Media Icons */}
                  <div className="flex items-center justify-center mt-4 relative gap-x-2">
                    {coordinator.instagram && (
                      <a
                        href={coordinator.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className="w-12 h-12 bg-red-700 flex justify-center items-center rounded-full">
                          <FaInstagram className="text-white" />
                        </div>
                      </a>
                    )}
                    {coordinator.linkedin && (
                      <a
                        href={coordinator.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className="w-12 h-12 bg-red-700 flex justify-center items-center rounded-full">
                          <FaLinkedin className="text-white" />
                        </div>
                      </a>
                    )}
                    {coordinator.twitter && (
                      <a
                        href={coordinator.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className="w-12 h-12 bg-red-700 flex justify-center items-center rounded-full">
                          <FaTwitter className="text-white" />
                        </div>
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500">Loading coordinators...</p>
          )}

          {/* Buttons */}
          <div className="flex flex-col lg:flex-row font-press justify-center items-center gap-6 my-8 md:mb-64">
            <a
              href={transformedEvent.problemStatementLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full lg:w-[30%]"
            >
              <button className="w-full h-16 bg-transparent border-2 border-white px-8 py-3 md:mt-12 rounded-full shadow-lg shadow-white/30 hover:shadow-white/50 z-10 flex items-center justify-center">
                <span className="text-transparent bg-gradient-to-t from-[#DD903D] to-[#FBD60E] bg-clip-text">
                  PROBLEM STATEMENT
                </span>
              </button>
            </a>
            <a
              href={transformedEvent.registerLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full lg:w-[30%]"
            >
              <button className="w-full h-16 bg-transparent border-2 border-white px-8 py-3 md:mt-12 rounded-full shadow-lg shadow-white/30 hover:shadow-white/50 z-10 flex items-center justify-center">
                <span className="text-transparent bg-gradient-to-t from-[#DD903D] to-[#FBD60E] bg-clip-text">
                  REGISTER
                </span>
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventDetails;
