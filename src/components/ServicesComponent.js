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
        <p className="section-subtitle text-center mb-5">Experience delivery excellence with our professional courier services</p>
        
        <Row className="g-4">
          <Col md={6}>
            <div className="service-box" style={{backgroundImage: `url(${fastImg})`}}>
              <div className="service-overlay"></div>
              <div className="service-content">
                <h3>Fast</h3>
                <p>Express delivery options with same-day and next-day services</p>
              </div>
            </div>
          </Col>
          
          <Col md={6}>
            <div className="service-box" style={{backgroundImage: "url('https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=800&q=80')"}}>
              <div className="service-overlay"></div>
              <div className="service-content">
                <h3>Secure</h3>
                <p>Package tracking and insurance for complete peace of mind</p>
              </div>
            </div>
          </Col>
          
          <Col md={6}>
            <div className="service-box" style={{backgroundImage: `url(${moneyImg})`}}>
              <div className="service-overlay"></div>
              <div className="service-content">
                <h3>Affordable</h3>
                <p>Competitive rates with flexible pricing plans for all budgets</p>
              </div>
            </div>
          </Col>
          
          <Col md={6}>
            <div className="service-box" style={{backgroundImage: "url('https://images.unsplash.com/photo-1560438718-eb61ede255eb?auto=format&fit=crop&w=800&q=80')"}}>
              <div className="service-overlay"></div>
              <div className="service-content">
                <h3>Easy</h3>
                <p>Simple booking process and user-friendly tracking system</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default ServicesComponent;