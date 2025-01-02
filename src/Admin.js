import React from "react";
import "./App.css";
import MDMApp from "swfrontend/MDMApp";
import getRoutes from "./ScreenRouters";
import { localStorageVariableName } from "swfrontend/AppConfigs";
import LoginPage from "swfrontend/LOGIN/LoginPage";
import { BrowserRouter } from "react-router-dom";

const Admin = () => {
  return localStorage.getItem(localStorageVariableName.authToken) == null ? (
    <LoginPage />
  ) : (
    <BrowserRouter>
      <MDMApp routes={getRoutes} />
    </BrowserRouter>
  );
};

export default Admin;
