import { useEffect, useState } from 'react';
import { Link } from '@tanstack/react-router';
import './App.css';
import PomodoroHandler from './components/PomodoroHandler';

const App = () => {
  const [isBreak, setIsBreak] = useState(false);

const handleSessionChange = (isBreak: boolean): void => {
  setIsBreak(isBreak);
  document.body.className = isBreak ? 'complete-background' : 'default-style';
};


  useEffect(() => {
    document.body.className = 'default-style';
  }, []);

  return (
    <>
      <div className="flex flex-col items-center space-y-12">
        <Link to="/about"
              className={`btn
                        hover:bg-terc
                        hover:border-terc rounded-lg
                        border-sec no-underline w-20 h-10
                        ${
                          isBreak
                          ? 'bg-prim text-sec'
                          : 'bg-sec text-prim'
                        }`}>
          Info
        </Link>
        <PomodoroHandler onSessionChange={handleSessionChange} />
      </div>
    </>
  );
};

export default App;