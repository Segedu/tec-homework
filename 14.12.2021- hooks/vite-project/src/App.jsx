import { useState } from 'react'
import './App.css'
import YourName from './components/YourName'
import Name from './components/Name'

function App() {
  return (
    <div className="App">
      <YourName />
      <Name randName="Dan" />
    </div>
  )
}

export default App
