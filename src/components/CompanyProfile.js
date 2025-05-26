import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './CompanyProfile.css';

function CompanyProfile() {
  return (
    <section id="about" className="company-profile-section py-5">
      <div className="profile-bg-element"></div>
      <Container>
        <Row>
          <Col lg={10} className="mx-auto">
            <div className="section-header text-center mb-5">
              <h2 className="section-title">Our Company Profile</h2>
              <div className="divider mx-auto"></div>
              <p className="section-subtitle">Building bridges across global markets</p>
            </div>
            
            <Card className="profile-card mb-5 shadow-lg">
              <Card.Body className="p-md-5">
                <Row>
                  <Col lg={4} className="mb-4 mb-lg-0">
                    <div className="company-logo-container">
                      <div className="company-logo">
                        <span>GARUDA</span>
                        <span className="enterprises">ENTERPRISES</span>
                      </div>
                    </div>
                  </Col>
                  <Col lg={8}>
                    <h3 className="card-heading">About Garuda Enterprises</h3>
                    <p className="profile-text">
                      Garuda Enterprises is a leading import/export company established with a commitment to delivering 
                      excellence in global trade. We specialize in sourcing and distributing high-quality products 
                      across international markets, maintaining the highest standards of reliability and customer service.
                    </p>
                    <p className="profile-text">
                      With years of experience in international trade, we have built strong relationships with 
                      manufacturers and suppliers worldwide, ensuring our clients receive the best products at 
                      competitive prices with timely delivery.
                    </p>
                  </Col>
                </Row>
              </Card.Body>
            </Card>

            <Row className="g-4 mb-5">
              <Col md={6}>
                <Card className="h-100 shadow mission-vision-card">
                  <Card.Body className="p-4">
                    <div className="icon-container mb-3">
                      <i className="fas fa-rocket icon"></i>
                    </div>
                    <h5 className="card-title">Our Mission</h5>
                    <div className="divider mb-3"></div>
                    <p className="card-text">
                      To bridge global markets by providing reliable, efficient, and cost-effective 
                      import/export solutions while maintaining the highest standards of quality and compliance.
                    </p>
                  </Card.Body>
                </Card>
              </Col>
              
              <Col md={6}>
                <Card className="h-100 shadow mission-vision-card">
                  <Card.Body className="p-4">
                    <div className="icon-container mb-3">
                      <i className="fas fa-eye icon"></i>
                    </div>
                    <h5 className="card-title">Our Vision</h5>
                    <div className="divider mb-3"></div>
                    <p className="card-text">
                      To become the most trusted partner in international trade, known for our integrity, 
                      innovation, and commitment to customer success across all global markets.
                    </p>
                  </Card.Body>
                </Card>
              </Col>
            </Row>

            <Card className="profile-card shadow-lg">
              <Card.Header className="benefits-header">
                <h4>Why Choose Garuda Enterprises?</h4>
              </Card.Header>
              <Card.Body className="p-md-5">
                <Row>
                  <Col md={6}>
                    <ul className="benefits-list">
                      <li>
                        <span className="benefit-icon">
                          <i className="fas fa-globe-asia"></i>
                        </span>
                        <span className="benefit-text">Extensive global network of suppliers</span>
                      </li>
                      <li>
                        <span className="benefit-icon">
                          <i className="fas fa-certificate"></i>
                        </span>
                        <span className="benefit-text">Comprehensive quality assurance</span>
                      </li>
                      <li>
                        <span className="benefit-icon">
                          <i className="fas fa-tags"></i>
                        </span>
                        <span className="benefit-text">Competitive pricing and flexible terms</span>
                      </li>
                      <li>
                        <span className="benefit-icon">
                          <i className="fas fa-balance-scale"></i>
                        </span>
                        <span className="benefit-text">Expert knowledge of international regulations</span>
                      </li>
                    </ul>
                  </Col>
                  <Col md={6}>
                    <ul className="benefits-list">
                      <li>
                        <span className="benefit-icon">
                          <i className="fas fa-shipping-fast"></i>
                        </span>
                        <span className="benefit-text">Timely delivery and logistics support</span>
                      </li>
                      <li>
                        <span className="benefit-icon">
                          <i className="fas fa-headset"></i>
                        </span>
                        <span className="benefit-text">Dedicated customer service team</span>
                      </li>
                      <li>
                        <span className="benefit-icon">
                          <i className="fas fa-tools"></i>
                        </span>
                        <span className="benefit-text">Customized solutions for unique requirements</span>
                      </li>
                      <li>
                        <span className="benefit-icon">
                          <i className="fas fa-leaf"></i>
                        </span>
                        <span className="benefit-text">Strong commitment to sustainability</span>
                      </li>
                    </ul>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default CompanyProfile;