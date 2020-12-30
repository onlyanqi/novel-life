import React from 'react';
import Symptoms from '../pages/SymptomChecker/Symptom.js'


const Symptom = (props) => {
    return (
        <div style={{width:"100%", height:"100%", justifyContent:"center", alignItems:"center",marginTop:"80px", padding:"20px"}}>
            <div>
                <h1 style={{
                    color: "#FFFF",
                    fontVariant: "small-caps",
                    fontFamily: "Lato, sans-serif",
                    fontSize: "40px", marginLeft:"20px",
                  }}>Questionnaire</h1>
            </div>
            <div>
            <Symptoms style={{justifyContent:"center", justifySelf:"center", height:"100%" }}/>
            </div>
            </div>   

    )};

export default Symptom;