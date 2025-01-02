import React, { Component } from "react";
import { Button, Col, Row, Card, notification } from "antd";
import CheckOutItem from "./CheckOutItem";
import { withRouter } from "react-router-dom";

export class CheckOut extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: JSON.parse(localStorage.getItem("Data")),
      data: [],
      totalPrice: this.props.location.state.totalPrice,
      quantity: null,
      cart_item: [],
    };
  }

  componentDidMount() {
    fetch(`http://127.0.0.1:8000/user/cartApi/${this.state.user.user_id}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((data) => data.json())
      .then((data) => {
        // console.log("Cart items ::: ", data);
        this.setState({ data: data });
        let quan = 0;
        data.forEach((element) => {
          // console.log("Element : ", element);
          quan += element.quantity;
          this.setState({
            cart_item: [...this.state.cart_item, element.cart_product_id],
          });
        });
        this.setState({ quantity: quan });
      })
      .catch((error) => console.log("Error ::: ", error));
  }

  placeOrderHandler = (e) => {
    e.preventDefault();
    var orderData = {
      order_price: this.state.totalPrice,
      order_address: this.state.user.address,
      order_quantity: this.state.quantity,
      user: this.state.user.user_id,
      cart_id: this.state.cart_item,
    };
    console.log("Total Quantity : ", orderData);
    fetch("http://127.0.0.1:8000/shop/master/masters.Orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Token c9febb362b29cbb89d0e0f14ee2481a4ee193bd3",
      },
      body: JSON.stringify(orderData),
    })
      .then((data) => data.json())
      .then((data) => {
        console.log("Order placed successfully   ", data);
        notification["success"]({
          message: "Order Placed",
          description: "Your order place successfully ! Thank you for shopping",
        });
        this.state.data.forEach((element) => {
          console.log("Element :++++ ", element);
          var cartData = {
            cart_product_id: element.cart_product_id,
            user: element.user.user_id,
            products: element.products.product_id,
            quantity: element.quantity,
            size: element.size,
            is_active: false,
          };
          console.log("Update :: ", cartData);
          fetch("http://127.0.0.1:8000/user/cartApi/", {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(cartData),
          })
            .then((data) => data.json())
            .then((data) => {
              console.log("Updated Successfully : ", data);
            })
            .catch((error) => console.log("Error :: ", error));
        });
        this.props.history.push("/");
      })

      .catch((error) => console.log("Error :: ", error));
  };

  render() {
    // console.log("User : ", this.state.user);
    return (
      <div>
        <div
          style={{
            padding: "16px",
            borderRadius: "4px",
            border: "1px solid #eaeccc",
            display: "flex",
            width: "60%",
            justifyContent: "center",
            margin: "auto",
            marginTop: "50px",
            flexDirection: "column",
            backgroundColor: "white",
          }}
          //   className="user-detail"
        >
          <h5>To : {this.state.user.user_name}</h5>
          <h6>Address : {this.state.user.address}</h6>
        </div>

        <div
          style={{
            padding: "16px",
            borderRadius: "4px",
            border: "1px solid #eaeccc",
            width: "60%",
            justifyContent: "center",
            margin: "auto",
            backgroundColor: "white",
          }}
        >
          <Row gutter={16}>
            <Col
              span={14}
              style={{
                borderRadius: "4px",
                border: "1px solid #eaeccc",
              }}
            >
              {this.state.data.map((item, index) => (
                <CheckOutItem item={item} />
              ))}
            </Col>
            <Col span={8}>
              <Card
                style={{
                  display: "flex",
                  margin: "auto",
                  justifyContent: "center",
                  marginTop: "50px",
                  borderRadius: "5px",
                }}
              >
                <h4>Total Amount : {this.state.totalPrice}</h4>
                <br></br>
                <Button
                  type="primary"
                  className="login-form-button"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    margin: "auto",
                  }}
                  onClick={this.placeOrderHandler}
                >
                  PlaceOrder
                </Button>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default withRouter(CheckOut);
