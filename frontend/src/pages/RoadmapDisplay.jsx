import React from 'react';

const RoadmapDisplay = ({ roadmap, onBack }) => {
  if (!roadmap) {
    return (
      <div className="flex flex-col items-center justify-center text-center p-8">
        <h2 className="text-3xl font-bold text-white mb-4">No Roadmap Data</h2>
        <p className="text-slate-400 mb-6">
          Please complete the assessment to generate your personalized roadmap.
        </p>
        <button 
          onClick={onBack} 
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-xl font-semibold transition-all"
        >
          Start Assessment
        </button>
      </div>
    );
  }

  const { threeMonthPlan, sixMonthPlan, twelveMonthPlan, summary, targetRole } = roadmap;

  const renderPlan = (title, plan) => (
    <div className="bg-slate-700 rounded-xl p-6">
      <h3 className="text-2xl font-bold text-blue-300 mb-4">{title}</h3>
      <div className="space-y-4">
        <div>
          <h4 className="text-lg font-semibold text-white mb-2">Focus Areas:</h4>
          <ul className="list-disc list-inside text-slate-300 space-y-1">
            {plan.focusAreas.map((area, index) => (
              <li key={index}>{area}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold text-white mb-2">Key Milestones:</h4>
          <ul className="list-disc list-inside text-slate-300 space-y-1">
            {plan.keyMilestones.map((milestone, index) => (
              <li key={index}>{milestone}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-slate-800 text-white min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-4xl font-bold">Your Roadmap to <span className="text-blue-400">{targetRole}</span></h2>
          <button 
            onClick={onBack} 
            className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-6 py-2 rounded-xl font-semibold hover:bg-white/20 transition-all"
          >
            &larr; Back to Assessment
          </button>
        </div>

        <div className="bg-slate-900 border border-slate-700 rounded-2xl p-6 mb-8">
          <p className="text-lg text-slate-300 leading-relaxed">{summary}</p>
        </div>
        
        <div className="space-y-8">
          {renderPlan("3-Month Plan", threeMonthPlan)}
          {renderPlan("6-Month Plan", sixMonthPlan)}
          {renderPlan("12-Month Plan", twelveMonthPlan)}
        </div>

        <div className="text-center mt-12">
           <p className="text-slate-400">This roadmap is a guide. Your journey is unique.</p>
           <p className="text-slate-500 text-sm mt-1">Adapt and adjust as you grow.</p>
        </div>

      </div>
    </div>
  );
};

export default RoadmapDisplay;