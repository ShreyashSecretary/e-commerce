import { Col, Row } from "antd";
import React, { Component } from "react";
import { EcommerceDataProvider } from "../DataProviders/DataProvider";
import SideBar from "./SideBar/SideBar";
import SingleProduct from "./SingleProduct";

class Electronics extends Component {
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
      .getAllProductsCategoryWise("electronics")
      .then((res) => res.json())
      .then((val) => {
        val.map((item) => {
          product.push(item);
        });
      });
    this.setState({ products: product });
  }

  render() {
    return (
      <div style={{ display: "flex", flexDirection: "row" }}>
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
                  //   <Col>
                  <SingleProduct item={product} />
                  //   </Col>
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

export default Electronics;
