import React, { Component } from "react";
import { Carousel } from "antd";
import "../style/resource.css";
class Donation extends Component {
  render() {
    return (
      <div style={{ marginTop: "80px", align: "center" }}>
        <Carousel
          autoplay
          style={{ backgroundColor: "#011528", height: "100%", width: "100%" }}
        >
          <div style={{ backgroundColor: "#011528" }}>
            <h3 style={{ color: "#FFFF" }}>
              <a
                style={{ color: "black" }}
                href="https://www.shelternovascotia.com/contribute"
              >
                <img
                  className="d-block w-100 resource-image"
                  src="/shelter.png"
                  alt="First slide"
                  style={{
                    opacity: "0.6",
                    objectFit: "cover",
                    width: "100%",
                    height: "500px",
                  }}
                />
              </a>
              Shelter Donations
            </h3>
          </div>
          <div style={{ backgroundColor: "#011528" }}>
            <h3 style={{ color: "#FFFF" }}>
              <a
                style={{ color: "black" }}
                href="https://www.mentalhealthns.ca/donate"
              >
                <img
                  className="d-block w-100 resource-image"
                  src="/virus.jpg"
                  alt="First slide"
                  style={{
                    opacity: "0.6",
                    objectFit: "cover",
                    width: "100%",
                    height: "500px",
                  }}
                />
              </a>
              Mental Health Donations
            </h3>
          </div>
          <div style={{ backgroundColor: "#011528" }}>
            <h3 style={{ color: "white" }}>
              <a
                style={{ color: "white" }}
                href="https://www.feednovascotia.ca/"
              >
                <img
                  className="d-block w-100 resource-image"
                  src="/resources.jpg"
                  alt="First slide"
                  style={{
                    opacity: "0.6",
                    objectFit: "cover",
                    width: "100%",
                    height: "500px",
                  }}
                />
              </a>
              Food Donations
            </h3>
          </div>
        </Carousel>
      </div>
    );
  }
}

export default Donation;
