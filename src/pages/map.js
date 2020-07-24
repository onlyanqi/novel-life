import React, {useEffect, useState }from "react";
import Iframe from 'react-iframe';
import {  Row} from "antd";
import axios from "axios";

function Map() {
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

    return (
    <div className="container" 
                style={{align:"center", 
                alignSelf:"center", alignContent:"center",
                alignItems:"center", width:"100%"}}>
      <Row className="comm-main" type="flex" justify="center" style={{opacity:"0.9", width:"100%"}}>

            <div style={{width:"100%", margin:"20px"}}>
            <Iframe style={{backgroundColor:"#011528", margin:"50px"}} frameColor="#011528"
            width="100%" height="700" src="https://coronavirus.app/map?embed=true" 
            frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" > </Iframe>
            </div>
            
           <div style={{width:"100%", margin:"20px"}}>
           <Iframe style={{backgroundColor:"#011528", margin:"50px"}} width="100%" height="700" src="https://coronavirus.app/analytics?embed=true" 
            frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" > </Iframe>
           </div>
    </Row> 
    </div>
  );
}

export default Map;
