import React from "react";
import SectionContainer from "../../components/SectionContainer"
import { Link, useParams } from "react-router-dom";
import { FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import placeholder from "../../assets/placeholder_profile.jpg"

const events = [
  {
    id: "biozinformatica",
    name: "BIOZINFORMATICA",
    description: "An inter-college bio quiz event covering everything from basic biology to biotechnology and bioinformatics.",
    eventimage: "https://example.com/biozinformatica.png",
    date: "1ST & 2ND MARCH",
    time: "10:00 AM",
    rules: [
      "Solo (1 member) or Duo (2 members).",
      "Malpractice is strictly prohibited.",
      "Judge’s decision is final."
    ],
    coordinators: [
      { name: "Harshit Choudhury", mobile: "9339010670" },
      { name: "Pousali Saha", mobile: "7085154794" }
    ],
    registerLink: "/register/biozinformatica"
  },
  {
    id: "biotexpression",
    name: "BIOTEXPRESSION",
    description: "A dynamic event for showcasing models, posters, and presentations on various aspects of biotechnology.",
    eventimage: "https://example.com/biotexpression.png",
    date: "1ST MARCH",
    time: "11:00 AM",
    rules: [
      "1 to 4 members per team.",
      "Only poster boards provided; bring your own equipment.",
      "Judgment criteria: Idea & creativity, usefulness, innovation, presentation."
    ],
    coordinators: [
      { name: "Sayantan Biswas", mobile: "9330773760" },
      { name: "Pousali Saha", mobile: "7085154794" }
    ],
    registerLink: "/register/biotexpression"
  },
  {
    id: "code-golf",
    name: "CODE GOLF",
    description: "Think you can solve problems in the fewest characters? URECKON'25 presents CODE GOLF! Sharpen your skills, trim your code, and prove less is more.",
    eventimage: "https://example.com/codegolf.png",
    date: "1ST MARCH",
    time: "TBD",
    rules: [
      "Equal points for all problems.",
      "Bonus points for shorter code.",
      "Rankings based on shortest code and number of problems solved.",
      "No penalties, but total time is calculated.",
      "Bonus language marks for solving in specific languages.",
      "Tie-breaker: least time taken, then last accepted submission time.",
      "Malpractice leads to disqualification."
    ],
    coordinators: [
      { name: "Debanjan Mukherjee", mobile: "7865891741" },
      { name: "Diprajit Chakraborty", mobile: "9875383377" }
    ],
    registerLink: "/register/code-golf"
  },
  {
    id: "code-ranch",
    name: "CODE RANCH",
    description: "Race against the clock to solve challenges with speed and precision.",
    eventimage: "https://example.com/coderanch.png",
    date: "1ST MARCH",
    time: "7:00 PM - 9:00 PM",
    rules: [
      "Max 2 members per team.",
      "Duration: 2 hours.",
      "Platform: Hackerrank.",
      "5 questions.",
      "Ranking based on ICPC system.",
      "Penalty time for incorrect submissions.",
      "Tie-breaker: least time taken, then last accepted submission time.",
      "Plagiarism leads to disqualification."
    ],
    coordinators: [
      { name: "Prithvi Sen", mobile: "9734466555" },
      { name: "Santadip Rudra", mobile: "7044522841" }
    ],
    registerLink: "/register/code-ranch"
  },
  {
    id: "debugger",
    name: "DEBUGGER",
    description: "Can you fix broken code under pressure? Join URECKON'25's DEBUGGER! Outsmart the bugs, fix the errors, and beat the clock.",
    eventimage: "https://example.com/debugger.png",
    date: "1ST MARCH",
    time: "TBD",
    rules: [
      "Max 1 participant per team (solo event).",
      "Duration: 1 hour.",
      "Platform: Hackerrank.",
      "8 questions.",
      "Ranking based on ICPC system.",
      "Penalty time for incorrect submissions.",
      "Tie-breaker: least time taken, then last accepted submission time.",
      "Plagiarism leads to disqualification."
    ],
    coordinators: [
      { name: "Debojit Ganguly", mobile: "8777589882" },
      { name: "Rudranil Malik", mobile: "9883210925" }
    ],
    registerLink: "/register/debugger"
  },
  {
    id: "mindful-minds",
    name: "MINDFUL MINDS",
    description: "Ready to push ML boundaries? Mindful Machines at Ureckon'25 challenges you to build the most powerful, high-performing model for real-world problems.",
    eventimage: "https://example.com/mindfulminds.png",
    date: "1ST - 2ND MARCH",
    time: "TBD",
    rules: [
      "Max 3 members per team, solo participation allowed.",
      "Must address the given problem statement.",
      "Tools allowed: Figma, Adobe XD, Notion.",
      "Duration: 2 days.",
      "Plagiarized submissions will be disqualified.",
      "Final submission: PowerPoint presentation/Notion case study.",
      "Judging criteria: The decision of the coordinators will be final."
    ],
    coordinators: [
      { name: "Anita Mukherjee", mobile: "8250289175" },
      { name: "Debargha Bandyopadhyay", mobile: "8167336506" },
      { name: "Anirban Basak", mobile: "9804516488" }
    ],
    registerLink: "/register/mindful-minds"
  },
  {
    id: "product-game",
    name: "PRODUCT GAME 4.0",
    description: "Revolutionize the world with Product Game 4.0! Tackle society's challenges, turn ideas into game-changing products, and lead the change.",
    eventimage: "https://example.com/productgame.png",
    date: "1ST - 2ND MARCH",
    time: "TBD",
    rules: [
      "Preliminary: Google Form quiz before the competition.",
      "Final: Develop an optimized AI model based on the provided problem statement.",
      "Evaluation based on accuracy, precision, and inference time.",
      "Only Python allowed.",
      "AI tools (ChatGPT, Deepseek, Claude) are allowed.",
      "Submissions must be pushed to the provided Git repository.",
      "Plagiarism leads to disqualification.",
      "Offline event, deadlines must be met.",
      "Judging criteria: Model performance, inference speed, and innovation."
    ],
    coordinators: [
      { name: "Mrinmay Das", mobile: "9836014691" },
      { name: "Swarnavo Mukherjee", mobile: "9903619331" },
      { name: "Indranil Saha", mobile: "9330074221" }
    ],
    registerLink: "/register/product-game"
  },
  {
    id: "cyber-cipher",
    name: "CYBER CIPHER",
    description: "Ready to test your hacking skills? Join URECKON'25's CYBER CIPHER! Tackle cryptographic puzzles and real-world penetration testing.",
    eventimage: "https://example.com/cybercipher.png",
    date: "1ST & 2ND MARCH",
    time: "TBD",
    rules: [
      "Must have a new TryHackMe account before registration.",
      "Max team size: 3, solo participation allowed.",
      "DDoS attacks are strictly prohibited.",
      "Participants must carry their own systems and tools.",
      "College ID required for verification.",
      "The decisions of the coordinators shall be final."
    ],
    coordinators: [
      { name: "Arkaprabha Chakraborty", mobile: "6289844601" },
      { name: "Arkapravo Ghosh", mobile: "7003768803" }
    ],
    registerLink: "/register/cyber-cipher"
  }
];


const EventDetails = () => {
    const { eventId } = useParams();
    const event = events.find((e) => e.id === eventId);
  
    if (!event) {
      return <div className="text-center text-white">Event not found!</div>;
    }
  return (
<section>
    {/* <SectionContainer>     */}
    <div className="bg-cover bg-center   min-h-screen p-6 font-mono">
        <div className="fixed inset-0 overflow-hidden z-[-1]">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h1 className="text-4xl text-center md:text-6xl mb-5 lg:mb-12 lg:text-6xl font-press text-[#B01D15] drop-shadow-[0_0_20px_#B01D15]">
          {event.name}
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
              )
            }
            return <div key={i} className="w-2 h-2 xs:w-2 xs:h-2 md:w-4 md:h-4 rounded-full bg-yellow-300" />
          })}
        </div>

        {/* About Section */}
        <div className="p-6 md:p-10 font-press rounded-lg mb-8 text-white">
  {/* ABOUT Heading */}
  <h2 className="text-2xl md:text-2xl text-center lg:text-left mb-4 text-[#B01D15] drop-shadow-[0_0_20px_#B01D15] tracking-widest">
    ABOUT
  </h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 items-center">
    {/* Description */}
    <p className="text-[#C0C0C0] text-center lg:text-left drop-shadow-[0_0_20px_#C0C0C0] text-sm md:text-base leading-loose">
    {event.description}
    </p>

    {/* Image Section */}
    <div className="relative mx-auto w-full max-w-sm">
      <div className="relative w-full h-[280px] lg:h-[380px]">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Rectangle%2065-QH9qk4m1nzxH4K5CsMyf7n8IJySbwz.png"
          alt="Red Background"
          className="w-full h-full object-cover"
        />
        {["-top-3 -left-3", "-top-3 -right-3", "-bottom-3 -left-3", "-bottom-3 -right-3"].map((pos, index) => (
          <div key={index} className={`absolute ${pos} w-6 h-6 flex items-center justify-center`}>
            <span className="text-[#FF0000] text-sm lg:text-xl font-bold leading-none transform translate-x-[2px] translate-y-[2px]">
              +
            </span>
          </div>
        ))}
        {/* Event Image */}
        <div className="absolute inset-4 md:inset-5">
          <img
            src={event.eventimage}
            alt="Portrait"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  </div>

  {/* Date & Time */}
  <div className="flex flex-col lg:flex-row items-center justify-center gap-4 mt-6">
  <div className="relative flex flex-col items-center">
    <span className="bg-[#B01D15]/50 px-6 py-6 rounded-md text-[#B01D15] tracking-wide mt-2 text-lg sm:text-xl">
      {event.date}
    </span>
  </div>
  <div className="relative flex flex-col items-center">
    <span className="bg-[#B01D15]/50 px-6 py-6 rounded-md text-[#B01D15] tracking-wide mt-2 text-lg sm:text-xl">
      {event.time}
    </span>
  </div>
