import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Booking from "./components/Booking";
import PlanTrip from "./components/PlanTrip";
import PickCar from "./components/PickCar";
import Banner from "./components/Banner";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimony from "./components/Testimony";
import AboutPage from "./pages/About";
import HomePage from "./pages/Home.jsx";
import "./App.css";
import "./styles/Navbar.css";
import "./styles/Hero.css";
import "./styles/Booking.css";
import "./styles/PlanTrip.css";
import "./styles/PickCar.css";
import "./styles/CarBox.css";
import "./styles/Banner.css";
import "./styles/WhyChooseUs.css";
import "./styles/Testimony.css";
import "./styles/Footer.css";
import "./styles/AboutPage.css";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
      </Routes>
    </Router>
  );
}
export default App