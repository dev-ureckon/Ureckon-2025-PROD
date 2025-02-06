import React from "react";
import T from "../../../components/T";
import SectionContainer from '../../../components/SectionContainer'
import rectangle115 from "../../../assets/Rectangle 115.svg";
import rectangle70 from "../../../assets/Rectangle 70.svg"
import { Link } from 'react-router-dom';

const EventsPage2 = () => {
  return (
    <div className="mt-12">
      <SectionContainer>
      <Link to="/events" className="w-full py-2 sm:py-3 lg:py-4 px-3 sm:px-4 lg:px-6 relative block">
        <h1 className="font-['Press_Start_2P'] text-[16px] sm:text-[20px] lg:text-[24px] leading-[24px] sm:leading-[32px] lg:leading-[44px] font-normal text-white">&lt;&lt; BACK</h1>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/10 to-black/30"></div>
      </Link>
        <div className="mt-12">
          <div className="relative w-full max-w-[800px] min-h-[200px] sm:min-h-[350px] bg-[#3D0000] border-2 border-[#FF0000] rounded-lg p-2 sm:p-4">
            <div className="absolute -top-4 -left-2 text-[#FF0000] text-xl font-bold">+</div>
            <div className="absolute -top-4 -right-2 text-[#FF0000] text-xl font-bold">+</div>
            <div className="absolute -bottom-4 -left-1 text-[#FF0000] text-xl font-bold">+</div>
            <div className="absolute -bottom-4 -right-1 text-[#FF0000] text-xl font-bold">+</div>

            <div className="grid grid-cols-2 gap-2 sm:gap-6">
              <div className="h-[200px] sm:h-[350px] lg:h-[300px]">
                <img
                  src={rectangle115}
                  alt="Event"
                  className="w-full h-full object-cover rounded"
                />
              </div>

              <div className="flex flex-col justify-center items-center space-y-4">
                <h2 className="font-['Press_Start_2P'] text-[7px] sm:text-xs lg:text-base text-white text-center">
                  <span className="block sm:hidden">BOSHE</span>
                  <span className="block sm:hidden">AKO</span>
                  <span className="block sm:hidden">PROTIJOGITA</span>
                  <span className="hidden sm:block">BOSHE AKO PROTIJOGITA</span>
                </h2>
                <p className="font-['Press_Start_2P'] text-[5px] sm:text-[10px] lg:text-sm text-center leading-relaxed text-white">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <div className="flex flex-col items-center space-y-2">
                  <p className="font-['Press_Start_2P'] text-[5px] sm:text-[10px] lg:text-sm whitespace-nowrap text-white">
                    VENUE- XYZ HALL
                  </p>
                  <p className="font-['Press_Start_2P'] text-[5px] sm:text-[10px] lg:text-sm whitespace-nowrap text-white">
                    TIME- 04:20 AM
                  </p>
                  <div className="flex gap-2 py-5 sm:gap-4 justify-center">
                    <button className="bg-[#FF0000] px-1 sm:px-4 lg:px-6 py-1 sm:py-2 font-['Press_Start_2P'] text-[4px] sm:text-[10px] lg:text-sm hover:bg-[#cc0000] transition-colors whitespace-nowrap">
                      REGISTER
                    </button>
                    <button className="bg-[#FF0000] px-1 sm:px-4 lg:px-6 py-1 sm:py-2 font-['Press_Start_2P'] text-[4px] sm:text-[10px] lg:text-sm hover:bg-[#cc0000] transition-colors whitespace-nowrap">
                      CONTACT
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12">
          <div className="relative w-full max-w-[800px] min-h-[200px] sm:min-h-[350px] bg-[#588C8A33] border-2 border-[#FF0000] rounded-lg p-2 sm:p-4">
            <div className="absolute -top-4 -left-2 text-[#FF0000] text-xl font-bold">+</div>
            <div className="absolute -top-4 -right-2 text-[#FF0000] text-xl font-bold">+</div>
            <div className="absolute -bottom-4 -left-1 text-[#FF0000] text-xl font-bold">+</div>
            <div className="absolute -bottom-4 -right-1 text-[#FF0000] text-xl font-bold">+</div>

            <div className="grid grid-cols-2 gap-2 sm:gap-6">
              <div className="h-[200px] sm:h-[350px] lg:h-[300px]">
                <img
                  src={rectangle70}
                  alt="Event"
                  className="w-full h-full object-cover rounded"
                />
              </div>

              <div className="flex flex-col justify-center items-center space-y-4">
                <h2 className="font-['Press_Start_2P'] text-[7px] sm:text-xs lg:text-base text-white text-center">
                  <span className="block sm:hidden">BOSHE</span>
                  <span className="block sm:hidden">AKO</span>
                  <span className="block sm:hidden">PROTIJOGITA</span>
                  <span className="hidden sm:block">BOSHE AKO PROTIJOGITA</span>
                </h2>
                <p className="font-['Press_Start_2P'] text-[5px] sm:text-[10px] lg:text-sm text-center leading-relaxed text-white">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <div className="flex flex-col items-center space-y-2">
                  <p className="font-['Press_Start_2P'] text-[5px] sm:text-[10px] lg:text-sm whitespace-nowrap text-white">
                    VENUE- XYZ HALL
                  </p>
                  <p className="font-['Press_Start_2P'] text-[5px] sm:text-[10px] lg:text-sm whitespace-nowrap text-white">
                    TIME- 04:20 AM
                  </p>
                  <div className="flex gap-2 py-5 sm:gap-4 justify-center">
                    <button className="bg-[#FF0000] px-1 sm:px-4 lg:px-6 py-1 sm:py-2 font-['Press_Start_2P'] text-[4px] sm:text-[10px] lg:text-sm hover:bg-[#cc0000] transition-colors whitespace-nowrap">
                      REGISTER
                    </button>
                    <button className="bg-[#FF0000] px-1 sm:px-4 lg:px-6 py-1 sm:py-2 font-['Press_Start_2P'] text-[4px] sm:text-[10px] lg:text-sm hover:bg-[#cc0000] transition-colors whitespace-nowrap">
                      CONTACT
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>
    </div>
  );
};

export default EventsPage2;