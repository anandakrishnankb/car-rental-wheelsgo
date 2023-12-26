import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Booking from "./components/Booking";
import PlanTrip from "./components/PlanTrip";
import PickCar from "./components/PickCar";
import Banner from "./components/Banner";
import WhyChooseUs from "./components/WhyChooseUs";
import "./App.css";
import "./styles/Navbar.css";
import "./styles/Hero.css";
import "./styles/Booking.css";
import "./styles/PlanTrip.css";
import "./styles/PickCar.css";
import "./styles/CarBox.css";
import "./styles/Banner.css";
import "./styles/WhyChooseUs.css"

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Booking />
      <PlanTrip />
      <PickCar />
      <Banner />
      <WhyChooseUs />
    </>
  );
}

export default App;