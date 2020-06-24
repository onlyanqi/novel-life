import React from "react";
import "../style/signup.css";
import { Form, Input, Tooltip, Select, Row, Col, Checkbox, Button } from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";

const { Option } = Select;
// const formItemLayout = {
//   labelCol: {
//     xs: {
//       span: 24,
//     },
//     sm: {
//       span: 8,
//     },
//   },
//   wrapperCol: {
//     xs: {
//       span: 24,
//     },
//     sm: {
//       span: 16,
//     },
//   },
// };
// const tailFormItemLayout = {
//   wrapperCol: {
//     xs: {
//       span: 24,
//       offset: 0,
//     },
//     sm: {
//       span: 16,
//       offset: 8,
//     },
//   },
// };

const Signup = () => {
  const [form] = Form.useForm();

  return (
    <div justifyContent="center" align="center" >

<Row style={{justifyContent:"center"}}>
     <h1 style={{color:"#FFFF",  
            fontFamily:"Roboto, sans-serif", 
            align:"center", justifyContent:"center", 
            fontSize:"80px", marginTop:"100px", marginBottom:"0px"}}>Sign Up</h1>
     </Row>
    
    <Row style={{justifyContent:"center", align:"center"}}>
    <Form
      style={{width:"350px"}}
      justifyContent="center"
      align="center"
      className="signup-box"
      // {...formItemLayout}
      form={form}
      name="register"
      initialValues={{
        prefix: "1",
      }}
      scrollToFirstError
    >
      <Form.Item
        name="email"
       
        rules={[
          {
            type: "email",
            message: "The input is not valid E-mail!",
          },
          {
            required: true,
            message: "Please input your E-mail!",
          },
        ]}
      >
        <Input placeholder="Email" style={{backgroundColor:"#011528", 
                                             color:"#2593FC", 
                                            fontFamily:"Roboto Thick, sans-serif", 
                                            fontWeight:"200", padding:"10px", boxShadow:"none",
                                             width:"100%", marginBottom:"10px", borderColor:"#2593FC"}}/>
      </Form.Item>

      <Form.Item
        name="password"
        
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
        hasFeedback
      >
        <Input type="password" placeholder="Password" style={{backgroundColor:"#011528", 
                                 color:"#2593FC", boxShadow:"none",
                                fontFamily:"Roboto Thick, sans-serif", 
                                fontWeight:"200", padding:"10px",borderColor:"#2593FC", 
                                boxShadow:"none",
                                width:"100%"}}/>
      </Form.Item>

      <Form.Item
        name="confirm"
        
        dependencies={["password"]}
        hasFeedback
        rules={[
          {
            required: true,
            message: "Please confirm your password!",
          },
          ({ getFieldValue }) => ({
            validator(rule, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }

              return Promise.reject(
                "The two passwords that you entered do not match!"
              );
            },
          }),
        ]}
      >
        <Input type="password" placeholder="Confirm Password" style={{backgroundColor:"#011528", 
                                 color:"#2593FC", boxShadow:"none",
                                fontFamily:"Roboto Thick, sans-serif", 
                                fontWeight:"200", padding:"10px",borderColor:"#2593FC", 
                                boxShadow:"none",
                                width:"100%"}}/>
      </Form.Item>

      <Form.Item
        name="nickname"
        rules={[
          {
            required: true,
            message: "Please input your nickname!",
            whitespace: true,
          },
        ]}
        
      >
        <Input placeholder="Nickname" style={{backgroundColor:"#011528", 
                                 color:"#2593FC", boxShadow:"none",
                                fontFamily:"Roboto Thick, sans-serif", 
                                fontWeight:"200", padding:"10px",borderColor:"#2593FC", 
                                boxShadow:"none",
                                width:"100%"}}/>
      </Form.Item>

      <Form.Item 
      style={{backgroundColor:"#011528"}}
        name="phone"
        
        rules={[
          {
            required: true,
            message: "Please input your phone number!",
          },
        ]}
      >
        <Input backgroundColor=""
        
          style={{backgroundColor:"#011528", 
                                 color:"#2593FC", boxShadow:"none",
                                fontFamily:"Roboto Thick, sans-serif", 
                                fontWeight:"200",borderColor:"#2593FC", 
                                boxShadow:"none", height:"45px", 
                                width:"100%"}}
          placeholder="Contact No."
        />
      </Form.Item>

      <Form.Item>
        <Row gutter={8}>
          <Col span={12}>
            <Form.Item
              name="captcha"
              noStyle
              rules={[
                {
                  required: true,
                  message: "Please input the captcha you got!",
                },
              ]}
            >
              <Input placeholder="Enter code" style={{backgroundColor:"#011528", 
                                 color:"#2593FC", boxShadow:"none",
                                fontFamily:"Roboto Thick, sans-serif", 
                                fontWeight:"200",borderColor:"#2593FC", 
                                boxShadow:"none", height:"50px",
                                width:"100%"}}/>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Button  style={{fontFamily:"Roboto Thick, sans-serif", 
                                fontWeight:"200", width:"100%", height:"50px",
                                 boxShadow:"none",
                                 backgroundColor:"#2593FC", color:"#FFFF", borderColor:"#2593FC"}}>Get captcha</Button>
          </Col>
        </Row>
      </Form.Item>

      <Form.Item 
        name="agreement"
        valuePropName="checked"
        rules={[
          {
            validator: (_, value) =>
              value
                ? Promise.resolve()
                : Promise.reject("Should accept agreement"),
          },
        ]}
        // {...tailFormItemLayout}
      >
        <Checkbox >
         <a href="/"> I have read the agreement</a>
        </Checkbox>
      </Form.Item>
      <Form.Item  justifyContent="center">
        <Button type="primary" htmlType="submit" style={{fontFamily:"Roboto Thick, sans-serif", 
                                fontWeight:"500", padding:"14px", width:"100%", height:"50px",
                                marginTop:"10px", boxShadow:"none",
                                 backgroundColor:"#2593FC", color:"#FFFF", borderColor:"#2593FC"}}>
          Register
        </Button>
      </Form.Item>
    </Form>
    </Row>
    </div>
  );
};
export default Signup;
