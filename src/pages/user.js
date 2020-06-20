import React from "react";
import { Avatar, Button, Divider } from "antd";
import "../style/user.css";
import {
  TwitterOutlined,
  FacebookOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";

const User = () => {
  return (
    <div className="user-div comm-box">
      <div>
        <Avatar
          size={100}
          src="https://image.flaticon.com/icons/svg/3039/3039750.svg"
        />
      </div>
      <div className="user-introduction">
        Hello! you've logged in
        <Divider>Social Media</Divider>
        <Avatar size={28} icon={<TwitterOutlined />} className="account" />
        <Avatar size={28} icon={<FacebookOutlined />} className="account" />
        <Avatar size={28} icon={<LinkedinOutlined />} className="account" />
      </div>
      <div className="option-div comm-box">
        <div>
          <img
            src="https://image.flaticon.com/icons/svg/2638/2638074.svg"
            alt="Be a volunteer"
            width="80%"
          />
          <Button type="primary">Become a volunteer</Button>
        </div>
        <div>
          <img
            src="https://image.flaticon.com/icons/svg/2638/2638066.svg"
            alt="Financial support"
            width="80%"
          />
          <Button type="primary">Apply for financial support</Button>
        </div>
        <div>
          <img
            src="https://image.flaticon.com/icons/svg/2637/2637979.svg"
            alt="Medical assisstants"
            width="80%"
          />
          <Button type="primary">Seek for medical help</Button>
        </div>
        <div>
          <img
            src="https://image.flaticon.com/icons/svg/2638/2638058.svg"
            alt="Support Business"
            width="80%"
          />
          <Button type="primary">Seek for business support</Button>
        </div>

        <div>
          <img
            src="https://image.flaticon.com/icons/svg/2637/2637986.svg"
            alt="Support seniors"
            width="80%"
          />
          <Button type="primary">I'm a senior</Button>
        </div>
      </div>
    </div>
  );
};

export default User;
