import React, { useState } from 'react';
import AssessmentModal from '../pages/AssessmentModal'; // Make sure the path is correct

const CTA = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAssessmentSubmit = (formData) => {
    console.log("Final Assessment Data:", formData);
    // TODO: Send this data to your backend API to get the roadmap
    setIsModalOpen(false); // Close the modal after submission
    alert("Thank you! Your roadmap is being generated.");
  };

  return (
    <>
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-600/20 to-green-500/20 backdrop-blur-sm border border-blue-300/30 rounded-3xl p-12 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Career?
            </h2>
            <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
              Join thousands of students who have already discovered their ideal career path with our AI mentor.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              {/* This button now opens the modal */}
              <button 
                onClick={() => setIsModalOpen(true)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Start Free Assessment →
              </button>
              <button className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-all duration-300">
                Learn More
              </button>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-8 justify-center text-blue-200">
              <div className="flex items-center gap-2">
                <span className="text-green-400">✓</span>
                Free to start
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-400">✓</span>
                No credit card required
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-400">✓</span>
                Personalized results
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conditionally render the modal */}
      {isModalOpen && (
        <AssessmentModal 
          onClose={() => setIsModalOpen(false)} 
          onSubmit={handleAssessmentSubmit} 
        />
      )}
    </>
  );
};

export default CTA;