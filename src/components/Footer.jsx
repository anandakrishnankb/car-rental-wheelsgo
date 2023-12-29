import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Typography, Button, Form, Input, InputNumber, message, notification } from "antd";
import { MailOutlined, PhoneOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;
const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid !",
  },
};
// const onFinish = (values) => {
//   console.log(values);
// };
const Footer = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    form.current.reset();
    message.success("Subscriberd to wheels!");
    emailjs
      .sendForm(
        "service_2hppe2q",
        "template_hjl2vt8",
        form.current,
        "idmMs4RBfhBCmYl_-"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section id="footer-sec">
      <div className="footer-col-wrap">
        <div className="footer-col">
          <Title level={2} style={{ fontWeight: "700" }}>
            CAR RENTAL
          </Title>
          <Text
            style={{
              fontSize: "22px",
            }}
            type="secondary"
          >
            We offers a big range of vehicles for all your driving needs. We
            have the perfect car to meet your needs.
          </Text>
          <a href="">
            <PhoneOutlined
              style={{
                color: "#cb3737",
                fontSize: "30px",
                marginRight: "10px",
              }}
            />
            1234567890
          </a>
          <a href="">
            <MailOutlined
              style={{
                color: "#cb3737",
                fontSize: "30px",
                marginRight: "10px",
              }}
            />
            abc@gmail.com
          </a>
          <a id="credit" href="https://xpeedstudio.com/">
            Design From XpeedStudio
          </a>
        </div>
        <div className="footer-col">
          <Title level={2} style={{ fontWeight: "700" }}>
            {" "}
            COMPANY
          </Title>
          <Text
            style={{
              fontSize: "22px",
            }}
            type="secondary"
          >
            Thrissur
          </Text>
          <Text
            style={{
              fontSize: "22px",
            }}
            type="secondary"
          >
            Kollam
          </Text>
          <Text
            style={{
              fontSize: "22px",
            }}
            type="secondary"
          >
            Ernakulam
          </Text>
          <Text
            style={{
              fontSize: "22px",
            }}
            type="secondary"
          >
            Wayanad
          </Text>
        </div>
        <div className="footer-col">
          <Title level={2} style={{ fontWeight: "700" }}>
            WORKING HOURS
          </Title>
          <Text
            style={{
              fontSize: "22px",
            }}
            type="secondary"
          >
            Mon - Fri 9:00AM - 9:00PM
          </Text>
          <Text
            style={{
              fontSize: "22px",
            }}
            type="secondary"
          >
            Sat : 9:00AM - 19:00PM
          </Text>
          <Text
            style={{
              fontSize: "22px",
            }}
            type="secondary"
          >
            Sun : Closed
          </Text>
        </div>
        <div className="footer-col">
          <Title level={2} style={{ fontWeight: "700" }}>
            SUBSCRIPTION
          </Title>
          <Text
            style={{
              fontSize: "22px",
            }}
            type="secondary"
          >
            Subscribe your Email address for latest news & updates.
          </Text>{" "}
          <form ref={form} onSubmit={sendEmail} action="">
            <input
              style={{
                height: "40px",
                width: "300px",
                fontSize: "16px",
                borderRadius: "3px",
                border: "1px solid rgba(0, 0, 0, 0.45)",
                padding: "5px",
              }}
              required
              placeholder="Enter Your Email"
              type="email"
              className="contact__form-input"
              name="user_email"
              id="email"
              fdprocessedid="o0hwvm"
            />
            <Button
              style={{
                marginTop: "10px",
                fontSize: "16px",
                height: "40px",
                backgroundColor: "#cb3737", // Use backgroundColor instead of background
                borderRadius: "3px",
                color: "white", // Set text color
              }}
              type="primary"
              htmlType="submit"
            >
              Submit
            </Button>
          </form>
          {/* <Form
            ref={form}
            onSubmit={sendEmail}
            // onFinish={onFinish}
            style={{
              maxWidth: 600,
            }}
            validateMessages={validateMessages}
          >
            <Form.Item
              name={["user", "email"]}
              rules={[
                {
                  type: "email",
                  required: true,
                  message: "Please enter your email",
                },
              ]}
            >
              <Input
                style={{ height: "40px", fontSize: "16px" }}
                placeholder="Enter Your Email Address"
              />
            </Form.Item>
            <Form.Item>
              <Button
                style={{
                  marginTop: "10px",
                  fontSize: "16px",
                  height: "40px",
                  backgroundColor: "#cb3737", // Use backgroundColor instead of background
                  borderRadius: "3px",
                  color: "white", // Set text color
                }}
                type="primary"
                htmlType="submit"
              >
                Submit
              </Button>
            </Form.Item>
          </Form> */}
        </div>
      </div>
    </section>
  );
};

export default Footer;
