import React from "react";
import { Link } from "react-scroll";
import Logo from "../images/app-logo.png";

const Navbar = () => {
  return (
    <section id="nav-sec">
      <div className="nav-container">
        <div className="nav-bar">
          <div className="logo-container">
            <img src={Logo} alt="" />
          </div>
          <div className="nav-links">
            <Link to="home" smooth={true} duration={500}>
              Home
            </Link>
            <Link to="about" smooth={true} duration={500}>
              About
            </Link>
            <Link to="vehicle-models" smooth={true} duration={500}>
              Vehicle Models
            </Link>
            <Link to="testimonial" smooth={true} duration={500}>
              Testimonial
            </Link>
            <Link to="our-team" smooth={true} duration={500}>
              Our Team
            </Link>
            <Link to="contact" smooth={true} duration={500}>
              Contact
            </Link>
          </div>

          <div className="nav-buttons">
            <button className="signin-btn">Sign In</button>
            <button className="red-btn">Register</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
