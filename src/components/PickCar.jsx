import React from "react";
import { Typography } from "antd";
import { useState } from "react";
import { CAR_DATA } from "./CarData";
import CarBox from "./CarBox";

const { Title, Text } = Typography;
const PickCar = () => {
  const [active, setActive] = useState("SecondCar");
  const [colorBtn, setColorBtn] = useState("btn1");
  const btnID = (id) => {
    setColorBtn(colorBtn === id ? "" : id);
  };
  const coloringButton = (id) => {
    return colorBtn === id ? "colored-button" : "";
  };
  return (
    <div>
      <section id="pick-car-sec">
        <div className="pickcar-sec-titles sec-titles">
          <Title>Vehicle Models</Title>
          <Title
            style={{
              fontSize: "60px",
              margin: "0px",
            }}
          >
            Our Rental Fleet
          </Title>
          <Text
            style={{
              fontSize: "26px",
            }}
            type="secondary"
          >
            Choose from a variety of our amazing vehicles to rent for your{" "}
            <br /> next adventure or business trip
          </Text>
        </div>
        <div className="container">
          <div className="pick-container">
            <div className="pick-container__car-content">
              {/* pick car */}
              <div className="pick-box">
                <button
                  className={`${coloringButton("btn1")}`}
                  onClick={() => {
                    setActive("SecondCar");
                    btnID("btn1");
                  }}
                >
                  <Text
                    style={{
                      fontSize: "24px",
                    }}
                  >
                    Audi A1 S-Line
                  </Text>
                </button>
                <button
                  className={`${coloringButton("btn2")}`}
                  id="btn2"
                  onClick={() => {
                    setActive("FirstCar");
                    btnID("btn2");
                  }}
                >
                  {" "}
                  <Text
                    style={{
                      fontSize: "24px",
                    }}
                  >
                    {" "}
                    VW Golf 6
                  </Text>
                </button>
                <button
                  className={`${coloringButton("btn3")}`}
                  id="btn3"
                  onClick={() => {
                    setActive("ThirdCar");
                    btnID("btn3");
                  }}
                >
                  <Text
                    style={{
                      fontSize: "24px",
                    }}
                  >
                    {" "}
                   Toyota Camry
                  </Text>
                </button>
                <button
                  className={`${coloringButton("btn4")}`}
                  id="btn4"
                  onClick={() => {
                    setActive("FourthCar");
                    btnID("btn4");
                  }}
                >
                  <Text
                    style={{
                      fontSize: "24px",
                    }}
                  >
                    {" "}
                    BMW 320 Modernline
                  </Text>
                </button>
                <button
                  className={`${coloringButton("btn5")}`}
                  id="btn5"
                  onClick={() => {
                    setActive("FifthCar");
                    btnID("btn5");
                  }}
                >
                  <Text
                    style={{
                      fontSize: "24px",
                    }}
                  >
                    {" "}
                    Mercedes-Benz GLK
                  </Text>
                </button>
                <button
                  className={`${coloringButton("btn6")}`}
                  id="btn6"
                  onClick={() => {
                    setActive("SixthCar");
                    btnID("btn6");
                  }}
                >
                 <Text
                    style={{
                      fontSize: "24px",
                    }}
                  >
                    {" "}
                    VW Passat CC
                  </Text>
                </button>
              </div>

              {active === "FirstCar" && <CarBox data={CAR_DATA} carID={0} />}
              {active === "SecondCar" && <CarBox data={CAR_DATA} carID={1} />}
              {active === "ThirdCar" && <CarBox data={CAR_DATA} carID={2} />}
              {active === "FourthCar" && <CarBox data={CAR_DATA} carID={3} />}
              {active === "FifthCar" && <CarBox data={CAR_DATA} carID={4} />}
              {active === "SixthCar" && <CarBox data={CAR_DATA} carID={5} />}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PickCar;
