import React from "react";
import EventCard from "./components/EventCard";

export default function Events() {
  return (
    <div className="">
      <div className="mx-auto text-center">
        <h1
        style={{
          background: "linear-gradient(to bottom, #FFB74D, #F57C00)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
          className="text-[52.05px] max-lg:text-2xl
             uppercase font-pixel drop-shadow-[0_0_10px_rgba(234,179,8,0.8)] mt-[8rem]"
        
        >
          Events
        </h1>
      </div>
      <div className="">
      <EventCard/>
      </div>
    </div>
  );
}
