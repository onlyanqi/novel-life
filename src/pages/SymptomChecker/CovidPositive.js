import React from 'react';

import './CovidPositive.css';
import { Row } from 'antd';
const positivequestion = () => {
return(
<div className = "wrap2" style={{ align:"center"}} >

    <Row style={{align:"center"}}>

    <div className = "img2" style={{backgroundColor:"#011528", align:"center"}}>
        
    </div >
    <p style ={{fontSize:"25px", color:"#011528"}}><b>Kindly get tested for COVID-19. Do not panic and call 811 immediately!!</b></p> 
    
    <p><b style={{color:"#011528"}}> All Nova Scotians have a responsibility to help prevent the spread of COVID-19. There are steps you can take to protect yourself and others.</b></p>
    <div className = "content11">
    <p><b style={{color:"#011528"}}>1) Practice physical distancing. This is not the same as self-isolation. You do not need to remain indoors, but you do need to avoid being in close contact with people.</b></p>
    <p><b style={{color:"#011528"}}>2) Use face mask when you cannot keep a distance from people (like in stores or on public transit</b></p>
    <p><b style={{color:"#011528"}}>3) Monitor for COVID-19 symptoms: fever, cough, shortness of breath, sore throat or runny nose</b></p>
    </div>

    </Row>
    

</div>
)

};
export default positivequestion;