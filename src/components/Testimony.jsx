import React, { useState } from "react";
import Avatar1 from "../images/avatar1.jpg";
import Avatar2 from "../images/avatar2.jpg";
import Avatar3 from "../images/avatar3.jpg";
import { Avatar, Card, Typography } from "antd";
import { EditFilled } from "@ant-design/icons";
const { Meta } = Card;

const { Title, Text } = Typography;

const Testimony = () => {
  return (
    <section id="testimony-section">
      <div className="process-sec-titles sec-titles">
        <Title style={{ marginTop: "150px" }}>Reviewed By People</Title>
        <Title
          style={{
            fontSize: "60px",
            margin: "0px",
          }}
        >
          Client's Testimonials
        </Title>
        <Text
          style={{
            fontSize: "26px",
          }}
          type="secondary"
        >
          Our clients have experienced our service and results, and they're
          eager to <br /> share their positive experiences with you.
        </Text>
      </div>
      <div
        style={{ display: "flex", justifyContent: "space-between" }}
        className="card-wrap"
      >
        <Card
          hoverable
          style={{
            width: 500,
            marginTop: 100,
            padding: "30px",
          }}
        >
          <Meta
            avatar={
              <Avatar
                style={{
                  width: "80px",
                  height: "80px",
                }}
                src={Avatar1}
              />
            }
            title={<Title level={1}>John Doe</Title>}
            description={
              <Text
                type="secondary"
                style={{
                  fontSize: "24px",
                }}
              >
                "We rented a car from this website and had an amazing
                experience! The booking was easy and the rental rates were very
                affordable."
                <EditFilled style={{ color: "#cb3737", marginLeft: "20px" }} />
              </Text>
            }
          />
        </Card>

        <Card
          hoverable
          style={{
            width: 500,
            marginTop: 100,
            padding: "30px",
          }}
        >
          <Meta
            avatar={
              <Avatar
                style={{
                  width: "80px",
                  height: "80px",
                }}
                src={Avatar2}
              />
            }
            title={<Title level={1}>John Doe</Title>}
            description={
              <Text
                type="secondary"
                style={{
                  fontSize: "24px",
                }}
              >
                "The car was in great condition and made our trip even better.
                Highly recommend for this car rental website!"
                <EditFilled style={{ color: "#cb3737", marginLeft: "20px" }} />
              </Text>
            }
          />
        </Card>

        <Card
          hoverable
          style={{
            width: 500,
            marginTop: 100,
            padding: "30px",
          }}
        >
          <Meta
            avatar={
              <Avatar
                style={{
                  width: "80px",
                  height: "80px",
                }}
                src={Avatar3}
              />
            }
            title={<Title level={1}>John Doe</Title>}
            description={
              <Text
                type="secondary"
                style={{
                  fontSize: "24px",
                }}
              >
                "We rented a car from this website and had an amazing
                experience! The booking was easy and the rental rates were very
                affordable."
                <EditFilled style={{ color: "#cb3737", marginLeft: "20px" }} />
              </Text>
            }
          />
        </Card>
      </div>
    </section>
  );
};

export default Testimony;
