import React, { Component } from "react";
import { withRouter } from "react-router-dom";

export class OrderItem extends Component {
  orderItemClickHandler = (item) => (e) => {
    e.preventDefault();
    console.log("Order Item : ", item.cart_id);
    this.props.history.push({
      pathname: "/shop/orderedItems",
      state: { item: item },
    });
  };

  render() {
    const { element } = this.props;
    console.log("item : ", element);
    return (
      <div
        style={{
          width: "100%",
          margin: "auto",
          marginTop: "10px",
          borderRadius: "8px",
          height: "auto",
          cursor: "pointer",
        }}
        onClick={this.orderItemClickHandler(element)}
      >
        <h5>Order Id : {element.order_id}</h5>
        <p>Address : {element.order_address}</p>
        <p>Order Amount : {element.order_price}</p>
        <p>Order Quantity : {element.order_quantity}</p>
        <p>Order date : {element.order_date}</p>
        <hr style={{ color: "#eaeccc" }}></hr>
      </div>
    );
  }
}

export default withRouter(OrderItem);
