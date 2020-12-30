import React from "react";
import { List, Row } from "antd";
import "../style/help.css";
import { Form, Button} from 'react-bootstrap';
import { Formik } from 'formik';
import Axios from "axios";
import { withRouter } from "react-router";


class Help extends React.Component {

  // const [viewport, setViewport] = useState({
  //   width: "100%",
  //   height: 600,
  //   latitude: 45.216,
  //   longitude: -63.1978,
  //   zoom: 7.57,
  // });
  constructor(props) {
    super();
    this.state = {
      data : [ ],
      emailValue : "",
      complaintvalue : ""
    };
  }

  componentDidMount(){
      Axios.get('https://group25novellife.herokuapp.com/api/assist/')
      .then(res=>{
          this.setState({
            data: res.data
          })
          // console.log(fetchedComments[0]);
      })
      .catch((err) => {
          console.log(err);
        });
  }

  onEmailChange = (e) =>{
      this.setState({emailValue: e.target.value})
  }

// To capture users complaint
  onComplaintChange = (e) =>{
    this.setState({complaintvalue: e.target.value})
}

// To send users complaints
onSubmitform = (e) => {
  e.preventDefault();
  Axios.post('https://group25novellife.herokuapp.com/api/assist/complaint', {
    email: this.state.emailValue,
    complaint: this.state.complaintvalue
  })
  .then((response) => {
    this.props.history.push('/');
    //console.log(response);
  }, (error) => {
    console.log(error);
  });

}
  
  render()
  {
  return (
    <div className="container" style={{width:"100%"}}>
      <Row className="comm-main" type="flex" justify="center" style={{width:"100%"}}>
        {/* <Col className="comm-left" xs={24} sm={24} md={20} lg={18} xl={16}> */}
          <div className="map-box" style={{width:"100%"}}>
            <h1 style={{color:"#FFFF"}}>COVID-19 Help</h1>
            {/* <p style={{color:"#FFFF"}}>
              This map shows some verified places and organisations where you
              can reach out for help, including financial, food and shelters,
              mental health and surports for children, seniors and people with
              disabilities.
            </p> */}
            </div>
            </Row>
            
            <Row>

           
            <List
              header={
                <div>
                  
                </div>
              }
              itemLayout="vertical"
              dataSource={this.state.data}
              renderItem={(item) => (
                <List.Item>
                  <div className="list-title">{item.title}</div>
                  <div className="list-context">{item.context}</div>
                </List.Item>
              )}
            />

        </Row>
       
        {/* </Col> */}
        {/* <Col className="comm-right" xs={0} sm={0} md={4} lg={6} xl={7}>
          <User />
        </Col> */}
         <p style = {{color:"#2593FC", 
                    fontFamily:"Roboto Thick, sans-serif", 
                    fontWeight:"200", fontSize:"25px"}}><center>Provide us your feedback</center></p>
      <Row style={{justifyContent:"center"}}>
  
  <Formik

    //onSubmit={console.log}
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
      <Form noValidate onSubmit={this.onSubmitform} 
      style={{height:"100%px", width:"300px"}}>         
          <Form.Group  controlId="validationFormik01">
                        
                        <Form.Control
                          type="email"
                          name="email"
                          placeholder="Email"
                          value={values.email}
                          onChange={this.onEmailChange}
                          isInvalid={!!errors.email}
                          style={{backgroundColor:"#011528", 
                                         color:"#2593FC", 
                                        fontFamily:"Roboto Thick, sans-serif", 
                                        fontWeight:"200", padding:"10px",marginTop:"8px", boxShadow:"none",
                                         width:"130%",height:"50px", marginBottom:"10px", borderColor:"#2593FC"}}
                        />
                        <Form.Control.Feedback type="invalid" 
                                      style={{fontFamily:"Roboto Thick, sans-serif", 
                                        fontWeight:"200", color:"#2593FC"}}>
                                            {errors.email}</Form.Control.Feedback>
                      </Form.Group>

        
          <Form.Group  controlId="validationFormik03">
            
            <Form.Control
              type="Complaint"
              placeholder="Complaint"
              name="Complaint"
              value={values.password}
              onChange={this.onComplaintChange}
              style={{backgroundColor:"#011528", 
                             color:"#2593FC", boxShadow:"none",
                            fontFamily:"Roboto Thick, sans-serif", 
                            fontWeight:"200", padding:"10px",borderColor:"#2593FC", 
                            boxShadow:"none",
                            width:"130%", height: "100px"}}
            />

          </Form.Group>
          
        <Form.Group>
        <Button type="submit" position="center"
                            style={{fontFamily:"Roboto Thick, sans-serif", 
                            fontWeight:"500", padding:"14px", width:"130%",
                            marginTop:"10px", boxShadow:"none",
                             backgroundColor:"#2593FC", color:"#FFFF", borderColor:"#2593FC"}}>
                        Register Complaint
                    </Button>
        </Form.Group>
      </Form>
    )}
  </Formik>
  </Row>

    </div>        

  );
}}

export default withRouter(Help)
