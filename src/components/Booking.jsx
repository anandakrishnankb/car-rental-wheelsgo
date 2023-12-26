import React from "react";
import { useState, useEffect } from "react";
import CarAudi from "../images/audia1.jpg";
import CarGolf from "../images/golf6.jpg";
import CarToyota from "../images/toyotacamry.jpg";
import CarBmw from "../images/bmw320.jpg";
import CarMercedes from "../images/benz.jpg";
import CarPassat from "../images/passatcc.jpg";

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

  const confirmBooking = (e) => {
    e.preventDefault();
    setModal(!modal);
    const doneMsg = document.querySelector(".booking-done");
    doneMsg.style.display = "flex";
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
              <h2 className="booking-box-title">Book a car</h2>
              <p className="error-message">Fill All Fields!</p>
              <p className="booking-done">
                Check your email to confirm the order.
              </p>
              <form className="box-form">
                <div className="book-first-row">
                  <label>
                    Select Your Car Type
                    <b>*</b>
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
                    Pick-up
                    <b>*</b>
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
                    Drop-of
                    <b>*</b>
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
                    Pick-up
                    <b>*</b>
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
                    Drop-of
                    <b>*</b>
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
        {/* title */}
        <div className="modal-title ">
          <h2>Complete Reservation</h2>
          <button onClick={openModal}>X</button>
        </div>
        {/* message */}
        <div className="modal-message">
          <h4 className="modal-warning">
            Upon completing this reservation enquiry, you will receive:
          </h4>
          <p className="para">
            Your rental voucher to produce on arrival at the rental desk and a
            toll-free customer support number.
          </p>
        </div>
        {/* car info */}
        <div className="modal-car-info">
          <div className="dates-div">
            <div className="modal-dates-info">
              <h5 className="modal-info-title">Location & Date</h5>
              <span>
                <div>
                  <h6 className="modal-from-labels">Pick-Up Date & Time</h6>
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
                  <h6 className="modal-from-labels">Drop-Off Date & Time</h6>
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
                  <h6 className="modal-from-labels">Pick-Up Location</h6>
                  <p>{pickUp}</p>
                </div>
              </span>
            </div>

            <div className="modal-dates-info">
              <span>
                <div>
                  <h6 className="modal-from-labels">Drop-Off Location</h6>
                  <p>{dropOff}</p>
                </div>
              </span>
            </div>
          </div>
          <div className="modal-car-model">
            <h5 className="modal-info-title">
              <span>Car -</span> {carType}
            </h5>
            {imgUrl && <img src={imgUrl} alt="car_img" />}
          </div>
        </div>
        {/* personal info */}
        <div className="modal-person-info">
          <h4 className="modal-info-title personal-info">
            Personal Information
          </h4>
          <form className="info-form">
            <div className="email-address-col">
              <span>
                <label>
                  First Name <b>*</b>
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
                  Last Name <b>*</b>
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
                  Phone Number <b>*</b>
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
                  Age <b>*</b>
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
                  Email <b>*</b>
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
                  Address <b>*</b>
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
                  City <b>*</b>
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
                  Zip Code <b>*</b>
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

            <span className="info-form__checkbox">
              <input type="checkbox"></input>
              <p>Please send me latest news and updates</p>
            </span>

            <div className="modal-foot">
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

{
  /* <div className="hero-card">
        <h2 className="card-title">Book a Car</h2>
        <div className="hero-card-contents">
        <div className="hero-card-row">
          <div className="hero-card-col">
            <h3 className="hero-card-input-titles">Car Model</h3>
            <input className="hero-card-inputs" type="text" />
          </div>
          <div className="hero-card-col">
            <h3 className="hero-card-input-titles">Pick Up</h3>
            <input className="hero-card-inputs" type="text" />
          </div>
          <div className="hero-card-col">
            <h3 className="hero-card-input-titles"><FontAwesomeIcon icon="fa-solid fa-location-dot" />Drop Of</h3>
            <input className="hero-card-inputs" type="text" />
          </div>
        </div>
        <div className="hero-card-row">
          <div className="hero-card-col">
            <h3 className="hero-card-input-titles">Pick Up</h3>
            <input className="hero-card-inputs" type="text" />
          </div>
          <div className="hero-card-col">
            <h3 className="hero-card-input-titles">Drop Of</h3>
            <input className="hero-card-inputs" type="text" />
          </div>
          <div className="hero-card-col">
            <button className="orange-btn hero-card-search-btn">Search</button>
          </div>
        </div>
      </div></div> */
}
