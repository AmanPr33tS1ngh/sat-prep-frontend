import React, { useState } from 'react'
import Header from '../components/Header';
import Carousel from '../components/Carousel';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import Guides from '../components/Guides';
import Footer from '../components/Footer';

const Index = () => {
  const [openLead, setOpenLead] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

  const openLeadModal = (course) => {
    setSelectedCourse(course);
    setOpenLead(!openLead);
  }

  return (
    <div className="App">
      <Header />
      <Carousel openLeadModal={openLeadModal} selectedCourse={selectedCourse} openLead={openLead} />
      <Services openLeadModal={openLeadModal} selectedCourse={selectedCourse} openLead={openLead} />
      <Testimonials />
      <Guides />
      <Footer />
    </div>
  )
}

export default Index