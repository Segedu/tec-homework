import logo from './logo.svg';
import './App.css';
import Counter1 from './components/Counter';
import { CounterTwo } from './components/Counter';

function App() {
  return (
    <div className="App">
      <Counter1 />
      <CounterTwo number={5} />
    </div>
  );
}

export default App;
