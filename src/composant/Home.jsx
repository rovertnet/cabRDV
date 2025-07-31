import React from 'react'
import NavBar from './header/NavBar'
import HeroSection from './body/HeroSection';
import ServicesSection from './body/ServicesSection';
import TeamSection from './body/TeamSection';
import TestimonialsSection from './body/TestimonialsSection';
import MapSection from './body/MapSection';
import AppointmentForm from './body/AppointmentForm';
import BlogSection from './body/BlogSection';
import ContactSection from './body/ContactSection';
import FloatingWhatsApp from './body/FloatingWhatsApp';

export default function Home() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <ServicesSection />
      <TeamSection />
      <TestimonialsSection />
      <MapSection />
      <AppointmentForm />
      <BlogSection />
      <ContactSection />
      <FloatingWhatsApp />
    </>
  );
}
