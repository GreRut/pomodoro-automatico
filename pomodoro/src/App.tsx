import { useState, useEffect } from 'react'
import { Link } from '@tanstack/react-router';
import './App.css';
import Timer from './components/Timer';

const App = () => {
  const [pomodoroCount, setPomodoroCount] = useState<number>(0);
  const [rewardMessage, setRewardMessage] = useState<string>('');

  const loadPomodoroCount = (): number => {
    const savedCount = localStorage.getItem('pomodoroCount');
    return savedCount ? parseInt(savedCount, 10) : 0;
  };

  const savePomodoroCount = (count: number): void => {
    localStorage.setItem('pomodoroCount', count.toString());
  };

  const handlePomodoroComplete = (): void => {
    const newCount = pomodoroCount + 1;
    setPomodoroCount(newCount);
    savePomodoroCount(newCount);

    if (newCount === 1) {
      setRewardMessage('Uno Pomodoro!');
    } else if (newCount === 5) {
      setRewardMessage('Cinq Pomodoro');
    } else if (newCount === 10) {
      setRewardMessage('10!');
    } else {
      setRewardMessage('');
    }
  };

  useEffect(() => {
    const initialCount = loadPomodoroCount();
    setPomodoroCount(initialCount);
  }, []);

  return (
    <>
      <div>
        <Link to="/about" className="[&.active]:font-bold">
          About
        </Link>
        <Timer onPomodoroComplete={handlePomodoroComplete} />
        <div className="pomodoro-progress">
          <p>Pomodoros completed: {pomodoroCount}</p>
          {rewardMessage && <p className="reward-message">{rewardMessage}</p>}
        </div>
      </div>
    </>
  )
}

export default App;
