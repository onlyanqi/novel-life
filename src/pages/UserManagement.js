import React, { Component } from "react";
import { Layout, Menu, Row, Col, List } from "antd";
import Axios from "axios";
import Cookies from "js-cookie";
import { Avatar } from "antd";
import {
  DisconnectOutlined,
  PieChartOutlined,
  UserOutlined,
  UserDeleteOutlined,
  FormOutlined,
} from "@ant-design/icons";
import { Tag } from "antd";
const { Sider } = Layout;
class Profile extends Component {
  state = {
    collapsed: false,
    name: "",
    email: "",
    contactNo: "",
    key:"",
  };

  onChange(e){
    const key = e.value;
    console.log(key);
  }
  getDetails() {
    Axios.post("http://localhost:8080/user/current", {
      email: Cookies.get("User"),
    })
      .then((response) => {
        console.log("In Profile" + response.data[0].email);
        if (response.statusText === "OK") {
          this.setState({
            name: response.data[0].name,
            email: response.data[0].email,
            contactNo: response.data[0].contactNo,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  componentDidMount() {
    this.getDetails();
  }

  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  };
  render() {
    return (
      <Row type="flex">
        <Col flex="150px">
          <Sider
            style={{ marginTop: "300px", minHeight: "350px" }}
            collapsible
            collapsed={this.state.collapsed}
            onCollapse={this.onCollapse}
          >
            <div className="logo" />
            <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline" onChange={this.onChange}>
              <Menu.Item key="1" value ="1" icon={<PieChartOutlined />}>
                Profile
              </Menu.Item>
              <Menu.Item key="2" value ="2" icon={<FormOutlined />}>
                Change Password
              </Menu.Item>
              <Menu.Item key="3" value ="3" icon={<DisconnectOutlined />}>
                Logout
              </Menu.Item>
              <Menu.Item key="4" value ="4" icon={<UserDeleteOutlined />}>
                Delete profile
              </Menu.Item>
            </Menu>
          </Sider>
        </Col>
        <Col
          style={{
            justifyContent: "center",
            marginTop: "100px",
            marginLeft: "100px",
          }}
          flex="auto"
        >
          <div style={{ textAlign: "center" }}>
            <Avatar
              size={140}
              style={{ backgroundColor: "#1890FF" }}
              icon={<UserOutlined />}
            />
          </div>
          <Row
            className="comm-main"
            type="flex"
            justify="center"
            style={{ backgroundColor: "#011528" }}
          >
            <Col
              className="comm-left"
              xs={24}
              sm={24}
              md={20}
              lg={18}
              xl={16}
              style={{ backgroundColor: "#011528" }}
            >
              <List
                header={
                  <div
                    style={{
                      color: "#FFFF",
                      textAlign: "center",
                      fontSize: "22px",
                    }}
                  >
                    My Profile
                  </div>
                }
                itemLayout="vertical"
              >
                <List.Item>
                  <Row>
                    <Col flex="130px" className="list-title">Name: </Col>
                    <Col flex="auto" textAlign="left" style={{alignItems:"left"}}>
                      <h4
                        style={{
                          opacity: "60%",
                          color: "#FFF",
                          backgroundColor: "#001529",
                          fontSize: "18px",
                          textAlign: "center",
                          fontWeight: "lighter"
                        }}
                      >
                        {this.state.name}
                      </h4>
                    </Col>
                  </Row>
                </List.Item>
                <List.Item>
                <Row>
                    <Col flex="130px" className="list-title">Email: </Col>
                    <Col flex="auto" >
                      <h4
                        style={{
                          opacity: "60%",
                          color: "#FFF",
                          backgroundColor: "#001529",
                          fontSize: "18px",
                          textAlign: "center",
                          fontWeight: "lighter"
                        }}
                      >
                        {this.state.email}
                      </h4>
                    </Col>
                  </Row>
                </List.Item>
                <List.Item>
                <Row>
                    <Col flex="130px" className="list-title">Contact No: </Col>
                    <Col flex="auto" >
                      <h4
                        style={{
                          opacity: "60%",
                          color: "#FFF",
                          backgroundColor: "#001529",
                          fontSize: "18px",
                          textAlign: "center",
                          fontWeight: "lighter"
                        }}
                      >
                        {this.state.contactNo}
                      </h4>
                    </Col>
                  </Row>
                </List.Item>
              </List>
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}

export default Profile;
