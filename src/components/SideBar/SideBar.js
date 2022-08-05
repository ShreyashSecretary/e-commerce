import { Checkbox } from "antd";
import React from "react";
import "../../App.css";
import size from "./SidebarData";
import { color } from "./SidebarData";

function SideBar(props) {
  const { handleSizeChange, handleColorChange } = props;

  return (
    <div
      style={{
        width: "15vw",
        backgroundColor: "white",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h3
        style={{
          display: "flex",
          textAlign: "center",
          justifyContent: "center",
          marginTop: "20px",
        }}
      >
        Filters
      </h3>
      <div>
        <div style={{ margin: "10px 40px" }}>
          <h5>Sizes</h5>
          {size.map((item, index) => (
            <div key={index}>
              <Checkbox
                type="checkbox"
                id={item.id}
                name={item.title}
                value={item.value}
                onChange={() => handleSizeChange(item.value)}
              >
                {item.title}
              </Checkbox>
            </div>
          ))}
        </div>
      </div>

      <div style={{ margin: "20px 40px" }}>
        <h5>Colors</h5>
        {color.map((item, index) => (
          <div key={index}>
            <Checkbox
              type="checkbox"
              id={item.id}
              name={item.title}
              value={item.value}
              onChange={() => handleColorChange(item.value)}
            >
              {item.title}
            </Checkbox>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SideBar;
