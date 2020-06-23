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
    style={{ margin: "10px", textAlign:"center", width:"300px", color:"#011528"}}
    cover={<img alt="country" style={{height:"200px", scale:"cover"}} src={data.countryInfo.flag} />}
  >
    <Meta title={data.country} style={{color:"#011528"}}/>
    <br></br>
                Cases: {data.cases} <br></br>
                Deaths: {data.deaths} <br></br>
                Recovered: {data.recovered} <br></br>
                Today's cases: {data.todayCases} <br></br>
                Today's Deaths: {data.todayDeaths} <br></br>
                Active: {data.active} <br></br>
                Critical: {data.critical} <br></br>
    <br></br>
                <small style={{color:"#011528"}}>Last Updated {lastUpdated} </small>
  </Card>
                 
        );
    });


  
    return (
    <div className="container">
      <Row className="comm-main" type="flex" justify="center">
        
        
          <div className="map-box">

                <Row>
                      <h1 style={{color:"#FFFF"}}>COVID-19 DATA</h1>
                      <Divider></Divider>
                
                      <p style={{color:"#FFFF"}}>
                        The data about the corona virus cases all over the world.
                      </p>
                </Row>
                  
                  <Row gutter={16}>
                    <Col span={6}>
                      <Card bg = "secondary" title="Cases" 
                        style={{
                          textAlign:"center", 
                          align:"center",  
                          color:"#011528"
                        }}>
                      {latest.cases}
                      <br></br>
                      <small style={{
                          textAlign:"center", 
                          align:"center"
                        }}>Last Updated {lastUpdated} </small>
                      </Card>
                    </Col>


                    <Col span={6}>
                      <Card bg = "danger" title="Deaths" bordered={false} 
                      style={{
                          textAlign:"center", 
                          align:"center",
                          color:"#011528"
                        }}>
                      {latest.deaths}
                      <br></br>
                      <small>Last Updated {lastUpdated} </small>
                      </Card>
                    </Col>
                    <Col span={6}>
                      <Card bg = "success" title="Recovered" bordered={false}
                      style={{
                        textAlign:"center", 
                        align:"center",
                        color:"#011528"
                      }}>
                      {latest.recovered}
                      <br></br>
                      <small>Last Updated {lastUpdated} </small>
                      </Card>
                      
                    </Col>
                    <Col span={6}>
                      <Card bg = "danger" title="Active" bordered={false}
                      style={{
                        textAlign:"center", 
                        align:"center",
                        color:"#011528"
                      }}>
                      {latest.active}
                      <br></br>
                      <small>Last Updated {lastUpdated} </small>
                      </Card>
                    </Col>
                    
                    <h2 style={{color:"#FFFF", margin:"15px"}}> Country wise Data</h2> 
                    <Divider></Divider>
                    
                  </Row>
                  
                  <Row style={{width:"100%"}}>
                  {countries}
                  </Row>
               
          </div>
      </Row>
    </div>
  );
}

export default Data;
