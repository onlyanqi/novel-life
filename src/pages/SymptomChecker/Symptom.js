import React, { Component } from 'react';
import NegativeOutcome from './NegativeOutcome';
import  '../SymptomChecker/Symptom.css';
import {Row} from 'antd';
import Axios from "axios";
import Questionpage from "../SymptomChecker/QuestionPage"
import PositiveOutcome from './CovidPositive';

class Symptom extends Component {
    
        state = {
          questions : [
           ],
           inc : 0,
           v : "hidden",
           ans :"",
           ansArray : [],
           positiveArray: [],
           negativeArray: [],
           //positiveArray : ["less than 14 days","less than 1 month",">14 days","yes i do sometimes","yes","Yes i am experiencing body ache","Yes i do have running nose","Frequent headache","severe fatigue","I have been around sick people"],
           //negativeArray : ["more than 1 month","Not experiencing any cough","<14 days","No i dont","Cant say","No","No i am not experiencing body ache","No i do not have running nose","No haeadache","Sometimes headache","No fatigue","Mild fatigue","No i have not been around sick people"],
           positiveCounter : 0,
           negativeCounter : 0
          
        };
      
      componentWillMount(){
        Axios.get('https://group25novellife.herokuapp.com/api/assist/symptom')
        .then(res=>{
            const q = [...res.data]
             this.setState({
                questions: q
             })
        })
        .catch((err) => {
            console.log(err);
          });


        Axios.get('https://group25novellife.herokuapp.com/api/assist/answers')
        .then(res=>{
            const q1 = [...res.data]
            this.setState({
                positiveArray: q1[0].positiveanswer,
                negativeArray: q1[0].negativeanswer
             })
        })
        .catch((err) => {
            console.log(err);
          });
    }

   
  
    changeQuestion = (e) => {
        let temp = this.state.inc
        e.preventDefault()

        this.setState({
            inc: temp + 1,
            v : "",
            ansArray: this.state.ansArray.concat(this.state.ans)

         })
        if(this.state.positiveArray.includes(this.state.ans)) 
        {
            this.setState({
                positiveCounter : this.state.positiveCounter + 1
    
             })
        }
        else if(this.state.negativeArray.includes(this.state.ans))
        {
            this.setState({
                negativeCounter : this.state.negativeCounter + 1
    
             })
        }

        this.setState({
           ans: ""

         })
         
    }

    captureValue = (e) => {
        this.setState({
            ans : e
         })

    }

    render(){
        
    return (
    
        <Row>

        <div style={{width:"100%", padding:"1em"}}>
                 {this.state.questions.length>0 && this.state.inc<this.state.questions.length?<Questionpage item={this.state.questions} i = {this.state.inc} fun = {this.captureValue}/> :null}
                 <p>
                     {this.state.ans!=""?<button type="button"  onClick = {this.changeQuestion} style ={{color:"white", fontFamily: "Roboto Thick, sans-serif", fontSize:"13px" ,
                     padding: "20px", boxShadow: "none", margin:"0.5em",
                    backgroundColor: "#2593FC", color: "#FFFFFF",borderColor: "#2593FC", boxShadow:"0", borderBlockColor:"#2593FC", border:"none",
                    fontWeight: "0px", width:"100px", marginTop:"1em"}}>submit</button>:null}
 
                </p>
        </div >
        <div style={{visibility: this.state.v}}>
        {this.state.inc>=this.state.questions.length && this.state.negativeCounter>=this.state.positiveCounter?
        <NegativeOutcome ans = {this.state.ansArray}/>:this.state.inc>=this.state.questions.length && this.state.negativeCounter<this.state.positiveCounter?
        <PositiveOutcome/>:null}
        </div>
        </Row>        

    )}};

export default Symptom;