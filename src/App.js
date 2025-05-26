import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/NavbarComponent';
import HeroSection from './components/HeroSection';

import ProductCarousel from './components/ProductCarousel';
import CompanyProfile from './components/CompanyProfile';
import ServicesComponent from './components/ServicesComponent';
import FooterComponent from './components/FooterComponent';

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <HeroSection />
      
      
      <ProductCarousel />
      <ServicesComponent />
      <CompanyProfile />
    
      <FooterComponent />
    </div>
  );
}

export default App;
