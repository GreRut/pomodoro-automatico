import { Link } from '@tanstack/react-router'
import './App.css'
import Timer from './components/Timer';


function App() {
  
  return (
    <>
      <div>
          <Link to="/about" className="[&.active]:font-bold">
            About
          </Link>
          <Timer/>
      </div>
    </>
  )
}

export default App;
