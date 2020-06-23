import React from 'react';
import {Link} from 'react-router-dom'
import PositiveCheck from './positivecheck';
import NegativeCheck from './negativecheck';
import  '../Funds/checkfund.css'
import { Row } from 'antd';


const Fund = (props) => {
    return (
        <Row>
        <div className="checkwrapper" style={{justifyContent:"center"}}>
                        <div className ="img" style={{justifyContent:"center"}}>
                            <p style ={{fontSize : "20px", color:"#FFFF"}}><b>Questionnaire</b></p>
                        </div>

                        <div class ="checktent" style={{justifyContent:"center"}}>
                        <label for="yes_no_radio" style ={{fontSize:"30px",textAlign:"center", color:"#FFFF"}}>Q) Are you a Canadian Citizen or a Permanent Resident?</label>
                            <p>
                            <Link to = "/positivecheck"><button type="button"  onClick = {<positivecheck/>} style ={{fontSize:"20px", margin:"10px", marginTop:"10px", color:"#011528"}}>Yes</button></Link>
                            </p>
                            <p>
                            <Link to = "/negativecheck"><button type="button" onClick = {<negativecheck/>} style ={{fontSize:"20px",margin:"10px", color:"#011528"}}>No</button></Link>
                            </p>
                        </div>   
                </div>

        </Row>
        

    )};

export default Fund;