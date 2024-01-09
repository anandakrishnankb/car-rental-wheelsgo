import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Booking from "../components/Booking";
import PlanTrip from "../components/PlanTrip";
import PickCar from "../components/PickCar";
import Banner from "../components/Banner";
import WhyChooseUs from "../components/WhyChooseUs";
import Testimony from "../components/Testimony";
import Footer from "../components/Footer";
const Home = () => {
  return (
    <section id="home-page">
      <Navbar />
      <Hero />
      <Booking />
      <PlanTrip />
      <PickCar />
      <Banner />
      <WhyChooseUs />
      <Testimony />
      <Footer />
    </section>
  );
};

export default Home;
