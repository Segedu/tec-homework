import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Counter from './components/Counter';
import SetDateOnTitle from './components/SetDateOnTitle';


function App() {
  const [input, setInput] = useState(0);
  return (
    <div className="App">
      <input onChange={(e) => { setInput(Number(e.target.value)) }} />
      <Counter input={input} />
      <SetDateOnTitle />
    </div>
  )
}

export default App
