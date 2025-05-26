import React from 'react';
import { Container, Carousel, Row, Col } from 'react-bootstrap';
import './ProductCarousel.css';

function ProductCarousel() {
  return (
    <section id="products" className="products-section py-5">
      <Container>
        <h2 className="section-title text-center mb-5">Our Products</h2>
        <p className="section-subtitle text-center mb-5">Quality imported products for businesses and consumers worldwide</p>
        
        <Carousel className="product-carousel" indicators={true} controls={true}>
          <Carousel.Item>
            <div className="carousel-content">
              <Row className="align-items-center">
                <Col md={6}>
                  <div className="product-image">
                    <img 
                      src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80" 
                      alt="A4 Sheet Paper" 
                      className="img-fluid rounded"
                    />
                  </div>
                </Col>
                <Col md={6}>
                  <div className="product-info">
                    <h3>A4 Sheet Paper</h3>
                    <p>Premium quality A4 paper for offices, schools, and printing businesses. Available in various weights and finishes to meet your specific requirements.</p>
                    <ul>
                      <li>Multiple GSM options (70, 80, 90 GSM)</li>
                      <li>Bulk quantity available</li>
                      <li>High whiteness and smooth finish</li>
                      <li>Eco-friendly and sustainable sourcing</li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="carousel-content">
              <Row className="align-items-center">
                <Col md={6}>
                  <div className="product-image">
                    <img 
                      src="https://images.unsplash.com/photo-1578160112054-954a67602b88?auto=format&fit=crop&w=800&q=80" 
                      alt="Wooden Mugs" 
                      className="img-fluid rounded"
                    />
                  </div>
                </Col>
                <Col md={6}>
                  <div className="product-info">
                    <h3>Wooden Mugs</h3>
                    <p>Handcrafted wooden mugs made from sustainable materials. Perfect for cafes, restaurants, and eco-conscious consumers.</p>
                    <ul>
                      <li>Natural wood finish</li>
                      <li>Food-safe coating</li>
                      <li>Various sizes and designs</li>
                      <li>Customization options available</li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="carousel-content">
              <Row className="align-items-center">
                <Col md={6}>
                  <div className="product-image">
                    <img 
                      src="https://images.unsplash.com/photo-1452860606245-08befc0ff44b?auto=format&fit=crop&w=800&q=80" 
                      alt="Craft Items" 
                      className="img-fluid rounded"
                    />
                  </div>
                </Col>
                <Col md={6}>
                  <div className="product-info">
                    <h3>Craft Items</h3>
                    <p>Diverse collection of craft supplies and handmade items for creative projects, art studios, and retail stores.</p>
                    <ul>
                      <li>Art and craft supplies</li>
                      <li>Handmade decorative items</li>
                      <li>Educational craft kits</li>
                      <li>Seasonal and themed crafts</li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="carousel-content">
              <Row className="align-items-center">
                <Col md={6}>
                  <div className="product-image">
                    <img 
                      src="https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=800&q=80" 
                      alt="Toys" 
                      className="img-fluid rounded"
                    />
                  </div>
                </Col>
                <Col md={6}>
                  <div className="product-info">
                    <h3>Toys</h3>
                    <p>Safe, educational, and entertaining toys for children of all ages. Sourced from certified manufacturers with international quality standards.</p>
                    <ul>
                      <li>Educational and developmental toys</li>
                      <li>Safety certified products</li>
                      <li>Age-appropriate designs</li>
                      <li>Competitive wholesale pricing</li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </div>
          </Carousel.Item>
        </Carousel>
      </Container>
    </section>
  );
}

export default ProductCarousel;