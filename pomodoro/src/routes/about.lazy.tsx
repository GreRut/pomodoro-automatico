import { useState, useEffect } from 'react';
import { createLazyFileRoute } from '@tanstack/react-router';
import { Link } from '@tanstack/react-router';
import '../App.css';

const loadPomodoroCount = (): number => {
  const savedCount = localStorage.getItem('pomodoroCount');
  return savedCount ? parseInt(savedCount, 10) : 0;
};

function About() {
  const [pomodoroCount, setPomodoroCount] = useState(loadPomodoroCount);

  useEffect(() => {
    document.body.className = 'default-style';
  }, []);

  useEffect(() => {
    const savedCount = loadPomodoroCount();
    setPomodoroCount(savedCount);
  }, []);

  const getBadgeMessage = (): string => {
    if (pomodoroCount >= 10) {
      return '10';
    } else if (pomodoroCount >= 5) {
      return '5';
    } else if (pomodoroCount >= 1) {
      return '1';
    }
    return 'No Pomodoros yet.';
  };

  return (
    <div className="flex flex-col items-center">
      <Link to="/"
            className="btn
                    hover:bg-terc
                    hover:border-terc rounded-lg
                    border-sec no-underline w-20 h-10
                    bg-sec
                    text-prim">
        Timer
      </Link>
      <p>Pomodoros completed: {pomodoroCount}</p>
      <p>{getBadgeMessage()}</p>
    </div>
  );
}

export const Route = createLazyFileRoute('/about')({
  component: About,
});

export default About;
