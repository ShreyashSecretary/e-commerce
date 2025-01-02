import React, { useState } from "react";
import {
  kidsNavDropDowns,
  mensNavDropDowns,
  womensNavDropDowns,
} from "./NavItems";
import { Link } from "react-router-dom";
import "./Dropdown.css";

function Dropdown(props) {
  const [dropdown, setDropdown] = useState(false);
  const { type } = props;
  const clickSubMenuLink = (value) => {
    console.log("Clicked ::  ", value);
    setDropdown(false);
  };

  return (
    <>
      <ul
        className={dropdown ? "services-submenu clicked" : "services-submenu"}
        onClick={() => setDropdown(!dropdown)}
      >
        {type === "mens" ? (
          <div>
            {mensNavDropDowns.map((item) => (
              <li key={item.id} onClick={() => clickSubMenuLink(item.value)}>
                <a href={item.path} className={item.cName}>
                  {item.title}
                </a>
              </li>
            ))}
          </div>
        ) : (
          <div>
            {type === "womens" ? (
              <div>
                {womensNavDropDowns.map((item) => (
                  <li
                    key={item.id}
                    onClick={() => clickSubMenuLink(item.value)}
                  >
                    <a href={item.path} className={item.cName}>
                      {item.title}
                    </a>
                  </li>
                ))}
              </div>
            ) : (
              <div>
                {kidsNavDropDowns.map((item) => (
                  <li
                    key={item.id}
                    onClick={() => clickSubMenuLink(item.value)}
                  >
                    <a href={item.path} className={item.cName}>
                      {item.title}
                    </a>
                  </li>
                ))}
              </div>
            )}
          </div>
        )}
      </ul>
    </>
  );
}

export default Dropdown;
