import logo from './logo.svg';
import './App.css';
import Gallery from './components/Gallery/Gallery';
import Posts from './components/Posts/Posts';
import Todos from './components/Todos/Todos';

function App() {
  return (
    <div className="App">
      <Gallery />
      <Posts />
      <Todos />
    </div>
  );
}

export default App;
