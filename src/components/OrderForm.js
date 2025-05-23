import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import './OrderForm.css';

function OrderForm() {
  const [validated, setValidated] = useState(false);
  
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    
    setValidated(true);
    // Add your form submission logic here
  };
  
  return (
    <div id="order-form" className="order-form-section py-5">
      <Container>
        <h2 className="text-center mb-4">Order Form</h2>
        <p className="text-center mb-5">Fill out the form below to place an order or request a quote for our import/export services.</p>
        
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Card className="mb-4">
            <Card.Header as="h5">Client Information</Card.Header>
            <Card.Body>
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Full Name *</Form.Label>
                    <Form.Control required type="text" placeholder="Enter your full name" />
                    <Form.Control.Feedback type="invalid">Please provide your full name.</Form.Control.Feedback>
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Company Name *</Form.Label>
                    <Form.Control required type="text" placeholder="Enter your company name" />
                    <Form.Control.Feedback type="invalid">Please provide your company name.</Form.Control.Feedback>
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Contact Number *</Form.Label>
                    <Form.Control required type="tel" placeholder="Enter your phone number" />
                    <Form.Control.Feedback type="invalid">Please provide a valid contact number.</Form.Control.Feedback>
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Email Address *</Form.Label>
                    <Form.Control required type="email" placeholder="Enter your email address" />
                    <Form.Control.Feedback type="invalid">Please provide a valid email address.</Form.Control.Feedback>
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col md={12}>
                  <Form.Group className="mb-3">
                    <Form.Label>Country *</Form.Label>
                    <Form.Control required type="text" placeholder="Enter your country" />
                    <Form.Control.Feedback type="invalid">Please provide your country.</Form.Control.Feedback>
                  </Form.Group>
                </Col>
              </Row>
            </Card.Body>
          </Card>

          <Card className="mb-4">
            <Card.Header as="h5">Product Details</Card.Header>
            <Card.Body>
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Product Name *</Form.Label>
                    <Form.Control required type="text" placeholder="Enter product name" />
                    <Form.Control.Feedback type="invalid">Please provide the product name.</Form.Control.Feedback>
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Quantity *</Form.Label>
                    <Form.Control required type="text" placeholder="Enter quantity" />
                    <Form.Control.Feedback type="invalid">Please specify the quantity.</Form.Control.Feedback>
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>HS Code (if known)</Form.Label>
                    <Form.Control type="text" placeholder="Enter HS Code (optional)" />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Target Price</Form.Label>
                    <Form.Control type="text" placeholder="Enter target price (optional)" />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col md={12}>
                  <Form.Group className="mb-3">
                    <Form.Label>Preferred Packaging</Form.Label>
                    <Form.Control type="text" placeholder="Describe your packaging requirements" />
                  </Form.Group>
                </Col>
              </Row>
            </Card.Body>
          </Card>

          <Card className="mb-4">
            <Card.Header as="h5">Shipping Information</Card.Header>
            <Card.Body>
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Destination Port *</Form.Label>
                    <Form.Control required type="text" placeholder="Enter destination port" />
                    <Form.Control.Feedback type="invalid">Please provide the destination port.</Form.Control.Feedback>
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Mode of Transport *</Form.Label>
                    <Form.Select required aria-label="Select transport mode">
                      <option value="">Select transport mode</option>
                      <option value="Air">Air</option>
                      <option value="Sea">Sea</option>
                      <option value="Land">Land</option>
                      <option value="Multimodal">Multimodal</option>
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">Please select a transport mode.</Form.Control.Feedback>
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col md={12}>
                  <Form.Group className="mb-3">
                    <Form.Label>Preferred Delivery Time</Form.Label>
                    <Form.Control type="text" placeholder="Enter your preferred delivery timeline" />
                  </Form.Group>
                </Col>
              </Row>
            </Card.Body>
          </Card>

          <Card className="mb-4">
            <Card.Header as="h5">Other Details</Card.Header>
            <Card.Body>
              <Row>
                <Col md={12}>
                  <Form.Group className="mb-3">
                    <Form.Label>Special Instructions or Comments</Form.Label>
                    <Form.Control as="textarea" rows={4} placeholder="Any special requirements or comments?" />
                  </Form.Group>
                </Col>
              </Row>
            </Card.Body>
          </Card>

          <div className="text-center">
            <Button variant="primary" type="submit" size="lg" className="px-5">
              Submit Order Request
            </Button>
          </div>
        </Form>
      </Container>
    </div>
  );
}

export default OrderForm;