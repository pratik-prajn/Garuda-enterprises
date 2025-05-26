import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './FooterComponent.css';

function FooterComponent() {
  return (
    <footer id="contact" className="site-footer">
      <div className="footer-top py-5">
        <Container>
          <Row className="gy-4">
            <Col lg={4} md={6}>
              <div className="footer-info">
                <h3>Garuda Enterprises</h3>
                <p className="company-description">
                  Reliable, efficient, and compliant import/export solutions for businesses worldwide
                </p>
                <div className="footer-newsletter mt-4">
                  <h4>Join Our Newsletter</h4>
                  <div className="d-flex">
                    <input type="email" className="form-control" placeholder="Your Email" />
                    <button className="btn btn-primary ms-2">Subscribe</button>
                  </div>
                </div>
              </div>
            </Col>

            <Col lg={2} md={6} className="footer-links">
              <h4>Quick Links</h4>
              <ul className="list-unstyled">
                <li><i className="fas fa-chevron-right me-2"></i><a href="#home">Home</a></li>
                <li><i className="fas fa-chevron-right me-2"></i><a href="#services">Services</a></li>
                <li><i className="fas fa-chevron-right me-2"></i><a href="#products">Products</a></li>
                <li><i className="fas fa-chevron-right me-2"></i><a href="#about">About Us</a></li>
                <li><i className="fas fa-chevron-right me-2"></i><a href="#contact">Contact</a></li>
              </ul>
            </Col>

            <Col lg={3} md={6} className="footer-links">
              <h4>Our Services</h4>
              <ul className="list-unstyled">
                <li><i className="fas fa-chevron-right me-2"></i><a href="#services">Import Solutions</a></li>
                <li><i className="fas fa-chevron-right me-2"></i><a href="#services">Export Management</a></li>
                <li><i className="fas fa-chevron-right me-2"></i><a href="#services">Customs Clearance</a></li>
                <li><i className="fas fa-chevron-right me-2"></i><a href="#services">Logistics Support</a></li>
                <li><i className="fas fa-chevron-right me-2"></i><a href="#services">Trade Documentation</a></li>
              </ul>
            </Col>

            <Col lg={3} md={6}>
              <div className="footer-contact">
                <h4>Contact Us</h4>
                <p>
                  <i className="fas fa-map-marker-alt me-2"></i>
                  2310/25 Mahadevpura main road<br />
                  Badavala Nagar, B Narayanapura<br />
                  Bengaluru, Karnataka, 560048<br />
                </p>
                <p>
                  <i className="fas fa-phone-alt me-2"></i> +91 90360 34300<br />
                  <i className="fas fa-envelope me-2"></i> garudaenterprises823@gmail.com
                </p>
                <div className="social-links mt-3">
                  <a href="#" className="facebook"><i className="fab fa-facebook-f"></i></a>
                  <a href="#" className="twitter"><i className="fab fa-twitter"></i></a>
                  <a href="#" className="instagram"><i className="fab fa-instagram"></i></a>
                  <a href="#" className="linkedin"><i className="fab fa-linkedin-in"></i></a>
                  <a href="#" className="whatsapp"><i className="fab fa-whatsapp"></i></a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="footer-bottom py-3">
        <Container>
          <div className="d-flex justify-content-between align-items-center flex-wrap">
            <div className="copyright">
              &copy; {new Date().getFullYear()} <strong>Garuda Enterprises</strong>. All Rights Reserved
            </div>
            <div className="credits">
              <a href="#privacy">Privacy Policy</a> | <a href="#terms">Terms of Service</a>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}

export default FooterComponent;