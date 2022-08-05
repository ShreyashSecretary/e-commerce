import React, { Component } from "react";
import OrderItem from "./OrderItem";

export class OrderPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: JSON.parse(localStorage.getItem("Data")),
      orders: [],
    };
  }

  componentDidMount() {
    fetch(`http://127.0.0.1:8000/user/orderApi/${this.state.user.user_id}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((data) => data.json())
      .then((data) => {
        console.log("orders : ", data);
        this.setState({ orders: data });
      })
      .catch((error) => console.log("Error : ", error));
  }

  render() {
    return (
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "auto",
            marginTop: "50px",
          }}
        >
          <h2>{this.state.user.user_name} Orders</h2>
        </div>
        <div
          style={{
            padding: "16px",
            borderRadius: "4px",
            border: "1px solid #eaeccc",
            display: "flex",
            width: "60%",
            justifyContent: "center",
            margin: "auto",
            marginTop: "30px",
            flexDirection: "column",
            backgroundColor: "white",
          }}
          //   className="user-detail"
        >
          {this.state.orders.length > 0 ? (
            <div>
              {this.state.orders.map((element, index) => (
                <OrderItem element={element} />
              ))}
            </div>
          ) : (
            <div>
              <h3>No orders yet</h3>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default OrderPage;
