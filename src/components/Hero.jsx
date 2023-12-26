import React from "react";
import HeroCar from "../images/hero-car.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
const Hero = () => {
  return (
    <section id="hero-sec">
      <div className="hero-main">
        <div className="hero-contents">
          <h3 className="title-top">Plan your trip now</h3>
          <h2 className="main-title">
            Save{" "}
            <span
              style={{
                color: "#CB3737",
              }}
            >
              Big
            </span>{" "}
            with our <br />
            Car Rental
          </h2>
          <p className="para">
            Rent the car of your dreams. Unbeatable prices, <br />
            unlimited miles, flexible pick-up options and much more.
          </p>
          <div className="hero-btn-container">
            <button className="red-btn">
              Book Ride{" "}
              <FontAwesomeIcon
                icon={faCircleCheck}
                style={{
                  color: "#ffffff",
                  marginTop: "4px",
                  marginLeft: "5px",
                }}
              />
            </button>
            <button className="black-btn">Learn More</button>
          </div>
        </div>
        <div className="hero-img">
          <img src={HeroCar} alt="" />
        </div>
      </div>
      
    </section>
  );
};

export default Hero;
