// @author : Rishabh Baheti


import React, {useEffect, useState } from "react";
import {Card, Nav} from 'react-bootstrap';
import axios from "axios";
import "../style/card.css";

function EduHelp() {
    const [results, setResults] =useState([]);
    useEffect(() => { 
        axios
            .all([
                axios.get("https://group25novellife.herokuapp.com/api/edu"),
            ])
            .then((responseArr) => {
                setResults(responseArr[0].data);

            })
            .catch((err) => {
                console.log(err);
            });

    },[]);

    return (
        <div>
        <h1 className="row-heading">EDUCATIONAL RESOURCES</h1>
        <div className="card-wrapper">
        {
            results.map( data=> {
                return(
                    <div style={{minHeight:"100%"}} className="class-card" key={data._id}>
                        <Card style={{height:"100%"}} >
                            <Card.Title className="class-title-card">
                            <Card.Img  src={data.path} style={{ width:"100"}}/>
                            <Nav.Link href={data.hyperlink} target="_blank">{data.name}</Nav.Link>
                            </Card.Title>
                        </Card>
                    </div>
                         
                );
            })
        }
        </div>
        </div>
    )
}
export default EduHelp;