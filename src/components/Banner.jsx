import React from "react";
import { Typography } from "antd";

const { Title } = Typography;
const Banner = () => {
  return (
    <section id="banner-sec">
      <div className="banner-container">
        <Title className="title" style={{ margin: "0px", fontSize: "80px" }}>
          Save big with our cheap car rental!
        </Title>
        {/* <h1>Save big with our cheap car rental!</h1> */}
        <Title className="title-head"
          style={{
            fontSize: "32px",
            color:"white"
          }}
          level={2}
        >
          Top Airports. Local Suppliers.{" "}
          <span
            style={{
              color: "rgb(203, 55, 55)",
            }}
          >
            24/7
          </span>{" "}
          Support.
        </Title>
      </div>
    </section>
  );
};

export default Banner;
