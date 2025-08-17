import React from 'react';

const Features = () => {
  const features = [
    {
      icon: "🧠",
      title: "AI Skill Analysis",
      description: "Advanced NLP algorithms analyze your resume, transcript, and experience to identify your unique skill profile."
    },
    {
      icon: "🗺️",
      title: "Career Path Mapping",
      description: "Discover personalized career tracks with detailed roadmaps tailored to your goals and current capabilities."
    },
    {
      icon: "📊",
      title: "Skill Gap Analysis",
      description: "Identify exactly what skills you need to develop to reach your target career position."
    },
    {
      icon: "⚡",
      title: "Smart Recommendations",
      description: "Get curated course suggestions, certifications, and project ideas to accelerate your growth."
    },
    {
      icon: "📈",
      title: "Progress Tracking",
      description: "Monitor your career development with dynamic progress tracking and milestone celebrations."
    },
    {
      icon: "👥",
      title: "Industry Insights",
      description: "Access real-time market data and trends to make informed career decisions."
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">
            Powered by Advanced AI
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Our comprehensive platform combines cutting-edge technology with personalized 
            guidance to accelerate your career development.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} 
                 className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
              <p className="text-blue-200 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;