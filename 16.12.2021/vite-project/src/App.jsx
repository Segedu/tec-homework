import { useState } from 'react'
import logo from './logo.svg'
import './App.css';
import Reddit from './components/Reddit';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <Reddit/>
    </div>
  )
}

export default App
