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
            <h2>Global Trade Excellence</h2>
            <p className="lead">
              Reliable, efficient, and compliant import/export solutions for businesses worldwide. Trusted by companies across international markets.
            </p>
            <div className="hero-buttons">
              <a href="#order-form"><Button variant="primary" size="lg" className="me-3">Order</Button></a>
             
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HeroSection;