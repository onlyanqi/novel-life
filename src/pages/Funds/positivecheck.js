import React from "react";
import "./positivecheck.css";
import { Row } from "antd";

const positivecheck = () => {
  return (
  
    <div style={{ justifyContent: "center", height: "500px", width: "100%", marginTop:"100px", padding:"3em" }}>
        <Row style={{ justifyContent: "center"}}>
          <h1
            style={{
              justifyContent: "center",
              align: "center",
              color: "#FFFF",
              fontFamily: "Roboto Thick, sans-serif",
              textAlign: "center",
              fontWeight:"200",
              fontSize:"3em",
            }}>
            You are eligible for CESB and CEWS
          </h1>
        </Row>
        <Row style={{ justifyContent: "center"}}>
        <a
          style={{ fontSize: "13px", backgroundColor:"#2593FC", color:"#FFFFFF",
          justifyContent: "center", align:"center", textAlign:"center", padding:"18px",
        fontWeight:"200px" }}
          href="https://www.canada.ca/en/services/benefits/covid19-emergency-benefits.html"
        >
          <h7>know more</h7>
        </a>
       </Row>

    </div>
  );
};
export default positivecheck;
