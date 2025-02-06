import React from 'react';

const EventBox = ({ image, title, description, venue, time }) => (
  <div className="relative w-full max-w-[90%] md:max-w-[70%] min-h-[200px] sm:min-h-[350px] bg-[#3D0000] border-2 border-[#FF0000] rounded-lg p-2 mx-auto">
    <div className="absolute -top-4 -left-2 text-[#FF0000] text-xl font-bold">+</div>
    <div className="absolute -top-4 -right-2 text-[#FF0000] text-xl font-bold">+</div>
    <div className="absolute -bottom-4 -left-1 text-[#FF0000] text-xl font-bold">+</div>
    <div className="absolute -bottom-4 -right-1 text-[#FF0000] text-xl font-bold">+</div>
    <div className="grid grid-cols-2 gap-2 sm:gap-6">
      <div className="h-[200px] sm:h-[350px] lg:h-[300px]">
        <img src={image} alt="Event" className="w-full h-full object-cover rounded" />
      </div>
      <div className="flex flex-col justify-center items-center space-y-4">
        <h2 className="font-['Press_Start_2P'] text-[7px] sm:text-xs lg:text-base text-white text-center">
          {title.split(' ').map((word, index) => (
            <span key={index} className="block sm:hidden">{word}</span>
          ))}
          <span className="hidden sm:block">{title}</span>
        </h2>
        <p className="font-['Press_Start_2P'] text-[5px] sm:text-[10px] lg:text-sm text-center leading-relaxed text-white">
          {description}
        </p>
        <div className="flex flex-col items-center space-y-2">
          <p className="font-['Press_Start_2P'] text-[5px] sm:text-[10px] lg:text-sm whitespace-nowrap text-white">
            VENUE- {venue}
          </p>
          <p className="font-['Press_Start_2P'] text-[5px] sm:text-[10px] lg:text-sm whitespace-nowrap text-white">
            TIME- {time}
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
);

export default EventBox;
