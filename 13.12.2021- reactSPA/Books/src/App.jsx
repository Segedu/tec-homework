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
      { author: "Victor Hugo", title: "Les Miserable", pages: 234, coverImg: "", synopsis: "a story about a Jean Vel-Jean in France" },
    ]
  }
  newBook = {
    currentAuthor: "",
    currentTitle: "",
  }

  setCurrentBook = (author, title) => {
    this.newBook.currentAuthor = author;
    this.currentTitle = title;
  }

  addBook = (author, title) => {
    const newBook = [...this.state.books];
    newBook.push({ author, title });
    this.setState({ books: newBook })
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
            <Route exact path='/Books' render={() => <Books setCurrentBook={this.setCurrentBook} books={this.state.books} />} />
            <Route exact path='/AddBook' render={() => <AddBook addBook={this.addBook} />} />
            <Route exact path='/BookDetails' render={() => <BookDetails />} />
          </Switch>
        </div>
      </BrowserRouter>);
  }
}
export default App;