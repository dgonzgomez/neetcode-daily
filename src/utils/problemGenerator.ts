import { Problem, neetcode150 } from '../data/neetcode150';

export const generateDailyProblem = (): Problem => {
  // Get today's date as a string (YYYY-MM-DD)
  const today = new Date().toISOString().split('T')[0];

  const startDate = new Date('2025-08-01');
  const currentDate = new Date(today);
  
  // Calculate days since start date
  const timeDiff = currentDate.getTime() - startDate.getTime();
  const daysSinceStart = Math.floor(timeDiff / (1000 * 3600 * 24));
  
  // Calculate which problem to show (cycles through 1-150)
  const problemIndex = daysSinceStart % 150;
  
  // Return the problem for today
  return neetcode150[problemIndex];
};

export const getNextProblem = (): Problem => {
  // For the "Next" button, just return a random problem
  // since we want the daily problem to be deterministic
  const randomIndex = Math.floor(Math.random() * neetcode150.length);
  return neetcode150[randomIndex];
};

export const getProblemsByCategory = (): Record<string, Problem[]> => {
  return neetcode150.reduce((acc, problem) => {
    if (!acc[problem.category]) {
      acc[problem.category] = [];
    }
    acc[problem.category].push(problem);
    return acc;
  }, {} as Record<string, Problem[]>);
};

export const getProblemsByDifficulty = (): Record<string, Problem[]> => {
  return neetcode150.reduce((acc, problem) => {
    if (!acc[problem.difficulty]) {
      acc[problem.difficulty] = [];
    }
    acc[problem.difficulty].push(problem);
    return acc;
  }, {} as Record<string, Problem[]>);
}; 