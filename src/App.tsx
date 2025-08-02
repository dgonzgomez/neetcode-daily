import React, { useState } from 'react';
import DailyProblem from './components/DailyProblem';
import { generateDailyProblem, getNextProblem } from './utils/problemGenerator';
import './App.css';

function App() {
  const [currentProblem, setCurrentProblem] = useState(generateDailyProblem());

  const goToNextProblem = () => {
    // Get a random problem for manual progression
    const nextProblem = getNextProblem();
    setCurrentProblem(nextProblem);
  };

  return (
    <div className="App">
      <header className="app-header">
        <div className="header-content">
          <h1>NeetCode 150 Daily</h1>
        </div>
      </header>

      <main className="app-main">
        <div className="daily-section">
          {/* Next button for manual progression */}
          <div className="daily-actions">
            <button 
              className="refresh-button"
              onClick={goToNextProblem}
              title="Get a random problem"
            >
              Random Problem
            </button>
          </div>
          <DailyProblem problem={currentProblem} />
        </div>
      </main>

      <footer className="app-footer">
        <p>
          Based on NeetCode's 150 questions.
        </p>
      </footer>
    </div>
  );
}

export default App;
