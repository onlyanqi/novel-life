import React, { useState } from "react";
import { Row, Col, List } from "antd";
import { CalendarOutlined, BookOutlined } from "@ant-design/icons";
import "../style/home.css";

function Home() {
  const [mylist] = useState([
    {
      title: "Alerts and notices",
      context:
        "Provincial state of emergency: The Halifax Regional Municipality supports the province’s decision to declare a state of emergency. Municipal staff continue to work with the province to align with recommendations of health officials and the provincial order.",
    },
    {
      title: "Testing data",
      context:
        "Find information on COVID-19 cases in Nova Scotia. Data includes age range, gender and location (by NSHA zone). Data is reported daily. Data on COVID-19 comes from Nova Scotia’s public health information system, Panorama. Active cases are defined as the cumulative number of cases, less those deceased and resolved.",
    },
    {
      title: "Support",
      context:
        "Support for individuals and families, Support for seniors, Support for businesses, Support for municipalities, Healthcare and continuing care, How your organization can help",
    },
    {
      title: "Think you may have?",
      context:
        "If you’re worried you’ve been exposed to COVID-19, you may need to call 811 to see if you should be tested. You may also need to self-isolate. Symptoms of COVID-19 include: fever (chills, sweats), cough or worsening of a previous cough, sore throat, headache, shortness of breath, muscle aches, sneezing, nasal congestion or runny nose, hoarse voice, diarrhea, unusual fatigue, loss of sense of smell or taste, red, purple or blueish lesions on the feet, toes or fingers without clear cause",
    },
    {
      title: "Helpful health links",
      context:
        "NS Health and Wellness Novel Coronavirus website , Public Health Agency of Canada - Coronavirus disease (COVID-19): Outbreak updates, Public Health Agency of Canada - Coronavirus disease (COVID-19): Awareness resources, Public Health Agency of Canada contact details: , Toll free: 1-833-784-4397, Email: phac.info.aspc@canada.ca, Halifax Partnership - COVID-19 Resources for your Business",
    },
  ]);

  const data = [
    {
      title:
        "Coronavirus: No new cases reported as Nova Scotia active case total drops to 3",
      context:
        "Nova Scotia reported no new case of COVID-19 on Saturday, with the total number of cases in the province remaining at 1,061. An initial press release said there was one new case but a correction issued a few hours later said that was a false positive and that there are no active cases in licensed long-term care homes in Nova Scotia. READ MORE: Long-term care facilities to allow visits, but strict guidelines remain. The QEII Health Sciences Centre’s microbiology lab completed 854 tests on Friday and is operating 24-hours.",
    },
    {
      title:
        "Provincial parks in Nova Scotia reopen next week with COVID-19 guidelines",
      context:
        "Staff were busy posting new signs and painting physical-distancing markers around the amenities at at Dollar Lake Provincial Park on Friday ahead of the park’s reopening on June 15. In the wake of the COVID-19 pandemic, Nova Scotians will still be able to enjoy a camping season, but will need to follow a few health and safety guidelines. READ MORE: Nova Scotia extends state of emergency, reports no new coronavirus cases Friday",
    },
  ];

  return (
    <div className="container" style={{backgroundColor:"#011528", width:"100%", marginTop:"20px"}}>
      <Row width="100%" marginTop="10px"><img src="/cover.png" style={{backgroundColor:"#FFFF", opacity:"0.8", width:"100%", height:"550px", objectFit:"cover", marginTop:"50px"}}></img></Row>

      <Row className="comm-main" type="flex" justify="center" style={{backgroundColor:"#011528"}}>
        <Col className="comm-left" xs={24} sm={24} md={20} lg={18} xl={16} style={{backgroundColor:"#011528"}}>
          <List
            header={<div style={{color:"#FFFF"}}>Coronavirus Disease | COVID-19</div>}
            itemLayout="vertical"
            dataSource={mylist}
            renderItem={(item) => (
              <List.Item>
                <div className="list-title">{item.title}</div>
                <div className="list-icon">
                  <span>
                    <BookOutlined />
                    Source: The Public Health Agency of Canada
                    <CalendarOutlined />
                    Last update 2020-06-13
                  </span>
                </div>
                <div className="list-context">{item.context}</div>
              </List.Item>
            )}
          />
        </Col>
        <Col className="comm-right" xs={0} sm={0} md={4} lg={6} xl={7} style={{backgroundColor:"#011528"}}>
          <List
            header={<div style={{color:"#FFFF"}}>Latest News</div>}
            itemLayout="vertical"
            dataSource={data}
            renderItem={(item) => (
              <List.Item>
                <div className="list-title">{item.title}</div>
                <div className="list-icon">
                  <span>
                    <BookOutlined />
                    Source: CTV news
                    <br />
                    <CalendarOutlined />
                    Last update 2020-06-14
                  </span>
                </div>
                <div className="list-context">{item.context}</div>
              </List.Item>
            )}
          />
        </Col>
      </Row>
    </div>
  );
}
export default Home;
