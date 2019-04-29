import React from 'react';
import { Container, Col, Row } from 'reactstrap';

export default function Menu(props){
  return(
    <Container className='Menu'>
      <Row>
        <Col>
          <h1>|BRICK AND MOTOR|</h1>
          <h2>TEXT OR CALL</h2>
          <a href="tel:+19719986575"><h3>[ 971 ] 998 - 6575 </h3></a>
          <h2>TO PLACE AN ORDER</h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <h1>|WOOD FIRED PIZZA|</h1>
          <Container>
            <Row>
              <Col sm={12}>
                <h2>|WHOLE PIES|</h2>
              </Col>
            </Row>
            <Row>
              <Col sm={6}>
                <h3>9 CHEESE/MARG</h3>
                <h3>11 PEPPERONI</h3>
              </Col>
              <Col sm={6}>
                  <h3>12 VEGGI SPECIAL</h3>
                  <h3>13 MEAT SPECIAL</h3>
              </Col>
            </Row>
            <Row>
              <Col sm={12}>
                <h2>|HALF PIE SLICES|</h2>
              </Col>
            </Row>
            <Row>
              <Col sm={6}>
                <h3>5 CHEESE</h3>
              </Col>
              <Col sm={6}>
                  <h3>6 PEPPERONI</h3>
              </Col>
            </Row>
            <Row>
              <Col sm={12}>
                <h2>|SIDES AND SALADS|</h2>
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col sm={6}>
                  <h3>4 CAESAR</h3>
              </Col>
              <Col sm={6}>
                <h3>4 CAPRESE</h3>
              </Col>
              <Col sm={6}>
                <h3>5 BREADSTICKS</h3>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
}
