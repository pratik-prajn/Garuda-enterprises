import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './HeroSection.css';

function HeroSection() {
  return (
    <div id="home" className="hero-section">
      <div className="hero-overlay"></div>
      <Container className="hero-content">
        <Row className="align-items-center">
          <Col lg={6} className="text-white hero-text">
            <h1>Garuda enterprises</h1>
            <h2>Delivering Reliability Every Day</h2>
            <p className="lead">
              Fast, secure, and eco-friendly delivery services for businesses and individuals.
              Trusted by many of customers nationwide.
            </p>
            <div className="hero-buttons">
              <a href="https://www.indiapost.gov.in/_layouts/15/dop.portal.tracking/trackconsignment.aspx"><Button variant="primary" size="lg" className="me-3">Track Your Package</Button></a>
             
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HeroSection;