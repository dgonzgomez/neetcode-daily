import React from 'react';
import { Problem } from '../data/neetcode150';
import './DailyProblem.css';

interface DailyProblemProps {
  problem: Problem;
}

const DailyProblem: React.FC<DailyProblemProps> = ({ problem }) => {
  // Returns color based on problem difficulty level
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy':
        return '#00b8a3';
      case 'Medium':
        return '#ffc01e';
      case 'Hard':
        return '#ff375f';
      default:
        return '#6c757d';
    }
  };

  // Formats current date in a readable format
  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="daily-problem">
      <div className="daily-problem-header">
        <h2>Today's Problem</h2>
        <p className="date">{formatDate(new Date())}</p>
      </div>
      
      <div className="problem-card">
        <div className="problem-header">
          <div className="problem-id">#{problem.id}</div>
          <div 
            className="difficulty-badge"
            style={{ backgroundColor: getDifficultyColor(problem.difficulty) }}
          >
            {problem.difficulty}
          </div>
        </div>
        
        <h3 className="problem-title">{problem.title}</h3>
        
        <div className="problem-category">
          <span className="category-label">Category:</span>
          <span className="category-value">{problem.category}</span>
        </div>
        
        <div className="problem-actions">
          <a 
            href={problem.leetcodeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="leetcode-button"
          >
            Solve on LeetCode
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          
          {problem.premium && (
            <div className="premium-badge">
              <span>⭐ Premium</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DailyProblem; 