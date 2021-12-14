import './App.css';
import Home from './pages/Home';
import BookDetails from './pages/BookDetails'
import Books from './pages/Books'
import AddBook from './pages/AddBook';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import { Component } from 'react';

class App extends Component {
  state = {
    books: [
      { author: "J.K Rowling", title: "Harry Potter", pages: 342, coverImg: "", synopsis: "a story about a child magician in England" },
      { author: "Victor Hugo", title: "Les Miserables", pages: 234, coverImg: "", synopsis: "a story about a Jean Vel-Jean in France" },
    ]
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Link to='/'>Home</Link><span> | </span>
          <Link to='/Books'>Books</Link><span> | </span>
          <hr />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/Books' render={() => <Books books={this.state.books} />} />
            <Route exact path='/AddBook' render={() => <AddBook />} />
            <Route exact path='/BookDetails' render={() => <BookDetails />} />

          </Switch>
        </div>
      </BrowserRouter>);
  }
}
export default App;