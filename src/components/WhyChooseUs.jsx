import React from "react";
import CarsBG from "../images/chooseus-cars.png";
import Country from "../images/cross-country-drive.jpg";
import Hidden from "../images/hidden-charges.jpg";
import Pricing from "../images/pricing.jpg";

import { Typography } from "antd";

const { Title, Text } = Typography;
const WhyChooseUs = () => {
  return (
    <section id="choose_us-sec">
      <div className="img-container">
        <img className="choose-us-img" src={CarsBG} alt="" />
      </div>
      <div className="chooseus-text-container">
        <div className="chooseus-left-text-container">
          <div className="left-titles">
            <Title className="title-head">Why Choose Us?</Title>
            <Title className="title"
              style={{
                fontSize: "60px",
                marginTop: "0px",
              }}
            >
              Best valued deals you will ever find
            </Title>
            <div className="left-contents">
              <Text
                style={{
                  fontSize: "26px",
                }}
                type="secondary"
              >
                Discover the best deals you'll ever find with our unbeatable
                offers. We're dedicated to providing you with the best value for
                your money, so you can enjoy top-quality services and products
                without breaking the bank. Our deals are designed to give you
                the ultimate renting experience, so don't miss out on your
                chance to save big.
              </Text>
            </div>
          </div>
          <button style={{marginTop:"25px"}} className="red-btn">Find Details</button>

        </div>
        <div className="chooseus-right-text-container">
          <div className="right-card">
            <img className="choose-us-imgs" src={Country} alt="" />
            <div className="right-text">
              <Title style={{ fontWeight: "bold" }} level={2}>
                Cross Country Drive
              </Title>
              <Text
                style={{
                  fontSize: "26px",
                }}
                type="secondary"
              >
                Take your driving experience to the next level with our
                top-notch vehicles for your cross-country adventures.
              </Text>
            </div>
          </div>

          <div className="right-card">
            <img className="choose-us-imgs" src={Pricing} alt="" />
            <div className="right-text">
              <Title style={{ fontWeight: "bold" }} level={2}>
                All Inclusive Pricing
              </Title>
              <Text
                style={{
                  fontSize: "26px",
                }}
                type="secondary"
              >
                Get everything you need in one convenient, transparent price
                with our all-inclusive pricing policy.
              </Text>
            </div>
          </div>

          <div className="right-card">
            <img className="choose-us-imgs" src={Hidden} alt="" />
            <div className="right-text">
              <Title style={{ fontWeight: "bold" }} level={2}>
                No Hidden Charges
              </Title>
              <Text
                style={{
                  fontSize: "26px",
                }}
                type="secondary"
              >
                Enjoy peace of mind with our no hidden charges policy. We
                believe in transparent and honest pricing.
              </Text>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
