import React, { Component } from "react";
import { Button, Card } from "antd";
import { withRouter } from "react-router-dom";

export class UserProfile extends Component {
  state = {
    // userData: JSON.parse(localStorage.getItem("Data")),
  };

  logoutHandler = (e) => {
    e.preventDefault();
    localStorage.removeItem("Login");
    localStorage.removeItem("Data");
    console.log("LogOut Clicked");
    const { history } = this.props;
    if (history) history.push("/");
  };

  getOrdersHandler = (e) => {
    e.preventDefault();
    this.props.history.push("/shop/orders");
  };

  editHandler = (e) => {
    e.preventDefault();
    this.props.history.push({
      pathname: "/shop/edituser",
      state: { user: this.state.userData },
    });
  };

  render() {
    // console.log("User Profile :: ", this.state.userData.user_name);
    return (
      <div>
        <div
          style={{
            padding: "16px",
            borderRadius: "4px",
            border: "1px solid #eaeccc",
            display: "flex",
            width: "60%",
            justifyContent: "center",
            margin: "auto",
            marginTop: "50px",
            flexDirection: "column",
            backgroundColor: "white",
          }}
        >
          <h4 style={{ display: "flex", justifyContent: "center" }}>Profile</h4>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
              marginTop: "30px",
            }}
          >
            <label>UserName : ssecretary</label>
            <br />
            <label>UserEmail : abc.xyz.com</label>
            <br />
            <label>Mobile : 9999999999</label>
            <br />
            <label>Address : asdfgghhhgh </label>
            <br />
            <Button style={{ background: null }} onClick={this.editHandler}>
              Edit
            </Button>
          </div>
        </div>

        <Button
          onClick={this.getOrdersHandler}
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "auto",
            marginTop: "30px",
          }}
        >
          Orders
        </Button>
        <Button
          onClick={this.logoutHandler}
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "auto",
            marginTop: "30px",
          }}
        >
          LogOut
        </Button>
      </div>
    );
  }
}

export default withRouter(UserProfile);
