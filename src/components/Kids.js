import { Col, Row } from "antd";
import React, { Component } from "react";
import SideBar from "./SideBar/SideBar";
import SingleProduct from "./SingleProduct";

class Womens extends Component {
  state = {
    products: [],
    category: this.props.category,
    sizes: [],
  };

  componentDidMount() {
    let api = null;
    if (this.state.category !== undefined) {
      api = `http://127.0.0.1:8000/shop/master/masters.Products/list?page=1&product_type=${this.state.category}&filter=1&product_category=kids&filter=2`;
    } else {
      api = `http://127.0.0.1:8000/shop/master/masters.Products/list?page=1&product_category=kids&filter=1`;
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
        console.log("Kids Product ::", data);
      })
      .catch((error) => console.log("Error ", error));
  }

  handleSizeChange = (size) => {
    if (this.state.sizes.includes(size)) {
      this.setState({ sizes: this.state.sizes.filter((s) => s !== size) });
    } else {
      // this.state.sizes.push(size);
      this.setState({ sizes: [...this.state.sizes, size] });
    }
  };

  render() {
    return (
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div>
          <SideBar
            sizes={this.state.sizes}
            handleSizeChange={this.handleSizeChange}
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

export default Womens;
