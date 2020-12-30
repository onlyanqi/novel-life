import React from "react";

import "./negativecheck.css";
import { Row } from "antd";
const negativecheck = () => {
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
        Unfortunately, you are NOT eligible for CESB and CEWS. 
      </h1>
    </Row>
</div>
  );
};
export default negativecheck;
