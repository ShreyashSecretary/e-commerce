/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import { Button, Card } from "antd";
import { withRouter } from "react-router";
import { data } from "autoprefixer";

class SingleProduct extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cartData: {
        products: null,
        user: null,
        quantity: 1,
        size: null,
      },
    };
  }

  addToCartHandler = (item) => (e) => {
    e.preventDefault();
    if (localStorage.getItem("Login")) {
      console.log("Cart Data ::: ", item);
      const user = JSON.parse(localStorage.getItem("Data"));
      var cartData = {
        user: user.user_id,
        products: item.product_id,
        quantity: 1,
        // price: item.product_price,
      };
      console.log("Passing data : ", cartData);
      fetch("http://127.0.0.1:8000/user/cartApi/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(cartData),
      })
        .then((data) => data.json())
        .then((data) => {
          console.log("Data Added successfully  ", data);
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      const { history } = this.props;
      if (history) history.push("/shop/profile/login");
    }
  };

  itemClick = (item) => (e) => {
    e.preventDefault();
    console.log("Item clicke");
    this.props.history.push({
      pathname: "/shop/viewProduct",
      state: { item: item },
    });
  };

  render() {
    const { item } = this.props;
    // console.log("Item ::", item);
    return (
      <Card
        // className="product"
        style={{
          // border: "solid",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          margin: "10px 10px",
          borderRadius: "5px",
          backgroundColor: "white",
          cursor: "pointer",
        }}
      >
        <div
          style={{
            // border: "solid",
            // padding: "10px",
            display: "flex",
            flexDirection: "column",
            borderRadius: "5px",
            cursor: "pointer",
            justifyContent: "center",
          }}
          onClick={this.itemClick(item)}
        >
          <img
            style={{
              maxHeight: "20vh",
              maxWidth: "50vw",
              display: "flex",
              justifyContent: "center",
              margin: "auto",
            }}
            height="150vh"
            width="200vw"
            src={item.image}
          ></img>
          {item !== undefined ? (
            <div
              className="produnctPN"
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "10px",
              }}
            >
              <div
                style={{
                  // marginLeft: "4vw",
                  marginRight: "20px",
                  width: "100px",
                  height: "20px",
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                }}
                // className="product-name"
              >
                {item.title}
              </div>
              <br></br>
              <div style={{ marginRight: "5px" }} className="product-price">
                {item.price}
              </div>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </Card>
    );
  }
}

export default withRouter(SingleProduct);
