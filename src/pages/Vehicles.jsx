import React from "react";
import PickCar from "../components/PickCar";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import SectionHero from "../components/SectionHero";

const Vehicles = () => {
  return (
    <section id="models-page">
      <Navbar />
      <SectionHero name="Vehicle Models" />
      <PickCar />
      <Banner />
      <Footer />
    </section>
  );
};

export default Vehicles;
