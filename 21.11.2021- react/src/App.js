import logo from './logo.svg';
import React, { Component } from 'react';
import Main from './components/Main';
import './App.css';
import Bakery from './components/Bakery';
import BakeryTeam from './components/Team';
import Menu from './components/Menu';
import Counter from './components/Counter';
import { TwoCounters } from './components/Counter';

class App extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>
        <Bakery />
        <BakeryTeam />
        <Menu />
        <Main />
        <TwoCounters />
        <Counter />
      </div>
    )
  }
}

export default App;
