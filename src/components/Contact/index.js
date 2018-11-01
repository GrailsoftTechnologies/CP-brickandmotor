import React, { Component } from "react";
import { Container, Col, Row } from 'reactstrap';
import "./styles.css";

import GoogleMapFrame from '../GoogleMapFrame';

class Contact extends Component {
  render() {
    return (
      <Container className="Contact">
      <Row>
        <Col>
          <h1>Call</h1>
          <a href="tel:+19719886575"><h3 style={{paddingTop: "2.5vh"}}>[971]-988-6575 </h3></a>
        </Col>
        <Col>
          <a
            href="https://www.amazon.com/restaurants/brick-and-motor-portland/d/B079J6MDKB?ref_=amzrst_b_B079J6MDKB_23"
            alt="link to amazon delivery"
            target="_blank" rel="noreferrer noopener"
          >
            <h1>Amazon</h1>
            <h1>Delivery</h1>
          </a>
        </Col>
      </Row>
      <Row>
        <Col>
          <GoogleMapFrame name="Brick+And+Motor+Pizza" location="Portland+OR"/>
        </Col>
      </Row>
      <Row>
        <Col>
          <a href="mailto:info@brickandmotorpdx.com"><h4>info@brickandmotorpdx.com</h4></a>
        </Col>
      </Row>
    </Container>
    );
  }
}

export default Contact;
