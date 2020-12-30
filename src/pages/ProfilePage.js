import React, { Component } from "react";
import {Row, Col, List } from "antd";
import Axios from "axios";
import Cookies from "js-cookie";
import { Avatar } from "antd";
import {
  UserOutlined
} from "@ant-design/icons";
class ProfilePage extends Component {
  state = { name: "", email: "", contactNo: "" };
  getDetails() {
    Axios.post("https://group25novellife.herokuapp.com/api/user/current", {
      email: Cookies.get("User"),
    })
      .then((response) => {
        if (response.statusText === "OK") {
          this.setState({
            name: response.data[0].name,
            email: response.data[0].email,
            contactNo: response.data[0].contactNo,
          });
        }
      })
      .catch((error) => {
      });
  }

  componentDidMount() {
    this.getDetails();
  }
  render() {
    return (
      <div>
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
                  <Col flex="130px" className="list-title">
                    Name:{" "}
                  </Col>
                  <Col
                    flex="auto"
                    textAlign="left"
                    style={{ alignItems: "left" }}
                  >
                    <h4
                      style={{
                        opacity: "60%",
                        color: "#FFF",
                        backgroundColor: "#001529",
                        fontSize: "18px",
                        textAlign: "center",
                        fontWeight: "lighter",
                      }}
                    >
                      {this.state.name}
                    </h4>
                  </Col>
                </Row>
              </List.Item>
              <List.Item>
                <Row>
                  <Col flex="130px" className="list-title">
                    Email:{" "}
                  </Col>
                  <Col flex="auto">
                    <h4
                      style={{
                        opacity: "60%",
                        color: "#FFF",
                        backgroundColor: "#001529",
                        fontSize: "18px",
                        textAlign: "center",
                        fontWeight: "lighter",
                      }}
                    >
                      {this.state.email}
                    </h4>
                  </Col>
                </Row>
              </List.Item>
              <List.Item>
                <Row>
                  <Col flex="130px" className="list-title">
                    Contact No:{" "}
                  </Col>
                  <Col flex="auto">
                    <h4
                      style={{
                        opacity: "60%",
                        color: "#FFF",
                        backgroundColor: "#001529",
                        fontSize: "18px",
                        textAlign: "center",
                        fontWeight: "lighter",
                      }}
                    >
                      {this.state.contactNo}
                    </h4>
                  </Col>
                </Row>
              </List.Item>
            </List>
          </Col>
        </Row>{" "}
      </div>
    );
  }
}

export default ProfilePage;
