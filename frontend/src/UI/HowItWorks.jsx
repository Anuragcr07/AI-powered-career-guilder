import React from 'react';

const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      icon: "📄",
      title: "Create Your Profile",
      description: "Upload your resume or manually input your academic and professional background."
    },
    {
      number: 2,
      icon: "💬",
      title: "Take Assessment",
      description: "Complete our comprehensive skills and interests assessment questionnaire."
    },
    {
      number: 3,
      icon: "🎯",
      title: "Get Recommendations",
      description: "Receive personalized career paths and development roadmaps powered by AI."
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-5xl font-bold text-white mb-6">
          Start Your Career Journey
        </h2>
        <p className="text-xl text-blue-200 mb-16 max-w-3xl mx-auto">
          Get started in just three simple steps and unlock your career potential today.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 relative">
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-500/20 to-indigo-500/20 backdrop-blur-sm border border-blue-300/30 rounded-3xl p-8 h-full">
                  <div className="text-6xl mb-6">{step.icon}</div>
                  <div className="bg-orange-500 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-6 mx-auto">
                    {step.number}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                  <p className="text-blue-200 leading-relaxed">{step.description}</p>
                </div>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:flex items-center justify-center absolute top-1/2 transform -translate-y-1/2" 
                     style={{ left: `${(index + 1) * 33.33 - 16.66}%` }}>
                  <div className="text-blue-400 text-3xl">→</div>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;