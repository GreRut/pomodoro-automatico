import { MouseEventHandler, useState, useEffect } from 'react';

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

  const startTimer: MouseEventHandler<HTMLButtonElement> = () => {
    const id = setInterval(() => setTimerCount((prev) => prev - 1000), 1000);
    setTimerInterval(id);
  };

  const stopTimer: MouseEventHandler<HTMLButtonElement> = () => {
    if (timerInterval !== null) {
      clearInterval(timerInterval);
      setTimerInterval(null);
    }
  };

  const resetTimer = () => {
    setTimerCount(FOCUS_TIME_MINUTES);


  };

  const timerDate = new Date(timerCount);

  return (
    <>
      <div>
        <button onClick={startTimer}>Start Timer</button>
        <button onClick={stopTimer}>Stop Timer</button>
        <button onClick={resetTimer}>Reset Timer</button>
        <h1 className="text-3xl font-bold underline">
          {timerDate.getMinutes().toString().padStart(2, '0')}:
          {timerDate.getSeconds().toString().padStart(2, '0')}
        </h1>
      </div>
    </>
  );
};

export default Timer;
