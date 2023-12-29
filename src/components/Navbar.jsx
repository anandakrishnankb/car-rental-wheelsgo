import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/app-logo.png";
import { Typography, Button } from "antd";

const { Title, Text } = Typography;
const Navbar = () => {
  return (
    <section id="nav-sec">
      <div className="nav-container">
        <div className="nav-bar">
          <div className="logo-container">
            <img src={Logo} alt="" />
          </div>
          <div className="nav-links">
            <Link to="/" smooth={true} duration={500}>
              <Button
                style={{ fontSize: "20px", fontWeight: "600", height: "50px" }}
                type="text"
              >
                Home
              </Button>
            </Link>
            <Link to="/about" smooth={true} duration={500}>
              <Button
                style={{
                  fontSize: "20px",
                  fontWeight: "600",
                  height: "50px",
                }}
                type="text"
              >
                About
              </Button>

              {/* About */}
            </Link>
            <Link to="/models" smooth={true} duration={500}>
              <Button
                style={{ fontSize: "20px", fontWeight: "600", height: "50px" }}
                type="text"
              >
                Vehicle Models
              </Button>

              {/* Vehicle Models */}
            </Link>
            <Link to="/testimonial" smooth={true} duration={500}>
              <Button
                style={{ fontSize: "20px", fontWeight: "600", height: "50px" }}
                type="text"
              >
                {" "}
                Testimonial
              </Button>

              {/* Testimonial */}
            </Link>

            {/* Our Team */}
            <Link to="/contact" smooth={true} duration={500}>
              <Button
                style={{ fontSize: "20px", fontWeight: "600", height: "50px" }}
                type="text"
              >
                {" "}
                Contact
              </Button>

              {/* Contact */}
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
