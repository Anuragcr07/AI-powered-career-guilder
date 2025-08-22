import React, { useState } from 'react';

import LandingPage from './pages/landingpage.jsx';
import AssessmentModal from './pages/AssessmentModal.jsx'; 
import RoadmapDisplay from './pages/RoadmapDisplay.jsx';   
import './App.css';

const App = () => {
  const [currentView, setCurrentView] = useState('landing');
  
  const [roadmapData, setRoadmapData] = useState(null);

  const handleStartAssessment = () => {
    setCurrentView('assessment');
  };

  const handleFormSubmit = (data) => {
    setRoadmapData(data);
    setCurrentView('roadmap'); 
  };

  const handleGoBackToLanding = () => {
    setRoadmapData(null);
    setCurrentView('landing');
  };

  return (
    <div>
      {currentView === 'roadmap' ? (
        <RoadmapDisplay 
          roadmap={roadmapData} 
          onBack={handleGoBackToLanding} 
        />
      ) : (
      
        <>
          <LandingPage onStartAssessment={handleStartAssessment} />
          {currentView === 'assessment' && (
        
            <AssessmentModal 
              onSubmit={handleFormSubmit} 
              onClose={handleGoBackToLanding} 
            />
          )}
        </>
      )}
    </div>
  );
};

export default App;