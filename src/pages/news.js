import React from "react";
import User from "./user";
import { List, Row, Col } from "antd";
import { CalendarOutlined, BookOutlined } from "@ant-design/icons";
import "../style/comm.css";

function News() {
  const data = [
    {
      title:
        "As the race for a vaccine ramps up, so do calls for vaccine injury compensation",
      context:
        "TORONTO -- Canada may be at the forefront of the race to develop an effective COVID-19 vaccine, with a clinical trial already approved, but experts warn we have fallen short in developing a fund to compensate those who may be injured by vaccinations. With immense political and public pressure to develop a vaccine, a process that can take years, researchers are carrying out trials at an unprecedented pace in efforts to bring a successful vaccine to market in a matter of months. And although vaccine-related reactions are rare, experts say a new vaccine -- especially one developed using new technology -- may come with unknown risks.",
    },
    {
      title: "Nova Scotia goes 5 days without new COVID-19 case",
      context:
        "It's been five days since Nova Scotia has reported a new case of COVID-19. The QEII Health Sciences Centre's microbiology lab completed 569 tests on Saturday, but no new cases were identified. On Sunday, the province said there are three active cases remaining out of 1,061 total positive tests. Two of the active cases are currently in hospital, with one of those in intensive care. There are no active cases at any licensed long-term care homes in Nova Scotia. To date, Nova Scotia has 48,786 negative test results and 62 deaths. Licensed childcare centres and family daycare homes across the province are allowed to reopen Monday.",
    },
    {
      title:
        "Canada's 'inevitable' second wave of COVID-19 will expose surveillance blindspots: experts",
      context:
        "No one knows when a fresh surge of COVID-19 cases will emerge in Canada, but experts agree numbers are poised to rise and could very well explode in surveillance blindspots. One need only look to South Korea, where infections spread anew through Seoul's nightclubs and bars, to see how quickly containment successes unravel when undetected cases spark flareups. Of course, nightclubs remain closed in Canada, but the infection risk of a vast array of public spaces is being tested for the first time in coming weeks -- retail stores, golf ranges, bar patios and some offices among them.",
    },
    {
      title: "Coronavirus: What's happening around the world on Sunday",
      context:
        "Countries around the world moved to cautiously reopen their borders on Sunday as others are seeing spikes of COVID-19 infections and deaths. France announced on Sunday that it's opening its borders with other European countries at midnight for the first time since shutting them amid virus fears three months ago, and will start opening up to visitors from other continents July 1. pain's Prime Minister Pedro Sanchez said Sunday the country will also open its borders to travellers from Europe's Schengen travel areas except Portugal on June 21, moving up the original date by 10 days. Spain will drop its requirement for people arriving from abroad to stay in quarantine, either at home or in a hotel, for 14 days on arrival, when it reopens on that day. What's happening with COVID-19 in Canada. As of 4 p.m. ET on Sunday, there were 98,737 confirmed and presumptive coronavirus cases in Canada, with 60,238 cases considered recovered or resolved. A CBC News tally of deaths based on provincial data, regional health information and CBC's reporting stood at 8,196.",
    },
    {
      title:
        "Coronavirus: No new cases reported as Nova Scotia active case total drops to 3",
      context:
        "Nova Scotia reported no new case of COVID-19 on Saturday, with the total number of cases in the province remaining at 1,061. An initial press release said there was one new case but a correction issued a few hours later said that was a false positive and that there are no active cases in licensed long-term care homes in Nova Scotia. READ MORE: Long-term care facilities to allow visits, but strict guidelines remain. The QEII Health Sciences Centre’s microbiology lab completed 854 tests on Friday and is operating 24-hours...",
    },
    {
      title:
        "Provincial parks in Nova Scotia reopen next week with COVID-19 guidelines",
      context:
        "Staff were busy posting new signs and painting physical-distancing markers around the amenities at at Dollar Lake Provincial Park on Friday ahead of the park’s reopening on June 15. In the wake of the COVID-19 pandemic, Nova Scotians will still be able to enjoy a camping season, but will need to follow a few health and safety guidelines. READ MORE: Nova Scotia extends state of emergency, reports no new coronavirus cases Friday",
    },
  ];
  return (
    <div className="container">
      <Row className="comm-main" type="flex" justify="center">
        <Col className="comm-left" xs={24} sm={24} md={20} lg={18} xl={16}>
          <div>
            <img
              src="https://www.ctvnews.ca/polopoly_fs/1.4977926.1591803966!/httpImage/image.jpg_gen/derivatives/landscape_960/image.jpg"
              alt="Covid19 Vaccine"
              width="100%"
            />
          </div>
          <List
            header={<div>Latest Updates</div>}
            itemLayout="vertical"
            dataSource={data}
            renderItem={(item) => (
              <List.Item>
                <div className="list-title">{item.title}</div>
                <div className="list-icon">
                  <span>
                    <BookOutlined />
                    Source: Global news
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
        <Col className="comm-right" xs={0} sm={0} md={4} lg={6} xl={7}>
          <User />
        </Col>
      </Row>
    </div>
  );
}

export default News;
