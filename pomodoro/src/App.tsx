// import { useState } from 'react'
import { Link } from '@tanstack/react-router'
import './App.css'

function App() {

  return (
    <>
      <div>
          <Link to="/about" className="[&.active]:font-bold">
            About
          </Link>
          <h1 className="text-3xl font-bold underline">
            Hello world!
          </h1>
      </div>
    </>
  )
}

export default App
