// @author : Nupur Bhatt

import React, { Component } from "react";
import {Row} from "antd";
import Axios from "axios";
import Swal from 'sweetalert2';

class Assistance extends Component {

    constructor(props) {
        super(props);
        this.state = {
          firstname: "",
          lastname: "",
          email: "",
          contactno: "",
          gender: "",
          age: 18,
          date: "",
          desc: "",
          }
      }

    setFirstName = (event) =>{
      const firstname = event.target.value
      this.setState({firstname: firstname})
    }

    setLastName = (event) =>{
      const lastname = event.target.value
      this.setState({lastname: lastname})
    }

    setEmail = (event) =>{
      const email = event.target.value
      this.setState({email: email})
    }

    setContact = (event) =>{
      const contactno = event.target.value
      this.setState({contactno: contactno})
    }

    setGender = (event) =>{
      const gender = event.target.value
      this.setState({gender: gender})
    }

    setAge = (event) =>{
      const age = event.target.value
      this.setState({age: age})
    }

    setDate = (event) =>{
      const date = event.target.value
      this.setState({date: date})
    }

    setDesc = (event) =>{
      const desc = event.target.value
      this.setState({desc: desc})
    }

    createTask = (event) =>{
      event.preventDefault();

      if(this.state.firstname == null || this.state.lastname == null || this.state.email == null || 
        this.state.contactno == null || this.state.gender == null || this.state.age == null || this.state.date == null ||
        this.state.desc == null || this.state.firstname == "" || this.state.lastname == "" || this.state.email == "" || 
        this.state.contactno == "" || this.state.gender == "" || this.state.age == "" || this.state.date == "" ||
        this.state.desc == ""){
          Swal.fire({
            icon: 'error',
            title: 'Error Placing Request',
            text: 'Please make sure you have filled out everything!'
          })
        }
        else{

          Axios.post("https://group25novellife.herokuapp.com/api/seekassist/requestAssistance", {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            email: this.state.email,
            contactno: this.state.contactno,
            gender: this.state.gender,
            age: this.state.age,
            date: this.state.date,
            desc: this.state.desc,
          })
            .then((response) => {
              
                if (response.status == 201) {
                  
                    Swal.fire({
                      icon:'success',
                      title:'Request Placed Successfully!',
                      confirmButtonText: '<a href="https://group25novellife.herokuapp.com/api/seekassist/success/" style={{color:"#FFFFFF"}}>Click here for instructions</a>',
                    })
                } 
                else {
                  console.log(response.status);
                  Swal.fire({
                    icon: 'error',
                    title: 'Error Placing Request',
                    text: 'You can request assistance only once for a particular date. Try another date!'
                  })
                }
              }).catch((error) => {
                
                    throw error;
              });
        }
      } 

    render() { 
        return ( 
            <div style={{ justifyContent: "center", marginTop: "80px"}}>
        <Row style={{ justifyContent: "center" }}>
          <h1
            style={{
              color: "#FFFF",
              fontFamily: "Roboto, sans-serif",
              align: "center",
              justifyContent: "center",
              fontSize: "3em",
              padding:"1em",
            }}>
            Seek Assistance
          </h1>
        </Row>

        <Row style={{ justifyContent: "center" }}>
            
            {/* <Col style={{ justifyContent: "center" }}>

            </Col> */}
 
          <form
            onSubmitCapture={this.createTask}
            style={{ width: "350px", justifyContent:"center"  }}
            noValidate>

              <input
                type="text"
                style={{
                  backgroundColor: "#011528",
                  color: "#2593FC",
                  fontFamily: "Roboto Thick, sans-serif",
                  fontWeight: "200",
                  padding: "10px",
                  boxShadow: "none",
                  width: "100%",
                  marginBottom: "10px",
                  borderColor: "#2593FC",
                }}
                name="firstname"
                required
                placeholder="First Name"
                onChange={this.setFirstName}
              />
          
              <input
                type="text"
                style={{
                  backgroundColor: "#011528",
                  color: "#2593FC",
                  fontFamily: "Roboto Thick, sans-serif",
                  fontWeight: "200",
                  padding: "10px",
                  boxShadow: "none",
                  width: "100%",
                  marginBottom: "10px",
                  borderColor: "#2593FC",
                }}
                name="lastname"
                required
                placeholder="Last Name"
                onChange={this.setLastName}
              />
                
              <input
                type="email"
                style={{
                  backgroundColor: "#011528",
                  color: "#2593FC",
                  fontFamily: "Roboto Thick, sans-serif",
                  fontWeight: "200",
                  padding: "10px",
                  boxShadow: "none",
                  width: "100%",
                  marginBottom: "10px",
                  borderColor: "#2593FC",
                }}
                name="email"
                required
                placeholder="Email"
                onChange={this.setEmail}
              />
              
            <input
                style={{
                  backgroundColor: "#011528",
                  color: "#2593FC",
                  fontFamily: "Roboto Thick, sans-serif",
                  fontWeight: "200",
                  padding: "10px",
                  boxShadow: "none",
                  width: "100%",
                  marginBottom: "10px",
                  borderColor: "#2593FC",
                }}
                name="contactno"
                required
                placeholder="Enter Contact (XXX-XXX-XXXX)"
                onChange={this.setContact}
              />
            
              <input
                type="text"
                style={{
                  backgroundColor: "#011528",
                  color: "#2593FC",
                  fontFamily: "Roboto Thick, sans-serif",
                  fontWeight: "200",
                  padding: "10px",
                  boxShadow: "none",
                  width: "100%",
                  marginBottom: "10px",
                  borderColor: "#2593FC",
                }}
                name="gender"
                required
                placeholder="Gender"
                onChange={this.setGender}
              />

              <input 
              type="number"
              style={{
                backgroundColor: "#011528",
                color: "#2593FC",
                fontFamily: "Roboto Thick, sans-serif",
                fontWeight: "200",
                padding: "10px",
                boxShadow: "none",
                width: "100%",
                marginBottom: "10px",
                borderColor: "#2593FC",
                textColor: "white",
              }}
              name="age"
              required
              placeholder="Age"
              min="18"
              max="90"
              onChange={this.setAge}
              />      

            <input
                type="text"
                style={{
                  backgroundColor: "#011528",
                  color: "#2593FC",
                  fontFamily: "Roboto Thick, sans-serif",
                  fontWeight: "200",
                  padding: "10px",
                  boxShadow: "none",
                  width: "100%",
                  marginBottom: "10px",
                  borderColor: "#2593FC",
                }}
                name="date"
                required
                placeholder="Date of Assistance: dd/mm/yyyy"
                onChange={this.setDate}
              />
          
            <textarea
                rows="5"
                style={{
                  backgroundColor: "#011528",
                  color: "#2593FC",
                  fontFamily: "Roboto Thick, sans-serif",
                  fontWeight: "200",
                  padding: "10px",
                  boxShadow: "none",
                  width: "100%",
                  marginBottom: "10px",
                  borderColor: "#2593FC",
                }}
                name="desc"
                required
                placeholder="Describe assistance or task in detail"
                onChange={this.setDesc}
              />

            <button
              type="submit"
              style={{
                fontFamily: "Roboto Thick, sans-serif",
                fontWeight: "500",
                padding: "14px",
                width: "100%",
                height: "50px",
                marginTop: "10px",
                boxShadow: "none",
                backgroundColor: "#2593FC",
                color: "#FFFF",
                borderColor: "#2593FC",
              }}>
              Request Assistance
            </button>
          </form>

        </Row>
      </div>
         );
    }
}

export default Assistance;
