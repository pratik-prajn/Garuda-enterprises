import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './ServicesComponent.css';
import fastImg from './fast.jpg';
import moneyImg from './money.jpg';
function ServicesComponent() {
  return (
    <section id="services" className="services-section py-5">
      <Container>
        <h2 className="section-title text-center mb-5">Our Services</h2>
        <p className="section-subtitle text-center mb-5">Comprehensive import/export solutions for your international trade needs</p>
        
        <Row className="g-4">
          <Col md={6}>
            <div className="service-box" style={{backgroundImage: `url(${fastImg})`}}>
              <div className="service-overlay"></div>
              <div className="service-content">
                <h3>Expedited Processing</h3>
                <p>Accelerated customs clearance and priority documentation handling for time-sensitive shipments</p>
              </div>
            </div>
          </Col>
          
          <Col md={6}>
            <div className="service-box" style={{backgroundImage: "url('https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=800&q=80')"}}>
              <div className="service-overlay"></div>
              <div className="service-content">
                <h3>Compliance Expertise</h3>
                <p>Comprehensive knowledge of international trade regulations and customs requirements</p>
              </div>
            </div>
          </Col>
          
          <Col md={6}>
            <div className="service-box" style={{backgroundImage: `url(${moneyImg})`}}>
              <div className="service-overlay"></div>
              <div className="service-content">
                <h3>Cost-Effective</h3>
                <p>Competitive rates and optimized logistics solutions to reduce overhead and maximize profitability</p>
              </div>
            </div>
          </Col>
          
          <Col md={6}>
            <div className="service-box" style={{backgroundImage: "url('https://images.unsplash.com/photo-1560438718-eb61ede255eb?auto=format&fit=crop&w=800&q=80')"}}>
              <div className="service-overlay"></div>
              <div className="service-content">
                <h3>End-to-End Solutions</h3>
                <p>Complete supply chain management from sourcing to final delivery, with real-time shipment tracking</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default ServicesComponent;