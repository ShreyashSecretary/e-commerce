import React, { Component } from "react";
import UserAuthLogin from "./AuthLogin/UserAuthLogin";
import Login from "./Login";
import UserProfile from "./UserProfile";

class Profile extends Component {
  state = {
    stillLoggIn: true,
    isLogIn: this.props.isLogIn,
    userData: this.props.userData,
  };

  render() {
    // console.log("Profile :: ", this.state.userData);
    return (
      <div>
        {localStorage.getItem("Login") ? (
          <div>
            <UserProfile />
          </div>
        ) : (
          <UserAuthLogin />
        )}
        {/* <UserProfile /> */}
        {/* <Login /> */}
      </div>
    );
  }
}

export default Profile;
