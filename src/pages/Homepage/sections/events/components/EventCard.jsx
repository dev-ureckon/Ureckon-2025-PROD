import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "../../../../../components/ui/canvas-reveal-effect";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../../../../components/ui/carousel";

export default function EventCarousel() {
  const events = [
    { id: 1, title: "Coding" },
    { id: 2, title: "Flagship" },
    { id: 3, title: "Robotics" },
    { id: 4, title: "Quiz" },
    { id: 5, title: "Gaming" },
    { id: 6, title: "Initiatives" },
    { id: 7, title: "Biotech" },
    { id: 8, title: "Biz Events" },
  ];

  return (
    <div className="lg:pb-20 w-full mx-auto lg:px-8 ">
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full max-w-5xl mx-auto mt-[4rem]"
      >
        <CarouselContent className="" >
          {events.map((event) => (
            <CarouselItem key={event.id} className=" lg:basis-1/3">
              <Card title={event.title} className=""/>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}

const Card = ({ title }) => {
  const [isActive, setIsActive] = React.useState(false);
  const handleInteraction = (active) => {
    setIsActive(active);
  };

  return (
    <div
      onMouseEnter={() => handleInteraction(true)}
      onMouseLeave={() => handleInteraction(false)}
      onTouchStart={() => handleInteraction(true)}
      onTouchEnd={() => handleInteraction(false)}
      className="group/canvas-card flex items-center justify-center mx-auto p-[rem] relative lg:h-[500px] h-[400px] w-full bg-[#ff0000] bg-opacity-15"
    >
      <CornerIcon className="absolute h-6 w-6 -top-1 -left-1 text-[#ff0000]" />
      <CornerIcon className="absolute h-6 w-6 -bottom-1 -left-1 text-[#ff0000]" />
      <CornerIcon className="absolute h-6 w-6 -top-1 -right-1 text-[#ff0000]" />
      <CornerIcon className="absolute h-6 w-6 -bottom-1 -right-1 text-[#ff0000]" />

      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="h-full w-full absolute inset-0"
          >
            <CanvasRevealEffect
              animationSpeed={5.1}
              containerClassName="bg-black"
              colors={[
                [236, 72, 153],
                [232, 121, 249],
              ]}
              dotSize={1}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative p z-20">
        <h2
          className="opacity-100  group-hover/canvas-card:opacity-100 relative z-10 font-bold group-hover/canvas-card:text-[#ff0000] transition duration-200 text-lg md:text-2xl font-pixel text-center bg-gradient-to-b bg-clip-text text-transparent from-[#FFB74D] to-[#F57C00]
             uppercase"
        >
          {title}
        </h2>
      </div>
    </div>
  );
};

const CornerIcon = ({ className, ...rest }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
