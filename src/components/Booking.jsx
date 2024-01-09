import React from "react";
import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { Typography, Button, message } from "antd";
import CarAudi from "../images/audia1.jpg";
import CarGolf from "../images/golf6.jpg";
import CarToyota from "../images/toyotacamry.jpg";
import CarBmw from "../images/bmw320.jpg";
import CarMercedes from "../images/benz.jpg";
import CarPassat from "../images/passatcc.jpg";
import {
  CalendarFilled,
  EnvironmentFilled,
  InfoCircleOutlined,
} from "@ant-design/icons";

const { Title, Text } = Typography;
const Booking = () => {


  // Modal and Modal Inputs
  const [modal, setModal] = useState(false);
  useEffect(() => {
    if (modal === true) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [modal]);

  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [zipcode, setZipCode] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleLastName = (e) => {
    setLastName(e.target.value);
  };
  const handlePhone = (e) => {
    setPhone(e.target.value);
  };
  const handleAge = (e) => {
    setAge(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleAddress = (e) => {
    setAddress(e.target.value);
  };
  const handleCity = (e) => {
    setCity(e.target.value);
  };
  const handleZip = (e) => {
    setZipCode(e.target.value);
  };

  const confirmBooking = async (e) => {
    e.preventDefault();
    if (
      carType === "" ||
      pickUp === "" ||
      dropOff === "" ||
      pickTime === "" ||
      dropTime === "" ||
      name === "" ||
      lastName === "" ||
      phone === "" ||
      age === "" ||
      email === "" ||
      address === "" ||
      city === "" ||
      zipcode === ""
    ) {
      message.error("Fill All Fields");
    } else {
      setModal(!modal);
      const doneMsg = document.querySelector(".booking-done");
      doneMsg.style.display = "flex";

      try {
        const templateParams = {
          user_name: name,
          user_last_name: lastName,
          user_phone: phone,
          user_age: age,
          user_email: email,
          user_address: address,
          user_city: city,
          user_zipcode: zipcode,
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
      
    }
  };

  // Booking Inputs and Values
  const [carType, setCarType] = useState("");
  const [pickUp, setPickUp] = useState("");
  const [dropOff, setDropOff] = useState("");
  const [pickTime, setPickTime] = useState("");
  const [dropTime, setDropTime] = useState("");
  const [carImg, setCarImg] = useState("");

  const handleCar = (e) => {
    setCarType(e.target.value);
    setCarImg(e.target.value);
  };

  const handlePick = (e) => {
    setPickUp(e.target.value);
  };

  const handleDrop = (e) => {
    setDropOff(e.target.value);
  };

  const handlePickTime = (e) => {
    setPickTime(e.target.value);
  };

  const handleDropTime = (e) => {
    setDropTime(e.target.value);
  };

  const openModal = (e) => {
    e.preventDefault();
    const errorMsg = document.querySelector(".error-message");
    if (
      carType === "" ||
      pickUp === "" ||
      dropOff === "" ||
      pickTime === "" ||
      dropTime === ""
    ) {
      errorMsg.style.display = "flex";
    } else {
      setModal(!modal);
      const modalDiv = document.querySelector(".booking-modal");
      modalDiv.scroll(0, 0);
      errorMsg.style.display = "none";
    }
  };
  //   Choosing Car Image
  let imgUrl;
  switch (carImg) {
    case "Audi A1 S-Line":
      imgUrl = CarAudi;
      break;
    case "VW Golf 6":
      imgUrl = CarGolf;
      break;
    case "Toyota Camry":
      imgUrl = CarToyota;
      break;
    case "BMW 320 ModernLine":
      imgUrl = CarBmw;
      break;
    case "Mercedes-Benz GLK":
      imgUrl = CarMercedes;
      break;
    case "VW Passat CC":
      imgUrl = CarPassat;
      break;
    default:
      imgUrl = "";
  }

  const hideMessage = () => {
    const doneMsg = document.querySelector(".booking-done");
    doneMsg.style.display = "none";
  };

  return (
    <>
      <section id="booking-sec">
        <div
          onClick={openModal}
          className={`modal-overlay ${modal ? "active-modal" : ""}`}
        ></div>
        <div className="container">
          <div className="booking-container">
            <div className="booking-box">
              <Title
                className="title-head"
                style={{
                  fontWeight: "700",
                }}
                level={1}
              >
                Book a car
              </Title>
              <Text className="error-message" type="danger">
                Fill All Fields!
              </Text>
              <Text className="booking-done" type="success">
                Email Sent Succesfully.Our Staff Will Contact You Shortly.Happy Drive!
              </Text>
              <form className="box-form">
                <div className="book-first-row">
                  <label>
                    <Title level={3}>
                      Select Your Car Type
                      <b>*</b>
                    </Title>
                  </label>
                  <select value={carType} onChange={handleCar}>
                    <option>Select your car type</option>
                    <option value="Audi A1 S-Line">Audi A1 S-Line</option>
                    <option value="VW Golf 6">VW Golf 6</option>
                    <option value="Toyota Camry">Toyota Camry</option>
                    <option value="BMW 320 ModernLine">
                      BMW 320 ModernLine
                    </option>
                    <option value="Mercedes-Benz GLK">Mercedes-Benz GLK</option>
                    <option value="VW Passat CC">VW Passat CC</option>
                  </select>
                </div>

                <div className="book-first-row">
                  <label>
                    <Title level={3}>
                      Pick Up Location
                      <b>*</b>
                    </Title>
                  </label>
                  <select value={pickUp} onChange={handlePick}>
                    <option>Select pick up location</option>
                    <option>Wayanad</option>
                    <option>Thrissur</option>
                    <option>Ernakulam</option>
                    <option>Kollam</option>
                    <option>Kottayam</option>
                  </select>
                </div>

                <div className="book-first-row">
                  <label>
                    <Title level={3}>
                      Drop Off Location
                      <b>*</b>
                    </Title>
                  </label>
                  <select value={dropOff} onChange={handleDrop}>
                    <option>Select drop off location</option>
                    <option>Wayanad</option>
                    <option>Thrissur</option>
                    <option>Ernakulam</option>
                    <option>Kollam</option>
                    <option>Kottayam</option>
                  </select>
                </div>

                <div className="book-second-row">
                  <label htmlFor="picktime">
                    <Title level={3}>
                      Pick Up Date
                      <b>*</b>
                    </Title>
                  </label>
                  <input
                    id="picktime"
                    value={pickTime}
                    onChange={handlePickTime}
                    type="date"
                  ></input>
                </div>

                <div className="book-second-row">
                  <label htmlFor="droptime">
                    <Title level={3}>
                      Drop Off Time
                      <b>*</b>
                    </Title>
                  </label>
                  <input
                    id="droptime"
                    value={dropTime}
                    onChange={handleDropTime}
                    type="date"
                  ></input>
                </div>

                <button
                  className="red-btn search-btn"
                  onClick={openModal}
                  type="submit"
                >
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* modal-part  */}
      <div className={`booking-modal ${modal ? "active-modal" : ""}`}>
        <div className="modal-title ">
          <Title className="title-sub" style={{ color: "white" }}>
            Complete Reservation
          </Title>
          <Button
            onClick={openModal}
            style={{
              color: "white",
              fontWeight: "600",
              fontSize: "18px",
              height: "40px",
            }}
            type="text"
          >
            X
          </Button>
        </div>
        <div className="modal-message">
          <Title level={3} className="modal-warning">
            {" "}
            <InfoCircleOutlined
              style={{ marginRight: "10px", color: "#cb3737" }}
            ></InfoCircleOutlined>
            Upon completing this reservation enquiry, you will receive:
          </Title>
          
          <Text
            style={{
              fontSize: "26px",
            }}
            type="secondary"
          >
            Your rental voucher to produce on arrival at the rental desk and a
            toll-free customer support number.
          </Text>
         
        </div>
        {/* car info */}
        <div className="modal-car-info">
          <div className="dates-div">
            <div className="modal-dates-info">
              <Title
                style={{
                  fontWeight: "700",
                }}
                level={1}
              >
                Location & Date
              </Title>
              <span>
                <div>
                  <Title level={3} className="modal-from-labels">
                    <CalendarFilled
                      style={{ color: "#cb3737", marginRight: "10px" }}
                    ></CalendarFilled>{" "}
                    Pick-Up Date & Time
                  </Title>
                  <p>
                    {pickTime} /{" "}
                    <input type="time" className="input-time"></input>
                  </p>
                </div>
              </span>
            </div>

            <div className="modal-dates-info">
              <span>
                <div>
                  <Title level={3} className="modal-from-labels">
                    <CalendarFilled
                      style={{ color: "#cb3737", marginRight: "10px" }}
                    ></CalendarFilled>
                    Drop-Off Date & Time
                  </Title>

                  <p>
                    {dropTime} /{" "}
                    <input type="time" className="input-time"></input>
                  </p>
                </div>
              </span>
            </div>

            <div className="modal-dates-info">
              <span>
                <div>
                  <Title level={3} className="modal-from-labels">
                    <EnvironmentFilled
                      style={{ color: "#cb3737", marginRight: "10px" }}
                    ></EnvironmentFilled>
                    Pick-Up Location
                  </Title>

                  <p>{pickUp}</p>
                </div>
              </span>
            </div>

            <div className="modal-dates-info">
              <span>
                <div>
                  <Title level={3} className="modal-from-labels">
                    <EnvironmentFilled
                      style={{ color: "#cb3737", marginRight: "10px" }}
                    ></EnvironmentFilled>
                    Drop-Off Location
                  </Title>

                  <p>{dropOff}</p>
                </div>
              </span>
            </div>
          </div>
          <div className="modal-car-model">
            <Title
              style={{ fontWeight: "700" }}
              className="modal-info-title"
              level={1}
            >
              <span style={{ color: "#cb3737" }}>Car -</span> {carType}
            </Title>
         
            {imgUrl && <img src={imgUrl} alt="car_img" />}
          </div>
        </div>
        {/* personal info */}
        <div className="modal-person-info">
          <Title className="modal-info-title personal-info" level={1}>
            PERSONAL INFORMATION
          </Title>
          <form className="info-form">
            <div className="email-address-col">
              <span>
                <label>
                  <Title level={3}>First Name</Title>
                </label>
                <input
                  className="email-address-inputs"
                  value={name}
                  onChange={handleName}
                  type="text"
                  placeholder="Enter your first name"
                ></input>
                <p className="error-modal">This field is required.</p>
              </span>

              <span>
                <label>
                  <Title level={3}>Last Name</Title>
                </label>
                <input
                  className="email-address-inputs"
                  value={lastName}
                  onChange={handleLastName}
                  type="text"
                  placeholder="Enter your last name"
                ></input>
                <p className="error-modal ">This field is required.</p>
              </span>

              <span>
                <label>
                  <Title level={3}>Phone Number</Title>
                </label>
                <input
                  className="email-address-inputs"
                  value={phone}
                  onChange={handlePhone}
                  type="tel"
                  placeholder="Enter your phone number"
                ></input>
                <p className="error-modal">This field is required.</p>
              </span>

              <span>
                <label>
                  <Title level={3}>Age </Title>
                </label>
                <input
                  className="email-address-inputs"
                  value={age}
                  onChange={handleAge}
                  type="number"
                  placeholder="18"
                ></input>
                <p className="error-modal ">This field is required.</p>
              </span>
            </div>

            <div className="city-zip-col">
              <span>
                <label>
                  <Title level={3}>Email </Title>
                </label>
                <input
                  className="email-address-inputs"
                  value={email}
                  onChange={handleEmail}
                  type="email"
                  placeholder="Enter your email address"
                ></input>
                <p className="error-modal">This field is required.</p>
              </span>

              <span>
                <label>
                  <Title level={3}>Address </Title>
                </label>
                <input
                  className="email-address-inputs"
                  value={address}
                  onChange={handleAddress}
                  type="text"
                  placeholder="Enter your street address"
                ></input>
                <p className="error-modal ">This field is required.</p>
              </span>
            </div>

            <div className="city-zip-col">
              <span>
                <label>
                  <Title level={3}>City </Title>
                </label>
                <input
                  className="email-address-inputs"
                  value={city}
                  onChange={handleCity}
                  type="text"
                  placeholder="Enter your city"
                ></input>
                <p className="error-modal">This field is required.</p>
              </span>

              <span>
                <label>
                  <Title level={3}>Zip Code </Title>
                </label>
                <input
                  className="email-address-inputs"
                  value={zipcode}
                  onChange={handleZip}
                  type="text"
                  placeholder="Enter your zip code"
                ></input>
                <p className="error-modal ">This field is required.</p>
              </span>
            </div>


            <div>
              <button className="red-btn" onClick={confirmBooking}>
                Reserve Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Booking;


