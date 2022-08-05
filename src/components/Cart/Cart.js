/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import CartItem from "./CartItem";
import { Button, Card, Col, Row } from "antd";
import { withRouter } from "react-router-dom";

class Cart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      isLoggin: false,
      totalPrice: 500,
    };
  }

  // handleChange = (price, fun) => {
  //   if (fun === "add") {
  //     this.setState({ totalPrice: this.state.totalPrice + price }, () => {
  //       console.log("Total Price : ", this.state.totalPrice);
  //     });
  //   } else {
  //     this.setState({ totalPrice: this.state.totalPrice - price }, () => {
  //       console.log("Total Price : ", this.state.totalPrice);
  //     });
  //   }
  // };

  componentDidMount() {
    if (localStorage.getItem("Login")) {
      this.setState({ isLoggin: true });
      var data = localStorage.getItem("CartData");
      console.log("Cart Data : ", JSON.parse(data));
      this.setState({ data: data });
      // const user = JSON.parse(localStorage.getItem("Data"));
      // console.log(`http://127.0.0.1:8000/user/cartApi/${user.user_id}`);
      // fetch(`http://127.0.0.1:8000/user/cartApi/${user.user_id}`, {
      //   method: "GET",
      //   headers: { "Content-Type": "application/json" },
      // })
      //   .then((data) => data.json())
      //   .then((data) => {
      //     console.log("Cart items ::: ", data);
      //     this.setState({ data: data });
      //     let totalPrice = 0;
      //     data.forEach((element) => {
      //       console.log("In cart :: ", element);
      //       if (element.is_active) {
      //         totalPrice += element.quantity * element.products.product_price;
      //       }
      //     });
      //     // data.map((i) => {
      //     // });
      //     // console.log("Total price :: ", totalPrice);
      //     this.setState({ totalPrice });
      //   })
      //   .catch((error) => console.log("Error ::: ", error));
    } else {
      this.setState({ isLoggin: false });
    }
  }

  exploreClickHandler = (e) => {
    e.preventDefault();
    this.props.history.push("/");
  };

  checkoutHandler = (e) => {
    e.preventDefault();
    this.props.history.push({
      pathname: "/shop/checkout",
      state: { totalPrice: this.state.totalPrice },
    });
  };

  render() {
    console.log("Cart length :: ", this.state.data);
    return (
      <div>
        {this.state.isLoggin ? (
          <div style={{ marginTop: "40px" }}>
            {this.state.totalPrice > 0 ? (
              <div
                style={{
                  justifyContent: "center",
                  margin: "auto",
                  width: "100vw",
                }}
              >
                <Row gutter={16}>
                  <Col
                    span={14}
                    style={{ border: "5px #D3D3D3", marginLeft: "20px" }}
                  >
                    <CartItem
                      item={this.state.data}
                      handleChange={this.handleChange}
                    />
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
                      <h4>Total Amount : 500</h4>
                      <br></br>
                      <Button
                        type="primary"
                        className="login-form-button"
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          margin: "auto",
                        }}
                        onClick={this.checkoutHandler}
                      >
                        CheckOut
                      </Button>
                    </Card>
                  </Col>
                </Row>
              </div>
            ) : (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  margin: "auto",
                  alignItems: "center",
                  height: "90vh",
                }}
              >
                <h4>No items added to cart</h4>
                <Button
                  style={{
                    background: null,
                    color: "black",
                    borderRadius: "5px",
                    borderColor: "black",
                    display: "flex",
                    fontSize: "30px",
                    textAlign: "center",
                    alignItems: "center",
                    padding: "3vh 3vw",
                    justifyContent: "center",
                  }}
                  onClick={this.exploreClickHandler}
                >
                  Explore
                </Button>
              </div>
            )}
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "auto",
              alignItems: "center",
              height: "90vh",
            }}
          >
            <h2>Please login first</h2>
          </div>
        )}
      </div>
    );
  }
}

export default withRouter(Cart);
