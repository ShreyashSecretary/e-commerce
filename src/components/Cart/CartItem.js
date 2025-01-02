/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";

import { Card, Button, Input, Select, notification } from "antd";
import { withRouter } from "react-router-dom";
const { Option } = Select;

export class CartItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      item: {
        quantity: this.props.item.quantity,
        products: this.props.item.products,
        user: this.props.item.user,
        size: this.props.item.size,
        id: this.props.item.cart_product_id,
        is_active: this.props.item.is_active,
      },
      updatedData: {
        cart_product_id: this.props.item.cart_product_id,
        user: this.props.item.user.user_id,
        products: this.props.item.products.product_id,
        quantity: this.props.item.quantity,
        size: this.props.item.size,
      },
      count: this.props.item.quantity,
      price: this.props.item.products.product_price * this.props.item.quantity,
      totalPrice: 0,
      size: ["S"],
    };
  }

  componentDidMount() {
    fetch(
      `http://127.0.0.1:8000/shop/master/masters.Products/list?page=1&product_serialNo=${this.state.item.products.product_serialNo}&filter=1`,
      {
        method: "GET",
        headers: {
          "Content-Type": "aplication/json",
          Authorization: "Token c9febb362b29cbb89d0e0f14ee2481a4ee193bd3",
        },
      }
    )
      .then((data) => data.json())
      .then((data) => {
        console.log("Mens Product ::", data);
        data.results.forEach((element) => {
          console.log("Size : ", element.product_size);
          if (!this.state.size.includes(element.product_size)) {
            this.setState({ size: [...this.state.size, element.product_size] });
          }
        });
      })
      .catch((error) => console.log("Error ", error));
  }

  increaseHandler = (e) => {
    e.preventDefault();

    let updateData = this.state.updatedData;

    this.setState((prev) => {
      return { count: prev.count + 1 };
    });
    this.setState({
      price: this.state.item.products.product_price * (this.state.count + 1),
    });
    console.log(
      "Price :: ",
      this.state.item.products.product_price * this.state.count,
      "Count :: ",
      this.state.count
    );
    updateData.quantity = this.state.count + 1;

    console.log("Update : ", updateData);

    this.setState((prevState) => ({
      updatedData: {
        ...prevState.updatedData,
        quantity: this.state.count + 1, // update value of specific key
      },
    }));
    // this.updateCartitem();
    fetch("http://127.0.0.1:8000/user/cartApi/", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updateData),
    })
      .then((data) => data.json())
      .then((data) => {
        console.log("Updated Successfully : ", data);
      })
      .catch((error) => console.log("Error :: ", error));
    // this.setState({totalPrice : ...totalPrice})
    this.props.handleChange(this.state.item.products.product_price, "add");
  };

  decrementHandler = (e) => {
    e.preventDefault();
    if (this.state.count > 1) {
      let updateData = this.state.updatedData;

      this.setState((prev) => {
        return { count: prev.count - 1 };
      });

      this.setState({
        price: this.state.item.products.product_price * (this.state.count - 1),
      });
      console.log(
        "Price :: ",
        this.state.item.products.product_price * this.state.count,
        "Count :: ",
        this.state.item.quantity
      );

      updateData.quantity = this.state.count - 1;

      console.log("Update : ", updateData);

      this.setState((prevState) => ({
        updatedData: {
          ...prevState.updatedData,
          quantity: this.state.count - 1, // update value of specific key
        },
      }));

      fetch("http://127.0.0.1:8000/user/cartApi/", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updateData),
      })
        .then((data) => data.json())
        .then((data) => {
          console.log("Updated Successfully : ", data);
        })
        .catch((error) => console.log("Error :: ", error));

      this.props.handleChange(this.state.item.products.product_price, "sub");
    }
  };

  deleteCartItem = (e) => {
    e.preventDefault();
    console.log("Delete : ", this.state.item);
    var deletItem = {
      cart_product_id: this.state.item.id,
    };
    fetch("http://127.0.0.1:8000/user/cartApi/", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(deletItem),
    })
      .then((data) => data.json())
      .then((data) => {
        console.log("Item Removed from cart");
        this.props.history.goBack();
        notification["success"]({
          message: "Item removed from cart",
        });
      })
      .catch((error) => console.log("Error ", error));
  };

  onSizeChange = (value) => {
    // e.preventDefault();
    console.log("Value :: ", value);
    let updateData = this.state.updatedData;
    updateData.size = value;
    console.log("Update : ", updateData);

    this.setState((prevState) => ({
      updatedData: {
        ...prevState.updatedData,
        size: value, // update value of specific key
      },
    }));

    fetch("http://127.0.0.1:8000/user/cartApi/", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updateData),
    })
      .then((data) => data.json())
      .then((data) => {
        console.log("Updated Successfully : ", data);
      })
      .catch((error) => console.log("Error :: ", error));
  };

  render() {
    // console.log("Added :: ", this.state.item);
    return (
      <div>
        {this.state.item.is_active && (
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
            {/* <h4 style={{ display: "flex", justifyContent: "center" }}>Login</h4> */}
            <div>
              <Button
                style={{
                  float: "right",
                  background: "red",
                  borderRadius: "5px",
                  color: "white",
                }}
                onClick={this.deleteCartItem}
              >
                Delete
              </Button>
              <img
                style={{
                  maxHeight: "40vh",
                  maxWidth: "40vw",
                  float: "left",
                  marginRight: "30px",
                }}
                height="150vh"
                width="150vw"
                src={this.state.item.products.product_image}
              ></img>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <h4>{this.state.item.products.product_name}</h4>
                <p>{this.state.item.products.product_desc}</p>
                <p>
                  Size :{" "}
                  <Select
                    onChange={this.onSizeChange}
                    value={this.state.updatedData.size}
                    defaultValue={this.state.item.size}
                    style={{ width: "70px" }}
                  >
                    {this.state.size.map((s, i) => (
                      <Option key={i} value={s}>
                        {s}
                      </Option>
                    ))}
                  </Select>
                </p>
                <h6 style={{ float: "right" }}>
                  Price : {this.state.price} Rs
                </h6>
              </div>
            </div>
            <div>
              <Button
                style={{
                  width: "1.5rem",
                  height: "2rem",
                  display: "flex",
                  float: "right",
                  alignItems: "center",
                }}
                type="primary"
                className="login-form-button"
                onClick={this.increaseHandler}
              >
                +
              </Button>
              <Input
                type="text"
                defaultValue={this.state.item.quantity}
                style={{
                  width: "2rem",
                  height: "1rem",
                  display: "flex",
                  float: "right",
                  justifyContent: "center",
                }}
                value={this.state.count}
                disabled
              ></Input>
              <Button
                style={{
                  width: "1.5rem",
                  height: "2rem",
                  display: "flex",
                  float: "right",
                  alignItems: "center",
                }}
                type="primary"
                className="login-form-button"
                onClick={this.decrementHandler}
              >
                -
              </Button>
            </div>
          </Card>
        )}
      </div>
    );
  }
}

export default withRouter(CartItem);
