import React from 'react';
import { Container, Col, Row } from 'reactstrap';

export default function About(props){
  return(
    <Container className="About">
      <Row>
        <Col>
          <h3>Brick and Motor is a wood fired pizza food cart located at Billy Ray's Dive on NE MLK Jr. Blvd and Thompson St. Our dough is hand mixed daily using a 12 hour ferment to increase flavor. We make everything to order using the freshest local ingredients. Come grab a pizza and sit down at Billy Ray's heated patio or have it delivered through Amazon Restaurants.</h3>
        </Col>
      </Row>
      <Row>
        <Col>
          <h1>Serving Satisfaction from 4 PM to LATE.</h1>
        </Col>
      </Row>
    </Container>
  );
};
