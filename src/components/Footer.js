import { Card, Col, Row } from "antd";
import React, { Component } from "react";
import { navitems } from "./Navigation/NavItems";

export class Footer extends Component {
  render() {
    return (
      <Card>
        <div>
          <Row gutter={20}>
            <Col span={24}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  margine: "auto",
                  textAlign: "center",
                  width: "100%",
                }}
              >
                <h5>Links</h5>
                <br></br>
                <ul>
                  {navitems.map((item) => {
                    return (
                      <li key={item.id} style={{ listStyle: "none" }}>
                        <a href={item.path}>{item.title}</a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </Col>
          </Row>
        </div>
      </Card>
    );
  }
}

export default Footer;
