import React, { useState } from "react";
import Avatar1 from "../images/avatar1.jpg";
import Avatar2 from "../images/avatar2.jpg";
import Avatar3 from "../images/avatar3.jpg";
import { Avatar, Card, Typography } from "antd";
const { Meta } = Card;

const { Title, Text } = Typography;
const App = () => {
  return (
    <>
      <div
        style={{ display: "flex", justifyContent: "space-between" }}
        className="card-wrap"
      >
        <Card
          hoverable
          style={{
            width: 500,
            marginTop: 16,
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
                We rented a car from this website and had an amazing experience!
                The booking was easy and the rental rates were very affordable.
              </Text>
            }
          />
        </Card>

        <Card
          hoverable
          style={{
            width: 500,
            marginTop: 16,
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
                We rented a car from this website and had an amazing experience!
                The booking was easy and the rental rates were very affordable.
              </Text>
            }
          />
        </Card>

        <Card
          hoverable
          style={{
            width: 500,
            marginTop: 16,
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
                We rented a car from this website and had an amazing experience!
                The booking was easy and the rental rates were very affordable.
              </Text>
            }
          />
        </Card>
      </div>
    </>
  );
};
export default App;
