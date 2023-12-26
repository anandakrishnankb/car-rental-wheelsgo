import React from "react";
import Select from '../images/select a car.png'
import Operator from '../images/operator.png'
import Drive from '../images/drive.png'


const Process = () => {
  return (
    <section id="process-sec">
      <div className="process-sec-titles sec-titles">
        <h3 className="section-sub-titles">Plan your Trip Now</h3>
        <h1 className="section-title">Quick and Easy Car Rental</h1>
      </div>
      <div className="process-container">
        <div className="process-box">
          <img className="process-img" src={Select} alt="" />
          <h2 className="process-heading">Select a Car</h2>
          <p className="process-para para">We offers a big range of vehicles for <br /> all your driving needs. We have the <br />perfect car to meet your needs</p>
        </div>
        <div className="process-box">
          <img className="process-img" src={Operator} alt="" />
          <h2 className="process-heading">Contact Operator</h2>
          <p className="process-para para">Our knowledgeable and friendly <br />operators are always ready to help <br /> with any questions or concerns</p>
        </div>
        <div className="process-box">
          <img className="process-img" src={Drive} alt="" />
          <h2 className="process-heading">Lets Drive</h2>
          <p className="process-para para">Whether you're hitting the open road,<br /> we've got you covered with our wide <br />range of cars</p>
        </div>
      </div>
    </section>
  );
};

export default Process;
