import { MouseEventHandler, useState, useEffect } from 'react';
import '../App.css';

interface TimerProps {
  onPomodoroComplete: () => void;
}

const Timer = ({ onPomodoroComplete }: TimerProps) => {
  const FOCUS_TIME_MINUTES = 5 * 1000;
  const [timerCount, setTimerCount] = useState<number>(FOCUS_TIME_MINUTES);
  const [timerInterval, setTimerInterval] = useState<number | null>(null);

  useEffect(() => {
    if (timerCount <= 0 && timerInterval !== null) {
      clearInterval(timerInterval);
      setTimerInterval(null);
      onPomodoroComplete();
      resetTimer();
    }
  }, [timerCount, timerInterval, onPomodoroComplete]);

  const toggleTimer: MouseEventHandler<HTMLButtonElement> = () => {
    if (timerInterval === null) {
      const id = setInterval(() => setTimerCount((prev) => prev - 1000), 1000);
      setTimerInterval(id);
    } else {
      clearInterval(timerInterval);
      setTimerInterval(null);
    }
  };

  const resetTimer = () => {
    if (timerInterval !== null) {
      clearInterval(timerInterval);
      setTimerInterval(null);
    }
    setTimerCount(FOCUS_TIME_MINUTES);
  };

  const timerDate = new Date(timerCount);

  return (
    <>
      <div>
        <h1 className="text-3xl font-bold underline">
          {timerDate.getMinutes().toString().padStart(2, '0')}:
          {timerDate.getSeconds().toString().padStart(2, '0')}
        </h1>
        <button onClick={toggleTimer}>
          {timerInterval === null ? 'Start Timer' : 'Stop Timer'}
        </button>
        <button onClick={resetTimer}>Reset Timer</button>
      </div>
    </>
  );
};

export default Timer;
