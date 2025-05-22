import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './FooterComponent.css';

function FooterComponent() {
  return (
    <footer id="contact" className="site-footer bg-dark text-white py-4">
      <Container>
        <Row>
          <Col md={4}>
            <h5>Garuda enterprises 
</h5>
            <p>Your trusted partner for all delivery needs. We pride ourselves on speed, reliability, and excellent customer service.</p>
          </Col>
          <Col md={4}>
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#home" className="text-white">Home</a></li>
              <li><a href="#services" className="text-white">Services</a></li>
              <li><a href="#tracking" className="text-white">Track Package</a></li>
              <li><a href="#about" className="text-white">About Us</a></li>
              <li><a href="#contact" className="text-white">Contact</a></li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Contact Us</h5>
            <p>2310/25 Mahadevpura main road<br />Badavala Nagar, B Narayanapura<br />Bengaluru, Karnataka, 560048<br/>Phone :9036034300
 <br />Email:garudaenterprises823@gmail.com</p>
            <div className="social-icons">
              <a href="#" className="text-white me-2"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="text-white me-2"><i className="fab fa-twitter"></i></a>
              <a href="#" className="text-white me-2"><i className="fab fa-instagram"></i></a>
              <a href="#" className="text-white"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </Col>
        </Row>
        <hr />
        <div className="text-center">
          <p>&copy; {new Date().getFullYear()} Swift Couriers. All Rights Reserved.</p>
        </div>
      </Container>
    </footer>
  );
}

export default FooterComponent;