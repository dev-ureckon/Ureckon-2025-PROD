import React from "react";
import EventCard from "./components/EventCard";
import { TextAnimate } from "../../../../components/ui/text-animate";

export default function Events() {
  return (
    <section className="px-5">
      <div className="mx-auto text-center">
        <h1
        style={{
          background: "linear-gradient(to bottom, #FFB74D, #F57C00)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
          className="text-2xl lg:text-6xl uppercase font-pixel drop-shadow-[0_0_10px_rgba(234,179,8,0.8)] mt-[3rem]  top-[3rem]"
        
        >
          <TextAnimate animation="slideLeft" by="character">
          Events
          </TextAnimate>
         
        </h1>
      </div>
      <div className="mx-6 lg:mx-0">
      <EventCard/>
      </div>
    </section>
  );
}
