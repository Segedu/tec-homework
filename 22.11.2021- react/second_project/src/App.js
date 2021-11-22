import logo from './logo.svg';
import './App.css';
import Counter1 from './components/Counter';
import { CounterTwo } from './components/Counter';
import LongText from './components/LongText';
import ShowHide from './components/ShowHide';

function App() {
  return (
    <div className="App">
      <Counter1 />
      <CounterTwo number={5} />
      <LongText title="segedu" />
      <ShowHide text="some text " />
    </div>
  );
}

export default App;
