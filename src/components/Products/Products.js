import { Col, Row } from "antd";
import React, { Component } from "react";
import SingleProduct from "../SingleProduct";
import SideBar from "../SideBar/SideBar";

export class Products extends Component {
  state = {
    products: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  };

  componentDidMount() {
    fetch("http://127.0.0.1:8000/shop/master/masters.Products/list?page=1", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Token c9febb362b29cbb89d0e0f14ee2481a4ee193bd3",
      },
      body: JSON.stringify(this.state.credentials),
    })
      .then((data) => data.json())
      .then((data) => {
        this.setState({ products: data });
        console.log("Data   :::   ", data);
        // this.setState({ list: this.state.products.results.slice(0, 5) });
        // console.log("Slice", this.state.list);

        // console.log("Data Product  :::   ", this.state.products.results);
        this.setState({ productLoaded: true });
        // console.log("Loaded", this.state.productLoaded);
      })
      .catch((error) => console.error(error));
  }

  render() {
    return (
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div>
          <SideBar />
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Row
            xs={3}
            sm={6}
            md={4}
            lg={3}
            style={{ marginLeft: "90px", marginTop: "20px" }}
          >
            {this.state.productLoaded &&
              this.state.products.results.map((element, index) => (
                <Col span={6}>
                  <SingleProduct item={element} />
                </Col>
              ))}
          </Row>
        </div>
      </div>
    );
  }
}

export default Products;
