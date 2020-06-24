
import "antd/dist/antd.css";
import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';
import { Form, Button, Col, InputGroup } from 'react-bootstrap';
import { Formik } from 'formik';
import {Row} from 'antd';
import * as yup from 'yup';




const schema = yup.object({
    email: yup.string().email('Enter a valid Email Id!').required('Please enter your email!'),
    password: yup.string().required('Please enter your password!').min(8,'Password should be atleast 8 characters!')
  });
  
  function FormExample() {
    return (
      <Row style={{justifyContent:"center", marginTop:"200px"}}>
  
      <Formik
        validationSchema={schema}
        onSubmit={console.log}
        initialValues={{
          lastName: 'Otto',
        }}
      >
        {({
          handleSubmit,
          handleChange,
          handleBlur,
          values,
          touched,
          isValid,
          errors,
        }) => (
          <Form noValidate onSubmit={handleSubmit} 
          style={{height:"100%px", width:"300px"}}>
             
              <Form.Group  controlId="validationFormik01">
                            
                            <Form.Control
                              type="email"
                              name="email"
                              placeholder="Email"
                              value={values.email}
                              onChange={handleChange}
                              isInvalid={!!errors.email}
                              style={{backgroundColor:"#011528", 
                                             color:"#2593FC", 
                                            fontFamily:"Roboto Thick, sans-serif", 
                                            fontWeight:"200", padding:"10px", boxShadow:"none",
                                             width:"100%", marginBottom:"10px", borderColor:"#2593FC"}}
                            />
                            <Form.Control.Feedback type="invalid" 
                                          style={{fontFamily:"Roboto Thick, sans-serif", 
                                            fontWeight:"200", color:"#2593FC"}}>
                                                {errors.email}</Form.Control.Feedback>
                          </Form.Group>

            
              <Form.Group  controlId="validationFormik03">
                
                <Form.Control
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  isInvalid={!!errors.password}
                  style={{backgroundColor:"#011528", 
                                 color:"#2593FC", boxShadow:"none",
                                fontFamily:"Roboto Thick, sans-serif", 
                                fontWeight:"200", padding:"10px",borderColor:"#2593FC", 
                                boxShadow:"none",
                                width:"100%"}}
                />
                
  
                <Form.Control.Feedback type="invalid" style={{fontFamily:"Roboto Thick, sans-serif", 
                                fontWeight:"200", color:"#2593FC"}}>
                  {errors.password}
                </Form.Control.Feedback>
              </Form.Group>
              
  

            <Form.Group>
            <Button type="submit" position="center"
                                style={{fontFamily:"Roboto Thick, sans-serif", 
                                fontWeight:"500", padding:"14px", width:"300px",
                                marginTop:"10px", boxShadow:"none",
                                 backgroundColor:"#2593FC", color:"#FFFF", borderColor:"#2593FC"}}>
                            Sign In
                        </Button>
                        <div style={{marginTop:"10px"}}>
                        <a href="/signup" style={{color:"#FFFF"}}>Register now!</a>
                          </div>
            </Form.Group>
          </Form>
        )}
      </Formik>
      </Row>
    );
  }

class Login extends Component {
    
    state = {  }
    render() { 
        return ( 
           
                <div style={{ height:"100%", width:"100%", margin:"0 auto"}}>
                
                <div style={{height:"100%", width:"100%", margin:"0 auto"}}>
                    <FormExample/>
                </div>
            </div>
         );
    }
}
 


export default Login;
