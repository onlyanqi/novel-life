import React, { Component } from "react";
import { Layout, Menu, Row, Col, Modal, message } from "antd";

import Axios from "axios";
import Cookies from "js-cookie";
import {
  DisconnectOutlined,
  PieChartOutlined,
  UserDeleteOutlined,
  FormOutlined,
} from "@ant-design/icons";
import ProfilePage from "./ProfilePage";
import ChangePassword from "./changePassword";
const { Sider } = Layout;
class Profile extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    visible: false,
    collapsed: false,
    profile: true,
    password: false,
  };

  onChange(e, index) {
    if (index === 1) {
      this.setState({
        profile: true,
        password: false,
      });
    } else if (index === 2) {
      this.setState({
        profile: false,
        password: true,
      });
    } else {
      this.logout();
    } 
  }
  showModal = () => {
    this.setState({
      visible: true,
    });
  };
   logout(){
    this.setState({
      visible: false,
    });
    Axios.post("https://group25novellife.herokuapp.com/api/user/logout", {
      email: Cookies.get("User"),
    })
      .then((response) => {
        if (response.statusText === "OK") {
          Cookies.set("User", "");
          this.props.history.push("/");
          setTimeout(() => {
            message.success(
              { content: "Logged out Successfully", duration: 2 },
              1000
            );
          });
        }
      })
      .catch((error) => {
      });
  }
  handleOk=(e)=> {
    Axios.delete("https://group25novellife.herokuapp.com/api/user/" + Cookies.get("User"))
      .then((response) => {
        if (response.statusText === "OK") {
          Cookies.set("User", "");
          this.props.history.push("/");
          setTimeout(() => {
            message.success(
              { content: "Account Deleted Successfully", duration: 2 },
              1000
            );
          });
        }
      })
      .catch((error) => {
      });
  }
  handleCancel = (e) => {
    this.setState({
      visible: false,
    });
  };

  onCollapse = (collapsed) => {
    this.setState({ collapsed });
  };
  render() {
    let selectedComponent = <ProfilePage />;
    if (this.state.profile) {
      selectedComponent = <ProfilePage />;
    } else if (this.state.password) {
      selectedComponent = <ChangePassword />;
    }
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
            <Menu
              theme="dark"
              defaultSelectedKeys={["1"]}
              mode="inline"
              onChange={this.onChange}
            >
              <Menu.Item
                key="1"
                value="1"
                onClick={(event) => this.onChange(event, 1)}
                icon={<PieChartOutlined />}
              >
                Profile
              </Menu.Item>
              <Menu.Item
                key="2"
                value="2"
                onClick={(event) => this.onChange(event, 2)}
                icon={<FormOutlined />}
              >
                Change Password
              </Menu.Item>
              <Menu.Item
                key="3"
                value="3"
                onClick={(event) => this.onChange(event, 3)}
                icon={<DisconnectOutlined />}
              >
                Logout
              </Menu.Item>
              <Menu.Item
                key="4"
                value="4"
                onClick={this.showModal}
                icon={<UserDeleteOutlined />}
              >
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
          {selectedComponent}
        </Col>
        <Modal
          title="Delete Account"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <p>Are you sure you want to delete your account</p>
        </Modal>
      </Row>
    );
  }
}

export default Profile;
