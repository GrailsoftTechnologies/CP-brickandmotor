import React, { Component } from 'react';
import { Container, Col, Row } from 'reactstrap';
import './styles.css';


class Home extends Component {
  render() {
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
            <h4>FRI - SAT 4 PM - 230 AM</h4>
            <h4>SUN 4 PM - 12 AM</h4>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;
