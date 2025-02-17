import React from "react";
import Intro from "./sections/intro/Intro";
import Hero from "./sections/Hero";
import Gallery from "./sections/Gallery";
import Events from "./sections/events/Events";

import Faq from "./sections/Faq";
import Statistics from "../LandingPage/sections/Statistics";
import PacBorderWrapper from "../../components/PacBorder";

const Home = () => {
  return (
    <main className="bg-[#05071A] bg-center overflow-hidden">
      {/* <PacBorderWrapper> */}

      <section className="mx-2 flex flex-col text-white">
        <Hero />
        <Intro />
        <Gallery />
        <Events />
        <Statistics />
        <Faq />
      </section>

      {/* </PacBorderWrapper> */}
    </main>
  );
};

export default Home;
