import React from 'react';
import { Container, Col, Row } from 'reactstrap';

import amazon from '../../img/prime.jpg';


export default function Home(props){
  return (
    <Container className="Home">
      <Row>
        <Col>
          <h1>Brick</h1>
          <h3>and</h3>
          <h1>Motor</h1>
          <h3>Wood Fired Pizza</h3>
        </Col>
      </Row>
      <hr/>
      <Row>
        <Col>
          <h2>|HOURS|</h2>
          <h4>WED - THURS 4 PM - 1 AM</h4>
          <h4>FRI - SAT 4 PM - 2:30 AM</h4>
          <h4>SUN 4 PM - 12 AM</h4>
        </Col>
      </Row>
      <hr/>
      <Row>
        <Col>
          <a href="https://www.amazon.com/restaurants/brick-and-motor-portland/d/B079J6MDKB">
            <h2>Order Online</h2>
            <img src={amazon} style={{maxWidth: "30vh"}} alt="amazon delivery"></img>
          </a>
        </Col>
      </Row>
    </Container>
  );
}
