import React from 'react'
import Header from '../components/Header';
import Carousel from '../components/Carousel';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import Guides from '../components/Guides';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="App">
      <Header />
      <Carousel />
      <Services />
      <Testimonials />
      <Guides />
      <Footer />
    </div>
  )
}

export default Index