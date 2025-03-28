import React from 'react';
import Hero from '../compoents/Hero';
import Navbar from '../compoents/Navbar';
import About from '../compoents/About';
import ProductList from '../compoents/ProductList';
import Contact from '../compoents/Contact';
import Footer from '../compoents/Footer';
const Home = () => {
  return (
    <div>
      <Navbar />
      
      <section id="home">
        <Hero />
      </section>
      
      <section id="about">
        <About />
      </section>
      
      <section id="products">
        <ProductList />
      </section>
        
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </div>
  );
};

export default Home;
