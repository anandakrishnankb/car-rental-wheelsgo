import React from "react";
import { Typography, Form, Input, InputNumber, Button, message } from "antd";
import { Link } from "react-router-dom";
import {
  PhoneOutlined,
  EnvironmentOutlined,
  MailOutlined,
} from "@ant-design/icons";

const { Title, Text } = Typography;
const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};
/* eslint-enable no-template-curly-in-string */

const onFinish = (values) => {
  message.success("Form Submitted!")
  console.log(values);
};
const ContactForm = () => {
  return (
    <div className="contact-form-wrap">
      <div className="contact-text">
        <Title
          className="title"
          style={{ fontSize: "60px", fontWeight: "bold" }}
        >
          Need additional <br /> information?
        </Title>
        <Text
          style={{
            fontSize: "26px",
          }}
          type="secondary"
        >
          A multifaceted professional skilled in multiple fields <br /> of
          research, development as well as a learning <br />
          specialist. Over 15 years of experience.
        </Text>
        <Link
          style={{
            marginTop: "15px",
            fontSize: "26px",
            textDecoration: "none",
            color: "black",
          }}
          href="https://ant.design"
          target="_blank"
        >
          <PhoneOutlined style={{ color: "#cb3737" }}></PhoneOutlined>{" "}
          <Text type="secondary">(123)456-789</Text>
        </Link>{" "}
        <Link
          style={{
            marginTop: "15px",
            fontSize: "26px",
            textDecoration: "none",
            color: "black",
          }}
          href="https://ant.design"
          target="_blank"
        >
          <MailOutlined style={{ color: "#cb3737" }}></MailOutlined>{" "}
          <Text type="secondary">abc@gmail.com</Text>
        </Link>{" "}
        <Link
          className="blah"
          style={{
            marginTop: "15px",
            fontSize: "26px",
            textDecoration: "none",
            color: "black",
          }}
          href="https://ant.design"
          target="_blank"
        >
          <EnvironmentOutlined
            style={{ color: "#cb3737" }}
          ></EnvironmentOutlined>{" "}
                    <Text type="secondary">California</Text>

        </Link>
      </div>
      <div className="contact-form">
        <Form
          name="nest-messages"
          onFinish={onFinish}
          style={{
            maxWidth: 600,
          }}
          validateMessages={validateMessages}
        >
          <Form.Item
            name={["user", "name"]}
            label="Name"
            rules={[
              {
                required: true,
              },
            ]}
            labelCol={{ span: 24 }}
            wrapperCol={{ span: 24 }}
            style={{ fontSize: "24px" }} // Set the font size for the label
          >
            <Input
              style={{
                fontSize: "24px",
                padding: "10px",
              }}
              placeholder="Enter your name"
            />
          </Form.Item>
          <Form.Item
            name={["user", "email"]}
            label="Email"
            rules={[
              {
                type: "email",
                required: true,
              },
            ]}
            labelCol={{ span: 24 }}
            wrapperCol={{ span: 24 }}
            style={{ fontSize: "24px" }} // Set the font size for the label
          >
            <Input
              style={{
                fontSize: "24px",
                padding: "10px",
              }}
              placeholder="Enter your email"
            />
          </Form.Item>
          <Form.Item
            name={["user", "introduction"]}
            label="Tell Us About It"
            labelCol={{ span: 24 }}
            wrapperCol={{ span: 24 }}
            style={{ fontSize: "24px" }} // Set the font size for the label
          >
            <Input.TextArea
              style={{
                fontSize: "24px",
                padding: "10px",
              }}
              placeholder="Enter your introduction"
            />
          </Form.Item>
          <Form.Item>
            <Button
              style={{
                marginTop: "10px",
                fontSize: "16px",
                height: "40px",
                backgroundColor: "#cb3737",
                borderRadius: "3px",
                color: "white",
              }}
              type="primary"
              htmlType="submit"
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default ContactForm;
