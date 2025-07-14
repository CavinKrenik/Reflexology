import React from 'react';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import ReflexologyInfoSection from './ReflexologyInfoSection';
import VideoSection from './VideoSection';
import BenefitsSection from './BenefitsSection';
import TreatmentRoomSection from './TreatmentRoomSection';
import ServicesSection from './ServicesSection';
import TestimonialsSection from './TestimonialsSection';
import ContactSection from './ContactSection';
import Footer from './Footer';

const AppLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-pink-50">
      <HeroSection />
      <AboutSection />
      <ReflexologyInfoSection />
      <VideoSection />
      <BenefitsSection />
      <TreatmentRoomSection />
      <ServicesSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export { AppLayout };
export default AppLayout;