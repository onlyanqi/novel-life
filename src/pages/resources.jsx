// @author : Rishabh Baheti

import React, { Component } from "react";
import "../style/resource.css";
import EduHelp from "./eduHelp";
import MentalHelp from "./mentalHelp";
class Resource extends Component {
  render() {
    return (
      <div style={{marginTop:"80px", align:"center"}} id="carousel-slider">
        <div id="edu-cards-wrapper">
         <EduHelp/>
        </div>
        <div id="mental-cards-wrapper">
         <MentalHelp/>
        </div>
      </div>
    );
  }
}

export default Resource;