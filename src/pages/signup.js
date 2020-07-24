import React from "react";
import "../style/signup.css";
import { Row } from "antd";
import Axios from "axios";
import { Form } from "react-bootstrap";

const emailIDRegex = RegExp(
  /^([a-z0-9_\-\.]+)@([a-z0-9_\-\.]+)\.([a-z]{2,5})$/i
);

class RegistrationPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      formName: "",
      emailID: "",
      formpassword: "",
      phoneNumber: "",
      confirmPassword: "",
      message: "",
      errors: {},
      open: false,
      formErrors: {
        formName: "",
        emailID: "",
        formpassword: "",
        phoneNumber: "",
        confirmPassword: "",
      },
    };
  }

  handleSuccessfulRegistration(data) {
    console.log(data);
    this.props.handleLogin(data);
    this.props.history.push("/profile");
  }

  setformName = (event) => {
    this.setState({
      formName: event.target.value,
    });
  };

  setphoneNumber = (event) => {
    this.setState({
      phoneNumber: event.target.value,
    });
  };

  setEmailId = (event) => {
    this.setState({
      emailID: event.target.value,
    });
  };

  setformPassword = (event) => {
    this.setState({
      formpassword: event.target.value,
    });
  };

  setconfirmPassword = (event) => {
    this.setState({
      confirmPassword: event.target.value,
    });
  };

  handleSubmit = (event) => {
      event.preventDefault();
    if (!this.state.formName) {
      this.setState({
        open: true,
        message: "Please enter your Name",
      });
    }
    if (typeof this.state.formName !== "undefined") {
      if (
        !this.state.formName.match(/^[a-zA-Z ]*$/) ||
        this.state.formName.length < 4
      ) {
        this.setState({
          open: true,
          message: "Please enter only alphabets in your Name",
        });
      }
    }

    if (!this.state.emailID) {
      this.setState({
        open: true,
        message: "Please enter Email ID",
      });
    } else if (this.state.emailID !== "undefined") {
      if (
        !this.state.emailID.match(
          /^([a-z0-9_\-\.]+)@([a-z0-9_\-\.]+)\.([a-z]{2,5})$/i
        )
      ) {
        this.setState({
          open: true,
          message: "Please enter Valid EmailID",
        });
      }
    }
    if (!this.state.phoneNumber) {
      this.setState({
        open: true,
        message: "Please enter your Phone Number",
      });
    } else if (this.state.phoneNumber !== "undefined") {
      if (!this.state.phoneNumber.match(/^[0-9]{10}$/)) {
        this.setState({
          open: true,
          message: "Please enter Valid Phone Number",
        });
      }
    }
    if (!this.state.formpassword) {
      this.setState({
        open: true,
        message: "Please enter the password",
      });
    } else if (this.state.formpassword.length < 6) {
      this.setState({
        open: true,
        message: "Password should be atleast 6 characters in length",
      });
    }
    if (!this.state.confirmPassword) {
      this.setState({
        open: true,
        message: "Confirm Pasword field is empty",
      });
    }

    if (this.state.confirmPassword !== "") {
      if (this.state.confirmPassword !== this.state.formpassword) {
        this.setState({
          open: true,
          message: "Passwords does not match",
        });
      }
      if (this.state.open === true) {
      }
    }

    if (
      !this.state.formName &&
      !this.state.emailID &&
      !this.state.formpassword &&
      !this.state.phoneNumber &&
      !this.state.confirmPassword
    ) {
      this.setState({
        open: true,
        message: "Please fill the details",
      });
    }

    if (
      this.state.formName.match(/^[a-zA-Z ]*$/) &&
      this.state.formName != "" &&
      this.state.formName.length >= 3
    ) {
      if (
        this.state.emailID.match(
          /^([a-z0-9_\-\.]+)@([a-z0-9_\-\.]+)\.([a-z]{2,5})$/i
        )
      ) {
        if (this.state.phoneNumber.match(/^[0-9]{10}$/)) {
          if (this.state.formpassword.length >= 6) {
            if (this.state.confirmPassword == this.state.formpassword) {
              Axios.post("http://localhost:8000/user/register", {
                name: this.state.formName,
                email: this.state.emailID,
                password: this.state.formpassword,
                contactNo: this.state.phoneNumber,
              })
                .then((response) => {
                  if (response.statusText === "OK") {
                    this.handleSuccessfulRegistration(response.data);
                    console.log(response.data);
                  }
                  // setUserSession(response.data.id, response.data.email)
                })
                .catch((error) => {
                  console.log(error);
                });
            }
          }
        }
      }
    }
    if (this.state.open === true) {
      alert(this.state.message);
    }
  };

  handleClose = () => {
    this.setState({
      open: false,
    });
  };

  handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case "formName":
        formErrors.formName =
          value.length < 3 ? "Minimum 3 characaters required in Name" : "";
        break;
      case "phoneNumber":
        formErrors.phoneNumber =
          value.length < 10 ? "Contact is not valid!" : "";
        break;

      case "emailID":
        formErrors.emailID = emailIDRegex.test(value)
          ? ""
          : "Email is not valid!";
        break;

      case "formpassword":
        formErrors.formpassword =
          value.length < 6 ? "Password must be 6 characters long!" : "";
        break;

      default:
        break;
    }

    this.setState({ formErrors, [name]: value }, () => console.log());
  };

  render() {
    const { formErrors } = this.state;

    return (
      <div style={{ justifyContent: "center" }}>
        <Row style={{ justifyContent: "center" }}>
          <h1
            style={{
              color: "#FFFF",
              fontFamily: "Roboto, sans-serif",
              align: "center",
              justifyContent: "center",
              fontSize: "80px",
              marginTop: "100px",
              marginBottom: "0px",
            }}
          >
            Sign Up
          </h1>
        </Row>

        <Row style={{ justifyContent: "center" }}>
          <form onSubmit={this.handleSubmit} style={{ width: "350px" }} noValidate>
            <Form.Group>
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
                name="formName"
                noValidate
                required
                onChange={this.handleChange}
                placeholder="Name"
              />
              {formErrors.formName.length > 0 && (
                <span
                  className="error"
                  style={{
                    fontFamily: "Roboto Thick, sans-serif",
                    fontWeight: "200",
                    color: "#2593FC",
                  }}
                >
                  {formErrors.formName}
                </span>
              )}
            </Form.Group>
            <Form.Group>
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
                name="emailID"
                noValidate
                onChange={this.handleChange}
                required
                placeholder="Email"
              />
              {formErrors.emailID.length > 0 && (
                <span
                  className="error"
                  style={{
                    fontFamily: "Roboto Thick, sans-serif",
                    fontWeight: "200",
                    color: "#2593FC",
                  }}
                >
                  {formErrors.emailID}
                </span>
              )}
            </Form.Group>

            <Form.Group>
              <input
                type="password"
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
                name="formpassword"
                onChange={this.handleChange}
                required
                placeholder="Password"
                noValidate
              />
              {formErrors.formpassword.length > 0 && (
                <span
                  className="error"
                  style={{
                    fontFamily: "Roboto Thick, sans-serif",
                    fontWeight: "200",
                    color: "#2593FC",
                  }}
                >
                  {formErrors.formpassword}
                </span>
              )}
            </Form.Group>

            <Form.Group>
              <input
                type="password"
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
                name="confirmPassword"
                onChange={this.handleChange}
                required
                placeholder="Confirm Password"
                noValidate
              />
              {formErrors.confirmPassword.length > 0 && (
                <span
                  className="error"
                  style={{
                    fontFamily: "Roboto Thick, sans-serif",
                    fontWeight: "200",
                    color: "#2593FC",
                  }}
                >
                  {formErrors.confirmPassword}
                </span>
              )}
            </Form.Group>
            <Form.Group>
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
                name="phoneNumber"
                noValidate
                onChange={this.handleChange}
                required
                placeholder="Contact No."
              />
              {formErrors.phoneNumber.length > 0 && (
                <span
                  className="error"
                  style={{
                    fontFamily: "Roboto Thick, sans-serif",
                    fontWeight: "200",
                    color: "#2593FC",
                  }}
                >
                  {formErrors.phoneNumber}
                </span>
              )}
            </Form.Group>
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
              }}
            >
              Sign Up
            </button>
          </form>
        </Row>
      </div>
    );
  }
}

export default RegistrationPage;
