import { Link } from '@tanstack/react-router';
import './App.css';
import PomodoroHandler from './components/PomodoroHandler';

const App = () => {
  return (
    <div>
      <Link to="/about" className="[&.active]:font-bold">
        About
      </Link>
      <PomodoroHandler />
    </div>
  );
};

export default App;