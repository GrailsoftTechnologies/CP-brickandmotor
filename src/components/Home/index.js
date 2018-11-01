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
      </Container>
    );
  }
}

export default Home;
