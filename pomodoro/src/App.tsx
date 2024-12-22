import { useEffect } from 'react';
import { Link } from '@tanstack/react-router';
import './App.css';
import PomodoroHandler from './components/PomodoroHandler';

const App = () => {
  const handleSessionChange = (isBreak: boolean): void => {
    document.body.className = isBreak
      ? 'complete-background'
      : 'default-style';
  };

  useEffect(() => {
    document.body.className = 'default-style';
  }, []);

  return (
    <>
      <div>
        <Link to="/about" className="[&.active]:font-bold">
          About
        </Link>
        <PomodoroHandler onSessionChange={handleSessionChange} />
      </div>
    </>
  );
};

export default App;