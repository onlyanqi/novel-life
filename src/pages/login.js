import React from "react";
import Axios from "axios";
import { Row , Col} from "antd";
import { Form } from "react-bootstrap";
import "antd/dist/antd.css";

const validEmailRegex = RegExp(
  /^([a-z0-9_\-\.]+)@([a-z0-9_\-\.]+)\.([a-z]{2,5})$/i
);
const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach((val) => val.length > 0 && (valid = false));
  return valid;
};

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      formEmail: null,
      formPassword: null,
      errors: {
        formEmail: "",
        formPassword: "",
      },
    };
    this.handleSuccessfulLogin = this.handleSuccessfulLogin.bind(this);
  }

  handleSuccessfulLogin(data){
    console.log(data)
    this.props.handleLogin(data);
    this.props.history.push("/");
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
      case "formPassword":
        errors.formPassword =
          value.length < 6 ? "Password must be 6 characters long!" : "";
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
    if (!formPassword) {
      errors.formPassword = "Please fill out Password!";
    }
    if (validateForm(errors)) {
      Axios.post("https://novallife.herokuapp.com//user/authenticate", {
        email: formEmail,
        password: formPassword,
      })
        .then((response) => {
          if (response.statusText === "OK") {
            this.handleSuccessfulLogin(response.data);
            console.log(response);
          }
          // setUserSession(response.data.id, response.data.email)
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      alert("Invalid Email or Password");
    }
    this.setState({ errors, errors });
  };

  render() {
    const { errors } = this.state;

    return (
      <div style={{ justifyContent: "center" }}>
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
            Log In
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

              <Form.Group controlId="validationFormik02">
                <input
                  type="password"
                  name="formPassword"
                  required
                  placeholder="Password"
                  onChange={this.handleChange}
                  noValidate
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
                />
                {errors.formPassword.length > 0 && (
                  <span
                    style={{
                      fontFamily: "Roboto Thick, sans-serif",
                      fontWeight: "200",
                      color: "#2593FC",
                    }}
                  >
                    {errors.formPassword}
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
                  Sign In
                </button>
              </Form.Group>
              <Row>
              <Col span={12}>
              <div style={{ marginTop: "10px" }}>
                <a href="/signup" style={{ color: "#FFFF" }}>
                  Register now!
                </a>
              </div>
              </Col>
              <Col span={12} style ={{paddingLeft:"40px"}}>
              <div style={{ marginTop: "10px", alignContent: "right"}}>
                <a href="/forgotPassword" style={{ textAlign: "right", color: "#FFFF" }}>
                  Forgot Password?
                </a>
              </div>
              </Col>
              </Row>
            </form>
          </Row>
        </div>
      </div>
    );
  }
}

export default LoginPage;
