import React from 'react';
import Covidpositive from './CovidPositive';
import NegativeOutcome from './NegativeOutcome';
import {Link} from 'react-router-dom';
import './Nextquestion.css';
const nextquestion = () => {
return(
    <div className="wrap">
    <div className ="img1">
        <p style ={{fontSize : "20px",textAlign:"center", color:"#FFFF"}}><b>Questionnaire</b></p>
    </div>

    <div className = "tent1"> 
      <label for="yes_no_radio" style ={{fontSize:"30px", color:"#FFFF"}}>Q) Have You travelled abroad in last month?</label>
      <p>
                            <Link to = "/positiveoutcome"><button type="button"  onClick = {<Covidpositive/>} style ={{fontSize:"20px", margin:"10px", marginTop:"10px", color:"#011528"}}>Yes</button></Link>
                            </p>
                            <p>
                            <Link to = "/negativeoutcome"><button type="button" onClick = {<NegativeOutcome/>} style ={{fontSize:"20px",margin:"10px", color:"#011528"}}>No</button></Link>
                            </p>
    </div>   
</div>
)

};
export default nextquestion;