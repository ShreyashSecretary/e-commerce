import { Col, Row } from "antd";
import React, { Component } from "react";
import { EcommerceDataProvider } from "../DataProviders/DataProvider";
import SideBar from "./SideBar/SideBar";
import SingleProduct from "./SingleProduct";

class Mens extends Component {
  dataProvider = new EcommerceDataProvider();
  state = {
    products: [],
    category: this.props.category,
    sizes: [],
    color: [],
  };

  componentDidMount() {
    var product = [];
    this.dataProvider
      .getAllProductsCategoryWise("men's clothing")
      .then((res) => res.json())
      .then((val) => {
        val.map((item) => {
          console.log("single item : ", item);
          product.push(item);
        });
      });
    this.setState({ products: product });
  }

  handleSizeChange = (size) => {
    let api = null;

    if (this.state.sizes.includes(size)) {
      this.setState(
        { sizes: this.state.sizes.filter((s) => s !== size) },
        () => {
          if (this.state.sizes.length > 0) {
            this.state.sizes.forEach((element) => {
              api = `http://127.0.0.1:8000/shop/master/masters.Products/list?page=1&product_type=${this.state.category}&filter=1&product_category=mens&filter=2&product_size=${element}&filter=3`;
            });
          } else {
            api = `http://127.0.0.1:8000/shop/master/masters.Products/list?page=1&product_type=${this.state.category}&filter=1&product_category=mens&filter=2`;
          }
          fetch(api, {
            method: "GET",
            headers: {
              "Content-Type": "aplication/json",
              Authorization: "Token c9febb362b29cbb89d0e0f14ee2481a4ee193bd3",
            },
          })
            .then((data) => data.json())
            .then((data) => {
              this.setState({ products: data.results });
              console.log("Mens Product ::", data);
            })
            .catch((error) => console.log("Error ", error));
        }
      );
    } else {
      // this.state.size.push(size);
      this.setState({ sizes: [...this.state.sizes, size] }, () => {
        console.log("size click :: ", this.state.sizes.length);
        console.log("size click :: ", this.state.sizes);
        this.state.sizes.forEach((element) => {
          fetch(
            `http://127.0.0.1:8000/shop/master/masters.Products/list?page=1&product_type=${this.state.category}&filter=1&product_category=mens&filter=2&product_size=${element}&filter=3`,
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
              this.setState({ products: data.results });
              console.log("Mens Product ::", data);
            })
            .catch((error) => console.log("Error ", error));
        });
      });
    }
  };

  handleColorChange = (color) => {
    let selectColor = this.state.color;
    let api = null;

    if (this.state.color.includes(color)) {
      this.setState(
        { color: this.state.color.filter((s) => s !== color) },
        () => {
          if (this.state.color.length > 0) {
            this.state.color.forEach((element) => {
              api = `http://127.0.0.1:8000/shop/master/masters.Products/list?page=1&product_type=${this.state.category}&filter=1&product_category=mens&filter=2&product_color=${element}&filter=3`;
            });
          } else {
            api = `http://127.0.0.1:8000/shop/master/masters.Products/list?page=1&product_type=${this.state.category}&filter=1&product_category=mens&filter=2`;
          }
          fetch(api, {
            method: "GET",
            headers: {
              "Content-Type": "aplication/json",
              Authorization: "Token c9febb362b29cbb89d0e0f14ee2481a4ee193bd3",
            },
          })
            .then((data) => data.json())
            .then((data) => {
              this.setState({ products: data.results });
              console.log("Mens Product ::", data);
            })
            .catch((error) => console.log("Error ", error));
        }
      );
    } else {
      // this.state.color.push(color);
      this.setState({ color: [...this.state.color, color] }, () => {
        console.log("Color click :: ", this.state.color.length);
        console.log("Color click :: ", this.state.color);
        this.state.color.forEach((element) => {
          fetch(
            `http://127.0.0.1:8000/shop/master/masters.Products/list?page=1&product_type=${this.state.category}&filter=1&product_category=mens&filter=2&product_color=${element}&filter=3`,
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
              this.setState({ products: data.results });
              console.log("Mens Product ::", data);
            })
            .catch((error) => console.log("Error ", error));
        });
      });
    }
  };

  render() {
    console.log("Products : ", this.state.products);
    return (
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div>
          <SideBar
            sizes={this.state.sizes}
            // handleSizeChange={this.handleSizeChange}
            // handleColorChange={this.handleColorChange}
          />
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          {this.state.products.length !== 0 ? (
            <div>
              <Row
                xs={3}
                sm={6}
                md={4}
                lg={3}
                style={{ marginLeft: "90px", marginTop: "20px" }}
              >
                {this.state.products.map((product, index) => (
                  <Col>
                    <SingleProduct item={product} />
                  </Col>
                ))}
              </Row>
            </div>
          ) : (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                margin: "auto",
                alignItems: "center",
                height: "90vh",
                width: "80vw",
              }}
            >
              <h2>Opps! Sorry no item found</h2>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Mens;
