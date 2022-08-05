/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import SingleProduct from "./SingleProduct";
import { Col } from "antd";
import Footer from "./Footer";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [1, 2, 3, 4, 5, 6, 7],
      products: [],
      list: [],
      productLoaded: false,
    };
  }

  componentDidMount() {
    fetch("http://127.0.0.1:8000/user/productApi", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        // Authorization: "Token c9febb362b29cbb89d0e0f14ee2481a4ee193bd3",
      },
      // body: JSON.stringify(this.state.credentials),
    })
      .then((data) => data.json())
      .then((data) => {
        this.setState({ products: data });
        console.log("Data   :::   ", data);
        this.setState({ list: this.state.products.slice(0, 4) });
        console.log("Slice", this.state.list);

        console.log("Data Product  :::   ", this.state.products);
        this.setState({ productLoaded: true });
        // console.log("Loaded", this.state.productLoaded);
      })
      .catch((error) => console.error(error));
  }

  render() {
    console.log("Length :: ", this.state.products);
    return (
      <div>
        <div>
          <img
            src="https://4.imimg.com/data4/LY/EL/MY-3497104/e-commerce-application-development-500x500.jpg"
            style={{ maxHeight: "100%", maxWidth: "100%" }}
            width="100%"
            height="500vh"
          ></img>
        </div>

        {/* <SideBar /> */}
        <div>
          <div style={{ margin: "100px 0", width: "100%" }}>
            <h3
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "20px",
              }}
            >
              Trending
            </h3>
            <a
              href="/shop/products"
              style={{ float: "right", marginRight: "20px", color: "blue" }}
            >
              View More...
            </a>
            <div
              className="product-conatiner"
              style={{
                width: "100%",
                margin: "10px 0",
                display: "flex",
                justifyContent: "center",
              }}
            >
              {/*MAP WILL COME HERE */}

              {this.state.productLoaded &&
                this.state.list.map((element, index) => (
                  <Col span={6}>
                    <SingleProduct item={element} />
                  </Col>
                ))}
            </div>

            <h3
              style={{
                display: "flex",
                marginTop: "10vh",
                justifyContent: "center",
              }}
            >
              Popular
            </h3>
            <a
              href="/shop/products"
              style={{ float: "right", marginRight: "20px", color: "blue" }}
            >
              View More...
            </a>

            <div
              className="product-conatiner"
              style={{
                width: "100%",
                margin: "10px 0",
                display: "flex",
                justifyContent: "center",
              }}
            >
              {/*MAP WILL COME HERE */}
              {this.state.productLoaded &&
                this.state.list.map((element, index) => (
                  <Col span={6}>
                    <SingleProduct item={element} />
                  </Col>
                ))}
            </div>

            <h3
              style={{
                display: "flex",
                marginTop: "10vh",
                justifyContent: "center",
              }}
            >
              Mens
            </h3>
            <a
              href="/shop/products"
              style={{ float: "right", marginRight: "20px", color: "blue" }}
            >
              View More...
            </a>

            <div
              className="product-conatiner"
              style={{
                width: "100%",
                margin: "10px 0",
                display: "flex",
                justifyContent: "center",
              }}
            >
              {/*MAP WILL COME HERE */}
              {this.state.productLoaded &&
                this.state.list.map((element, index) => (
                  <Col span={6}>
                    <SingleProduct item={element} />
                  </Col>
                ))}
            </div>

            <h3
              style={{
                display: "flex",
                marginTop: "10vh",
                justifyContent: "center",
              }}
            >
              Womens
            </h3>
            <a
              href="/shop/womens"
              style={{ float: "right", marginRight: "20px", color: "blue" }}
            >
              View More...
            </a>

            <div
              className="product-conatiner"
              style={{
                width: "100%",
                margin: "10px 0",
                display: "flex",
                justifyContent: "center",
              }}
            >
              {/*MAP WILL COME HERE */}
              {this.state.productLoaded &&
                this.state.list.map((element, index) => (
                  <Col span={6}>
                    <SingleProduct item={element} />
                  </Col>
                ))}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;
