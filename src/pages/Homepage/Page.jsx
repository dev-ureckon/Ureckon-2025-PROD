import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Hero from "./sections/Hero";

const Home = () => {
  return (
    <main>
      <section>
        <Navbar />
      </section>
      <section>
        Homepage content
        <Hero />
      </section>
      <section>
        <Footer />
      </section>
    </main>
  );
};

export default Home;
