import React from 'react';

// Corrected import path for ThreeJSBackground (one level up from 'pages')
import ThreeJSBackground from '../ThreeJSBackground'; 

// Corrected import paths for UI components (inside the 'UI' subdirectory)
import Hero from '../UI/Hero';
import Features from '../UI/Features';
import HowItWorks from '../UI/HowItWorks';
import CTA from '../UI/CTA';
import Footer from '../UI/Footer';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      <ThreeJSBackground />
      
      <div className="relative z-10">
        <Hero />
        <Features />
        <HowItWorks />
        <CTA />
        <Footer />
      </div>
    </div>
  );
};

export default LandingPage;