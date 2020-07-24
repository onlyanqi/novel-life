import React, { useState } from "react";
import ReactMapGL from "react-map-gl";
import { List, Row } from "antd";
import "../style/help.css";

function Help() {
  const [viewport, setViewport] = useState({
    width: "100%",
    height: 600,
    latitude: 45.216,
    longitude: -63.1978,
    zoom: 7.57,
  });
  const data = [
    {
      title: "Support for individuals and families",
      context:
        "Virtual School Meal Program: The Virtual School Meal Program provides nutritious meals to students who relied on school meal programs while schools are closed due to COVID-19. The program is available in 7 communities (Antigonish, Glace Bay, New Glasgow, New Waterford, North Sydney, Sydney and Sydney Mines) with 31 participating schools. Students and their families are able to order meals from local restaurants. Eligible families will be contacted directly by their school principals. Income assistance: Every individual and family member on income assistance will receive an additional $50 starting Friday, 20 March. People do not need to apply. We’re also extending the hours of our toll-free line for income assistance supports, including weekends. If you have questions about eligibility for income assistance. Feed Nova Scotia and community food banks: We're giving $1 million to help Feed Nova Scotia purchase food and hire more staff, and $55,000 to support 12 smaller community food banks. Transition houses: We’re giving $535,000 to support transition houses and other organizations that serve vulnerable women and their children. Suspending student loan payments: Nova Scotia Student Loan payments are suspended until 30 September 2020. You don't need to make any payments, and your loans won't accrue interest. The suspension is automatic – you don't need to apply. Worker Emergency Bridge Fund. This fund supports people who are self-employed or laid-off who don’t qualify for Employment Insurance. Applications open 10 April 2020. Read more about eligibility requirements and how to apply. Community support. Nova Scotia Power, EfficiencyOne and the Government of Nova Scotia are giving $3 million to community organizations that deliver prepared meals, operate soup kitchens, help those experiencing homelessness and provide other services to help vulnerable families seniors and youth. The funding is being redirected from the HomeWarming program. ",
    },
    {
      title: "Support for seniors",
      context:
        "Community Links and Seniors’ Safety Programs are programs that respond to the needs of vulnerable older adults across the province. Government is investing $230,000 in these programs to expand their capacity to provide more supports and services like: volunteers for delivering groceries technological options for keeping people connected by phone responding to other social issues as they emerge If you need non-emergency, non-medical help, call 211 or visit ns.211.ca. 211 is a toll free helpline that connects you to community and social services in your area. This toll free helpline is available 24/7 in over 140 languages. If you are accepting help from someone you don’t know, please remember to protect your own privacy and safety and follow these tips. Keeping long-term care residents connected: We’re distributing 800 iPads to long-term care homes across the province so residents can connect with family and friends. Federal support for seniors: The Government of Canada has funding and resources available for seniors.",
    },
    {
      title: "Support for businesses",
      context:
        "Government has made these announcements to support businesses: COVID-19 Agriculture Response Program. The COVID-19 Agriculture Response Program is designed to help Nova Scotia's agriculture industry mitigate the effects of the COVID-19 pandemic on the industry's competitiveness, productivity and profitability. Small Business Reopening and Support Grant: Through this $25-million program, eligible small businesses, non-profits, charities and social enterprises that were ordered to close or greatly reduce operations because of the Public Health Order, or that were greatly impacted by social distancing and orders to stay home, may qualify for a reopening and support grant. Canada Emergency Commercial Rent Assistance for Small Businesses: Nova Scotia is participating in the Canada Emergency Commercial Rent Assistance for Small Businesses program. The program, in partnership with the federal government, will provide rent relief for commercial small businesses that have temporarily ceased operations or lost at least 70% of revenue because of the COVID-19 pandemic. Landlords who register for the program can get a forgivable loan to cover half of the rent in April, May and June if they lower the rent by 75% over that period. You can apply for the program on the Canada Mortgage and Housing Corporation’s website.",
    },
  ];
  return (
    <div className="container" style={{width:"100%"}}>
      <Row className="comm-main" type="flex" justify="center" style={{width:"100%"}}>
        {/* <Col className="comm-left" xs={24} sm={24} md={20} lg={18} xl={16}> */}
          <div className="map-box" style={{width:"100%"}}>
            <h1 style={{color:"#FFFF"}}>COVID-19 help near you</h1>
            <p style={{color:"#FFFF"}}>
              This map shows some verified places and organisations where you
              can reach out for help, including financial, food and shelters,
              mental health and surports for children, seniors and people with
              disabilities.
            </p>
            </div>
            </Row>
            <Row  justify="center" style={{width:"100%"}}>
            <ReactMapGL style={{width:"800px"}}
              {...viewport}
              mapboxApiAccessToken={
                "pk.eyJ1IjoiYW5xaTI3IiwiYSI6ImNrYmY3OW9kajBsaXYycXBjYjlkeHV2ZWQifQ.TRv69mW_zy814wzhMrwTFw"
              }
              mapStyle="mapbox://styles/anqi27/ckbf8p03e23a11htdg6evsdbx"
              onViewportChange={(nextViewport) => setViewport(nextViewport)}
            />
            </Row>
            
            <Row>

           
            <List
              header={
                <div>
                  
                </div>
              }
              itemLayout="vertical"
              dataSource={data}
              renderItem={(item) => (
                <List.Item>
                  <div className="list-title">{item.title}</div>
                  <div className="list-context">{item.context}</div>
                </List.Item>
              )}
            />

        </Row>
       
        {/* </Col> */}
        {/* <Col className="comm-right" xs={0} sm={0} md={4} lg={6} xl={7}>
          <User />
        </Col> */}
      
    </div>
  );
}

export default Help;
