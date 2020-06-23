import React, { Component } from "react";
import { Carousel } from "antd";
import "../style/resource.css";
class Resource extends Component {
  render() {
    return (
      <div style={{marginTop:"50px", align:"center"}}>
        <Carousel autoplay style={{backgroundColor:"#011528", height:"100%", width:"100%"}}>
          <div style={{backgroundColor:"#011528"}}>
            <h3 style={{color:"#FFFF"}}>
              <a
              style={{ color: "black" }}
              href="http://www.openculture.com/freeonlinecourses"
            >
              <img
                className="d-block w-100 resource-image"
                src="/virus.jpg"
                alt="First slide"
                style={{opacity: "0.35" ,
                objectFit:"cover", width:"100%", height:"500px"
                }}
              />
            </a>Educational Resources</h3>
          </div>
          <div style={{backgroundColor:"#011528"}}>
            <h3><a
              style={{ color: "black" }}
              href="http://www.openculture.com/freeonlinecourses"
            >
              <img
                className="d-block w-100 resource-image"
                src="/updates.jpg"
                alt="First slide"
                style={{opacity: "0.35" ,
                objectFit:"cover", width:"100%", height:"500px"
              }}
              />
            </a></h3>
          </div>
          <div style={{backgroundColor:"#011528"}}>
            <h3 style={{color:"white"}}><a
              style={{ color: "white" }}
              href="http://www.openculture.com/freeonlinecourses"
            >
              <img
                className="d-block w-100 resource-image"
                src="/volunteer.jpg"
                alt="First slide"
                style={{opacity: "0.35" ,
                objectFit:"cover", width:"100%", height:"500px"
              }}
              />
            </a>Volunteer or Seek Assistance</h3>
          </div>
          <div style={{backgroundColor:"#011528"}}>
            <h3><a
              style={{ color: "black" }}
              href="http://www.openculture.com/freeonlinecourses"
            >
              <img
                className="d-block w-100 resource-image"
                src="/virus.jpg"
                alt="First slide"
                style={{opacity: "0.35" ,
                objectFit:"cover", width:"100%", height:"500px"}}
              />
            </a></h3>
          </div>
        </Carousel>
      </div>
    );
  }
}

export default Resource;