import React from 'react'
import Testimony from "../components/Testimony";
import Footer from "../components/Footer";
import SectionHero from '../components/SectionHero';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';

const Testimonials = () => {
  return (
    <section id="testimonials-page">
      <Navbar/>
      <SectionHero name="Testimonials"/>
      <Testimony/>
      <Banner/>
      <Footer/>
    </section>
  )
}

export default Testimonials
