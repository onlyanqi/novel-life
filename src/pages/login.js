import React, { useState } from "react";
import "antd/dist/antd.css";
import { Card, Input, Button, Spin } from "antd";
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
    <div className="login-div">
      <Spin tip="Loading..." spinning={isLoading}>
        <Card
          title="Sign in to Noval Life"
          bordered={true}
          style={{ width: 400 }}
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
      </Spin>
    </div>
  );
}
export default Login;
