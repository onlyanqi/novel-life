import React, { Component } from "react";
import { BrowserRouter, Route, Link, Redirect } from "react-router-dom";
import Home from "./pages/home";
import News from "./pages/news";
import Help from "./pages/help";
import Donation from "./pages/donation";
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
import Travel from "./pages/travel";
import Map from "./pages/map";
import Data from "./pages/data";
import Assistance from "./pages/Assistance";
import Instruction from "./pages/instruction";
import "./style/comm.css";
import Tasks from "./pages/Tasks";
import { Tooltip } from 'antd';
import ShowLogin from './pages/showlogin';

import { Layout, Button, Row, Col, Menu } from "antd";
import {
  HomeOutlined,
  ReadOutlined,
  UserOutlined,
  PieChartOutlined,
  EnvironmentOutlined,
  SmileOutlined,
  CarOutlined,
  CloudOutlined,
  CheckCircleOutlined,
  HeartOutlined,
  TeamOutlined,
  DollarOutlined,
  WalletOutlined,
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
    if (Cookies.get("User")) {
      Axios.post("https://group25novellife.herokuapp.com/api/user/current", {
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
        })
        .catch((error) => {
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
              <Col>
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

              <Col>

              <Tooltip title="Login">
                  <span>

                  <Button type="primary" shape="circle" style={{marginRight:"10px"}} >
                  <a href="/login">
                    <UserOutlined />
                  </a>
                </Button>

                  </span>
              </Tooltip>

               
              <Tooltip title="Volunteer">
                  <span>
                <Button type="primary" shape="circle" style={{marginRight:"10px"}} >
                  <a href="/volunteer">
                  <HeartOutlined />
                  </a>
                </Button>
                </span>
               </Tooltip>
              </Col>

            </Row>

            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]} 
            style={{color:"#faa2a4", 
            outlineColor:"#82c1ff", 
            width:"100%",
            overflow:"auto"}} >

              <Menu.Item key="1" style={{color:"#b4daff"}}>
                <HomeOutlined style={{color:"#b4daff"}}/>
                <span style={{color:"#b4daff"}}>
                  <Link to="/" style={{color:"#b4daff"}}>home</Link>
                </span>
              </Menu.Item>
              <Menu.Item key="2" style={{color:"#b4daff"}}>
                <ReadOutlined style={{color:"#b4daff"}}/>
                <span style={{color:"#b4daff"}} >
                  <Link to="/news" style={{color:"#b4daff"}}>news</Link>
                </span>
              </Menu.Item>
              <Menu.Item key="3" style={{color:"#b4daff"}}>
                <SmileOutlined style={{color:"#b4daff"}}/>
                <span style={{color:"#b4daff"}}>
                  <Link to="/help" style={{color:"#b4daff"}}>help</Link>
                </span>
              </Menu.Item>
              <Menu.Item key="4" style={{color:"#b4daff"}}>
                <PieChartOutlined style={{color:"#b4daff"}}/>
                <span style={{color:"#b4daff"}} >
                <Link to="/data" style={{color:"#b4daff"}}> data</Link>
                </span>
                
              </Menu.Item>
              <Menu.Item key="5" style={{color:"#b4daff"}}>
                <EnvironmentOutlined style={{color:"#b4daff"}}/>
                <span>
                  <Link to="/map" style={{color:"#b4daff"}}>map</Link>
                </span>
              </Menu.Item>

              <Menu.Item key="6" >
                <CloudOutlined style={{color:"#b4daff"}}/>
                <span>
                <Link to="/resource/" style={{color:"#b4daff"}}>resources</Link>
                </span>
                
              </Menu.Item>

              <Menu.Item key="10" style={{color:"#b4daff"}}>
                <CheckCircleOutlined style={{color:"#b4daff"}}/>
                <span>
                <Link to="/SymptomChecker" style={{color:"#b4daff"}}>symptom checker</Link>
                </span>
              </Menu.Item>

              <Menu.Item key="11" style={{color:"#b4daff"}}>
                <DollarOutlined style={{color:"#b4daff"}}/>
                <span>
                <Link to="/fundchecker" style={{color:"#b4daff"}}>funding</Link>
                </span>
              </Menu.Item>

              <Menu.Item key="12" style={{color:"#b4daff"}}>
                <CarOutlined style={{color:"#b4daff"}}/>
                <span>
                <Link to="/travel"style={{color:"#b4daff"}} >travel</Link>
                </span>
              </Menu.Item>

              <Menu.Item key="13" style={{color:"#b4daff"}}>
        <WalletOutlined style={{color:"#b4daff"}}/>
                <span>
                <Link to="/donate" style={{color:"#b4daff"}}>donate</Link>
                </span>
              </Menu.Item>

              <Menu.Item key="14" style={{color:"#b4daff"}}>
                <TeamOutlined style={{color:"#b4daff"}}/>
                <span>
                <Link to="/assistance" style={{color:"#b4daff"}}>assistance</Link>
                </span>
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
              style={{ padding: 24, minHeight: 380, width: "100%" }}>
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
              path="/volunteer/"
              exact
              render={(props) =>
                
                !this.state.loggedInStatus ? (
                  <ShowLogin 
                  />
                ) : (    
                  <Tasks 
                    {...props}
                    handleLogin={this.handleLogin}
                    loggedInStatus={this.state.loggedInStatus} 
                  />
                )
                }
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
                component={Nextquestion}> 
              </Route>
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
              <Route path="/travel/" exact component={Travel} />
              <Route path="/map/" exact component={Map} />
              <Route path="/data/" exact component={Data} />
              <Route path="/donate/" exact component={Donation} />
              <Route path="/assistance/" exact component={Assistance} />
              <Route path="/api/seekassist/success/" exact component={Instruction} />
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
            }}>
            Novel Life ©2020 Created by Group 25
          </Footer>
        </Layout>
      </BrowserRouter>
    );
  }
}


