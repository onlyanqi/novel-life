import React, { Component } from "react";
import { BrowserRouter, Route, Link, Redirect } from "react-router-dom";
import Home from "./pages/home";
import News from "./pages/news";
import Help from "./pages/help";
import SymptomChecker from "./pages/SymptomChecker";
import Nextquestion from "./pages/SymptomChecker/Nextquestion";
import NegativeOutcome from "./pages/SymptomChecker/NegativeOutcome";
import PositiveOutcome from "./pages/SymptomChecker/CovidPositive";
import PositiveCheck from "./pages/Funds/positivecheck";
import NegativeCheck from "./pages/Funds/negativecheck";
import CheckFunds from "./pages/Funds/checkfund";
import Resource from "./pages/resources";
import Cookies from "js-cookie";
import LoginPage from "./pages/login";
import Axios from "axios";
import ProtectedRoute from "./pages/ProtectedRoute";
import Profile from "./pages/UserManagement";
import RegistrationPage from "./pages/signup";
import ForgotPassword from "./pages/forgotPassword";

import Map from "./pages/map";
import Data from "./pages/data";
import "./style/comm.css";
import { Layout, Button, Row, Col, Menu } from "antd";
import {
  HomeOutlined,
  ReadOutlined,
  UserOutlined,
  PieChartOutlined,
  EnvironmentOutlined,
  SmileOutlined,
  HeartOutlined,
  CloudOutlined,
  TeamOutlined,
  CoffeeOutlined,
  CheckCircleOutlined,
  MoneyCollectOutlined,
} from "@ant-design/icons";
const { Header, Content, Footer } = Layout;

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedInStatus: false,
      user: {},
    };

    this.handleLogin = this.handleLogin.bind(this);
  }

  checkLoginStatus() {
    console.log(Cookies.get("User"));
    if (Cookies.get("User")) {
      Axios.post("http://localhost:8080/user/current", {
        email: Cookies.get("User"),
      })
        .then((response) => {
          if (response.statusText !== "OK") {
            this.setState({
              loggedInStatus: false,
            });
            Cookies.remove();
          } else {
            this.setState({
              loggedInStatus: true,
            });
          }
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  componentDidMount() {
    this.checkLoginStatus();
  }

  handleLogin(data) {
    this.setState({
      loggedInStatus: true,
      user: data,
    });
    Cookies.set("logged_in", true);
    Cookies.set("User", data.email);
  }

  render() {
    const auth = Cookies.get("User");

    return (
      <BrowserRouter>
        <Layout style={{ width: "100%" }}>
          <Header
            style={{
              position: "fixed",
              zIndex: 1,
              width: "100vw",
              height: "140px",
            }}
          >
            <Row type="flex" justify="space-between">
              <Col xs={20} sm={20} md={18} lg={16} xl={14}>
                <span
                  className="header-logo"
                  style={{
                    color: "#FFFF",
                    fontVariant: "small-caps",
                    fontFamily: "Lato, sans-serif",
                    fontSize: "3em",
                  }}
                >
                  {" "}
                  NOVEL LIFE{" "}
                </span>
              </Col>
              <Col xs={4} sm={4} md={4} lg={4} xl={4}>
                <Button type="primary" shape="circle">
                  <a href="/login">
                    <UserOutlined />
                  </a>
                </Button>
              </Col>
            </Row>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
              <Menu.Item key="1">
                <HomeOutlined />
                <span>
                  <Link to="/">home</Link>
                </span>
              </Menu.Item>
              <Menu.Item key="2">
                <ReadOutlined />
                <span>
                  <Link to="/news">news</Link>
                </span>
              </Menu.Item>
              <Menu.Item key="3">
                <SmileOutlined />
                <span>
                  <Link to="/help">help</Link>
                </span>
              </Menu.Item>
              <Menu.Item key="4">
                <PieChartOutlined />
                <Link to="/data"> data</Link>
              </Menu.Item>
              <Menu.Item key="5">
                <EnvironmentOutlined />
                <span>
                  <Link to="/map">map</Link>
                </span>
              </Menu.Item>
              <Menu.Item key="6">
                <CloudOutlined />
                <Link to="/resource/">resources</Link>
              </Menu.Item>
              <Menu.Item key="10">
                <CheckCircleOutlined />
                <Link to="/SymptomChecker">symptom checker</Link>
              </Menu.Item>
              <Menu.Item key="11">
                <MoneyCollectOutlined />
                <Link to="/fundchecker">funding</Link>
              </Menu.Item>
            </Menu>
          </Header>
          <Content
            className="site-layout"
            style={{
              padding: "0 50px",
              marginTop: 64,
              backgroundColor: "#011528",
              align: "center",
              width: "100%",
            }}
          >
            <div
              className="site-layout-background"
              width="100%"
              style={{ padding: 24, minHeight: 380, width: "100%" }}
            >
              <Route path="/" exact component={Home} />
              <Route
                path="/login/"
                exact
                render={(props) =>
                  !this.state.loggedInStatus ? (
                    <LoginPage
                      {...props}
                      handleLogin={this.handleLogin}
                      loggedInStatus={this.state.loggedInStatus}
                    />
                  ) : (
                    <Redirect to="/profile" />
                  )
                }
              />
              <ProtectedRoute
                path="/profile/"
                loggedIn={this.state.loggedInStatus}
                component={Profile}
              />
              <Route
                path="/signup/"
                exact
                render={(props) => (
                  <RegistrationPage {...props} handleLogin={this.handleLogin} />
                )}
              />
              <Route path="/help/" exact component={Help} />
              <Route path="/news/" exact component={News} />
              <Route path="/SymptomChecker/" exact component={SymptomChecker} />
              <Route
                path="/nextquestion"
                exact
                component={Nextquestion}
              ></Route>
              <Route
                path="/negativeoutcome"
                exact
                component={NegativeOutcome}
              ></Route>
              <Route
                path="/positiveoutcome"
                exact
                component={PositiveOutcome}
              ></Route>
              <Route path="/fundchecker" exact component={CheckFunds}></Route>
              <Route
                path="/PositiveCheck"
                exact
                component={PositiveCheck}
              ></Route>
              <Route
                path="/NegativeCheck"
                exact
                component={NegativeCheck}
              ></Route>
              <Route path="/resource/" exact component={Resource} />

              <Route path="/map/" exact component={Map} />
              <Route path="/data/" exact component={Data} />
              <Route
                path="/forgotpassword"
                exact
                render={(props) => (
                  <ForgotPassword {...props} handleLogin={this.handleLogin} />
                )}
              />
            </div>
          </Content>
          <Footer
            style={{
              textAlign: "center",
              backgroundColor: "#011528",
              color: "#FFFF",
            }}
          >
            Novel Life ©2020 Created by Group 25
          </Footer>
        </Layout>
      </BrowserRouter>
    );
  }
}
