import React from "react";
import { Link, useParams } from "react-router-dom";
import SectionContainer from "../../../components/SectionContainer";
import dummyEvent from "../../../assets/dummyEvent.png";

const EventsPage2 = () => {
  const { category } = useParams(); // Get category from URL

  // Dummy event data grouped by categories
  const eventCategories = {
    coding: [
      { title: "Code Ranch", description: "Competitive programming challenge.", venue: "UEMK Campus", image: dummyEvent, actions: ["VIEW"] },
      { title: "Code Golf", description: "Write the shortest and most efficient code.", venue: "UEMK Campus", image: dummyEvent, actions: ["VIEW"] },
      { title: "Debugger", description: "Find and fix bugs in code.", venue: "UEMK Campus", image: dummyEvent, actions: ["VIEW"] },
      { title: "Spyder", description: "A web development hackathon.", venue: "UEMK Campus", image: dummyEvent, actions: ["VIEW"] },
      { title: "Product Game", description: "UI/UX design challenge.", venue: "UEMK Campus", image: dummyEvent, actions: ["VIEW"] },
      { title: "Apptify", description: "App development competition.", venue: "UEMK Campus", image: dummyEvent, actions: ["VIEW"] },
      { title: "Cyber Cipher", description: "Capture The Flag and penetration testing.", venue: "UEMK Campus", image: dummyEvent, actions: ["VIEW"] },
      { title: "Mindful Machines", description: "A machine learning challenge.", venue: "UEMK Campus", image: dummyEvent, actions: ["VIEW"] }
    ],
  
    flagship: [
      { title: "Ureckon Innovation Challenge (UIC)", description: "Showcase groundbreaking innovations.", venue: "UEMK Campus", image: dummyEvent, actions: ["VIEW"] },
      { title: "Tech Expo", description: "An exhibition of the latest tech advancements.", venue: "UEMK Campus", image: dummyEvent, actions: ["VIEW"] },
      { title: "Ureckon International Coding Challenge (UICC)", description: "International-level coding contest.", venue: "UEMK Campus", image: dummyEvent, actions: ["VIEW"] },
      { title: "Ureck-A-Thon", description: "A 36-hour hackathon challenge.", venue: "UEMK Campus", image: dummyEvent, actions: ["VIEW"] }
    ],
  
    robotics: [
      { title: "Robo Dangal", description: "Ultimate bot wrestling showdown.", venue: "UEMK Campus", image: dummyEvent, actions: ["VIEW"] },
      { title: "Robo Sumo", description: "Sumo wrestling with autonomous robots.", venue: "UEMK Campus", image: dummyEvent, actions: ["VIEW"] },
      { title: "Need for Torque", description: "Robotic drag race competition.", venue: "UEMK Campus", image: dummyEvent, actions: ["VIEW"] },
      { title: "Robo League", description: "Robotic soccer league.", venue: "UEMK Campus", image: dummyEvent, actions: ["VIEW"] },
      { title: "Dirreción", description: "Line-following robot challenge.", venue: "UEMK Campus", image: dummyEvent, actions: ["VIEW"] },
      { title: "Robo GT", description: "Racing competition for AI-driven robots.", venue: "UEMK Campus", image: dummyEvent, actions: ["VIEW"] }
    ],
  
    quiz: [
      { title: "Think Tech", description: "Under-25 BizTech quiz competition.", venue: "UEMK Campus", image: dummyEvent, actions: ["VIEW"] },
      { title: "Clue-X", description: "Inter-school quiz championship.", venue: "UEMK Campus", image: dummyEvent, actions: ["VIEW"] },
      { title: "Star Sprint", description: "An astronomical quiz challenge.", venue: "UEMK Campus", image: dummyEvent, actions: ["VIEW"] }
    ],
  
    initiatives: [
      { title: "Playtopia", description: "Game development hackathon.", venue: "UEMK Campus", image: dummyEvent, actions: ["VIEW"] },
      { title: "Through the Lens", description: "Photography and cinematography challenge.", venue: "UEMK Campus", image: dummyEvent, actions: ["VIEW"] },
      { title: "Circuitrix", description: "Circuit designing competition.", venue: "UEMK Campus", image: dummyEvent, actions: ["VIEW"] },
      { title: "Croma Craft", description: "Color grading and editing challenge.", venue: "UEMK Campus", image: dummyEvent, actions: ["VIEW"] },
      { title: "Frames of Expression", description: "Color grading and editing challenge.", venue: "UEMK Campus", image: dummyEvent, actions: ["VIEW"] },
      { title: "Frame Flick", description: "Color grading and editing challenge.", venue: "UEMK Campus", image: dummyEvent, actions: ["VIEW"] },
      { title: "Cosmic Capture", description: "Color grading and editing challenge.", venue: "UEMK Campus", image: dummyEvent, actions: ["VIEW"] }
    ],
  
    gaming: [
      { title: "Valorant", description: "Tactical FPS showdown.", venue: "UEMK Campus", image: dummyEvent, actions: ["VIEW"] },
      { title: "E-Football", description: "Football video game competition.", venue: "UEMK Campus", image: dummyEvent, actions: ["VIEW"] },
      { title: "BGMI", description: "Battle Royale tournament.", venue: "UEMK Campus", image: dummyEvent, actions: ["VIEW"] },
      { title: "FC - 25", description: "FIFA gaming battle.", venue: "UEMK Campus", image: dummyEvent, actions: ["VIEW"] },
      { title: "Tug O' War", description: "Strength-based esports game.", venue: "UEMK Campus", image: dummyEvent, actions: ["VIEW"] },
      { title: "Red Light, Green Light", description: "Strength-based esports game.", venue: "UEMK Campus", image: dummyEvent, actions: ["VIEW"] }
    ],
  
    "bio-tech": [
      { title: "Bioz Informatica", description: "Biotech meets AI.", venue: "UEMK Campus", image: dummyEvent, actions: ["VIEW"] },
      { title: "Healthy Bites", description: "Nutritional science competition.", venue: "UEMK Campus", image: dummyEvent, actions: ["VIEW"] },
      { title: "Biotexpression", description: "Molecular biology experiments.", venue: "UEMK Campus", image: dummyEvent, actions: ["VIEW"] }
    ],
  
    "biz-events": [
      { title: "Are-U-Holmes?", description: "Business case-solving challenge.", venue: "UEMK Campus", image: dummyEvent, actions: ["VIEW"] },
      { title: "AdMad", description: "Creative marketing challenge.", venue: "UEMK Campus", image: dummyEvent, actions: ["VIEW"] },
      { title: "Mandi", description: "Sales and entrepreneurship simulation.", venue: "UEMK Campus", image: dummyEvent, actions: ["VIEW"] },
      { title: "Sellingopedia", description: "Real-world selling competition.", venue: "UEMK Campus", image: dummyEvent, actions: ["VIEW"] }
    ]
  };

  
  
  

  // Get events for the selected category, default to an empty array
  const events = eventCategories[category] || [];

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
              {["-top-3 -left-3", "-top-3 -right-3", "-bottom-3 -left-3", "-bottom-3 -right-3"].map((pos, idx) => (
                <div key={idx} className={`absolute ${pos} w-6 h-6 flex items-center justify-center`}>
                  <span className="text-[#FF0000] text-2xl sm:text-3xl font-bold leading-none">+</span>
                </div>
              ))}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Image Section */}
                <div className="h-48 sm:h-64 lg:h-72">
                  <img src={event.image} alt={event.title} className="w-full h-full object-cover rounded" />
                </div>

                {/* Event Details */}
                <div className="flex flex-col justify-center items-center space-y-4 text-center">
                  <h2 className="font-['Press_Start_2P'] text-xs lg:text-lg text-white">{event.title}</h2>
                  <p className="font-['Press_Start_2P'] text-[8px] lg:text-[10px] text-white text-center leading-relaxed">
                    {event.description}
                  </p>
                  <div className="flex flex-col items-center space-y-2 text-white">
                    <p className="text-[8px] lg:text-xs font-press">VENUE: {event.venue}</p>
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-2 sm:gap-4 py-3">
                    {event.actions.map((action, idx) => (
                      <Link
                        key={idx}
                        to={`/events/${category}/${event.title.replace(/\s+/g, "-").toLowerCase()}`}
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

export default EventsPage2;
