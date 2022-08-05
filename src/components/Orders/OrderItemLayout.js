/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import { Card } from "antd";

export class OrderItemLayout extends Component {
  render() {
    const { item } = this.props;
    console.log("In layout : ", item);
    return (
      <div>
        <Card
          style={{
            width: "100%",
            margin: "auto",
            background: "white",
            marginTop: "10px",
            borderRadius: "8px",
            borderColor: "#D3D3D3",
            border: "5px",
          }}
        >
          <div>
            <img
              style={{
                maxHeight: "40vh",
                maxWidth: "40vw",
                float: "left",
                marginRight: "30px",
              }}
              height="150vh"
              width="150vw"
              src={item.products.product_image}
            ></img>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <h4>{item.products.product_name}</h4>
              <p>{item.products.product_desc}</p>
              <p>Size : </p>
              <h6 style={{ float: "right" }}>
                Price : {item.products.price * item.quantity} Rs
              </h6>
              <h6 style={{ float: "right" }}>Quantity : {item.quantity} Rs</h6>
            </div>
          </div>
        </Card>
      </div>
    );
  }
}

export default OrderItemLayout;
