import React from "react";
import Select from "../images/select-a-car.jpg";
import Operator from "../images/contact-an-operator.jpg";
import Drive from "../images/lets-drive.jpg";
import { Typography } from "antd";

const { Title, Text } = Typography;
const Process = () => {
  return (
    <section id="process-sec">
      <div className="process-sec-titles sec-titles">
        <Title>Plan your Trip Now</Title>
        <Title
          style={{
            fontSize: "60px",
            margin: "0px",
          }}
        >
          Quick and Easy Car Rental
        </Title>
      </div>
      <div className="process-container">
        <div className="process-box">
          <img className="process-img" src={Select} alt="" />
          <Title style={{ marginTop:"15px", fontWeight: "600", fontSize: "35px" }} level={2}>
            {" "}
            Select a Car
          </Title>

          <Text
            style={{
              fontSize: "26px",
            }}
            type="secondary"
          >
            We offers a big range of vehicles for <br /> all your driving needs.
            We have the <br />
            perfect car to meet your needs
          </Text>
        </div>
        <div className="process-box">
          <img className="process-img" src={Operator} alt="" />
          <Title style={{ marginTop:"15px", fontWeight: "600", fontSize: "35px" }} level={2}>
            Contact Operator
          </Title>

          <Text
            style={{
              fontSize: "26px",
            }}
            type="secondary"
          >
            Our knowledgeable and friendly <br />
            operators are always ready to help <br /> with any questions or
            concerns
          </Text>
        </div>
        <div className="process-box">
          <img className="process-img" src={Drive} alt="" />
          <Title style={{ marginTop:"15px", fontWeight: "600", fontSize: "35px" }} level={2}>
            Lets Drive
          </Title>
          {/* <h2 className="process-heading">Lets Drive</h2> */}
          <Text
            style={{
              fontSize: "26px",
            }}
            type="secondary"
          >
            Whether you're hitting the open road,
            <br /> we've got you covered with our wide <br />
            range of cars
          </Text>
        </div>
      </div>
    </section>
  );
};

export default Process;
