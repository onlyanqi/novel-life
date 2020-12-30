import React, { Component } from 'react';
import  '../SymptomChecker/Symptom.css';
import {Row} from 'antd';

class Questionpage extends Component{
    constructor(props) {
        super();
        this.state = {
          i : 0,
          array :[],
          valuePicked :""
        };
      }

      capturevalues = (e) => {
        this.setState({
            valuePicked : e.target.value,
            
        })
       
        this.props.fun(e.target.value)
      }

    render(){
        return (

            <div style={{ padding:"1em", justifyContent:"center", justifySelf:"center"}}>
            <div >

                        <div>
        <label  style ={{fontSize:"30px",textAlign:"center", color:"#FFFF" , 
        fontVariant:"small-caps"}}> {this.props.item[this.props.i].question}</label>
         <br></br>   
         <br></br>
            
            
            <input type="radio" name="site_name" 
                                    checked = {this.state.valuePicked == this.props.item[this.props.i].option1}
                                   value={this.props.item[this.props.i].option1}
                                   onClick={this.capturevalues}
                                    />
            <label for="site_name" style ={{fontSize:"15px",textAlign:"center", color:"#FFFF" , padding:"2em", marginBottom:"2em", fontVariant:"small"}}> {this.props.item[this.props.i].option1}</label><br></br>
            
            
            <input type="radio" name="site_name2" 
                                    checked = {this.state.valuePicked ==this.props.item[this.props.i].option2}
                                   value={this.props.item[this.props.i].option2}
                                   onClick={this.capturevalues} 
                                   /> 
            <label for="site_name2" style ={{fontSize:"15px",textAlign:"center", color:"#FFFF" , padding:"2em", marginBottom:"2em",fontVariant:"small"}}> {this.props.item[this.props.i].option2}</label><br></br>
            
            
            <input type="radio" name="site_name3" 
                                    checked = {this.state.valuePicked == this.props.item[this.props.i].option3}
                                   value={this.props.item[this.props.i].option3}
                                   onClick={this.capturevalues}
                                    />
            <label for="site_name3" style ={{fontSize:"15px",textAlign:"center", color:"#FFFF" , padding:"2em", marginBottom:"2em",fontVariant:"small"}}> {this.props.item[this.props.i].option3}</label><br></br>

                        </div>   
                </div>

        </div>

          )}};

export default Questionpage;