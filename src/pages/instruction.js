// @author : Nupur Bhatt

import React, { Component } from 'react';
import { Alert } from 'antd';

class Instruction extends Component {
    state = { 
     }
    render() { 
        return ( 
            <div style={{height:"800px", width:"100%", marginTop:"100px"}}>
            <Alert message="You have successfully requested a service! Wait for a volunteer to contact you on your contact number." type="success" />
        </div> 
         );
    }
}

export default Instruction;
