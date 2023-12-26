import React from "react";
import CarsBG from "../images/chooseus-cars.png";

const WhyChooseUs = () => {
  return (
    <section id="choose_us-sec">
      <div className="img-container">
        <img className="choose-us-img" src={CarsBG} alt="" />
      </div>
      <div className="chooseus-text-container">
        <div className="chooseus-left-text-container">
          <div className="left-titles">
            <div className="left-contents">
              <p className="para">
                Discover the best deals you'll ever find with our unbeatable
                offers. We're dedicated to providing you with the best value for
                your money, so you can enjoy top-quality services and products
                without breaking the bank. Our deals are designed to give you
                the ultimate renting experience, so don't miss out on your
                chance to save big.
              </p>
              <button className="red-btn">Find Details</button>
            </div>
          </div>
        </div>
        <div className="chooseus-right-text-container">
          <div className="right-text">
            <h3>Cross Country Drive</h3>
            <p className="para">
              Take your driving experience to the next level with our top-notch
              vehicles for your cross-country adventures.
            </p>
          </div>
          <div className="right-text">
            <h3>All Inclusive Pricing</h3>
            <p className="para">
              Get everything you need in one convenient, transparent price with
              our all-inclusive pricing policy.
            </p>
          </div>
          <div className="right-text">
            <h3>No Hidden Charges</h3>
            <p className="para">
              Enjoy peace of mind with our no hidden charges policy. We believe
              in transparent and honest pricing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
