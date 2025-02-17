import React, { useEffect, useState } from "react";
import bg from "../../../assets/hero.gif";

const Hero = () => {
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2025-02-31T00:00:00").getTime();

    const countdown = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(countdown);
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTime({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(countdown);
  }, []);

  return (
    <section>
      {/* gif */}
      <section
        className="hidden relative mt-0 w-full h-[100vh] lg:flex flex-col items-center justify-center bg-contain bg-no-repeat bg-center p-6 md:p-12 lg:p-20 overflow-hidden bg-opacity-50"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="text-center lg:p-4 p-4">
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-press text-[#7AD0E5] drop-shadow-[0_0_20px_#7AD0E5]">
            URECKON
          </h1>
          <p className="my-4 bg-gradient-to-b from-[#FBD60E] to-[#DD903D] bg-clip-text text-transparent font-press lg:text-5xl text-2xl tracking-wider">
            BLAST FROM THE PAST
          </p>
        </div>

        <div className="absolute bottom-8 w-full flex justify-center">
          <div className="flex bg-black p-2 md:p-4 space-x-0 md:space-x-4 rounded-lg">
            {Object.entries(time).map(([unit, value], index) => (
              <React.Fragment key={unit}>
                <div className="flex flex-col items-center justify-center bg-[#1a1a1a] text-white w-14 h-16 md:w-20 md:h-20 border-2 border-white">
                  <div className="text-lg md:text-3xl font-press">{value}</div>
                </div>
                {index < 3 && (
                  <span className="text-[#F6EC28] text-2xl md:text-4xl font-press flex items-center">
                    :
                  </span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>
      {/* mobile */}
      <section className="lg:hidden flex flex-col items-center justify-center min--screen">
        <div className="text-center p-4">
          <h1 className="text-4xl md:text-6xl font-press text-[#7AD0E5] drop-shadow-[0_0_20px_#7AD0E5]">
            URECKON
          </h1>
          <p className="my-4 bg-gradient-to-b from-[#FBD60E] to-[#DD903D] bg-clip-text text-transparent font-press lg:text-5xl text-2xl tracking-wider">
            BLAST FROM THE PAST
          </p>
        </div>
        <div className="w-full flex justify-center">
          <img
            src={bg}
            alt="Background"
            className="w-full max-w-[400px] rounded-lg shadow-lg"
          />
        </div>
        <div className="py-8 flex justify-center mb-10">
          <div className="flex w-[400px] justify-center items-center p-2 space-x-1 rounded-lg">
            {Object.entries(time).map(([unit, value], index) => (
              <React.Fragment key={unit}>
                <div className="flex flex-col items-center justify-center bg-[#1a1a1a] text-white w-12 h-12 border-2 border-white">
                  <div className="text-lg font-press">{value}</div>
                </div>
                {index < 3 && (
                  <span className="text-[#F6EC28] text-2xl md:text-4xl font-press flex items-center">
                    :
                  </span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
};

export default Hero;
