import { MouseEventHandler, useState, useEffect } from 'react';

interface TimerProps {
  onPomodoroComplete: () => void;
  onSessionChange: (isBreak: boolean) => void;
}

const Timer = ({ onPomodoroComplete, onSessionChange }: TimerProps) => {
  const FOCUS_TIME_MS = 5 * 1000;
  const BREAK_TIME_MS = 5 * 1000;

  const [timerCount, setTimerCount] = useState<number>(FOCUS_TIME_MS);
  const [timerInterval, setTimerInterval] = useState<number | null>(null);
  const [isBreak, setIsBreak] = useState<boolean>(false);

  useEffect(() => {
    if (timerCount <= 0 && timerInterval !== null) {
      clearInterval(timerInterval);
      setTimerInterval(null);

      if (isBreak) {
        setIsBreak(false);
        onSessionChange(false);
        resetTimer(FOCUS_TIME_MS);
      } else {
        setIsBreak(true);
        onSessionChange(true);
        resetTimer(BREAK_TIME_MS);
        onPomodoroComplete();
      }
    }
  }, [timerCount, timerInterval, isBreak, onPomodoroComplete, onSessionChange]);

  const toggleTimer: MouseEventHandler<HTMLButtonElement> = () => {
    if (timerInterval === null) {
      const id = setInterval(() => setTimerCount((prev) => prev - 1000), 1000);
      setTimerInterval(id);
    } else {
      clearInterval(timerInterval);
      setTimerInterval(null);
    }
  };

  const resetTimer = (time = FOCUS_TIME_MS) => {
    if (timerInterval !== null) {
      clearInterval(timerInterval);
      setTimerInterval(null);
    }
    setTimerCount(time);
  };

  const timerDate = new Date(timerCount);

  return (
    <div>
      <button onClick={toggleTimer}>
        {timerInterval === null ? 'Start Timer' : 'Stop Timer'}
      </button>
      <button onClick={() => resetTimer(FOCUS_TIME_MS)}>Reset Timer</button>
      <h1 className="text-3xl font-bold underline">
        {isBreak ? 'Break Time' : 'Focus Time'}:
        {timerDate.getMinutes().toString().padStart(2, '0')}:
        {timerDate.getSeconds().toString().padStart(2, '0')}
      </h1>
    </div>
  );
};

export default Timer;
