import { Button, Typography } from "antd";
import { useState } from "react";

function CarBox({ data, carID }) {
  const { Title, Text } = Typography;
  const [carLoad, setCarLoad] = useState(true);

  const navigateTo = (sectionId) => {
    if (window.location.pathname === "/") {
      document.querySelector(sectionId).scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = "/";
    }
  };
  return (
    <>
      {data[carID].map((car, id) => (
        <div key={id} className="box-cars">
          <div className="pick-car">
            {carLoad && <span className="loader"></span>}
            <img
              style={{ display: carLoad ? "none" : "block" }}
              src={car.img}
              alt="car_img"
              onLoad={() => setCarLoad(false)}
            />
          </div>
          {/* car-description */}
          <div className="pick-description">
            <div className="pick-description__price">
              <span>${car.price}</span>/ rent per day
            </div>
            <div className="pick-description__table">
              <div className="pick-description__table__col">
                <span>Model</span>
                <span>{car.model}</span>
              </div>

              <div className="pick-description__table__col">
                <span>Mark</span>
                <span>{car.mark}</span>
              </div>

              <div className="pick-description__table__col">
                <span>Year</span>
                <span>{car.year}</span>
              </div>

              <div className="pick-description__table__col">
                <span>Doors</span>
                <span>{car.doors}</span>
              </div>

              <div className="pick-description__table__col">
                <span>AC</span>
                <span>{car.air}</span>
              </div>

              <div className="pick-description__table__col">
                <span>Transmission</span>
                <span>{car.transmission}</span>
              </div>

              <div className="pick-description__table__col">
                <span>Fuel</span>
                <span>{car.fuel}</span>
              </div>
            </div>
            <Button
              style={{
                backgroundColor: "#cb3737",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                height: "60px",
                width: "200px",
                marginTop: "15px",
              }}
              onClick={() => {
                navigateTo("#booking-sec");
              }}
            >
              <Title
                style={{
                  margin: "0px",
                  color: "white",
                }}
                level={3}
              >
                Reserve Now
              </Title>
            </Button>
          </div>
        </div>
      ))}
    </>
  );
}

export default CarBox;
