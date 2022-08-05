import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import { navitems } from "./NavItems";
import Dropdown from "./Dropdown";
import { useStore } from "react-redux";

function Nav() {
  const [mensDropdown, setMensDropdown] = useState(false);
  const [womensDropdown, setWomensDropdown] = useState(false);
  const [kidsDropdown, setKidsDropdown] = useState(false);

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo">
          Keep Buying
        </Link>
        <ul className="nav-items">
          {navitems.map((item) => {
            if (item.title === "Mens") {
              return (
                <li
                  key={item.id}
                  className={item.cName}
                  onMouseEnter={() => setMensDropdown(true)}
                  onMouseLeave={() => setMensDropdown(false)}
                >
                  <Link to={item.path}>{item.title}</Link>
                  {mensDropdown && <Dropdown type="mens" />}
                </li>
              );
            }
            if (item.title === "Womens") {
              return (
                <li
                  key={item.id}
                  className={item.cName}
                  onMouseEnter={() => setWomensDropdown(true)}
                  onMouseLeave={() => setWomensDropdown(false)}
                >
                  <Link to={item.path}>{item.title}</Link>
                  {womensDropdown && <Dropdown type="womens" />}
                </li>
              );
            }
            if (item.title === "Kids") {
              return (
                <li
                  key={item.id}
                  className={item.cName}
                  onMouseEnter={() => setKidsDropdown(true)}
                  onMouseLeave={() => setKidsDropdown(false)}
                >
                  <Link to={item.path}>{item.title}</Link>
                  {kidsDropdown && <Dropdown type="kids" />}
                </li>
              );
            }
            return (
              <li key={item.id} className={item.cName}>
                <Link to={item.path}>{item.title}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}

export default Nav;
