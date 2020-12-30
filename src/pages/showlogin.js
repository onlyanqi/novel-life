import React, { Component } from 'react';
import { Alert } from 'antd';

class ShowLogin extends Component {
    state = {  }
    render() { 
        return ( 
            <div style={{marginTop:"100px"}}>
                <Alert type="warning" message="Please login to volunteer!"/>
            </div>
         );
    }
}
 
export default ShowLogin;