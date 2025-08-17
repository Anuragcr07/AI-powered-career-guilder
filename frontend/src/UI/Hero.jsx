import React from 'react';

const Hero = () => {
  const stats = [
    { number: "500+", label: "Career Paths" },
    { number: "94%", label: "Success Rate" },
    { number: "10M+", label: "AI Insights" }
  ];

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
      <div className="bg-blue-500/20 backdrop-blur-sm border border-blue-300/30 rounded-full px-6 py-2 mb-8">
        <span className="text-blue-300 text-sm font-medium">🤖 AI-Powered Career Guidance</span>
      </div>
      
      <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight">
        Your Personalized
        <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent block">
          Career Mentor
        </span>
      </h1>
      
      <p className="text-xl text-blue-100 max-w-4xl mb-12 leading-relaxed">
        Unlock your potential with AI-driven career analysis. Get personalized 
        recommendations, skill gap insights, and a roadmap to your dream career.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4 mb-16">
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
          Start Your Journey →
        </button>
        <button className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-all duration-300">
          Watch Demo
        </button>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-12 text-center">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
            <div className="text-blue-300">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;