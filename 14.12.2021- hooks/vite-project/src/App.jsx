import { useState } from 'react'
import './App.css';
import YourName from './components/YourName';
import Name from './components/Name';
import ThreeCounters from './components/ThreeCounters';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <YourName />
      <Name randName="Dan" />
      <ThreeCounters />
      <Login/>
    </div>
  )
}

export default App
