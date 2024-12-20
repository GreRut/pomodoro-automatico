import { MouseEventHandler, useState } from 'react'
function Timer() {
  
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
  const timerDate = new Date(timerCount);
return (
    <>
      <div>
          <button onClick={startTimer}>start timer</button>
          <button onClick={stopTimer}>stop timer</button>
          <h1 className="text-3xl font-bold underline">
            {timerDate.getMinutes().toString().padStart(2, '0')}:
            {timerDate.getSeconds().toString().padStart(2, '0')}
          </h1>
      </div>
    </>
  )
}

export default Timer;