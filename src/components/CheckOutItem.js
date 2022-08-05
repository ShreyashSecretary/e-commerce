/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";

export class CheckOutItem extends Component {
  render() {
    const { item } = this.props;
    return (
      <div
        style={{
          width: "100%",
          margin: "auto",
          marginTop: "10px",
          borderRadius: "8px",
          height: "auto",
        }}
      >
        <img
          style={{
            maxHeight: "50vh",
            maxWidth: "40vw",
            float: "left",
            marginRight: "30px",
          }}
          height="180vh"
          width="150vw"
          src="https://images.unsplash.com/photo-1575669338180-2428da808256?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
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
          <p>Quantities : {item.quantity}</p>
          <p>Size : {item.size}</p>
          <h6 style={{ float: "right" }}>
            Price : {item.products.product_price * item.quantity} Rs
          </h6>
        </div>
        <hr style={{ color: "#eaeccc" }}></hr>
      </div>
    );
  }
}

export default CheckOutItem;
