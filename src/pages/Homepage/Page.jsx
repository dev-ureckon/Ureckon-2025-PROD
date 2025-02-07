import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Intro from "./sections/intro/Intro";
import Hero from "./sections/Hero";
import Gallery from "./sections/Gallery";
import Events from "./sections/events/Events";

import Faq from "./sections/Faq";
import Statistics from "../LandingPage/sections/Statistics";

const Home = () => {
  return (
    <main className="min-h-screen bg-[url('./bg.png')] bg-[#020c1c] bg-center overflow-hidden">
      <Navbar />
      <section className="min-h-screen flex flex-col text-white">
        <Hero />
        <Intro />
        <Gallery />
        <Events />
        <Statistics />
        <Faq />
      </section>
      <Footer />
    </main>
  );
};

export default Home;
