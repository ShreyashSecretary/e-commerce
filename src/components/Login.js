import React, { Component } from "react";
import { Form, Input, Button, Card } from "antd";
import { withRouter } from "react-router";
import Profile from "./Profile";

class Login extends Component {
  state = {
    loginData: {
      // created_by: null,
      user_email: null,
      password: null,
    },
    requiredMark: "",
    isLoggedIn: false,
    userData: [],
  };

  changeHandler = (event) => {
    const data = this.state.loginData;
    data[event.target.name] = event.target.value;
    this.setState({ loginData: data });
  };

  clickLoginButton = (event) => {
    event.preventDefault();
    var data = {
      user_name: "ssecretary",
      user_email: "abc@xyz.com",
      mobile: "9999999999",
      address: "xyz",
    };
    // console.log("On Login click");
    // const { history } = this.props;
    // if (history) history.push("/shop/admin");
    // fetch(
    //   `http://127.0.0.1:8000/user/userApi/${this.state.loginData.user_email}/${this.state.loginData.password}`,
    //   {
    //     method: "GET",
    //     headers: { "Content-Type": "application/json" },
    //   }
    // )
    //   .then((data) => data.json())
    //   .then((data) => {
    //     console.log("User Login successfully", data);
    //     this.setState({ userData: data });
    //     this.setState({ isLoggedIn: true });
    //     if (data.is_admin === true) {
    //       const { history } = this.props;
    //       if (history) history.push("/shop/admin");
    //     } else {
    //       this.setState({ isLoggedIn: true });
    //       localStorage.setItem("Login", true);
    //       localStorage.setItem("Data", JSON.stringify(data));
    //       const { history } = this.props;
    //       if (history) history.push("/shop/profile");
    //     }
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //     alert(
    //       "User with entered username and password not exist please check or register user"
    //     );
    //   });
    console.log("User Login successfully", data);
    this.setState({ userData: data });
    this.setState({ isLoggedIn: true });
    localStorage.setItem("Login", true);
    localStorage.setItem("Data", JSON.stringify(data));
    const { history } = this.props;
    history.push("/shop/profile");
  };

  clickRegisterHandler = (event) => {
    const { history } = this.props;
    if (history) history.push("/shop/profile/registration");

    // const { history } = this.props;
    // if (history) history.push("/");}
  };

  render() {
    return (
      <div>
        {this.state.isLoggedIn ? (
          <Profile
            isLogIn={this.state.isLoggedIn}
            userData={this.state.userData}
          />
        ) : (
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
            <h4 style={{ display: "flex", justifyContent: "center" }}>Login</h4>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Form
                name="normal_login"
                className="login-form"
                initialValues={{
                  remember: true,
                }}
              >
                <Form.Item
                  style={{ padding: "10px 0", margin: "10px 0" }}
                  name="user_email"
                  rules={[
                    {
                      required: true,
                      message: "Please input your email!",
                    },
                  ]}
                >
                  <Input
                    type="email"
                    value={this.state.loginData.user_email}
                    name="user_email"
                    onChange={this.changeHandler}
                    placeholder="Enter User Email"
                  />
                </Form.Item>
                <Form.Item
                  style={{ padding: "10px 0" }}
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
                {/* <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <a className="login-form-forgot" href="">
            Forgot password
          </a>
        </Form.Item> */}

                <Form.Item
                  style={{
                    padding: "10px 0",
                  }}
                >
                  <Button
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",
                    }}
                    type="primary"
                    className="login-form-button"
                    onClick={this.clickLoginButton}
                  >
                    Log in
                  </Button>
                  <a
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      padding: "10px 0",
                    }}
                    href="http://localhost:3000/shop/profile/registration"
                  >
                    register now!
                  </a>
                </Form.Item>
              </Form>
            </div>
          </Card>
        )}
      </div>
    );
  }
}

export default withRouter(Login);
