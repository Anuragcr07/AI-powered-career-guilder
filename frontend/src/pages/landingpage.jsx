import React from 'react';
import ThreeJSBackground from '../ThreeJSBackground'; 
import Hero from '../UI/Hero';
import Features from '../UI/Features';
import HowItWorks from '../UI/HowItWorks';
import CTA from '../UI/CTA';
import Footer from '../UI/Footer';

const LandingPage = ({ onStartAssessment }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      <ThreeJSBackground />
      
      <div className="relative z-10">
        <Hero onStartAssessment={onStartAssessment} />
        <Features />
        <HowItWorks />
        <CTA onStartAssessment={onStartAssessment} />
        <Footer />
      </div>
    </div>
  );
};

export default LandingPage;