import React from "react";
import HeroCar from "../images/hero-car.png";
import { Typography, Button } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";

const { Title, Text } = Typography;
const Hero = () => {
  const navigateTo = (sectionId) => {
    document.querySelector(sectionId).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero-sec">
      <div className="hero-main">
        <div className="hero-contents">
          <Title className="test" level={2}>
            Plan your trip now
          </Title>
          {/* <h3 className="title-top">Plan your trip now</h3> */}
          <Title
            className="main-title"
            style={{ fontWeight: "700", fontSize: "60px", marginTop: "0px" }}
            level={1}
          >
            Save <span style={{ color: "#CB3737" }}>Big</span> With Our <br />{" "}
            Car Rental
          </Title>
          {/* <h2 className="main-title">
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
          </h2> */}
          <Text
            style={{
              fontSize: "26px",
            }}
            type="secondary"
          >
            Rent the car of your dreams. Unbeatable prices, <br />
            unlimited miles, flexible pick-up options and much more.
          </Text>
          {/* <p className="para">
            Rent the car of your dreams. Unbeatable prices, <br />
            unlimited miles, flexible pick-up options and much more.
          </p> */}
          <div className="hero-btn-container">
            <button
              className="red-btn"
              onClick={() => {
                navigateTo("#booking-sec");
              }}
            >
              Book Ride
              <FontAwesomeIcon
                icon={faCircleCheck}
                style={{
                  color: "#ffffff",
                  marginTop: "4px",
                  marginLeft: "5px",
                }}
              />
            </button>
            <button
              className="black-btn"
              onClick={() => {
                navigateTo("#process-sec");
              }}
            >
              Learn More
            </button>
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
