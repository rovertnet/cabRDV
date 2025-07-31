import React from 'react'
import NavBar from './header/NavBar'
import HeroSection from './body/HeroSection';
import ServicesSection from './body/ServicesSection';
import TeamSection from './body/TeamSection';

export default function Home() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <ServicesSection />
      <TeamSection />
    </>
  );
}
