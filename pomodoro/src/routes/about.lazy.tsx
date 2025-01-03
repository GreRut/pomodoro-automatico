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
    if (pomodoroCount >= 30) {
      return 'You are a productivity master with ovr 30 Pomodoros';
    } else if (pomodoroCount >= 21) {
      return 'Your focus has no limits! You have just went over 21 treshold';
    } else if (pomodoroCount >= 15) {
      return '15 Pomodoros! Do not forget about taking breaks';
    } else if (pomodoroCount >= 10) {
      return 'Moving past single digits in Pomodoro world!';
    } else if (pomodoroCount >= 7) {
      return 'It is not just luck you have completed 7 pomodoros';
    } else if (pomodoroCount >= 5) {
      return 'High-fve on 5 completed sessions!';
    } else if (pomodoroCount >= 3) {
      return 'You make it easy as one-two-three!';
    } else if (pomodoroCount >= 2) {
      return 'That is a match! Two Pomodoros for you!';
    } else if (pomodoroCount >= 1) {
      return 'Great job on starting your first Pomodoro!';
    }
    return 'No Pomodoros yet.';
  };

  const getColorClassForPomodoro = (threshold: number): string => {
    if (pomodoroCount >= threshold) {
      return 'completed';
    } else {
      return 'not-completed';
    }
  };

  return (
    <div className="flex flex-col items-center space-y-6">
      <Link to="/"
            className="btn
                    hover:bg-terc
                    hover:border-terc rounded-lg
                    border-sec no-underline w-20 h-10
                    bg-sec
                    text-prim">
        Timer
      </Link>
      <div className='grid grid-cols-3 gap-6 bg-sec rounded-md p-4'>
        <div className="bg-prim w-12 h-12 rounded-full flex items-center justify-center">
          <p className={`font-bold ${getColorClassForPomodoro(1)}`}>1</p>
        </div>
        <div className="bg-prim w-12 h-12 rounded-full flex items-center justify-center">
          <p className={`font-bold ${getColorClassForPomodoro(2)}`}>2</p>
        </div>
        <div className="bg-prim w-12 h-12 rounded-full flex items-center justify-center">
          <p className={`font-bold ${getColorClassForPomodoro(3)}`}>3</p>
        </div>
        <div className="bg-prim w-12 h-12 rounded-full flex items-center justify-center">
          <p className={`font-bold ${getColorClassForPomodoro(5)}`}>5</p>
        </div>
        <div className="bg-prim w-12 h-12 rounded-full flex items-center justify-center">
          <p className={`font-bold ${getColorClassForPomodoro(7)}`}>7</p>
        </div>
        <div className="bg-prim w-12 h-12 rounded-full flex items-center justify-center">
          <p className={`font-bold ${getColorClassForPomodoro(10)}`}>10</p>
        </div>
        <div className="bg-prim w-12 h-12 rounded-full flex items-center justify-center">
          <p className={`font-bold ${getColorClassForPomodoro(15)}`}>15</p>
        </div>
        <div className="bg-prim w-12 h-12 rounded-full flex items-center justify-center">
          <p className={`font-bold ${getColorClassForPomodoro(21)}`}>21</p>
        </div>
        <div className="bg-prim w-12 h-12 rounded-full flex items-center justify-center">
          <p className={`font-bold ${getColorClassForPomodoro(30)}`}>30</p>
        </div>
      </div>
      <p>Pomodoros completed: {pomodoroCount}</p>
      <p>{getBadgeMessage()}</p>
      <h1 className='font-bold text-xl'>Welcome to the reward page!</h1>
      <p>The App helps you track your focus with smart Pomodoro rewards. You unlock badges as you progress with your Pomodoro sessions!</p>
    </div>
  );
}

export const Route = createLazyFileRoute('/about')({
  component: About,
});

export default About;
