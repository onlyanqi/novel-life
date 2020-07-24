import React, { Component } from "react";
import { Row} from "antd";
import { Form } from "react-bootstrap";
import Axios from "axios";

const validEmailRegex = RegExp(
    /^([a-z0-9_\-\.]+)@([a-z0-9_\-\.]+)\.([a-z]{2,5})$/i
  );
  const validateForm = (errors) => {
    let valid = true;
    Object.values(errors).forEach((val) => val.length > 0 && (valid = false));
    return valid;
  };

class ForgotPassword extends Component {
    constructor(props) {
        super(props);
        this.state ={
            open: false,
            formEmail: null,
            errors:{
                formEmail: ""
            },
        };
    }
  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;

    switch (name) {
      case "formEmail":
        errors.formEmail = validEmailRegex.test(value)
          ? ""
          : "Email is not valid!";
        break;
      default:
        break;
    }

    this.setState({ errors, [name]: value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    const { formEmail, formPassword, errors } = this.state;
    if (!formEmail) {
      errors.formEmail = "Please fill out Email!";
    }
    if (validateForm(errors)) {
      Axios.get("http://localhost:8000/user/forgotpassword/"+formEmail)
        .then((response) => {
          if (response.statusText === "OK") {
            
            this.props.history.push("/login");
            console.log(response);
          }
          // setUserSession(response.data.id, response.data.email)
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      alert("Invalid Email");
    }
    this.setState({ errors, errors });
  };
  render() {
    const { errors } = this.state;
    return <div>
        <Row style={{ justifyContent: "center" }}>
          <h1
            style={{
              color: "#FFFF",
              marginTop: "200px",
              fontFamily: "Roboto, sans-serif",
              align: "center",
              justifyContent: "center",
              fontSize: "80px",
            }}
          >
            Reset Password
          </h1>
        </Row>

        <div style={{ justifyContent: "center" }}>
          <Row style={{ justifyContent: "center" }}>
            <form
              onSubmit={this.handleSubmit}
              noValidate
              style={{ width: "300px" }}
            >
              <Form.Group controlId="validationFormik01">
                <input
                  type="email"
                  required
                  placeholder="Email"
                  name="formEmail"
                  onChange={this.handleChange}
                  noValidate
                  style={{
                    backgroundColor: "#011528",
                    color: "#2593FC",
                    fontFamily: "Roboto Thick, sans-serif",
                    fontWeight: "200",
                    padding: "10px",
                    boxShadow: "none",
                    marginBottom: "10px",
                    width: "100%",
                    borderColor: "#2593FC",
                  }}
                />
                {errors.formEmail.length > 0 && (
                  <span
                    style={{
                      fontFamily: "Roboto Thick, sans-serif",
                      fontWeight: "200",
                      color: "#2593FC",
                    }}
                  >
                    {errors.formEmail}
                  </span>
                )}
              </Form.Group>
              <Form.Group>
                <button
                  type="submit"
                  style={{
                    fontFamily: "Roboto Thick, sans-serif",
                    fontWeight: "500",
                    padding: "14px",
                    width: "300px",
                    marginTop: "10px",
                    boxShadow: "none",
                    backgroundColor: "#2593FC",
                    color: "#FFFF",
                    borderColor: "#2593FC",
                  }}
                >
                  Send Email
                </button>
              </Form.Group>
            </form>
          </Row>
        </div>
    </div>;
  }
}

export default ForgotPassword;
