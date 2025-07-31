import React from 'react'
import NavBar from './header/NavBar'
import HeroSection from './body/HeroSection';
import ServicesSection from './body/ServicesSection';
import TeamSection from './body/TeamSection';
import TestimonialsSection from './body/TestimonialsSection';
import MapSection from './body/MapSection';
import AppointmentForm from './body/AppointmentForm';

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
    </>
  );
}
