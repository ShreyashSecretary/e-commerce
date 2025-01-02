import React, { Component } from "react";
import { Input, Button, Card, Form } from "antd";
import { withRouter } from "react-router-dom";

class UserAuthLogin extends Component {
  state = {
    credentials: { username: "", password: "" },
  };

  //   user login check
  submitHandler = (event) => {
    var data = {
      user_name: "ssecretary",
      user_email: "abc@xyz.com",
      mobile: "9999999999",
      address: "xyz",
      token: "scdhgkfhththhyrhrg",
    };
    // fetch("http://127.0.0.1:8000/login/user/", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(this.state.credentials),
    // })
    //   .then((data) => data.json())
    //   .then((data) => {
    //     console.log("Logged in user :  ", data);
    //     if (data.token != undefined) {
    //       localStorage.setItem("Login", true);
    //       localStorage.setItem("Token", data.token);
    //     }
    //     // const { history } = this.props;
    //     // if (history) history.push("/books");
    //     // this.props.userLogin(data.token);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    // console.log(this.state.credentials);
    localStorage.setItem("Login", true);
    localStorage.setItem("Token", data.token);
    localStorage.setItem("Data", data);
  };

  //   user registration
  registerHandler = (event) => {
    event.preventDefault();
    var data = {
      user_name: "ssecretary",
      user_email: "abc@xyz.com",
      mobile: "9999999999",
      address: "xyz",
    };
    // fetch("http://127.0.0.1:8000/auth/", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(this.state.credentials),
    // })
    //   .then((data) => data.json())
    //   .then((data) => {
    //     console.log(data);
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
    //   .catch((error) => console.log(error));

    this.setState({ isLoggedIn: true });
    localStorage.setItem("Login", true);
    localStorage.setItem("Data", JSON.stringify(data));
    const { history } = this.props;
    if (history) history.push("/shop/profile");
  };

  changedHandler = (event) => {
    const cred = this.state.credentials;
    cred[event.target.name] = event.target.value;

    this.setState({ credentials: cred });
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
                name="username"
                rules={[
                  {
                    required: true,
                    message: "Please input your email!",
                  },
                ]}
              >
                <Input
                  type="text"
                  required
                  placeholder="UserName"
                  name="username"
                  value={this.state.credentials.username}
                  onChange={this.changedHandler}
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
                  placeholder="Password"
                  required
                  name="password"
                  value={this.state.credentials.password}
                  onChange={this.changedHandler}
                />
              </Form.Item>

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
                  onClick={this.submitHandler}
                >
                  Log in
                </Button>
                <a
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    padding: "10px 0",
                  }}
                  href="http://localhost:3000/shop/authRegister"
                >
                  register now!
                </a>
              </Form.Item>
            </Form>
          </div>
        </Card>
      </div>
    );
  }
}

export default withRouter(UserAuthLogin);
