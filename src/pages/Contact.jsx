import React from "react";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import SectionHero from "../components/SectionHero";
import Navbar from "../components/Navbar";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <SectionHero name="Contact Us" />
      <ContactForm />
      <Footer/>
    </div>
  );
};

export default Contact;
