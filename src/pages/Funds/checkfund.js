import React from 'react';
import {Link} from 'react-router-dom'
import  '../Funds/checkfund.css'
import { Row } from 'antd';


const Fund = (props) => {
    return (
        <Row style={{height:"100%", padding:"4em"}}>
        <div >
                        <div class ="checktent" style={{justifyContent:"center"}}>
                        <label for="yes_no_radio" style ={{fontSize:"30px",textAlign:"center", color:"#FFFF", fontVariant:"small-caps"}}>Are you a Canadian Citizen or a Permanent Resident?</label>
                            <p>
                            <Link to = "/positivecheck"><button type="button"  onClick = {<positivecheck/>} style ={{width:"70px",marginTop:"2em",fontSize:"13px", color:"white", 
                            backgroundColor:"#2593FC", boxShadow:"0", borderBlockColor:"#2593FC", border:"none", fontFamily: "Roboto Thick, sans-serif",
                                fontWeight: "200",
                                padding: "15px",}}>yes</button></Link>
                            </p>
                            <p>
                            <Link to = "/negativecheck"><button type="button" onClick = {<negativecheck/>} style ={{width:"70px",fontSize:"13px",color:"white", backgroundColor:"#2593FC", 
                            boxShadow:"0", borderBlockColor:"#2593FC", border:"none", fontFamily: "Roboto Thick, sans-serif",
                                fontWeight: "200",
                                padding: "15px",}}>no</button></Link>
                            </p>
                        </div>   
                </div>

        </Row>
        

    )};

export default Fund;