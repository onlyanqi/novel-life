import React from 'react';
import {Link} from 'react-router-dom'
import Nextquestion from './Nextquestion';
import NegativeOutcome from './NegativeOutcome';
import  '../SymptomChecker/Symptom.css'


const Symptom = (props) => {
    return (
        <div className="wrapper">
            <div className ="img">
                <p style ={{fontSize : "20px"}}><b>Questionnaire</b></p>
            </div>

            <div class ="tent">
              <label for="yes_no_radio" style ={{fontSize:"30px",textAlign:"center"}}>Q) Are You experiencing fever and cough?</label>
                <p>
                <Link to = "/nextquestion"><button type="button" onClick = {<Nextquestion/>} style ={{fontSize:"20px",marginLeft:"30px"}}>Yes</button></Link>
                </p>
                <p>
                <Link to = "/negativeoutcome"><button type="button" onClick = {<NegativeOutcome/>} style ={{fontSize:"20px",marginLeft:"30px"}}>No</button></Link>
                </p>
            </div>   
    </div>

    )};

export default Symptom;