import React from 'react';
import {Link} from 'react-router-dom'
import Nextquestion from './Nextquestion';
import NegativeOutcome from './NegativeOutcome';
import  '../SymptomChecker/Symptom.css'
import {Row} from 'antd';


const Symptom = (props) => {
    return (
        <Row>
            <div className="wrapper" style={{justifyContent:"center"}}>
                        <div className ="img" style={{justifyContent:"center"}}>
                            <p style ={{fontSize : "20px", color:"#FFFF", fontVariant:"small-caps"}}><b>Questionnaire</b></p>
                        </div>

                        <div class ="tent" style={{justifyContent:"center"}}>
                        <label for="yes_no_radio" style ={{fontSize:"30px",textAlign:"center", color:"#FFFF" , fontVariant:"small-caps"}}>Q) Are You experiencing fever and cough?</label>
                            <p>
                            <Link to = "/nextquestion"><button type="button"  onClick = {<Nextquestion/>} style ={{fontSize:"20px", margin:"10px", marginTop:"10px", color:"#011528"}}>Yes</button></Link>
                            </p>
                            <p>
                            <Link to = "/negativeoutcome"><button type="button" onClick = {<NegativeOutcome/>} style ={{fontSize:"20px",margin:"10px", color:"#011528"}}>No</button></Link>
                            </p>
                        </div>   
                </div>

        </Row>
        

    )};

export default Symptom;