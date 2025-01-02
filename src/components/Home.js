/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import SingleProduct from "./SingleProduct";
import { Col } from "antd";
import Footer from "./Footer";
import { EcommerceDataProvider } from "../DataProviders/DataProvider";

class Home extends Component {
  dataProvider = new EcommerceDataProvider();
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
    var products = [];
    this.dataProvider
      .getAllProducts()
      .then((res) => res.json())
      .then((val) => {
        val.map((item, id) => {
          products.push(item);
        });
      });
    this.setState({ products: products });
  }

  render() {
    console.log("Home products : ", this.state.products);
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

              {this.state.products &&
                this.state.products.map((element, index) => (
                  <div>
                    {element.category === "jewelery" && (
                      // <Col span={6} key={index}>
                      <SingleProduct item={element} />
                      // </Col>
                    )}
                  </div>
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
              {this.state.products &&
                this.state.products.map((element, index) => (
                  <div>
                    {element.category === "electronics" && (
                      // <Col span={6} key={index}>
                      <SingleProduct item={element} />
                      // </Col>
                    )}
                  </div>
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
              {this.state.products &&
                this.state.products.map((element, index) => (
                  <div>
                    {element.category === "men's clothing" && (
                      // <Col span={6} key={index}>
                      <SingleProduct item={element} />
                      // </Col>
                    )}
                  </div>
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
              {this.state.products &&
                this.state.products.map((element, index) => (
                  <div>
                    {element.category === "women's clothing" && (
                      // <Col span={6} key={index}>
                      <SingleProduct item={element} />
                      // </Col>
                    )}
                  </div>
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
