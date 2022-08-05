/* eslint-disable jsx-a11y/alt-text */
import { Button, Card, Col, Row, notification } from "antd";
import React, { Component } from "react";

export class ViewProduct extends Component {
  constructor(props) {
    super(props);

    this.state = {
      item: this.props.location.state.item,
      size: ["S"],
      selectedSize: null,
    };
  }

  componentDidMount() {
    fetch(
      `http://127.0.0.1:8000/user/productApiSerial/${this.state.item.product_serialNo}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "aplication/json",
          // Authorization: "Token c9febb362b29cbb89d0e0f14ee2481a4ee193bd3",
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

  sizeHandler = (size) => (e) => {
    e.preventDefault();
    console.log("Selected Size : ", size);
    this.setState({ selectedSize: size });
  };

  addToCartHandler = (e) => {
    e.preventDefault();
    if (localStorage.getItem("Login")) {
      console.log("Cart Data ::: ", this.state.item);
      if (this.state.selectedSize !== null) {
        const user = JSON.parse(localStorage.getItem("Data"));
        var cartData = {
          user: user.user_id,
          products: this.state.item.product_id,
          quantity: 1,
          size: this.state.selectedSize,
          is_active: true,
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
            notification["success"]({
              message: "Add to cart",
              description: "Item added to cart successfully",
              // onClick: () => {
              //   console.log('Notification Clicked!');
              // },
            });
          })
          .catch((error) => {
            console.error(error);
          });
      } else {
        // alert("Please select size");
        notification["info"]({
          message: "Select size",
          description: "Please select size",
          // onClick: () => {
          //   console.log('Notification Clicked!');
          // },
        });
      }
    } else {
      const { history } = this.props;
      if (history) history.push("/shop/profile/login");
    }
  };

  render() {
    console.log("View Product : ", this.state.item);
    return (
      <div>
        <Card
          style={{
            width: "90%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            margin: "auto",
            marginTop: "70px",
          }}
        >
          <Row gutter={16}>
            <Col className="gutter-row" span={12}>
              <div>
                <img
                  style={{
                    maxHeight: "100vh",
                    maxWidth: "40vw",
                    display: "flex",
                    justifyContent: "center",
                    margin: "auto",
                    width: "60%",
                  }}
                  src={this.state.item.product_image}
                />
              </div>
            </Col>
            <Col className="gutter-row" span={12}>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <h2>{this.state.item.product_name}</h2>
                <p>{this.state.item.product_desc}</p>
                <h4 style={{ fontWeight: "bold" }}>
                  Price : {this.state.item.product_price}Rs
                </h4>
              </div>
              <div>
                Select size :<br></br>
                {this.state.size.map((item, index) => (
                  <Button
                    key={index}
                    shape="circle"
                    style={{
                      margin: "10px 5px",
                      padding: "5px 5px",
                      width: "2rem",
                      height: "2rem",
                      alignItems: "center",
                    }}
                    onClick={this.sizeHandler(item)}
                  >
                    {item}
                  </Button>
                ))}
              </div>
              <div>
                <Button
                  type="primary"
                  danger
                  style={{
                    width: "20vw",
                    display: "flex",
                    justifyContent: "center",
                    textAlign: "center",
                    marginTop: "30px",
                  }}
                  onClick={this.addToCartHandler}
                >
                  Add to cart
                </Button>
              </div>
            </Col>
          </Row>
        </Card>
      </div>
    );
  }
}

export default ViewProduct;
