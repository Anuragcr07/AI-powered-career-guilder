import React, { useState } from 'react';

const AssessmentModal = ({ onClose, onSubmit }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    targetRole: '',
    priorities: [],
    timeframe: '',
    energizingTasks: [],
    passionateIndustries: [],
    // NOTE: In a real app, you'd pass the skills from resume analysis as a prop
    skillProficiency: { 
      'React': 'Intermediate', 
      'JavaScript': 'Advanced',
      'CSS': 'Intermediate'
    }, 
    extraSkills: '',
    learningStyle: [],
    weeklyHours: 10,
    budget: '',
  });

  const totalSteps = 4;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleMultiSelectChange = (category, value) => {
    setFormData(prev => {
      const currentValues = prev[category] || [];
      if (currentValues.includes(value)) {
        return { ...prev, [category]: currentValues.filter(item => item !== value) };
      } else {
        return { ...prev, [category]: [...currentValues, value] };
      }
    });
  };

  const handleNext = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData); // Pass the final data to the parent component
  };

  const progress = ((currentStep + 1) / totalSteps) * 100;

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white">Career Goals</h3>
            <div>
              <label className="block text-blue-200 mb-2">What is your target career role?</label>
              <input type="text" name="targetRole" value={formData.targetRole} onChange={handleInputChange} className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="e.g., Senior Frontend Developer" />
            </div>
            <div>
              <label className="block text-blue-200 mb-2">What are your top 3 priorities in your next role?</label>
              <div className="grid grid-cols-2 gap-3 text-sm">
                {['Salary Growth', 'Work-Life Balance', 'Company Culture', 'Technical Challenge', 'Career Advancement', 'Impactful Work'].map(priority => (
                  <label key={priority} className={`p-3 rounded-lg border transition-all cursor-pointer ${formData.priorities.includes(priority) ? 'bg-blue-600 border-blue-500' : 'bg-slate-700 border-slate-600 hover:bg-slate-600'}`}>
                    <input type="checkbox" className="hidden" onChange={() => handleMultiSelectChange('priorities', priority)} checked={formData.priorities.includes(priority)} />
                    {priority}
                  </label>
                ))}
              </div>
            </div>
          </div>
        );
      case 1:
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white">Interests & Passions</h3>
            <div>
              <label className="block text-blue-200 mb-2">Which tasks do you find most energizing?</label>
               <div className="grid grid-cols-2 gap-3 text-sm">
                {['Building UIs', 'Solving Logic Puzzles', 'Analyzing Data', 'Leading a Team'].map(task => (
                  <label key={task} className={`p-3 rounded-lg border transition-all cursor-pointer ${formData.energizingTasks.includes(task) ? 'bg-blue-600 border-blue-500' : 'bg-slate-700 border-slate-600 hover:bg-slate-600'}`}>
                    <input type="checkbox" className="hidden" onChange={() => handleMultiSelectChange('energizingTasks', task)} checked={formData.energizingTasks.includes(task)} />
                    {task}
                  </label>
                ))}
              </div>
            </div>
             <div>
              <label className="block text-blue-200 mb-2">What industries are you passionate about?</label>
               <div className="grid grid-cols-2 gap-3 text-sm">
                {['FinTech', 'Healthcare', 'E-commerce', 'Gaming', 'Sustainability', 'Education'].map(industry => (
                  <label key={industry} className={`p-3 rounded-lg border transition-all cursor-pointer ${formData.passionateIndustries.includes(industry) ? 'bg-blue-600 border-blue-500' : 'bg-slate-700 border-slate-600 hover:bg-slate-600'}`}>
                    <input type="checkbox" className="hidden" onChange={() => handleMultiSelectChange('passionateIndustries', industry)} checked={formData.passionateIndustries.includes(industry)} />
                    {industry}
                  </label>
                ))}
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white">Skills Context</h3>
            <div>
              <label className="block text-blue-200 mb-2">Rate your proficiency in skills from your resume:</label>
               {Object.keys(formData.skillProficiency).map(skill => (
                <div key={skill} className="flex justify-between items-center mb-2">
                  <span className="text-white">{skill}</span>
                  {/* In a real app, this would be a more complex component */}
                  <span className="text-blue-300">{formData.skillProficiency[skill]}</span>
                </div>
               ))}
               <p className="text-xs text-slate-400 mt-2">Note: In the full version, you would be able to edit these proficiency levels.</p>
            </div>
            <div>
              <label className="block text-blue-200 mb-2">Any other skills or projects you're proud of?</label>
              <textarea name="extraSkills" value={formData.extraSkills} onChange={handleInputChange} rows="3" className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="e.g., a personal project, a new technology you're learning..."></textarea>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white">Learning Style & Constraints</h3>
            <div>
              <label className="block text-blue-200 mb-2">How do you learn best?</label>
              <div className="grid grid-cols-2 gap-3 text-sm">
                {['Video Courses', 'Reading Docs', 'Hands-on Projects', 'Mentored Programs'].map(style => (
                  <label key={style} className={`p-3 rounded-lg border transition-all cursor-pointer ${formData.learningStyle.includes(style) ? 'bg-blue-600 border-blue-500' : 'bg-slate-700 border-slate-600 hover:bg-slate-600'}`}>
                    <input type="checkbox" className="hidden" onChange={() => handleMultiSelectChange('learningStyle', style)} checked={formData.learningStyle.includes(style)} />
                    {style}
                  </label>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-blue-200 mb-2">How many hours per week can you dedicate? ({formData.weeklyHours} hrs)</label>
              <input type="range" min="1" max="40" name="weeklyHours" value={formData.weeklyHours} onChange={handleInputChange} className="w-full" />
            </div>
             <div>
              <label className="block text-blue-200 mb-2">What is your learning budget?</label>
              <div className="space-y-2">
                {['$0 (Free only)', 'Under $100', 'Up to $1000', '$1000+'].map(budget => (
                  <label key={budget} className={`block p-3 rounded-lg border transition-all cursor-pointer ${formData.budget === budget ? 'bg-blue-600 border-blue-500' : 'bg-slate-700 border-slate-600 hover:bg-slate-600'}`}>
                    <input type="radio" name="budget" value={budget} className="hidden" onChange={handleInputChange} checked={formData.budget === budget} />
                    {budget}
                  </label>
                ))}
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
      <div className="bg-slate-800 text-white rounded-2xl shadow-2xl p-8 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold">Your Career Assessment</h2>
          <button onClick={onClose} className="text-slate-400 hover:text-white">&times;</button>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-slate-700 rounded-full h-2.5 mb-8">
          <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${progress}%`, transition: 'width 0.3s ease-in-out' }}></div>
        </div>
        
        <form onSubmit={handleSubmit}>
          <div className="min-h-[400px]">
            {renderStep()}
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-8 pt-4 border-t border-slate-700">
            <div>
              {currentStep > 0 && (
                <button type="button" onClick={handleBack} className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-6 py-2 rounded-xl font-semibold hover:bg-white/20 transition-all">
                  Back
                </button>
              )}
            </div>
            <div>
              {currentStep < totalSteps - 1 ? (
                <button type="button" onClick={handleNext} className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-xl font-semibold transition-all">
                  Next →
                </button>
              ) : (
                <button type="submit" className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-xl font-semibold transition-all">
                  Generate My Roadmap
                </button>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AssessmentModal;