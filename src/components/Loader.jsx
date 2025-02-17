import load from "/ureckon.svg";
import u7 from "/Frame 25.svg";
import arrow from "/loader/arrow.svg";
import space from "/loader/space.svg";
import tab from "/loader/tap.svg";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import BackgroundParticles from "./BackgroundParticles";

const Loader = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1450);
  const updateMedia = () => {
    setIsDesktop(window.innerWidth > 1450);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  }, []);

  const sectionRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const text = textRef.current;

    // Fade in the entire section content
    gsap.fromTo(
      section,
      { opacity: 0 },
      { opacity: 1, duration: 1, ease: "power2.inOut" }
    );

    // Pulse animation for the text
    gsap.to(text, {
      opacity: 0.5,
      duration: 1,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <div className="relative h-screen">
      <BackgroundParticles />
      <div
        ref={sectionRef}
        className="absolute inset-0 px-8 py-8 md:px-8 lg:px-16 max-lg:p-10 flex flex-col justify-center items-center opacity-0"
      >
        <div className="mb-16">
          <img src={load} className="mx-auto" alt="Ureckon logo" />
        </div>
        <div className="flex flex-col gap-5 mb-[5rem]">
          <img src={u7} className="mx-auto h-[225px]" alt="Frame 25" />

          {/* <h1
            ref={textRef}
            className="font-pixel text-[#C0C0C0] text-sm max-w-5xl md:text-[20.82px] drop-shadow-[0_0_10px_#fff] mx-auto text-center"
          >
            CLICK ANYWHERE TO START
          </h1> */}
          {/* <div className="flex mt-[3rem] items-center gap-12 px-6">
            {isDesktop ? (
              <div className="flex items-center md:relative mx-auto">
                <div className="flex items-center gap-1 md:relative md:left-20">
                  <button className="w-[300.16px]">
                    <img src={arrow} className="" />
                  </button>
                  <h1 className="font-pixel text-[#C0C0C0] text-opacity-[60%] drop-shadow-[0_0_10px_#fff] text-[15.33px] w-full">
                    to move,
                  </h1>
                </div>

                <button className="w-[200.16px]">
                  <img src={space} />
                </button>
              </div>
            ) : (
              <button className="w-[244.16px]">
                <img src={tab} className="" />
              </button>
            )}

            <h1 className="font-pixel text-[#C0C0C0] text-opacity-[60%] drop-shadow-[0_0_10px_#fff]  w-full text-[8px] md:text-[15.33px] relative md:right-16 right-[3rem]">
              to turn the music on
            </h1>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Loader;
