import React, {useEffect, useState }from "react";
import User from "./user";
import GoogleMapReact from 'google-map-react';


import Iframe from 'react-iframe';
import {  Row, Col, Card, Divider} from "antd";
import axios from "axios";
import "../style/help.css";

function Data() {
    const [latest,setLatest] = useState([]);
    const [results, setResults] =useState([]);
    useEffect(() => {
        axios
            .all([
                axios.get("https://disease.sh/v2/all"),
                axios.get("https://disease.sh/v2/countries"),
            ])
            .then((responseArr) => {
                setLatest(responseArr[0].data);
                setResults(responseArr[1].data);

            })
            .catch((err) => {
                console.log(err);
            });

    },[]);

    const date= new Date(parseInt(latest.updated));
    const lastUpdated = date.toString();
    const { Meta } = Card;

    const countries = results.map( data=> {
        return(
            <Card  bordered={false}
    hoverable
    style={{ margin: "10px"}}
    cover={<img alt="country" src={data.countryInfo.flag} />}
  >
    <Meta title={data.country} description="Covid-19 data" />
                Cases: {data.cases} <br></br>
                Deaths: {data.deaths} <br></br>
                Recovered: {data.recovered} <br></br>
                Today's cases: {data.todayCases} <br></br>
                Today's Deaths: {data.todayDeaths} <br></br>
                Active: {data.active} <br></br>
                Critical: {data.critical} <br></br>

                <small>Last Updated {lastUpdated} </small>
  </Card>
               
        

        
        );
    });


  
    return (
    <div className="container">
      <Row className="comm-main" type="flex" justify="center">
        <Col className="comm-left" xs={24} sm={24} md={20} lg={18} xl={16}>
        
        

        
          <div className="map-box">
            <h1>COVID-19 DATA</h1>
            <Divider></Divider>
      
            <p>
              The data about the corona virus cases all over the world.
            </p>

            <div className="site-card-wrapper">
    <Row gutter={16}>
      <Col span={6}>
        <Card bg = "secondary" title="Cases" bordered={false}>
        {latest.cases}
        <br></br>
        <small>Last Updated {lastUpdated} </small>
        </Card>
      </Col>
      <Col span={6}>
        <Card bg = "danger" title="Deaths" bordered={false}>
        {latest.deaths}
        <br></br>
        <small>Last Updated {lastUpdated} </small>
        </Card>
      </Col>
      <Col span={6}>
        <Card bg = "success" title="Recovered" bordered={false}>
        {latest.recovered}
        <br></br>
        <small>Last Updated {lastUpdated} </small>
        </Card>
        
      </Col>
      <Col span={6}>
        <Card bg = "danger" title="Active" bordered={false}>
        {latest.active}
        <br></br>
        <small>Last Updated {lastUpdated} </small>
        </Card>
      </Col>
      
      <h2> Country wise Data</h2> 
      <Divider></Divider>
      
      {countries}
      
    </Row>
  </div>
          </div>
        </Col>
        {/* <Col className="comm-right" xs={0} sm={0} md={4} lg={6} xl={7}>
          <User />
        </Col> */}
      </Row>
      
    </div>
  );
}

export default Data;
