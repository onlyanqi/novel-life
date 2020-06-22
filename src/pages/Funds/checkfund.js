import React from 'react';
import {Link} from 'react-router-dom'
import PositiveCheck from './positivecheck';
import NegativeCheck from './negativecheck';
import  '../Funds/checkfund.css'


const Fund = (props) => {
    return (
        <div className="checkwrapper">
            <div className ="checkimg">
                <p style ={{fontSize : "20px"}}><b>Questionnaire</b></p>
            </div>

            <div class ="checktent">
              <label for="yes_no_radio" style ={{fontSize:"30px",textAlign:"center"}}>Q) Are You Citizen or Permanent Resident of Canada?</label>
                <p>
                <Link to = "/positivecheck"><button type="button" onClick = {<PositiveCheck/>} style ={{fontSize:"20px",marginLeft:"30px"}}>Yes</button></Link>
                </p>
                <p>
                <Link to = "/negativecheck"><button type="button" onClick = {<NegativeCheck/>} style ={{fontSize:"20px",marginLeft:"30px"}}>No</button></Link>
                </p>
            </div>   
    </div>

    )};

export default Fund;