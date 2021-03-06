import React from "react";
import { Container, Col, Row } from 'reactstrap';

import GoogleMapFrame from '../GoogleMapFrame';

export default function Contact(props){
  return(
    <Container className="Contact">
      <Row>
        <Col md>
          <a href="tel:+19719986575">
            <h1>Call</h1>
            <h3 style={{paddingTop: "2.5vh"}}>[971]-998-6575</h3>
          </a>
        </Col>
        <Col md>
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
          <h1>Find us next to Billy Ray's Dive</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <GoogleMapFrame name="Brick+and+Motor+Pizza" location="Portland+OR"/>
        </Col>
      </Row>
      <Row>
        <Col>
          <a href="mailto:info@brickandmotorpdx.com"><h4>info@brickandmotorpdx.com</h4></a>
        </Col>
      </Row>
    </Container>
  );
};
