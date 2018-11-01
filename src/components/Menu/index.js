import React, { Component } from 'react';
import { Container, Col, Row } from 'reactstrap';
import './styles.css';

class Menu extends Component {
render() {
  return(
    <Container className='Menu'>
      <Row>
        <Col>
          <h1>|BRICK AND MOTOR|</h1>
          <h2>TEXT OR CALL</h2>
          <a href="tel:+19719886575"><h4>[ 971 ] 988 - 6575 </h4></a>
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
                <h4>9 CHEESE/MARG</h4>
                <h4>11 PEPPERONI</h4>
              </Col>
              <Col sm={6}>
                  <h4>12 VEGGI SPECIAL</h4>
                  <h4>13 MEAT SPECIAL</h4>
              </Col>
            </Row>
            <Row>
              <Col sm={12}>
                <h2>|HALF PIE SLICES|</h2>
              </Col>
            </Row>
            <Row>
              <Col sm={6}>
                <h4>5 CHEESE</h4>
              </Col>
              <Col sm={6}>
                  <h4>6 PEPPERONI</h4>
              </Col>
            </Row>
            <Row>
              <Col sm={12}>
                <h2>|SIDES AND SALADS|</h2>
              </Col>
            </Row>
            <Row>
              <Col sm={6}>
                <h4>5 BREADSTICKS</h4>
              </Col>
              <Col sm={6}>
                  <h4>4 CAESAR</h4>
                  <h4>4 CAPRESE</h4>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2>|HOURS|</h2>
          <h4>WED - THURS 4 PM - 1 AM</h4>
          <h4>FRI - SAT 4 PM - 230 AM</h4>
          <h4>SUN 4 PM - 12 AM</h4>
        </Col>
      </Row>
    </Container>
    );
  }
}

export default Menu;
