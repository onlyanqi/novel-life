import React, { useState } from "react";
import "antd/dist/antd.css";
import { Card, Input, Button, Spin, Col, Row } from "antd";
import { UserOutlined, KeyOutlined } from "@ant-design/icons";
import "../style/login.css";

function Login() {
  const [setUserName] = useState("");
  const [setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const checkLogin = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div>
      <Spin tip="Loading..." spinning={isLoading}>
        <Row justify="center">
          <Col xs={20} sm={16} md={12} lg={8} xl={6}>
            <Card
              title="Sign in to Noval Life"
              bordered={true}
              style={{ width: "100%" }}
            >
              <Input
                id="userName"
                size="large"
                placeholder="Enter your userName"
                prefix={<UserOutlined />}
                onChange={(e) => {
                  setUserName(e.target.value);
                }}
              />
              <br />
              <br />
              <Input.Password
                id="password"
                size="large"
                placeholder="Enter your password"
                prefix={<KeyOutlined />}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <br />
              <br />
              <Button type="primary" size="large" block onClick={checkLogin}>
                Sign in
              </Button>
              Or <a href="/signup">register now!</a>
            </Card>
          </Col>
        </Row>
      </Spin>
    </div>
  );
}
export default Login;
