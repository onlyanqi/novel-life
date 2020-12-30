import React, { Component } from 'react';
import { Card, Row} from 'antd';
import { Button } from 'antd';

export default class Tasks extends React.Component {
    
    render() { 
        return ( 
            <div>
                <Row>
                <Card title="Assistance Task 1" style={{ width: "300px", marginTop:"100px", marginRight:"10px"}}>
                    <p>Nupur Bhatt</p>
                    <p>9024409894</p>
                    <p>Buy groceries at Pete's</p>
                    <Button type="primary"> More</Button> <Button type="primary" style={{backgroundColor:"#f0ad4e", border:"none"}}> Select Task</Button>
                </Card>

                <Card title="Assistance Task 2" style={{ width: "300px", marginTop:"100px", marginRight:"10px"}}>
                    <p>Vidya Boghara</p>
                    <p>902 440 9902</p>
                    <p>Assistance with tutoring Math</p>
                    <Button type="primary"> More</Button> <Button type="primary" style={{backgroundColor:"#f0ad4e", border:"none"}}> Select Task</Button>
                </Card>

                <Card title="Assistance Task 3" style={{ width: "300px", marginTop:"100px", marginRight:"10px"}}>
                    <p>Anqi Chen</p>
                    <p>902 440 9667</p>
                    <p>Mental health assistance</p>
                    <Button type="primary"> More</Button> <Button type="primary" style={{backgroundColor:"#f0ad4e", border:"none"}}> Select Task</Button>
                </Card>

                <Card title="Assistance Task 4" style={{ width: "300px", marginTop:"100px", marginRight:"10px"}}>
                    <p>Nupur Bhatt</p>
                    <p>9024409894</p>
                    <p>Buy medicine at Lawtons.</p>
                    <Button type="primary"> More</Button> <Button type="primary" style={{backgroundColor:"#f0ad4e", border:"none"}}> Select Task</Button>
                </Card>
                </Row>
            </div>
         );
    }
}
