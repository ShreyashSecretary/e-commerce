import React, { Component } from "react";

const AuthContext = React.createContext();

class AuthProvider extends Component {
  state = {
    user_name: "",
    isAuthenticated: false,
  };

  logIn = () => {
    this.setState({ user_name: this.props.user_name, isAuthenticated: true });
  };

  logOut = () => {
    this.setState({ user_name: "", isAuthenticated: false });
  };
}
