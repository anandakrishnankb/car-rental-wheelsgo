import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../images/app-logo.png";
import { Typography, Button } from "antd";

const { Title } = Typography;
const Navbar = () => {
  const [active, setActive] = useState("nav-links hidden");
  const [toggleIcon, setToggleIcon] = useState("hamburger");
  const toggle = () => {
    active === "nav-links hidden"
      ? setActive("nav-links hamburger-active")
      : setActive("nav-links hidden");

    toggleIcon === "hamburger"
      ? setToggleIcon("hamburger toggle")
      : setToggleIcon("hamburger");
  };
  return (
    <section id="nav-sec">
      <div className="nav-container">
        <div className="nav-bar">
          <div className="logo-container">
            <img className="logo" src={Logo} alt="" />
            <Title
              style={{ margin: "0px", marginLeft: "5px" }}
              className="title-head"
            >
              WheelsGo
            </Title>
          </div>
          {/* <div className="nav-links"> */}
          <div className={active}>
            <Link
              className="nav-link-icons"
              activeclass="active"
              to="/"
              duration={500}
            >
              <Button
                style={{ fontSize: "25px", fontWeight: "600", height: "50px" }}
                type="text"
              >
                Home
              </Button>
            </Link>
            <Link
              className="nav-link-icons"
              to="/about"
              duration={500}
            >
              <Button
                style={{
                  fontSize: "25px",
                  fontWeight: "600",
                  height: "50px",
                }}
                type="text"
              >
                About
              </Button>

              {/* About */}
            </Link>
            <Link
              className="nav-link-icons"
              to="/models"
              duration={500}
            >
              <Button
                style={{ fontSize: "25px", fontWeight: "600", height: "50px" }}
                type="text"
              >
                Vehicle Models
              </Button>

              {/* Vehicle Models */}
            </Link>
            <Link
              className="nav-link-icons"
              to="/testimonial"
              duration={500}
            >
              <Button
                style={{ fontSize: "25px", fontWeight: "600", height: "50px" }}
                type="text"
              >
                {" "}
                Testimonial
              </Button>

              {/* Testimonial */}
            </Link>

            {/* Our Team */}
            <Link
              className="nav-link-icons"
              to="/contact"
              duration={500}
            >
              <Button
                style={{ fontSize: "25px", fontWeight: "600", height: "50px" }}
                type="text"
              >
                {" "}
                Contact
              </Button>

              {/* Contact */}
            </Link>
            {/* <div className="nav-buttons">
              <button className="signin-btn">Sign In</button>
              <button className="red-btn">Register</button>
            </div> */}
          </div>
          <div onClick={toggle} className={toggleIcon}>
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