</div>

</div>




        {/* Rules Section */}
        <div className="p-6 font-press rounded-lg mb-8">
                        <h2 className="text-2xl text-center lg:text-left md:text-2xl mb-4 text-[#B01D15] drop-shadow-[0_0_20px_#B01D15] tracking-widest">
                            RULES
                        </h2>
                        <ul className="list-disc list-inside text-[#C0C0C0] drop-shadow-[0_0_20px_#C0C0C0] text-sm md:text-base leading-loose">
                            {event.rules.map((rule, index) => (
                                <li key={index}>{rule}</li>
                            ))}
                        </ul>
                    </div>




<div className="p-6 rounded-lg mb-8 font-press text-center">
  {/* Prizes Heading */}
  <h2 className="text-2xl text-center lg:text-left md:text-2xl mb-4 text-[#B01D15]  drop-shadow-[0_0_20px_#B01D15] tracking-widest">
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
        className="bg-[#FF000A]/10 p-6 h-[320px] w-[309px] text-center flex flex-col items-center justify-center  "
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



<h2 className="text-2xl font-press uppercase text-center lg:text-left md:text-2xl mb-4 text-[#B01D15] drop-shadow-[0_0_20px_#B01D15] tracking-widest">
  Event Coordinators
</h2>

{/* Event Coordinators */}
{event.coordinators && event.coordinators.length > 0 ? (
  <div
    className={`grid gap-6 font-press justify-center 
    ${event.coordinators.length === 1 ? "grid-cols-1" : ""} 
    ${event.coordinators.length === 2 ? "lg:grid-cols-2 grid-cols-1 justify-center" : ""} 
    ${event.coordinators.length >= 3 ? "lg:grid-cols-3 md:grid-cols-2 grid-cols-1" : ""} 
    bg-[#FF000A]/10`}
  >
    {event.coordinators.map((coordinator, index) => (
      <div key={index} className="text-center h-[380px] py-6 bg-[#FF000A]/10">
        
        {/* Coordinator Image */}
        <div className="w-32 h-32 bg-[#B01D15] rounded-full mx-auto mb-2 overflow-hidden">
  <img
    src={coordinator.image || placeholder} // Use placeholder if no image
    alt={coordinator.name || "Coordinator"}
    className="w-full h-full object-cover"
    onError={(e) => { e.target.onerror = null; e.target.src = "/placeholder.jpg"; }} // Fallback if image fails to load
  />
</div>


        {/* Name & Contact */}
        <div className="text-xl uppercase text-[#B01D15] drop-shadow-[0_0_20px_#B01D15]">
          {coordinator.name}
        </div>
        <div className="text-lg text-[#B01D15] drop-shadow-[0_0_20px_#B01D15]">
          {coordinator.mobile}
        </div>

        {/* Social Media Icons */}
        <div className="flex items-center justify-center mt-4 relative gap-x-2">
          <a href={coordinator.instagram} target="_blank" rel="noopener noreferrer">
            <div className="w-12 h-12 bg-[#B01D15] flex justify-center items-center rounded-full">
              <FaInstagram className="text-white" />
            </div>
          </a>
          <a href={coordinator.linkedin} target="_blank" rel="noopener noreferrer">
            <div className="w-12 h-12 bg-[#B01D15] flex justify-center items-center rounded-full">
              <FaLinkedin className="text-white" />
            </div>
          </a>
          <a href={coordinator.twitter} target="_blank" rel="noopener noreferrer">
            <div className="w-12 h-12 bg-[#B01D15] flex justify-center items-center rounded-full">
              <FaTwitter className="text-white" />
            </div>
          </a>
        </div>

      </div>
    ))}
  </div>
) : (
  <p className="text-center text-gray-500">Loading coordinators...</p>
)}


       {/* Buttons */}
