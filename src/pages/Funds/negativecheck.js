import React from 'react';

import './negativecheck.css';
import { Row } from 'antd';
const negativecheck = () => {
return(

    <Row style={{justifyContent:"center", height:"100%", width:"100%"}}>

        <div className = "checkwrap3" style={{justifyContent:"center", height:"100%", width:"100%", textAlign:"center"}}>
            <p style ={{fontSize:"35px", justifyContent:"center", height:"100%", width:"100%", textAlign:"center"}}>
                <b style={{justifyContent:"center", align:"center", color:"#FFFF", textAlign:"center"}}>
                    You are NOT eligible for any of the financial benefits</b></p> 

        </div>

    </Row>

)

};
export default negativecheck;