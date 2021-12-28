import { useState } from 'react';
import './App.css';
import Spinner from './components/Spinner';
import useFetch from './hooks/useFetch';
import PerformanceProblem from './components/PerformanceProblem'
function App() {
  const [data, error, isLoading] = useFetch("https://jsonplaceholder.typicode.com/todos")

  const element = data.map((obj,) => <p key={obj.id}>{obj.title}</p>);
  return (
    <div className="App">
      {/* {isLoading ? <Spinner /> : element}
      {error ? <p style={{ color: "red" }} > error</p> : ""} */}
      <PerformanceProblem />
    </div >
  )
}

export default App
