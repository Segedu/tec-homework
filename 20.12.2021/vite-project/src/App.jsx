import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Counter from './components/Counter';
import SetDateOnTitle from './components/SetDateOnTitle';


function App() {
  const [initialCount, setInitialCount] = useState(0);
  return (
    <div className="App">
      <initialCount onChange={(e) => { setInitialCount(Number(e.target.value)) }} />
      <Counter initialCount={initialCount} />
      <SetDateOnTitle />
    </div>
  )
}

export default App
