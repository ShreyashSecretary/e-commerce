/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import OrderItem from "./OrderItem";
import OrderItemLayout from "./OrderItemLayout";

export class OrderedItems extends Component {
  constructor(props) {
    super(props);

    this.state = {
      orderItem: this.props.location.state.item,
      cart_ids: this.props.location.state.item.cart_id,
      data: [],
      load: false,
      count: 0,
    };
  }

  componentDidMount() {
    let count = 0;
    this.state.cart_ids.map((element) => {
      //   console.log(("Element : ", element));
      this.state.count++;
      count++;
      fetch(`http://127.0.0.1:8000/user/cartApiWithId/${element}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      })
        .then((data) => data.json())
        .then((data) => {
          //   console.log("Orders Items : ", data);
          this.setState({ data: [...this.state.data, data] });
          //   this.setState({ load: true });
        });
    });
    console.log("Cart length : ", this.state.cart_ids.length);
    console.log("Data : ", count);
    console.log("Load : ", true);
    this.setState({ load: true });

    // if (this.state.data.length != this.state.cart_ids.length) {
    //   this.setState({ load: true });
    //   console.log("+++++");
    // }
  }

  render() {
    // console.log("Length : ", this.state.data.length);
    // console.log("Load : ", this.state.load);
    // console.log("Orders Items : ", this.state.data);
    return (
      <div
        style={{
          padding: "16px",
          borderRadius: "4px",
          border: "1px solid #eaeccc",
          display: "flex",
          width: "60%",
          justifyContent: "center",
          margin: "auto",
          marginTop: "60px",
          flexDirection: "column",
          backgroundColor: "white",
        }}
        //   className="user-detail"
      >
        <h5>Order Id : {this.state.orderItem.order_id}</h5>
        <p>Address : {this.state.orderItem.order_address}</p>
        <p>Order Amount : {this.state.orderItem.order_price}</p>
        <p>Order Quantity : {this.state.orderItem.order_quantity}</p>
        <p>Order date : {this.state.orderItem.order_date}</p>
        <br></br>
        {this.state.data.length == this.state.cart_ids.length && (
          // console.log("Cart Data +++: ", this.state.data)
          <div>
            {this.state.data.map((item, index) => (
              <OrderItemLayout item={item} key={index} />
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default OrderedItems;
