import logo from './logo.svg';
import './App.css';
import Counter1 from './components/Counter';
import { CounterTwo } from './components/Counter';
import LongText from './components/LongText';
import ShowHide from './components/ShowHide';
import Name from './components/Name';
import Movies from './components/Movie/Movies';
import Cars from './components/Car/Cars';

function App() {
  const car = {
    price: 300,
    model: "subaro",
    img: "https://cdn.pixabay.com/photo/2019/07/07/14/03/fiat-4322521__340.jpg"

  }
  const movie = {
    movieName: "Venom",
    year: "2021",
    actor: "Ezra"
  }
  return (
    <div className="App">
      <Counter1 />
      <CounterTwo number={5} />
      <LongText title="Know yourself" />
      <ShowHide text="some text " />
      <Name />
      <Cars />
      <Movies />
    </div>
  );
}

export default App;
