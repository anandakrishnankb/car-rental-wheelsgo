import React, { useState, useEffect } from "react";

import { Typography } from "antd";
import { ToolFilled, ShopFilled, CarFilled } from "@ant-design/icons";

import SectionHero from "../components/SectionHero";
import Navbar from "../components/Navbar";
import PlanTrip from "../components/PlanTrip";

import Footer from "../components/Footer";
import AbtImg from "../images/about-main.jpg";

const Counter = ({ endValue, interval }) => {
  const [currentValue, setCurrentValue] = useState(0);

  useEffect(() => {
    const duration = Math.floor(interval / endValue);
    let startValue = 0;

    const counter = setInterval(() => {
      startValue += 1;
      setCurrentValue(startValue);

      if (startValue === endValue) {
        clearInterval(counter);
      }
    }, duration);

    return () => clearInterval(counter);
  }, [endValue, interval]);

  return <span>{currentValue}</span>;
};

const { Title, Text } = Typography;
const About = () => {
  return (
    <section id="about-page">
      <Navbar />
      <SectionHero name="About Us" />
      <div className="about-main-container">
        <div className="about-img-container">
          <img src={AbtImg} alt="" />
        </div>
        <div className="about-text-container">
          <Title className="title-head" level={1}>
            About Company
          </Title>
          <Title
            className="title"
            level={1}
            style={{
              lineHeight: "1",
              fontSize: "70px",
              fontWeight: "700",
              margin: "0 0 20px 0",
            }}
          >
            You start the engine and your adventure begins
          </Title>
          <Text
            style={{
              fontSize: "26px",
            }}
            type="secondary"
          >
            Certain but she but shyness why cottage. Guy the put instrument sir
            entreaties affronting. Pretended exquisite see cordially the you.
            Weeks quiet do vexed or whose. Motionless if no to affronting
            imprudence no precaution. My indulged as disposal strongly attended.
          </Text>
          <div className="about-icons">
            <div className="icon-text-wrap">
              <CarFilled
                style={{
                  fontSize: "60px",
                  marginRight: "100px ",
                  padding: "20px 0px",
                  color: "#cb3737",
                }}
              ></CarFilled>
              <div
                style={{ display: "flex", alignItems: "center" }}
                className="info-wrap"
              >
                <Title style={{ margin: "0px", fontSize: "50px" }}>
                  <Counter endValue={20} interval={1500} />
                </Title>
                <Text
                  type="secondary"
                  style={{ fontSize: "20px", marginLeft: "5px" }}
                >
                  Car <br /> Models
                </Text>
              </div>
            </div>
            <div className="icon-text-wrap">
              <ShopFilled
                style={{
                  fontSize: "60px",
                  marginRight: "100px ",
                  padding: "20px 0px",
                  color: "#cb3737",
                }}
              ></ShopFilled>
              <div
                style={{ display: "flex", alignItems: "center" }}
                className="info-wrap"
              >
                <Title style={{ margin: "0px", fontSize: "50px" }}>
                  <Counter endValue={25} interval={1500} />
                </Title>
                <Text
                  type="secondary"
                  style={{ fontSize: "20px", marginLeft: "5px" }}
                >
                  Rental <br /> Outlets
                </Text>
              </div>
            </div>

            <div className="icon-text-wrap">
              <ToolFilled
                style={{
                  fontSize: "60px",
                  marginRight: "100px ",
                  padding: "20px 0px",
                  color: "#cb3737",
                }}
              ></ToolFilled>
              <div
                style={{ display: "flex", alignItems: "center" }}
                className="info-wrap"
              >
                <Title style={{ margin: "0px", fontSize: "50px" }}>
                  <Counter endValue={10} interval={1500} />
                </Title>
                <Text
                  type="secondary"
                  style={{ fontSize: "20px", marginLeft: "5px" }}
                >
                  Repair <br /> Shops
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
      <PlanTrip />
      <Footer />
    </section>
  );
};

export default About;