<div className="flex flex-col lg:flex-row font-press justify-center items-center gap-6 my-8">
  <a 
    href={event.problemStatementLink}
    target="_blank" 
    rel="noopener noreferrer"
    className="w-full lg:w-[30%]"
  >
    <button className="w-full bg-transparent border-2 border-white px-8 py-3 rounded-full shadow-lg shadow-white/30 hover:shadow-white/50 z-10">
      <span className="text-transparent bg-gradient-to-t from-[#DD903D] to-[#FBD60E] bg-clip-text">
        PROBLEM STATEMENT
      </span>
    </button>
  </a>
  <Link to="/register" className="w-full lg:w-[30%]">
    <button className="w-full bg-transparent border-2 border-white px-8 py-3 rounded-full shadow-lg shadow-white/30 hover:shadow-white/50 z-10">
      <span className="text-transparent bg-gradient-to-t from-[#DD903D] to-[#FBD60E] bg-clip-text">
        REGISTER
      </span>
    </button>
  </Link>
</div>

        {/* Bottom Ghost */}
        <div className="relative w-full mb-8">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PAC%20MAN%20GHOST-FnaZRTH5uVzXmu1Zx3T09RQ9kwsorU.png"
            alt="Decorative Pac-Man Bar"
            className="w-full h-auto max-w-[800px] mx-auto"
          />
        </div>
      </div>
    </div>
    {/* </SectionContainer> */}
</section>
  );
};

export default EventDetails;