import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/NavbarComponent';
import HeroSection from './components/HeroSection';
import OrderForm from './components/OrderForm';
import ServicesComponent from './components/ServicesComponent';
import FooterComponent from './components/FooterComponent';

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <HeroSection />
      
      <ServicesComponent />
    <OrderForm />
      <FooterComponent />
    </div>
  );
}

export default App;
