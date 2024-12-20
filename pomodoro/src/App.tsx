import { MouseEventHandler, useState } from 'react'
import { Link } from '@tanstack/react-router'
// import { useLiveDate } from './components/useLiveDate';
import './App.css'

function App() {
  
  const FOCUS_TIME_MINUTES = 0.2 * 60 * 1000;
  // const BREAK_TIME_MINUTES = 0.1 * 60 * 1000;
  const [timerCount, setTimerCount] = useState<number>(FOCUS_TIME_MINUTES);
  const [timerInterval, setTimerInterval] = useState<number | null>(null);

  const startTimer: MouseEventHandler<HTMLButtonElement> = () => {
    const id = setInterval(() => setTimerCount(prev => prev - 1000), 1000);
    setTimerInterval(id);
  }

  const stopTimer: MouseEventHandler<HTMLButtonElement> = () =>{
    if (timerInterval != null) {
    clearInterval(timerInterval);
    }
  }
  return (
    <>
      <div>
          <Link to="/about" className="[&.active]:font-bold">
            About
          </Link>
          <button onClick={startTimer}>start timer</button>
          <button onClick={stopTimer}>stop timer</button>
          <h1 className="text-3xl font-bold underline">
            {timerCount}
          </h1>
      </div>
    </>
  )
}

export default App
