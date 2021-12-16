import { useState } from 'react'
import './App.css';
import YourName from './components/YourName';
import Name from './components/Name';
import ThreeCounters from './components/ThreeCounters';
import Login from './components/Login';
import Vacation from './components/Vacation';

function App() {
  return (
    <div className="App">
      {/* <YourName /> */}
      <Name randColor="Dan" />
      {/* <ThreeCounters /> */}
      <Login />
      <Vacation />
    </div>
  )
}

export default App
