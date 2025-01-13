import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Hero from "./sections/Hero"

const AboutPage = () => {
  return (
    <main>
      <section><Navbar /></section>
      <section>
        About us Page content
        <Hero />
      </section>
      <section><Footer /></section>
    </main>
  )
}

export default AboutPage
