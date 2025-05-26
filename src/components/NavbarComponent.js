import React, { useState } from 'react';
import { Navbar, Nav, Container, Button, Modal } from 'react-bootstrap';

function NavbarComponent() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top" className="py-2">
        <Container>
          <Navbar.Brand href="#home" className="d-flex align-items-center">
            <i className="fas fa-dragon me-2"></i>
            Garuda enterprises
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home"><i className="fas fa-home me-1"></i> Home</Nav.Link>
              <Nav.Link href="#services"><i className="fas fa-cogs me-1"></i> Services</Nav.Link>
              <Nav.Link href="#products"><i className="fas fa-box-open me-1"></i> Products</Nav.Link>
              <Nav.Link href="#about"><i className="fas fa-building me-1"></i> About Us</Nav.Link>
              <Nav.Link href="#contact"><i className="fas fa-envelope me-1"></i> Contact</Nav.Link>
            </Nav>
            
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title><i className="fas fa-shipping-fast me-2"></i>Request a Quote</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Form fields for quote request */}
          <p>Please fill out the form below to request a quote for our import/export services.</p>
          {/* You can add a form here later */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={() => setShowModal(false)}>
            Submit Request
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default NavbarComponent;