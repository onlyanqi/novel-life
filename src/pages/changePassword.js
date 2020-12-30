import React, { Component } from "react";
import { Row, Col, message } from "antd";
import Axios from "axios";
import { Form } from "react-bootstrap";
import Cookies from "js-cookie";
const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach((val) => val.length > 0 && (valid = false));
  return valid;
};
class changePassword extends Component {
  state = {
    open: false,
    formOldPassword: null,
    formNewPassword: null,
    errors: {
      formOldPassword: "",
      formNewPassword: "",
    },
  };
  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;

    switch (name) {
      case "formOldPassword":
        errors.formOldPassword =
          value.length < 6 ? "Password must be 6 characters long!" : "";
        break;
      case "formNewPassword":
        errors.formNewPassword =
          value.length < 6 ? "Password must be 6 characters long!" : "";
        break;
      default:
        break;
    }

    this.setState({ errors, [name]: value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    const { formOldPassword, formNewPassword, errors } = this.state;
    if (!formOldPassword) {
      errors.formOldPassword = "Please fill out Email!";
    }
    if (!formNewPassword) {
      errors.formNewPassword = "Please fill out Password!";
    }
    if (validateForm(errors)) {
      Axios.put("https://group25novellife.herokuapp.com/api/user/" + Cookies.get("User"), {
        password: formNewPassword,
      })
        .then((response) => {
          if (response.statusText === "OK") {
            setTimeout(() => {
              message.success(
                { content: "Password Changed successfully", duration: 2 },
                1000
              );
            });
          } else {
            setTimeout(() => {
              message.error(
                { content: response.data.message, duration: 2 },
                1000
              );
            });
          }
          // setUserSession(response.data.id, response.data.email)
        })
        .catch((error) => {
          setTimeout(() => {
            message.error(
              { content: "Invalid Email or Password!!", duration: 2 },
              1000
            );
          });
        });
    } else {
      setTimeout(() => {
        message.error(
          { content: "Invalid Email or Password!!", duration: 2 },
          1000
        );
      });
    }
    this.setState({ errors, errors });
  };
  render() {
    const { errors } = this.state;
    return (
      <div>
        <Row>
          <h1
            style={{
              color: "#FFFF",
              fontFamily: "Roboto, sans-serif",
              align: "center",
              justifyContent: "center",
              fontSize: "80px",
            }}
          >
            Change Password
          </h1>
        </Row>
        <Row style={{ justifyContent: "center" }}>
          <form
            onSubmit={this.handleSubmit}
            noValidate
            style={{ width: "300px" }}
          >
            <Form.Group>
              <input
                type="password"
                required
                placeholder="Old Password"
                name="formOldPassword"
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
              ></input>
              {errors.formOldPassword.length > 0 && (
                <span
                  style={{
                    fontFamily: "Roboto Thick, sans-serif",
                    fontWeight: "200",
                    color: "#2593FC",
                  }}
                >
                  {errors.formOldPassword}
                </span>
              )}
            </Form.Group>
            <Form.Group>
              <input
                type="password"
                required
                placeholder="New Password"
                name="formNewPassword"
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
              ></input>
              {errors.formNewPassword.length > 0 && (
                <span
                  style={{
                    fontFamily: "Roboto Thick, sans-serif",
                    fontWeight: "200",
                    color: "#2593FC",
                  }}
                >
                  {errors.formNewPassword}
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
                Submit
              </button>
            </Form.Group>
          </form>
        </Row>
      </div>
    );
  }
}

export default changePassword;
