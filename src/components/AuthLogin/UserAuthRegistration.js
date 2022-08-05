import React, { Component } from "react";
import { Form, Input, Checkbox, Button, Card } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { withRouter } from "react-router";

class UserAuthRegistration extends Component {
  state = {
    loginData: {
      username: null,
      email: null,
      password: null,
      //   mobile: null,
      //   address: null,
    },
    requiredMark: "",
  };

  changeHandler = (event) => {
    const data = this.state.loginData;
    data[event.target.name] = event.target.value;
    this.setState({ loginData: data });
  };

  clickRegisterButton = (event) => {
    // event.preventDefault();
    console.log("Register Data : ", this.state.loginData);
    fetch("http://127.0.0.1:8000/login/users/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(this.state.loginData),
    })
      .then((data) => data.json())
      .then((data) => {
        // console.log("Data :: ", data);
        console.log("User Register successfully", data);

        //   const { history } = this.props;
        //   if (history) history.push("/");
        //   alert("User Register Successfully");
      })
      .catch((error) => {
        console.error(error);
        alert(
          "There is some error in registration please try again after some time"
        );
      });
  };

  render() {
    return (
      <div>
        <Card
          style={{
            width: "30%",
            margin: "auto",
            background: "white",
            marginTop: "120px",
            borderRadius: "8px",
            boxShadow: "1px 0 0 white",
          }}
        >
          <h4 style={{ display: "flex", justifyContent: "center" }}>
            Registration
          </h4>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Form
              name="normal_registration"
              className="login-form"
              initialValues={{
                remember: true,
              }}
              // onFinish={onFinish}
              style={{
                // width: "40%",
                justifyContent: "center",
                marginTop: "1rem",
              }}
              //   className="col-lg-6 col-md-12"
            >
              <Form.Item
                name="usename"
                rules={[
                  {
                    required: true,
                    message: "Please input your username!",
                  },
                ]}
              >
                <Input
                  type="text"
                  value={this.state.loginData.username}
                  name="username"
                  onChange={this.changeHandler}
                  placeholder="Enter UserName"
                />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your Password!",
                  },
                ]}
              >
                <Input
                  type="password"
                  value={this.state.loginData.password}
                  name="password"
                  onChange={this.changeHandler}
                  placeholder="Enter Password"
                />
              </Form.Item>
              <Form.Item
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Please input your email!",
                  },
                ]}
              >
                <Input
                  type="email"
                  value={this.state.loginData.email}
                  name="email"
                  onChange={this.changeHandler}
                  placeholder="Enter User Email"
                />
              </Form.Item>
              {/* <Form.Item
                name="mobile"
                rules={[
                  {
                    required: true,
                    message: "Please input your mobile number!",
                  },
                ]}
              >
                <Input
                  type="text"
                  value={this.state.loginData.mobile}
                  name="mobile"
                  onChange={this.changeHandler}
                  placeholder="Enter Mobile number"
                />
              </Form.Item>
              <Form.Item
                name="address"
                rules={[
                  {
                    message: "Please input your address!",
                  },
                ]}
              >
                <Input
                  type="address"
                  value={this.state.loginData.address}
                  name="address"
                  onChange={this.changeHandler}
                  placeholder="Enter address"
                />
              </Form.Item> */}
              {/* <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <a className="login-form-forgot" href="">
            Forgot password
          </a>
        </Form.Item> */}

              <Form.Item style={{ display: "grid", justifyContent: "center" }}>
                <Button
                  type="primary"
                  // htmlType="submit"
                  className="login-form-button"
                  onClick={this.clickRegisterButton}
                >
                  Register
                </Button>
              </Form.Item>
            </Form>
          </div>
        </Card>
      </div>
    );
  }
}

export default withRouter(UserAuthRegistration);
