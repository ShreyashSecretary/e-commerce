import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import { navitems } from "./NavItems";
import Dropdown from "./Dropdown";
import { useStore } from "react-redux";
import { EcommerceDataProvider } from "../../DataProviders/DataProvider";

function Nav() {
  var dataProvider = new EcommerceDataProvider();
  const [mensDropdown, setMensDropdown] = useState(false);
  const [womensDropdown, setWomensDropdown] = useState(false);
  const [navitems, setNavitems] = useState([]);

  useEffect(() => {
    dataProvider
      .getAllCategoriesData()
      .then((res) => res.json())
      .then((val) => {
        console.log("Values : ", val);
        setNavitems([val]);
      });
  }, []);

  if (navitems.length > 0) {
    navitems[0].map((item) => {
      console.log("Array : ", item);
    });
  }
  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo">
          Keep Buying
        </Link>
        <ul className="nav-items">
          {navitems.length > 0 &&
            navitems[0].map((item, id) => {
              console.log("Nav itme : ", item, id);
              if (item === "men's clothing") {
                return (
                  <li
                    key={id}
                    className="nav-item"
                    // onMouseEnter={() => setMensDropdown(true)}
                    // onMouseLeave={() => setMensDropdown(false)}
                  >
                    <Link to="/shop/mens">Men's</Link>
                  </li>
                );
              }
              if (item === "women's clothing") {
                return (
                  <li
                    key={item.id}
                    className="nav-item"
                    // onMouseEnter={() => setWomensDropdown(true)}
                    // onMouseLeave={() => setWomensDropdown(false)}
                  >
                    <Link to="/shop/womens">Women</Link>
                  </li>
                );
              }
              if (item === "jewelery") {
                return (
                  <li key={id} className="nav-item">
                    <Link to="/shop/jewellery">Jewelery</Link>
                  </li>
                );
              }
              if (item === "electronics") {
                return (
                  <li key={id} className="nav-item">
                    <Link to="/shop/electronics">Electronics</Link>
                  </li>
                );
              }
            })}
          <li className="nav-item">
            <Link to="/shop/profile">Profile</Link>
          </li>
          <li className="nav-item">
            <Link to="/shop/cart">Cart</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Nav;
