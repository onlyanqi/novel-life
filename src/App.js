import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Home from "./pages/home";
import News from "./pages/news";
import Help from "./pages/help";
import "./style/header.css";
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
} from "@ant-design/icons";
const { Header, Content, Footer } = Layout;

function App() {
  return (
    <BrowserRouter>
      <Layout>
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
              <span className="header-logo"> NOVAL LIFE </span>
              <span className="header-txt"> We All Together. </span>
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
              data
            </Menu.Item>
            <Menu.Item key="5">
              <EnvironmentOutlined />
              map
            </Menu.Item>
            <Menu.Item key="6">
              <CloudOutlined />
              resources
            </Menu.Item>
            <Menu.Item key="7">
              <TeamOutlined />
              job market
            </Menu.Item>
            <Menu.Item key="8">
              <HeartOutlined />
              virtual care
            </Menu.Item>
            <Menu.Item key="9">
              <CoffeeOutlined />
              fun center
            </Menu.Item>
          </Menu>
        </Header>
        <Content
          className="site-layout"
          style={{ padding: "0 50px", marginTop: 64 }}
        >
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 380 }}
          >
            <Route path="/" exact component={Home} />
            <Route path="/login/" exact component={Login} />
            <Route path="/signup/" exact component={Signup} />
            <Route path="/help/" exact component={Help} />
            <Route path="/news/" exact component={News} />
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Noval Life ©2020 Created by Anqi Chen
        </Footer>
      </Layout>
    </BrowserRouter>
  );
}
export default App;
