// @author : Rishabh Baheti


import React, {useEffect, useState } from "react";
import {Card, Nav, ListGroup, ListGroupItem} from 'react-bootstrap';
import axios from "axios";
import "../style/card.css";

function MentalHelp() {
    const [results, setResults] =useState([]);
    useEffect(() => { 
        axios
            .all([
                axios.get("https://group25novellife.herokuapp.com/api/mental"),
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
        <h1 className="row-heading">MENTAL RESOURCES</h1>
        <div className="card-wrapper">
        {
            results.map( data=> {
                return(
                    <div className="class-card" key={data._id}>
                        <Card>
                        <Card.Header className="card-head">{data.name}</Card.Header>
                        <ListGroup className="list-group-flush" variant="flush">
                            <ListGroupItem><Card.Img src={data.path} style={{ width:"100"}}/></ListGroupItem>
                            <ListGroupItem>{data.contact}</ListGroupItem>
                            <ListGroupItem>{data.helptype}</ListGroupItem>
                        </ListGroup>
                        <Card.Footer><Nav.Link href={data.hyperlink} target="_blank">Visit</Nav.Link></Card.Footer>
                    </Card>
                  </div>  
                );
            })
        }
        </div>
        </div>
    )
}
export default MentalHelp;