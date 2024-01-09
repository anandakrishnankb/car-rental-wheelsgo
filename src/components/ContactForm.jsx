import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { Typography, Form, Input, Button, message } from "antd";
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

const ContactForm = () => {
  const [formValues, setFormValues] = useState({});

  const sentMsg = async (e) => {
    e.preventDefault();
    message.success("Message Sent");
    console.log(formValues);
    console.log(formValues.name);

    try {
      const templateParams = {
        user_name: formValues.name,
        user_email: formValues.email,
        user_message: formValues.introduction,
      };

      const emailResult = await emailjs.send(
        "service_2hppe2q", // Replace with your service ID
        "template_q4dzqsz", // Replace with your template ID
        templateParams,
        "idmMs4RBfhBCmYl_-" // Replace with your user ID
      );

      console.log("Email sent successfully:", emailResult);
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  const handleFormChange = (changedValues, allValues) => {
    setFormValues(allValues.user);
  };

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
            style={{ fontSize: "24px" }}
          >
            <Input
              style={{
                fontSize: "24px",
                padding: "10px",
              }}
              placeholder="Enter your name"
              onChange={(e) =>
                setFormValues({ ...formValues, name: e.target.value })
              }
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
            style={{ fontSize: "24px" }}
          >
            <Input
              style={{
                fontSize: "24px",
                padding: "10px",
              }}
              placeholder="Enter your email"
              onChange={(e) =>
                setFormValues({ ...formValues, email: e.target.value })
              }
            />
          </Form.Item>
          <Form.Item
            name={["user", "introduction"]}
            label="Tell Us About It"
            labelCol={{ span: 24 }}
            wrapperCol={{ span: 24 }}
            style={{ fontSize: "24px" }}
          >
            <Input.TextArea
              style={{
                fontSize: "24px",
                padding: "10px",
              }}
              placeholder="Enter your introduction"
              onChange={(e) =>
                setFormValues({ ...formValues, introduction: e.target.value })
              }
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
              onClick={sentMsg}
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
