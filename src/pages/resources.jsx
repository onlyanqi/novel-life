import React, { Component } from "react";
import { Carousel } from "antd";
import "../style/resource.css";
import EduHelp from "./eduHelp";
class Resource extends Component {
  render() {
    return (
      <div style={{marginTop:"80px", align:"center"}} id="carousel-slider">
        <div id="edu-cards-wrapper">
         <EduHelp/>
        </div>
      </div>
    );
  }
}

export default Resource;